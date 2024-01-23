export interface Feedback {
  id: string;
  subject: string;
  content: string;
  type: number;
  sender: any;
  senderAgent: any;
  read: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export interface FeedbackConnection {
  id: string;
  connection: any;
  sender: any;
  senderAgent: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
