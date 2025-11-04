import Joi from 'joi';

export function ValidateAirtimePayment() {
  return Joi.object({
    number: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    amount: Joi.string().required(),
    country: Joi.string().required(),
  });
}
