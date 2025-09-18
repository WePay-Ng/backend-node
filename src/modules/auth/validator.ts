import Joi from 'joi';

export function ValidateRegister() {
  return Joi.object({
    bvn: Joi.number().required(),
    email: Joi.string().email().optional(),
    role: Joi.string().valid('USER', 'AGENT', 'ADMIN').optional(),
    // phone: Joi.string()
    //   .pattern(/^[0-9]{10,15}$/)
    //   .required(),
    // password: Joi.string().min(8).required(),
    // role: Joi.string().valid('USER', 'AGENT', 'ADMIN').required(), // differentiate
    // occupation: Joi.string().optional(),
    // education: Joi.string().optional(),
    // religion: Joi.string().optional(),
    // maritalStatus: Joi.string().optional(),
    // address: Joi.object({
    //   country: Joi.string().required(),
    //   state: Joi.string().required(),
    //   city: Joi.string().required(),
    //   streetline: Joi.string().required(),
    //   office_address: Joi.string().optional(),
    //   landmark: Joi.string().optional(),
    // }),
    // business: Joi.object({
    //   type: Joi.string().required(),
    //   name: Joi.string().required(),
    //   operationDays: Joi.string().optional(),
    //   operatingHours: Joi.string().optional(),
    //   startedAt: Joi.date().optional(),
    //   address: Joi.object({
    //     country: Joi.string().required(),
    //     state: Joi.string().required(),
    //     streetline: Joi.string().required(),
    //     landmark: Joi.string().optional(),
    //   }),
    // }),
    // verification: Joi.object({
    //   bvn: Joi.number().required(),
    //   type: Joi.string().required(),
    //   IDFront: Joi.string().optional(),
    //   IDBack: Joi.string().optional(),
    //   passport: Joi.string().optional(),
    //   utility: Joi.string().optional(),
    // }),
    // bank: Joi.object({
    //   bank: Joi.string().required(),
    //   accountName: Joi.string().required(),
    //   accountNumber: Joi.string().required(),
    //   type: Joi.string().required(),
    // }),
  });
}

export function ValidateUpdateUser() {
  return Joi.object({
    bvn: Joi.number().required(),
    email: Joi.string().email().optional(),
    role: Joi.string().valid('USER', 'AGENT', 'ADMIN').optional(),
    phone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .optional(),
    password: Joi.string().min(8).required(),
    name: Joi.string().optional(),
    dob: Joi.date().optional(),
    gender: Joi.string().optional(),
    // role: Joi.string().valid('USER', 'AGENT', 'ADMIN').required(), // differentiate
    // occupation: Joi.string().optional(),
    // education: Joi.string().optional(),
    // religion: Joi.string().optional(),
    // maritalStatus: Joi.string().optional(),
    address: Joi.object({
      country: Joi.string().required(),
      state: Joi.string().required(),
      city: Joi.string().required(),
      streetLine: Joi.string().required(),
      office_address: Joi.string().optional(),
      landmark: Joi.string().optional(),
    }).optional(),
    // business: Joi.object({
    //   type: Joi.string().required(),
    //   name: Joi.string().required(),
    //   operationDays: Joi.string().optional(),
    //   operatingHours: Joi.string().optional(),
    //   startedAt: Joi.date().optional(),
    //   address: Joi.object({
    //     country: Joi.string().required(),
    //     state: Joi.string().required(),
    //     streetline: Joi.string().required(),
    //     landmark: Joi.string().optional(),
    //   }),
    // }),
    verification: Joi.object({
      type: Joi.string().optional(),
      IDFront: Joi.string().optional(),
      IDBack: Joi.string().optional(),
      passport: Joi.string().optional(),
      utility: Joi.string().optional(),
    }),
    bank: Joi.object({
      bank: Joi.string().required(),
      accountName: Joi.string().required(),
      accountNumber: Joi.string().required(),
      type: Joi.string().required(),
    }).optional(),
    nextOfKin: Joi.object({
      name: Joi.string().required(),
      phone: Joi.string().required(),
      relationship: Joi.string().required(),
    }).optional(),
  });
}

export function ValidateAddress() {
  return Joi.object({
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    streetline: Joi.string().required(),
    office_address: Joi.string().optional(),
    landmark: Joi.string().optional(),
  });
}

export function ValidatePassword() {
  return Joi.object({
    password: Joi.string().min(8).required(),
  });
}

export function ValidateBVN() {
  return Joi.object({
    bnv: Joi.number().min(11).required(),
  });
}

export function ValidateReadiness() {
  return Joi.object({
    internetAccess: Joi.boolean().default(true),
    userBase: Joi.string().default('1-50'),
    terminals: Joi.number().default(5),
  });
}

export function ValidateBank() {
  return Joi.object({
    bank: Joi.string().required(),
    accountName: Joi.string().required(),
    accountNumber: Joi.string().required(),
    type: Joi.string().required(),
  });
}

export function ValidateVerification() {
  return Joi.object({
    bvn: Joi.number().required(),
    type: Joi.string().required(),
    IDFront: Joi.string().optional(),
    IDBack: Joi.string().optional(),
    passport: Joi.string().optional(),
    utility: Joi.string().optional(),
  });
}

export function ValidateBusiness() {
  return Joi.object({
    type: Joi.string().required(),
    name: Joi.string().required(),
    operationDays: Joi.string().optional(),
    operatingHours: Joi.string().optional(),
    startedAt: Joi.date().optional(),
    address: Joi.object({
      country: Joi.string().required(),
      state: Joi.string().required(),
      streetline: Joi.string().required(),
      landmark: Joi.string().optional(),
    }),
  });
}

export function ValidateLogin() {
  return Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    ip: Joi.string().optional(),
    deviceInfo: Joi.string().optional(),
  });
}

export function ValidateResetPassword() {
  return Joi.object({
    token: Joi.string().required(),
    newPassword: Joi.string().min(8).required(),
  });
}

export function ValidateForgotPassword() {
  return Joi.object({
    email: Joi.string().email().required(),
  });
}
