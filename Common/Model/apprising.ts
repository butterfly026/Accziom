export interface Apprising {
  id: string,
  receiverId: string,
  itemId: string,
  href: string,
  type?: string,
  custom?: string,
  removed?: boolean,
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
