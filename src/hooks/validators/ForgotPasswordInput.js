import { isEmpty, isValid } from "./helpers";

export const validateForgotPasswordFormInputs = ({ email }) => {
  const errors = {
    email: "",
  };
  if (isEmpty(email)) errors.email = "Email cannont be empty";

  return {
    valid: isValid(errors),
    errors,
  };
};
