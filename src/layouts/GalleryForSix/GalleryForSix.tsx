import classNames from "classnames";
import styles from "./GalleryForSix.module.scss";

export const GalleryForSix = ({ children, classContainer }: any) => {
  console.log(children);
  return (
    <div className={classNames(styles.container, classContainer)}>
      {children[0]}
      {children[1]}
      {children[2]}
      {children[3]}
      {children[4]}
      {children[5]}
    </div>
  );
};
