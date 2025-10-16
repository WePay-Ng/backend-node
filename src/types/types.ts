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

export type TransferPayload = {
  idempotencyKey?: string;
  initiatorUserId: string;
  fromPhone: string;
  toPhone?: string; // for internal transfers
  amount: bigint | number; // smallest unit
  currency?: string;
  reason?: string;
};

export interface ExternalTransferInput {
  idempotencyKey: string;
  initiatorUserId: string;
  senderName: string;
  fromPhone: string;
  destinationBank: string;
  destinationAccountNumber: string;
  destinationAccountName: string;
  amount: number; // in kobo
  currency?: string;
  reason?: string;
}
