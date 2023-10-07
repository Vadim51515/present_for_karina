import styles from "./Button.module.scss";
import classNames from "classnames";
type PropsType = {
  children: string;
  type?: "primary" | "default";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
const Button = ({
  children,
  type = "default",
  onClick,
  disabled,
  className,
}: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        { [styles.default]: type === "default" },
        { [styles.primary]: type === "primary" },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
