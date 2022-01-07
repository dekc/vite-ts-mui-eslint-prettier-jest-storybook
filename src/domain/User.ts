export type UUID = string;
export type UserName = string;
export type Email = string;
export type Password = string;

export type User = {
  id: UUID;
  name: UserName;
  email: Email;
  org?: string;
};
