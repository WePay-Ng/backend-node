export type Role = 'USER' | 'AGENT' | 'MERCHANT' | 'INSTITUTION';
export type Register = {
  email?: string;
  bvn: string;
  role: Role;
  extra: Record<string, any>;
};
export type Login = {
  phone: string;
  pin: string;
};

export type BVNInput = {
  bvn: string;
  email?: string;
  role: Role;
};

export type EmbedlyInput = {
  email: string;
  bvn: string;
  extra?: Record<string, any>;
  embedly?: Record<string, any>;
};

export type iWallet = {
  customerId: string;
  currency: string;
  name?: string;
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

export interface SendEmail {
  to: string;
  template?: string;
  subject?: string;
  variables?: any;
  templateId?: number;
  data?: any;
}

export type SMSInput = {
  country: string;
  number: number | string;
  message: string;
};

export type Personal = {
  firstName: string;
  lastName: string;
  middleName: string;
  emailAddress: string;
  mobileNumber: string;
  dob: string;
  address: string;
  city: string;
  country: string;
};

export type Transfer = {
  fromAccount: string;
  toAccount: string;
  amount: number;
  transactionReference: string;
  remarks?: string;
};

export type Payment = {
  destinationBank: string;
  destinationAccountNumber: string;
  destinationAccountName: string;
  sourceAccountNumber: string;
  sourceAccountName: string;
  remarks: string;
  amount: number;
  currency: string;
};

export type Corporate = {
  rcNumber: string;
  tin: string;
  fullBusinessName: string;
  businessAddress: string;
  city: string;
  email: string;
  country: string;
  type: string;
};

export type QoreIDBVN = {
  bvn: string;
  lastName?: string;
  firstName?: string;
};

export interface MailOptions {
  from: any;
  to: any;
  subject: any;
  html: any;
}

export interface SelectTemplate {
  template: string;
  variables?: any;
}

export type UVerifyBVN = {
  id: string;
  premiumBVN: boolean;
  isSubjectConsent: boolean;
  lastName?: string;
  firstName?: string;
  shouldRetrivedNin?: boolean;
};

export type TransferPayload = {
  idempotencyKey?: string;
  initiatorUserId: string;
  sender: string;
  receiver?: string; // for internal transfers
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
