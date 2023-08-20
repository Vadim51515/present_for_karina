import classNames from "classnames";
import styles from "./GalleryForFive.module.scss";

export const GalleryForFive = ({
  children,
  classContainer,
  title,
  position,
}: any) => {
  console.log(children);
  return (
    <div className={styles.box}>
      {title && position === "top" && (
        <h2 style={{ alignSelf: "center" }}>{title}</h2>
      )}
      <div className={classNames(styles.container, classContainer)}>
        <div className={styles.firstItem}>{children[0]}</div>
        <div className={styles.secondItem}>{children[1]}</div>
        <div className={styles.threeItem}>{children[2]}</div>
        <div className={styles.fourthItem}>{children[3]}</div>
        <div className={styles.fiveItem}>{children[4]}</div>
      </div>
    </div>
  );
};
