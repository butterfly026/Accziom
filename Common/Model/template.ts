export const TEMPLATE_TYPE_ENGAGEMENT_LETTER = 1;
export const TEMPLATE_TYPE_PAYMENT_CONFIG = 2;
export const TEMPLATE_TYPE_ACCEPT_PAGE = 3;
export const TEMPLATE_TYPE_TIMEFRAME = 4;

export interface Template {
  id: string,
  type: number
  title: string,
  ownerId: string,
  description: any,
  body: any,
  createdAt?: Date | string,
  updatedAt?: Date | string
};
