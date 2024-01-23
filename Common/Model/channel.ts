export interface Channel {
  id: string;
  sid: string;
  title: string;
  description: string;
  subCategory: string;
  thumb: string;
  type: number;
  status: number;
  creator: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export interface ChannelParticipant {
  id: string;
  sid: string;
  uid: string;
  oid: string;
  type: number;
  status: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export interface ChannelMessage {
  id: string;
  sid: string;
  msgId: number;
  senderId: string;
  textContent: string;
  textType: number;
  files: any;
  status: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
