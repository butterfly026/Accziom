export interface ItemRelation {
  id: string;
  parentId: string;
  parentType: number;
  childId: string;
  childType: number;
  childQty?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
