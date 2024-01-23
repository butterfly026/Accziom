export interface FederatedIdentity {
    id: string;
    uid: string;
    userType: number;
    platform: string;
    tenantId: string;
    status: number;
    email: string;
    authToken: string;
}
