import Joi from 'joi';

export function ValidateRegister() {
  return Joi.object({
    bvn: Joi.string()
      .pattern(/^\d+$/) // only digits
      .length(11)
      .required(),
    email: Joi.string().email().optional(),
    role: Joi.string()
      .valid('USER', 'AGENT', 'ADMIN', 'INSTITUTION', 'MERCHANT')
      .optional(),
  });
}

export function ValidateForgotPin() {
  return Joi.object({
    phone: Joi.string().optional(),
    email: Joi.string().optional(),
  }).or('phone', 'email');
}

export function ValidateLogin() {
  return Joi.object({
    phone: Joi.string().required(),
    pin: Joi.string().min(4).max(4).required(),
  });
}

export function ValidateResetPassword() {
  return Joi.object({
    newPassword: Joi.string().min(8).required(),
  });
}

export function ValidateResetPin() {
  return Joi.object({
    pin: Joi.string().min(4).max(4).required(),
  });
}

export function ValidateForgotPassword() {
  return Joi.object({
    email: Joi.string().email().required(),
  });
}
