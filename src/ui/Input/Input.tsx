import styles from "./Input.module.scss";

type PropsType = {
  value: string;
  onChange: (v: string) => void;
  onEnter?: (v: string) => void;
};

const Input: React.FC<PropsType> = ({ onChange, value, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          value={value}
          placeholder="Введите в меня пароль, пожалуйста"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              //@ts-ignore
              props.onEnter?.(event.target.value as string);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Input;
