import {
  Contact as XeroOriginalContact,
  Phone as XeroPhoneOriginal,
  // Address as XeroAddressOriginal,
  // Organisation,
} from '../../Backend/node_modules/xero-node';

export interface Address {
  addressType?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  addressLine5?: string; // For QBO
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  name?: string;
}

export interface FullClientMapping {
  syncClientId: string;
  platform: string;
  tenantId: string;
  platformClientId: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface AddressReasonName {
  reason?: 'POBOX' | 'BILLING' | 'STREET' | string;
  name?: string;
}

export interface ReasonName {
  reason?: string;
  name?: string;
}

interface PhoneBody {
  freeForm?: string;
  e164Format?: string;
}

interface EmailBody {
  emailAddress: string;
}

export type Phone = PhoneBody & ReasonName;
export type EmailAddress = EmailBody & ReasonName;

export type PLATFORM = 'QBO' | 'XERO' | 'ACCELO' | 'LODGEIT' | 'ACCZIOM' | 'SYNC';

export interface Organization {
  id: string;
  ownerId: string;
  autoCreateThirdPartyClients: boolean;
  // mappingIds?: MappingInfo[];
  displayName?: string;
  country?: string;
  createdAt?: number;
  updatedAt?: number;
}

export type CountryCode = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';

export interface XeroAuth {
  tenantId: string;
  code: string;
  state: string;
  accessToken: string;
  idToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  refreshTokenExpiresAt: number;
  lastAccessTokenUpdatedAt: number;
  lastRefreshTokenUpdatedAt: number;
  tokenType: string;
  countryCode: CountryCode;
  name: string;
  legalName: string;
}

export interface QBOAuth {
  tenantId: string;
  code: string;
  state: string;
  idToken: string;
  accessToken?: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  refreshTokenExpiresAt: number;
  lastAccessTokenUpdatedAt: number;
  lastRefreshTokenUpdatedAt: number;
  tokenType: string;
  countryCode: CountryCode;
  name: string;
  legalName: string;
}

export class MappingInfo {
  id:string;
  organizationId: string;
  platform: PLATFORM;
  tenantId: string;
  syncInProgress: boolean;
  contactAutoMapping: boolean;
  lastSyncStartedAt?: number;
  lastSyncFinishedAt?: number;
  authToken?: XeroAuth | QBOAuth;
  mappings: any;
  createdAt?: number;
  updatedAt?: number;
}

export class MappingPairInfo {
  id?: string;
  qboContactId: string;
  qboTenantId: string;
  xeroTenantId: string;
  xeroContactId: string;
  userId: string;
  contactId: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface Contact {
  id?: string; // Client Sync General Entity Id
  active?: boolean; // True or False
  userId?: string;
  isIndividual?: boolean;
  displayName?: string;
  legalName?: string;
  tradingName?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  casualName?: string;
  title?: string;
  note?: string;
  postalAddress?: Address;
  billingAddress?: Address;
  addresses?: Array<Address & ReasonName>; // Additional addresses - No billing or postal
  primaryPhone?: Phone;
  fax?: Phone;
  alternativePhone?: Phone;
  mobile?: Phone;
  phoneNumbers?: Phone[]; // Reasoned PhoneNumbers - No DEFAULT, ALTERNATIVE, FAX, MOBILE
  primaryEmail?: string;
  alternativeEmail?: string;
  emails?: EmailAddress[]; // Reasoned EmailAddresses - NO PRIMARY, ALTERNATIVE
  taxNumber?: string;
  website?: string;
  entityType?: string;
  abn?: string;
  acn?: string;
  createdAt?: Date; // Date
  updatedAt?: Date; // Date
}

export interface SyncClient {
  id?: string; // Client Sync General Entity Id
  active?: boolean; // True or False
  userId?: string;
  contactId?: string;
  isIndividual?: boolean;
  displayName?: string;
  legalName?: string;
  tradingName?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  note?: string;
  addresses?: Address[];
  phoneNumbers?: Phone[];
  emails?: EmailAddress[];
  taxNumber?: string;
  website?: string;
  abn?: string;
  acn?: string;
  createdAt?: Date; // Date
  updatedAt?: Date; // Date
}

interface IdMap {
  id?: string;
}

export interface CountryCodePlugin {
  countryCode?: CountryCode;
}

export type XeroPhone = XeroPhoneOriginal;
export type XeroContact = XeroOriginalContact & IdMap & CountryCodePlugin;

export interface QBOAddress {
  City?: string;
  Line1?: string;
  Line2?: string;
  Line3?: string;
  Line4?: string;
  Line5?: string;
  PostalCode?: string;
  Lat?: string;
  Long?: string;
  CountrySubDivisionCode?: string;
  Country?: string;
  Id?: string;
}

export interface QBOWebAddress {
  URI: string;
}

export interface QBOTelephoneNumber {
  FreeFormNumber: string;
}

export interface QBOOpenBalanceDate {
  date: string;
}

export interface QBOEmailAddress {
  Address: string;
}

export interface QBOReferenceType {
  value: string;
  name?: string;
}

export interface QBODateTime {
  dateTime: string;
}

export interface QBOMeta {
  CreateTime?: QBODateTime;
  LastUpdatedTime?: QBODateTime;
}

export interface QBOContact {
  Id?: string;
  SyncToken?: string;
  DisplayName?: string;
  Title?: string;
  GivenName?: string;
  MiddleName?: string;
  Suffix?: string;
  FamilyName?: string;
  PrimaryEmailAddr?: QBOEmailAddress;
  ResaleNum?: string;
  ARAccountRef?: QBOReferenceType;
  DefaultTaxCodeRef?: QBOReferenceType;
  PreferredDeliveryMethod?: string; // Preferred delivery method. Values are Print, Email, or None.
  GSTIN?: string;
  SalesTermRef?: QBOReferenceType;
  FullyQualifiedName?: string;
  Fax?: QBOTelephoneNumber;
  BusinessNumber?: string;
  BillWithParent?: boolean;
  CurrencyRef?: QBOReferenceType;
  Mobile?: QBOTelephoneNumber;
  Job?: boolean;
  BalanceWithJobs?: number;
  PrimaryPhone?: QBOTelephoneNumber;
  OpenBalanceDate?: QBOOpenBalanceDate;
  Taxable?: boolean;
  AlternatePhone?: QBOTelephoneNumber;
  MetaData?: QBOMeta;
  ParentRef?: QBOReferenceType;
  Level?: number;
  Notes?: string;
  WebAddr?: QBOWebAddress;
  Active?: boolean;
  Balance?: number;
  ShipAddr?: QBOAddress;
  PaymentMethodRef?: QBOReferenceType;
  IsProject?: boolean;
  CompanyName?: string;
  GSTRegistrationType?:
    | 'GST_REG_REG'
    | 'GST_REG_COMP'
    | 'GST_UNREG'
    | 'CONSUMER'
    | 'OVERSEAS'
    | 'SEZ'
    | 'DEEMED';
  PrintOnCheckName?: string;
  BillAddr?: QBOAddress;
  TaxExemptionReasonId?: number;
  TaxIdentifier?: string;
}

export interface XeroWebookEvent {
  resourceUrl: string; // Contact Access URL
  resourceId: string; // Contact Id
  eventDateUtc: string;
  eventType: 'CREATE' | 'UPDATE' | 'SYNC'; // Archive is UPDATE
  eventCategory: 'CONTACT' | 'INVOICE';
  tenantId: string; // Organization Id
  tenantType: 'ORGANZATION';
}

/**
 * Xero webhook event
 * https://developer.xero.com/documentation/webhooks/overview
 */
 export interface XeroWebhook {
  events: XeroWebookEvent[];
  lastEventSequence: number;
  firstEventSequence: number;
  entropy: string;
}

/**
 * Generic webhook event for all platforms
 */
export interface PlatformEvent {
  platform: PLATFORM;
  tenantId: string; // External platform organization Id
  platformClientId: string; // External platform client id
  timestamp: number;
  eventType: 'CREATE' | 'UPDATE' | 'DELETE' | 'SYNC';
  ignored?: boolean;
  ignoreReason?: 'OLD_EVENT' | 'NO_SYNC_UPDATE_DIFFERENCE';
  createdAt: number;
}
