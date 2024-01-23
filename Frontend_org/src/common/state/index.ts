import { DefaultStorageType, SessionType, StateType, StorageType } from "@common/consts/types";
import { proxy, subscribe, snapshot, useSnapshot } from "valtio";

export * from "./actions";

function proxyWithPersistant(
  val: DefaultStorageType,
  opts: {
    key: string;
  }) {
  if (window.location.hostname.indexOf("vn") !== -1) {
    val.locale = "vi";
  }
  const local = localStorage.getItem(opts.key);
  const state = proxy(local ? JSON.parse(local) : val);
  subscribe(state, () => {
    localStorage.setItem(opts.key, JSON.stringify(snapshot(state)));
  });
  return state;
}

const storage: StorageType = proxyWithPersistant(
  {
    address: "",
    connector: "",
    chain: "",
    isConnected: false,
    inviteCode: "",
    isLogin: false,
    locale: "en",
    giftCode: "",
  },
  {
    key: "account",
  }
);

const session: SessionType = proxy({
  ready: false,
  count: 0,
  user: undefined,
  pkInfo: undefined,
  vip: undefined,
  global: {}
});

export const state: StateType = proxy({
  storage,
  session,
});

export function useACZState() {
  const snap = useSnapshot<StateType>(state);
  return { snap };
}
