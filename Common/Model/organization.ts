export interface Organization {
  organizationId: string;
  ownerId: string;
  legalName?: string;
  tradingName: string;
  domainName: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  displayName?: string;
  entityType?: string;
  totalMembers: number;
  logo: string;
  banner: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  taxNumber: string;
  abn: string;
  acn: string;
  publishedProfile?: any;
  paymentTemplates?: any;
  anzicCategory?: string;
  currency?: string;
  signerCount?: number;
  showRating?: boolean;
  status?: number;
  businessInfo?: any;
  createdAt: Date;
}

export interface OrganizationExt extends Organization {
  suppliers: Organization[]
};

interface AccountRole {
  profile: boolean;
  contact: boolean;
  wallet: boolean;
}

interface StructureRole {
  client: boolean;
  firm: boolean;
  member: boolean;
  role: boolean;
  team: boolean;
}

interface ContractRole {
  demander: boolean;
  supplier: boolean;
}

interface MicroServiceRole {
  microservice: boolean;
}

interface AssetRole {
  asset: boolean;
}

interface FileRole {
  file: boolean;
}

interface MarketplaceRole {
  organization: boolean;
  microservice: boolean;
  asset: boolean;
}

interface MessagingRole {
  messaging: boolean;
}

interface NetworkRole {
  invitation: boolean;
  referral: boolean;
}

interface DepartmentRole {
  account: AccountRole;
  structure: StructureRole;
}

interface AssignmentRole {
  ticket: ContractRole;
  microservice: MicroServiceRole;
  asset: AssetRole;
  file: FileRole;
  network: NetworkRole;
}

interface ProductionRole {
  asset: AssetRole;
  microservice: MicroServiceRole;
  file: FileRole;
}

interface TransactionRole {
  messaging: MessagingRole;
  marketplace: MarketplaceRole;
  ticket: ContractRole;
  network: NetworkRole;
}

export interface OrgMemberRole {
  rid: string;
  oid: string;
  name: string;
  level: number;
  department: DepartmentRole;
  assignment: AssignmentRole;
  production: ProductionRole;
  transaction: TransactionRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgMemberBaseRole {
  rid: string;
  oid: string;
  name: string;
  level: number;
  department: string;
  assignment: string;
  production: string;
  transaction: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgMember {
  mid: string;
  uid: string;
  rid: string;
  oid: string;
  contactId?: string;
  type?: number;
  twilioSid: any;
  itemsPinned: any;
  status: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  penName?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  addressLine1?: string;
  website?: string;
  phone?: string;
  email?: string;
  hiMsg?: string;
  history?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgMemberForClient {
  mid: string;
  uid: string;
  organizationInfo: Organization;
  roleInfo: OrgMemberRole;
  type: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgMemberForOrg extends OrgMember {
  tids: string[];
}

export interface OrgTeam {
  tid: string;
  oid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgExtendedTeam extends OrgTeam {
  mids: string[];
}

export interface OrgMemberToTeam {
  id: string;
  memberId: string;
  teamId: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}
