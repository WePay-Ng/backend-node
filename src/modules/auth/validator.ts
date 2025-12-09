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

export function ValidateVerifyDOB() {
  return Joi.object({
    dob: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .required(),
    bvn: Joi.string().min(11).max(11).required(),
  });
}

export function ValidateOTP() {
  return Joi.object({
    email: Joi.string().email().optional(),
    type: Joi.string().valid('PHONE', 'EMAIL').default('EMAIL'),
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
    phone: Joi.string().optional(),
    email: Joi.string().email().optional(),
    pin: Joi.string().min(4).max(4).required(),
  });
}

export function ValidateLoginWithFinger() {
  return Joi.object({
    fingerPrint: Joi.string().required(),
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
    otp: Joi.string().min(6).max(6).required(),
  });
}

export function ValidateForgotPassword() {
  return Joi.object({
    email: Joi.string().email().required(),
  });
}

export function VerifyBVN() {
  return Joi.object({
    bvn: Joi.string().min(11).max(11).required(),
  });
}
