import Joi from 'joi';

export function ValidateBusiness() {
  return Joi.object({
    category: Joi.string().required(),
    name: Joi.string().required(),
    contactEmail: Joi.string().optional(),
    contactPhone: Joi.string().optional(),
    startedAt: Joi.date().optional(),
    address: Joi.object({
      country: Joi.string().optional(),
      city: Joi.string().optional(),
      state: Joi.string().optional(),
      streetLine: Joi.string().required(),
      landmark: Joi.string().optional(),
    }),
    bank: Joi.object({
      name: Joi.string().required(),
      accountName: Joi.string().required(),
      accountNumber: Joi.string().required(),
      type: Joi.string().required(),
    }).optional(),
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
