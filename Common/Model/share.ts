export interface Share {
    id: string;
    itemId: string;
    itemType: number;
    from: any;
    to: any;
    fromAgent: any;
    toAgent: any;
    sharedAt: Date | string;
    isDeleted: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}