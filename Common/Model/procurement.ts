export interface RFQ {
    id: string;
    material: string;
    description: string;
    deadline: Date | string;
    creator: any;
    creatorAgent: any;
    partners: any;
    partnerAgents: any;
    status: string;
    createdAt?: string;
}

export interface Price {
  unit: string;
  minQty: number;
  maxQty: number;
  netPrice: number;
}

export interface Proposal {
  id: string;
  rfqId: string;
  volumes: any[];
  prices: any[];
  supplier: any;
  supplierAgent: any;
  customer: any;
  customerAgent: any;
  status: string;
  material: string;
  description: string;
  chatId?: string;
  contractId?: string;
  createdAt?: string;
}

export interface InterestOption {
  rate: number;
  period: number;
  type: number;
}

export interface TaxOption {
  gstRate: number;
}

export interface DeliveryContract {
  itemId: string;
  itemTitle: string;
  itemDescription: string;
  itemLife: any;
  itemStatus: number;
  itemType: number;
  itemCollected: any;
  itemCategory: string;
  itemPeriod: any;
  requirePO: number;
  volumes: any[];
  prices: any[];
}

export interface DeliveryItem {
  id: string;
  title: string;
  description: string;
  life: any;
  status: number;
  type: number;
  collected: any;
  quantity: number;
  netPrice: number;
  netValue: number;
}

export interface PaymentContract {
  costPrincipal: number;
  costInterest: InterestOption;
  costTax: TaxOption;
  costOther: any;
  paymentOption: number;
  paymentInitialAmount: number;
  paymentInitialOffset: number;
  paymentFinalPeriod: number;
  paymentFinalOffset: number;
  paymentInvoiceOffset: number;
  paymentInterestLate: InterestOption;
  paymentMethod: number;
  paymentTool: number;
  paymentCurrency: string;
}

export interface PaymentItem {
  principal: number;
  interest: number;
  other: number;
  tax: TaxOption;
  paidTax?: number;
  interestLate: InterestOption;
  paidInterestLate?: number;
  invoiceOffset: number;
  paymentMethod: number;
  paymentTool: number;
  paymentCurrency: string;
}

export interface Contract {
  id: string;
  generator: number;
  material: string;
  description: string;
  validFrom: Date | string;
  validTo: Date | string;
  itemBriefs?: any;
  delivery: DeliveryContract[];
  payment: PaymentContract[];
  customer: any;
  customerAgent: any;
  customer_sign: string;
  customerSignedAt?: Date | string;
  supplier: any;
  supplierAgent: any;
  supplier_sign: string;
  supplierSignedAt?: Date | string;
  status: string;
  type: number;
  publishStatus?: string;
  chatId?: string;
  scheduled?: number;
  txHash?: string;
  referral?: any;
  createdAt?: string;
}

export interface Schedule {
  id: string;
  contractId: string;
  poId: string;
  dueDate: Date | string;
  material: DeliveryItem | PaymentItem;
  customer: any;
  customerAgent: any;
  customerConfirmedAt: Date | string;
  supplier: any;
  supplierAgent: any;
  supplierConfirmedAt: Date | string;
  status: string;
  type: number;
  invoiceId: string;
  createdAt?: string;
}
// Purchase Order
export interface PO {
  id: string;
  contractId: string;
  title: string;
  description: string;
  material: DeliveryItem;
  customer: any;
  customerAgent: any;
  customer_sign: string;
  customerSignedAt?: Date | string;
  supplier: any;
  supplierAgent: any;
  supplier_sign: string;
  supplierSignedAt?: Date | string;
  deliveryDate: Date | string;
  status: string;
  publishStatus: string;
  scheduled?: number;
  txHash?: string;
  createdAt?: string;
}

export interface Invoice {
  id: string;
  contractId: string;
  poId: string;
  scheduleId: string;
  title: string;
  description: string;
  dueDate: Date | string;
  invoiceDate: Date | string;
  material: DeliveryItem | PaymentItem;
  customer: any;
  customerAgent: any;
  customer_sign: string;
  customerSignedAt?: Date | string;
  supplier: any;
  supplierAgent: any;
  supplier_sign: string;
  supplierSignedAt?: Date | string;
  type: number;
  status: string;
  publishStatus?: string;
  txHash?: string;
  scheduled?: number;
  createdAt?: string;
}

export interface InvoiceMapping {
  id: string;
  invoiceId: string;
  publisher: any;
  receiver: any;
  platform: string;
  platformInvoiceId: string;
  platformPublisherId: string;
  platformReceiverId: string;
  status: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}
