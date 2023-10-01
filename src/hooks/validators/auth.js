import { isEmail, isEmpty, isValid } from "./helpers";

export const validateLoginInputs = ({ identity, password }) => {
  const errors = {
    identity: "",
    password: "",
  };

  if (isEmpty(identity)) errors.identity = "Email or Username cannot be empty";

  if (isEmpty(password)) errors.password = "Password cannot be empty";

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateClaimAccountInput = ({ email }) => {
  const errors = {
    email: "",
  };

  if (isEmpty(email)) errors.email = "Email cannot be empty";
  else if (!isEmail(email)) errors.email = "Invalid email address";

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateRegisterInputs = ({ full_name, email, password }) => {
  const errors = {
    full_name: "",
    email: "",
    password: "",
  };

  if (isEmpty(full_name)) errors.full_name = "Name cannot be empty";

  if (isEmpty(email)) errors.email = "Email cannot be empty";
  else if (!isEmail(email)) errors.email = "Invalid email address";

  if (isEmpty(password)) errors.password = "Password cannot be empty";

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateOTPInputs = ({ otpCode }) => {
  const errors = {
    otpCode: "",
    userId: "",
    otpId: "",
  };

  if (isEmpty(otpCode)) errors.otpCode = "OTP cannot be empty";
  if (otpCode.length !== 6) errors.otpCode = "OTP must be only 6 characters";

  return {
    valid: isValid(errors),
    errors,
  };
};
export const validateForgotPasswordInputs = ({ email }) => {
  const errors = {
    email: "",
  };

  if (isEmpty(email)) errors.email = "Email cannot be empty";
  else if (!isEmail(email)) errors.email = "Invalid email address";

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateVerifyForgotPasswordInputs = ({
  otpCode,
  newPassword,
  confirmPassword,
}) => {
  const errors = {
    otpCode: "",
    userId: "",
    otpId: "",
    newPassword: "",
    confirmPassword: "",
  };

  if (isEmpty(otpCode)) errors.otpCode = "OTP cannot be empty";
  if (isEmpty(newPassword)) errors.newPassword = "Password cannot be empty";
  if (isEmpty(confirmPassword))
    errors.confirmPassword = "Confirm Password cannot be empty";
  if (otpCode.length !== 6) errors.otpCode = "OTP must be only 6 characters";
  if (newPassword !== confirmPassword)
    errors.confirmPassword = "confirm password must match the password";

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateVerifyForgotPasswordOtpInputs = ({ otpCode }) => {
  const errors = {
    otpCode: "",
    email: "",
  };

  if (isEmpty(otpCode)) errors.otpCode = "OTP cannot be empty";
  if (otpCode.length !== 6) errors.otpCode = "OTP must be only 6 characters";

  return {
    valid: isValid(errors),
    errors,
  };
};
