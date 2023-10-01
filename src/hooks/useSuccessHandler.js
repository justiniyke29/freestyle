import { useEffect } from "react";
import toaster from "react-hot-toast";

const useSuccessHandler = ({
  isSuccess,
  showToast = true,
  toastMessage = "Successful!",
  successFunction,
  dependencies = [],
}) => {
  useEffect(() => {
    if (isSuccess && showToast) {
      toaster.success(toastMessage);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      if (successFunction) {
        successFunction();
      }
    }
  }, [isSuccess, ...dependencies]);
};

export default useSuccessHandler;
