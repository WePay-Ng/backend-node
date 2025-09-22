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
