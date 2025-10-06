export type Role = 'USER' | 'AGENT' | 'MERCHANT' | 'INSTITUTION';
export type Register = {
  email: string;
  bvn: string;
  role: Role;
  extra: Record<string, any>;
};
export type Login = {
  phone: string;
  pin: string;
};

export type Business = {
  type: string;
  name: string;
  category: string;
  contactEmail?: string;
  contactPhone?: string;
  startedAt?: Date;
  address?: Address;
  bank?: Bank;
};

export type ResetPassword = {
  email: string;
  token: string;
  newPassword: string;
  ip?: string;
};

export type Bank = {
  accountName: string;
  accountNumber: number | string;
  type: string;
  name: string;
};

export type Address = {
  country?: string;
  state?: string;
  city?: string;
  streetLine: string;
  office_address?: string;
  landmark?: string;
};

export type NextOfKin = {
  name: string;
  phone: string;
  relationship: string;
};

export type UVerifyBVN = {
  id: string;
  isSubjectConsent: boolean;
  lastName?: string;
  firstName?: string;
  shouldRetrivedNin?: boolean;
};
