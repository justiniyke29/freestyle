import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import Input from "@/components/lib/Input/Input";
import { Button } from "@/components/ui/button";
import { validateRegisterInputs } from "@/hooks/validators";
import usePasswordChecker from "@/hooks/usePasswordChecker";
import useSuccessHandler from "../../../hooks/useSuccessHandler";
import useErrorHandler from "../../../hooks/useErrorHandler";
import { useRegisterMutation } from "@/services/auth";
import { isEmpty } from "@/hooks/validators/helpers";

const initialState = {
  full_name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [payload, setPayload] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [register, { isLoading, data, isError, error, isSuccess }] =
    useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };
  useErrorHandler({ isError, error });
  useSuccessHandler({
    isSuccess,
    successFunction: () => {
      //   dispatch(setUserData(data?.data));
      // dispatch(setUserToken(data.token));
      console.log(data);
      //   navigate.push("/");
    },
    toastMessage: "Account created successfully!",
  });
  const handleSubmit = () => {
    setErrors(initialState);

    const { valid, errors: validationErrors } = validateRegisterInputs(payload);

    if (valid) {
      register(payload);
    } else {
      setErrors(validationErrors);
    }
  };
  const [validLength, hasNumber, upperCase, lowerCase, specialChar] =
    usePasswordChecker(payload);
  const isFormValid =
    Object.values(payload).every((value) => value !== "") &&
    validLength &&
    hasNumber &&
    upperCase &&
    lowerCase &&
    specialChar;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="lg:hidden">
          <Link to="/">
            <p className=" font-proximaNovaBold text-[#000000] p-3">TMA</p>
          </Link>
        </div>
        <div className={styles.left_container}>
          <div className={styles.left_wrapper}>
            <h1 className="m-auto text-center font-proximaNovaBold text-[24px]">
              Get Started Now
            </h1>
            <p className="text-center text-[14px] text-[#667084]">
              Enter your credential to access your account
            </p>
            <div className="my-5 flex flex-col items-center gap-3 lg:flex-row">
              <button
                className="focus:shadow-outline mt-4 flex h-10 items-center
                 justify-center gap-3 rounded-3xl border-2
                  ] px-6 font-dmSansMedium text-[14px] text-[#000000]
                   transition-colors duration-300 "
              >
                <img
                  src="/assets/images/icons/google.png"
                  alt="Google signin buttton"
                />
                <span>Log in with Google</span>
              </button>
              <button
                className="focus:shadow-outline mt-4 flex h-10 items-center
                 justify-center gap-3 rounded-3xl border-2 border-[#1877F2]
                  bg-[#1877F2] px-6 font-dmSansMedium text-[14px] text-[#FFFFFF]
                   transition-colors duration-300 hover:bg-[#1877f4dd]"
              >
                <img
                  src="/assets/images/icons/facebook.png"
                  alt="Google signin buttton"
                />
                <span>Login with Facebook</span>
              </button>
            </div>
            <div className="my-5 flex items-center justify-center">
              <hr className="border-t-1 grow border-black" />
              <span className="mx-4 font-semibold text-gray-600">or</span>
              <hr className="border-t-1 grow border-black" />
            </div>
            <div className=" flex flex-col gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your Full Name"
                name="full_name"
                value={payload.full_name}
                error={!isEmpty(errors.full_name)}
                helperText={errors.full_name}
                onChange={handleChange}
              />
              <Input
                label="Email Address"
                placeholder="Enter your email "
                name="email"
                type="email"
                value={payload.email}
                error={!isEmpty(errors.identity)}
                helperText={errors.identity}
                onChange={handleChange}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Enter Password"
                value={payload.password}
                type="password"
                error={!isEmpty(errors.password)}
                helperText={errors.password}
                onChange={handleChange}
              />
              <div className="flex flex-col  text-sm">
                <p
                  className={`${
                    validLength ? "text-green-400" : "text-red-500"
                  }`}
                >
                  Must be more than 8 letters
                </p>
                <p
                  className={`${lowerCase ? "text-green-400" : "text-red-500"}`}
                >
                  Must have lowercase
                </p>
                <p
                  className={`${upperCase ? "text-green-400" : "text-red-500"}`}
                >
                  Must have uppercase
                </p>
                <p
                  className={`${hasNumber ? "text-green-400" : "text-red-500"}`}
                >
                  Must contain a numeric
                </p>
                <p
                  className={`${
                    specialChar ? "text-green-400" : "text-red-500"
                  }`}
                >
                  Must contain a special character
                </p>
              </div>
              <Button
                onClick={handleSubmit}
                // loading={isLoading}
                disabled={!isFormValid}
                className="w-full rounded-3xl bg-[#0A83FF] text-[16px]"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen w-[40%] bg-[url('/assets/images/login.png')] lg:block">
          <img src="/assets/images/login.png" alt="login image" />
          <Link to="/" className="absolute top-0 z-20 hidden lg:block">
            <p className=" font-proximaNovaBold text-[#ffffff] p-3">TMA</p>
          </Link>
          <div className="absolute inset-0 hidden bg-black opacity-10 lg:block"></div>
          <div className="absolute bottom-5 hidden pb-[40px] pl-[40px] text-[#FFFFFF] lg:block">
            <p className="font-proximaNovaRegular text-[30px]">
              ⛲️ <br />
              Escape to Paradise!
            </p>
            <p className="max-w-[419px] font-proximaNovaRegular text-[14px]">
              The Simplest way to manage your workforce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
