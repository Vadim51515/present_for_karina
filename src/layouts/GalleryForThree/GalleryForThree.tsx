import styles from "./GalleryForThree.module.scss";

export const GalleryForThree = ({ children }: any) => {
  console.log(children);
  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>{children[0]}</div>
      <div className={styles.secondItem}>{children[1]}</div>
      <div className={styles.threeItem}>{children[2]}</div>
    </div>
  );
};
