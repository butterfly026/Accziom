import { createContext, useEffect, useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Amplify, {Auth, Hub}  from 'aws-amplify';
import gstore from '@common/store';
import { AmplifyConfig, IDLE_DURATION_MINUTES } from '@common/consts/globals';
import { User } from '@common/types/user';
import { getUserDisplayName, cleanUp } from '@common/utils/public';

Amplify.configure(AmplifyConfig);

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextValue extends State {
  platform: 'Amplify';
  login: (email: string, password: string) => Promise<any>;
  mfalogin: (user: any, mfaCode: string) => Promise<any>;
  logout: () => Promise<void>;
  loginSocial: (provider: string) => Promise<void>;
  register: (email: string, password: string, fname: string, mname: string, lname: string, phone: string, mid: string, isToEmail: boolean) => Promise<void>;
  verifyCode: (username: string, code: string) => Promise<void>;
  resendCode: (username: string) => Promise<void>;
  passwordRecovery: (username: string) => Promise<void>;
  passwordReset: (
    username: string,
    code: string,
    newPassword: string
  ) => Promise<void>;
  checkLive: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: User;
  };
};

type LoginSocialAction = {
  type: 'LOGINSOCIAL';
  payload: {
    user: User;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
};

type VerifyCodeAction = {
  type: 'VERIFY_CODE';
  payload: {
    user: User;
  };
};

type ResendCodeAction = {
  type: 'RESEND_CODE';
};

type PasswordRecoveryAction = {
  type: 'PASSWORD_RECOVERY';
};

type PasswordResetAction = {
  type: 'PASSWORD_RESET';
};

type Action =
  | InitializeAction
  | LoginAction
  | LoginSocialAction
  | LogoutAction
  | RegisterAction
  | VerifyCodeAction
  | ResendCodeAction
  | PasswordRecoveryAction
  | PasswordResetAction
  | undefined;

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers: Record<string, (state: State, action: Action) => State> = {
  INITIALIZE: (state: State, action: Action): State => {
    const initializeAction = action as InitializeAction;
    const { isAuthenticated, user } = initializeAction.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state: State, loginAction: Action): State => {
    const action = loginAction as LoginAction;
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGINSOCIAL: (state: State, action: Action): State => {
    const { user } = (action as LoginSocialAction).payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: State): State => ({ ...state }),
  VERIFY_CODE: (state: State, action: Action): State => {
    const { user } = (action as VerifyCodeAction).payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  RESEND_CODE: (state: State): State => ({ ...state }),
  PASSWORD_RECOVERY: (state: State): State => ({ ...state }),
  PASSWORD_RESET: (state: State): State => ({ ...state })
};

const reducer = (state: State, action: Action): State => (
  action?.type ? handlers[action.type] ? handlers[action.type](state, action) : state : state
);

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  platform: 'Amplify',
  login: () => Promise.resolve(),
  mfalogin: () => Promise.resolve(),
  loginSocial: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verifyCode: () => Promise.resolve(),
  resendCode: () => Promise.resolve(),
  passwordRecovery: () => Promise.resolve(),
  passwordReset: () => Promise.resolve(),
  checkLive: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        let userid = user?.attributes?.sub;
        if (userid === undefined) userid = user.username;
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user: {
              id: userid,
              avatar: '',
              email: user?.attributes?.email,
              name: ''
            }
          }
        });
      } catch (error) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };
    initialize();
  }, []);

  const login = async (email: string, password: string): Promise<any> => {
    const user = await Auth.signIn(email, password);
    if (user.challengeName) {
      return user;
      // console.error(`Unable to login, because challenge "${user.challengeName}" is mandated and we did not handle this case.`);
    }
    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
          id: user.attributes.sub,
          avatar: '',
          email: user.attributes.email,
          name: getUserDisplayName({
            firstName: user.attributes['custom:firstname'],
            middleName: user.attributes['custom:custom:middlename'],
            lastName: user.attributes['custom:lastname'],
          })
        }
      }
    });
    return user;
  };

  const mfalogin = async (user: any, mfaCode: string): Promise<any> => {
    await Auth.confirmSignIn(user, mfaCode, 'SOFTWARE_TOKEN_MFA');
    const authedUser = await Auth.currentAuthenticatedUser();
    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
          id: authedUser.attributes.sub,
          avatar: '',
          email: authedUser.attributes.email,
          name: getUserDisplayName({
            firstName: authedUser.attributes['custom:firstname'],
            middleName: authedUser.attributes['custom:custom:middlename'],
            lastName: authedUser.attributes['custom:lastname'],
          })
        }
      }
    });
    return authedUser;
  };

  const checkLive = async (): Promise<void> => {
    try {
      const { callApiInfo } = gstore.getState().user;
      const { lastCalledAt } = callApiInfo;
      const curTime = Math.round(new Date().getTime() / 1000);
      if (lastCalledAt + IDLE_DURATION_MINUTES * 60 < curTime) {
        cleanUp();
        await Auth.signOut();
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      } else await Auth.currentSession();
    } catch (e) {
      cleanUp();
      await Auth.signOut();
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  };

  const loginSocial = async (provider: string, param: string = ''): Promise<void> => {
    await Auth.federatedSignIn({
      customProvider: provider,
      ...(!!param && { customState: param })
    });
  };

  const logout = async (): Promise<void> => {
    cleanUp();
    await Auth.signOut();
    dispatch({
      type: 'LOGOUT'
    });
  };

  const register = async (email: string, pwd: string, fname: string, mname: string, lname: string, phone: string, mid: string, isToEmail: boolean): Promise<void> => {
    await Auth.signUp({
      username: email,
      password: pwd,
      attributes: {
        email,
        ...(!isToEmail && { phone_number: phone }),
        'custom:phone': phone,
        'custom:firstname': fname,
        'custom:lastname': lname,
        'custom:custom:middlename': mname,
        'custom:ldlddafefw': mid
      },
      autoSignIn: {
        enabled: true
      }
    });
    dispatch({
      type: 'REGISTER'
    });
  };

  const verifyCode = async (username: string, code: string): Promise<void> => {
    await Auth.confirmSignUp(username, code);
    const user = (await new Promise((resolve, reject) => {
      Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
          const userInfo = payload.data;
          resolve(userInfo);
        } else if (event === 'autoSignIn_failure') {
          reject(event);
        }
      });
    })) as User;
    dispatch({
      type: 'VERIFY_CODE',
      payload: {
        user: {
          id: user.attributes.sub,
          avatar: '',
          email: user.attributes.email,
          name: getUserDisplayName({
            firstName: user.attributes['custom:firstname'],
            middleName: user.attributes['custom:custom:middlename'],
            lastName: user.attributes['custom:lastname'],
          })
        }
      }
    });
  };

  const resendCode = async (username: string): Promise<void> => {
    await Auth.resendSignUp(username);
    dispatch({
      type: 'RESEND_CODE'
    });
  };

  const passwordRecovery = async (username: string): Promise<void> => {
    await Auth.forgotPassword(username);
    dispatch({
      type: 'PASSWORD_RECOVERY'
    });
  };

  const passwordReset = async (
    username: string,
    code: string,
    newPassword: string
  ): Promise<void> => {
    await Auth.forgotPasswordSubmit(username, code, newPassword);
    dispatch({
      type: 'PASSWORD_RESET'
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: 'Amplify',
        login,
        mfalogin,
        loginSocial,
        logout,
        register,
        verifyCode,
        resendCode,
        passwordRecovery,
        passwordReset,
        checkLive
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;

