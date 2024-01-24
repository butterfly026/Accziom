export type StorageType = {
    address: string;
    username: string;
    connector: string;
    chain: string;
    inviteCode: string;
    isConnected: boolean;
    isLogin: boolean;
    locale: string;
    token: any,
    giftCode: string;
};

export type DefaultStorageType = {
    address: string;
    connector: string;
    chain: string;
    isConnected: boolean;
    inviteCode: string;
    isLogin: boolean;
    locale: string;
    giftCode: string;
};

export type SessionType = {
    ready: boolean; // is ready?
    count: number; // loading count
    user: any; // wechat    
    
};

export type StateType = {
    storage: StorageType;
    session: SessionType;
};