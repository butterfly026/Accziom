export interface Invitation {
  id: string;
  title: string;
  description: string;
  inviter: any;
  inviterAgent: any;
  invitee: any;
  inviteeAgent: any;
  status: number;
  chatId: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Referral {
  id: string;
  title: string;
  description: string;
  validFrom: Date | string;
  validTo: Date | string;
  amount: number;
  unit: string;
  creator: any;
  creatorAgent: any;
  partner: any;
  partnerAgent: any;
  status: number;
  chatId?: string;
  followUp?: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ReferralItem {
  id: string;
  referralId: string;
  itemId: string;
  itemType: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
