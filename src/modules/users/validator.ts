import Joi from 'joi';

export function ValidatePin() {
  return Joi.object({
    pin: Joi.string()
      .pattern(/^\d+$/) // only digits
      .length(4),
  });
}

export function ValidateSetCredential() {
  return Joi.object({
    phone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .optional(),
    password: Joi.string().min(8).required(),
  });
}

export function ValidateUpdateUser() {
  return Joi.object({
    email: Joi.string().email().optional(),
    occupation: Joi.string().optional(),
    education: Joi.string().optional(),
    religion: Joi.string().optional(),
    maritalStatus: Joi.string().optional(),
    address: Joi.object({
      country: Joi.string().required(),
      state: Joi.string().required(),
      city: Joi.string().required(),
      streetLine: Joi.string().required(),
      office_address: Joi.string().optional(),
      landmark: Joi.string().optional(),
    }).required(),
    bank: Joi.object({
      name: Joi.string().required(),
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

export function ValidatePassword() {
  return Joi.object({
    password: Joi.string().min(8).required(),
  });
}

export function ValidateBVN() {
  return Joi.object({
    bnv: Joi.string()
      .pattern(/^\d+$/) // only digits
      .length(11),
  });
}

export function ValidateOTP() {
  return Joi.object({
    code: Joi.string()
      .pattern(/^\d+$/) // only digits
      .length(6)
      .required(),
  });
}

export function ValidateVerification() {
  return Joi.object({
    documents: Joi.array().items(
      Joi.object({
        type: Joi.string()
          .valid(
            'PASSPORT',
            'NATIONAL_ID',
            'DRIVER_LICENSE',
            'UTILITY_BILL',
            'VOTER_CARD',
            'CAC',
            'MEMART',
            'IDFRONT',
            'IDBACK',
            'AUTHORITY_LETTER',
          )
          .required(),
        fileUrl: Joi.string().required(),
      }),
    ),
  });
}



export function ValidateFingerPrint() {
  return Joi.object({
    fingerPrint: Joi.string().required(),
  });
}
