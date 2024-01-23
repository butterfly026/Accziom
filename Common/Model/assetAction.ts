export interface AssetAction {
  id: string;
  ticketId: any;
  fromAssetId: any;
  toAssetId: any;
  from: any;
  to: any;
  fromAgent: any;
  toAgent: any;
  count: any;
  type: number;
  status: number;
  startDate: Date | string;
  endDate: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
