/* eslint-disable no-useless-escape */
export const isEmpty = (value) =>
  typeof value === "undefined" || String(value).trim() === "";

export const isNumber = (value) => !Number.isNaN(Number(value));

export const isEmail = (string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (string.match(regex)) {
    return true;
  }

  return false;
};

export const isPhoneNumber = (value) => {
  return /^\d{13,}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ""));
};

export const isValid = (errors) => {
  const errorsArray = Object.values(errors);

  for (let i = 0; i < errorsArray.length; i += 1) {
    if (!isEmpty(errorsArray[i])) {
      return false;
    }
  }

  return true;
};

export const range = (start, end) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};
