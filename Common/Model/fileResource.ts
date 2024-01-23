export interface FileResource {
  id: string;
  itemId: string;
  type: number;
  resource: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
