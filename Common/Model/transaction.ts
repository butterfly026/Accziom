export interface Transaction {
    uid: string;
    value: number;
    fromWalletID: any;
    toWalletID: any;
    from: string;
    to: string;
    hash: string;
    status: string;
    txn: any;
    platform?: number;
    materialIds?: any;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}