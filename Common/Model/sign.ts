export interface Sign {
    id: string;
    mid: string;
    oid: string;
    signType: number;
    itemId: string;
    sign: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}