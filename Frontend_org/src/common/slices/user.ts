import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from '@common/store';
import { User } from 'src/../../Common/Model/user';
import { Organization, OrgMemberForClient } from 'src/../../Common/Model/organization';
import { CONNECT_DLG_CLOSED, MFA_STATUS_NOTLOADED } from '@common/consts/globals';
import { cloneObject } from '@common/utils/objects';
// import { lambdaPutUserInfo } from 'src/aws/lambdaDispatch';

export enum LoadingStatus {
  NONE = 1,
  LOADING = 2,
  COMPLETED = 3
}

interface SearchInputProps {
  hasButton?: boolean;
  placeHolder?: string;
}

interface UserState {
  userInfo: User | null;
  domainName: string;
  loadingStatus: LoadingStatus;
  requestedLocation: string | null;
  registeredVerificationInfo: any;
  inviteInfo: any;
  memberInfos: OrgMemberForClient[];
  memberNeedReload: boolean;
  connectDlgOpen: number;
  signingOrgInfo: Organization | null;
  isSearching: boolean;
  query: string;
  searchInfo: SearchInputProps | null;
  callApiInfo: { count: number; lastCalledAt: number; };
  mfaStatus: string;
  tabExternal: number
}

const initialState: UserState = {
  userInfo: null,
  domainName: '',
  loadingStatus: LoadingStatus.NONE,
  requestedLocation: null,
  registeredVerificationInfo: null,
  inviteInfo: null,
  memberInfos: [],
  memberNeedReload: true,
  connectDlgOpen: CONNECT_DLG_CLOSED,
  signingOrgInfo: null,
  isSearching: false,
  query: '',
  searchInfo: null,
  callApiInfo: { count: 0, lastCalledAt: 0 },
  mfaStatus: MFA_STATUS_NOTLOADED,
  tabExternal: 0
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState(state: UserState) {
      state.userInfo = null;
      state.domainName = '';
      state.loadingStatus = LoadingStatus.NONE;
      state.requestedLocation = null;
      state.registeredVerificationInfo = null;
      state.inviteInfo = null;
      state.memberInfos.splice(0, state.memberInfos.length);
      state.memberNeedReload = true;
      state.connectDlgOpen = CONNECT_DLG_CLOSED;
      state.signingOrgInfo = null;
      state.isSearching = false;
      state.searchInfo = null;
      state.callApiInfo = { count: 0, lastCalledAt: 0 };
      state.mfaStatus = MFA_STATUS_NOTLOADED;
      state.tabExternal = 0;
    },
    addCallApiCount(state: UserState): void {
      state.callApiInfo.count += 1;
      state.callApiInfo.lastCalledAt = Math.round(new Date().getTime() / 1000);
    },
    setMemberNeedReload(state: UserState, action: PayloadAction<boolean>): void {
      state.memberNeedReload = action.payload;
    },
    updateUser(state: UserState, action: PayloadAction<User>): void {
      const user = action.payload;
      cloneObject(user, state.userInfo);
    },
    setUser(state: UserState, action: PayloadAction<User>): void {
      const user = action.payload as User;
      state.userInfo = user;
    },
    setAvatar(state: UserState, action: PayloadAction<string>): void {
      const avatar = action.payload as string;
      // Assuming state.userInfo is optional
      if (state.userInfo)
        state.userInfo.avatar = avatar;
    },
    setLoadingStatus(state: UserState, action: PayloadAction<LoadingStatus>): void {
      state.loadingStatus = action.payload;
    },
    setRequestedLocation(state: UserState, action: PayloadAction<string>): void {
      state.requestedLocation = action.payload;
    },
    setVerificationStatus(state: UserState, action: PayloadAction<number>): void {
      if (state.userInfo)
        state.userInfo.identityVerified = action.payload;
    },
    setRegisteredVerificationInfo(state: UserState, action: PayloadAction<any>): void {
      state.registeredVerificationInfo = action.payload;
    },
    setInviteInfo(state: UserState, action: PayloadAction<any>): void {
      state.inviteInfo = action.payload;
    },
    setDomainName(state: UserState, action: PayloadAction<string>): void {
      state.domainName = action.payload;
    },
    setMemberInfos(state: UserState, action: PayloadAction<OrgMemberForClient[]>): void {
      state.memberInfos = action.payload as OrgMemberForClient[];
      state.memberNeedReload = false;
    },
    addMemberInfo(state: UserState, action: PayloadAction<OrgMemberForClient>): void {
      const newMemberInfo = action.payload as OrgMemberForClient;
      state.memberInfos.push(newMemberInfo);
    },
    updateMemberInfo(state: UserState, action: PayloadAction<OrgMemberForClient>): void {
      const newMemberInfo = action.payload as OrgMemberForClient;
      const oldMemberId = state.memberInfos.findIndex((memberInfo) => memberInfo.mid === newMemberInfo.mid);
      if (oldMemberId >= 0) state.memberInfos.splice(oldMemberId, 1, newMemberInfo);
    },
    updateMemberStatus(state: UserState, action: PayloadAction<{ mid: string; status: number; updatedAt: Date }>): void {
      const { mid, status, updatedAt } = action.payload;
      const curMember = state.memberInfos.find((member) => member.mid === mid);
      if (curMember) {
        curMember.status = status;
        curMember.updatedAt = updatedAt;
      }
    },
    deleteMemberInfo(state: UserState, action: PayloadAction<string>): void {
      const memberId = action.payload as string;
      state.memberInfos = state.memberInfos.filter((memberInfo) => memberInfo.mid !== memberId);
    },
    setConnectDlgOpen(state: UserState, action: PayloadAction<number>): void {
      state.connectDlgOpen = action.payload;
    },
    setSigningOrgInfo(state: UserState, action: PayloadAction<Organization>): void {
      state.signingOrgInfo = action.payload;
    },
    setQuery(state: UserState, action: PayloadAction<string>): void {
      state.query = action.payload;
    },
    setSearchInfo(state: UserState, action: PayloadAction<any>): void {
      state.searchInfo = action.payload;
    },
    setIsSearching(state: UserState, action: PayloadAction<boolean>): void {
      state.isSearching = action.payload;
    },
    setMFAStatus(state: UserState, action: PayloadAction<string>): void {
      state.mfaStatus = action.payload;
    },
    setTabExternal(state: UserState, action: PayloadAction<{ tab: number; }>) {
      const { tab } = action.payload;
      state.tabExternal = tab;
    },
  }
});

export const { reducer } = slice;

export const clearUserState = (): AppThunk => (dispatch): void => {
  dispatch(slice.actions.clearState());
};

export const addCallApiCount = (): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.addCallApiCount());
};

export const setMemberNeedReload = (needReload: boolean): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setMemberNeedReload(needReload));
};

export const setUserInfo = (_body: any): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setUser(_body));
};

export const setVerificationStatus = (status: number): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setVerificationStatus(status));
};

export const setRegisteredVerificationInfo = (body: any): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setRegisteredVerificationInfo(body));
};

export const updateUserInfo = (_uid: string, _body: any): AppThunk => async (dispatch): Promise<void> => {
  // await lambdaPutUserInfo(_uid, _body);
  dispatch(slice.actions.updateUser(_body));
};

export const setUserAvatar = (image: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setAvatar(image));
};

export const updateUserAvatar = (image: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setAvatar(image));
};

export const setLoadingStatus = (status: LoadingStatus): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setLoadingStatus(status));
};

export const setRequestedLocation = (path: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setRequestedLocation(path));
};

export const setInviteInfo = (info: any): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setInviteInfo(info));
};

export const setDomainName = (domainName: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setDomainName(domainName));
};

export const setMemberInfos = (members: OrgMemberForClient[]): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setMemberInfos(members as OrgMemberForClient[]));
};

export const addMemberInfo = (member: OrgMemberForClient): AppThunk => async (dispatch) => {
  dispatch(slice.actions.addMemberInfo(member as OrgMemberForClient));
};

export const updateMemberInfo = (member: OrgMemberForClient): AppThunk => async (dispatch) => {
  dispatch(slice.actions.updateMemberInfo(member as OrgMemberForClient));
};

export const updateMemberStatus = (mid: string, status: number, updatedAt: Date): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.updateMemberStatus({ mid, status, updatedAt }));
};

export const deleteMemberInfo = (mid: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.deleteMemberInfo(mid));
};

export const setConnectDlgOpen = (open: number): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setConnectDlgOpen(open));
};

export const setSigningOrgInfo = (info: Organization): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setSigningOrgInfo(info));
};

export const setQuery = (query: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setQuery(query));
};

export const setSearchInfo = (searchFunc: any): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setSearchInfo(searchFunc));
};

export const setIsSearching = (loading: boolean): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setIsSearching(loading));
};

export const setMFAStatus = (status: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setMFAStatus(status));
};

export const setTabExternal = (tab: number): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.setTabExternal({ tab }));
};

export default slice;
