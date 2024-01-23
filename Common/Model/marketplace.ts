export interface Template {
  id: string,
  displayName: string,
  description: string,
  taxonomy: string,
  fileName: string,
  rdfType: string,
  owner: any,
  ownerAgent: any,
  status: number,
  createdAt?: Date | string,
  updatedAt?: Date | string,
}

export interface Goods {
  id: string,
  displayName: string,
  description: string,
  images: any[],
  fileName: string,
  rdfType: string,
  templateId: string,
  category: string,
  subCategory: string,
  owner: any,
  ownerAgent: any,
  price: number,
  count: number,
  createdAt?: Date | string,
  updatedAt?: Date | string,
}

