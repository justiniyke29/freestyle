import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toaster from "react-hot-toast";

import { logout } from "@/app/slices/userSlice";

import useAppDispatch from "./useAppDispatch";

const useErrorHandler = ({
  isError,
  error,
  showToast = true,
  errorFunction,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError && showToast) {
      toaster.error(
        error?.data?.message || "Something went wrong, try again later."
      );
    }
  }, [isError]);

  useEffect(() => {
    if (isError) {
      if (errorFunction) {
        errorFunction();
      }
    }
  }, [isError]);

  useEffect(() => {
    if (isError) {
      if (error?.data?.statusCode === 499) {
        dispatch(logout());
        navigate("/login");
      }
    }
  }, [isError]);
};

export default useErrorHandler;
