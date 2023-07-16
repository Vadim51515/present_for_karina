import classNames from "classnames";
import styles from "./GalleryForFourth.module.scss";

export const GalleryForFourth = ({ children, classContainer }: any) => {
  console.log(children);
  return (
    <div className={classNames(styles.container, classContainer)}>
      {children[0]}
      {children[1]}
      {children[2]}
      {children[3]}
    </div>
  );
};
