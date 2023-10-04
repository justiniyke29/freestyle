import Loader from "@/components/lib/Loader";
import match from "@/utils/match";

import styles from "./Button.module.scss";

const Button = ({
  variant = "solid",
  size = "small",
  children,
  disabled,
  className,
  loading,
  loadingText,
  ...rest
}) => {
  const buttonSize = match(size, {
    small: styles.size__small,
    medium: styles.size__medium,
    large: styles.size__large,
    default: "",
  });

  const buttonVariant = match(variant, {
    solid: styles.variant__solid,
    outline: styles.variant__outline,
    default: "",
  });

  return (
    <button
      disabled={loading || disabled}
      className={`${styles.base} ${buttonSize} ${buttonVariant} ${
        loading ? "cursor-wait" : ""
      } ${className || ""}`}
      {...rest}
    >
      {loading ? <Loader text={loadingText} /> : children}
    </button>
  );
};

export default Button;
