export interface UserMinInfo {
  uid: string; // uid of userModel or organizationId of organizationModel
  allIds?: any[]; // list of all { id, type }s linked to the above uid
  type: number; // user -> 1, org -> 2
  legalName?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  penName: string;
  avatar: string;
  addressLine1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phone?: string;
  email: string;
  website?: string;
  published?: any;
  abn?: string;
  acn?: string;
  signerCount?: number;
  showRating?: boolean;
}

export interface ItemMinInfo {
  id: string;
  title: string;
  description: string;
  type: number;
  image?: string;
  price: string;
  defaultCurrency?: string;
  owner: any;
  count?: string;
  status?: string;
  isPublished?: boolean;
  purpose?: number;
  entity?: any;
}

export interface ApprisingDetail {
  id: string;
  title: string;
  detail: any;
  item?: any;
}
