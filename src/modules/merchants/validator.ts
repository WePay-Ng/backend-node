import Joi from 'joi';

export function ValidateUpdateMerchant() {
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
    verification: Joi.object({
      type: Joi.optional(),
      IDFront: Joi.optional(),
      IDBack: Joi.optional(),
      passport: Joi.optional(),
      utility: Joi.optional(),
      cac: Joi.optional(),
    }),
  });
}

export function ValidateBusiness() {
  return Joi.object({
    type: Joi.string().required(),
    category: Joi.string().required(),
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
