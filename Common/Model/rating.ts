export interface Rating {
  id?: string;
  itemId: string;
  ticketId: string;
  rater: any;
  raterAgent: any;
  nickName: string;
  value: number;
  text: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
