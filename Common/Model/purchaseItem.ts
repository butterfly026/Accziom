export interface MiniInvoice {
  id: string;
  issueDate: Date | string;
  confirmDate: Date | string;
  quantity: number;
}

export interface DeliveredItem {
  id: string;
  title: string;
  description: string;
  life: any;
  status: number;
  type: number;
  collected: any;
  quantity: number[];
  dueDates: (Date | string)[];
  miniInvoices: MiniInvoice[];
}

export interface PurchaseItem {
  id: string;
  contractId: string;
  itemId: string;
  itemType: number;
  itemTitle: string;
  itemDescription: string;
  itemCategory: string;
  delivery: DeliveredItem[];
  supplier: any;
  supplierAgent: any;
  customer: any;
  customerAgent: any;
  validFrom: Date | string;
  validTo: Date | string;
  createdAt?: Date | string,
  updatedAt?: Date | string
};
