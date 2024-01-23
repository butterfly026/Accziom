import { Tag } from 'src/../../Common/Model/tag';

export interface Microservice {
  id: string;
  name: string;
  entity?: any;
  creator: any;
  agent: any;
  description: string;
  durationType: any;
  bundleType: number;
  type: string; // category
  stat: string;
  json: any;
  paymentOptions: any;
  baseFee: number;
  baseFeeDescription: string;
  defaultCurrency?: string;
  engagementLetter: string;
  acceptLetter: string;
  props: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
}

export interface MicroserviceInfo extends Microservice {
  providerName: string;
  providerLogo: string;
  tags?: Tag[];
  banner?: string;
  url?: string;
  showRating?: boolean;
}

export interface MicroserviceInfoEx extends MicroserviceInfo {
  statistics: any;
}