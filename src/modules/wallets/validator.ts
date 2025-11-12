import Joi from 'joi';

export function ValidateTransfer() {
  return Joi.object({
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    amount: Joi.number().required(), // smallest unit (integer)
    currency: Joi.string().max(3).required(),
    reason: Joi.string(),
  });
}

export function ValidateExternalTransfer() {
  return Joi.object({
    amount: Joi.number().required(), // smallest unit (integer)
    currency: Joi.string().max(3).required(),
    reason: Joi.string().optional(),
    destinationAccountName: Joi.string().required(),
    destinationBank: Joi.string().required(),
    destinationAccountNumber: Joi.string().required(),
  });
}

export function ValidateCreateWallet() {
  return Joi.object({
    currency: Joi.string().optional(),
  });
}
