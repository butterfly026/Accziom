export interface Announcement {
  id: string;
  title: string;
  type?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}