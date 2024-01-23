export interface PurchaseHistory {
    id?: string;
    itemId: string;
    itemType: number;
    objectId: string;
    objectType: number;
    buyer: any;
    info: any;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}