import { state } from '.';
import { request } from '..';
import globalAction from './global';
export const stateActions = {
  ...globalAction,
  addLoading: () => {
    state.session.count++;
  },
  subLoading: () => {
    if (state.session.count > 0) {
      state.session.count--;
    }
  },
  setToken(token: string) {
    state.storage.token = token;
  },
  setLocale(locale: string) {
    state.storage.locale = locale;
  },
  setUser(user: any) {
    state.session.user = user;
  },
  setIsLogin(value: boolean) {
    state.storage.isLogin = value;
  },
  
  loginFailed() {
    state.storage.isConnected = false;
    if (location.pathname !== '/') location.href = '/';
    state.session.ready = true;
  },
  loginSuccess() {
    state.session.ready = true;
    state.storage.isConnected = true;
  },
};
