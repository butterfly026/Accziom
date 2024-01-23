export interface User {
    uid: string;
    website: string;
    email: string;
    phone: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    penName: string;
    country: string;
    state: string;
    city: string;
    type: number;
    dateOfBirth: string | Date;
    isFirst: boolean;
    createdAt: Date;
    avatar: string;
    addressLine1: string;
    addressLine2: string;
    displayName: string;
    postalCode: string;
    taxNumber: string;
    abn: string;
    acn: string;
    identityVerified: number;
    itemsPinned: any;
    notification: number;
    publishedProfile: any;
}