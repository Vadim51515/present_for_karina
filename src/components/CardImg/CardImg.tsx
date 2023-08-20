import React from "react";
import styles from "./CardImg.module.scss";
import classNames from "classnames";
export const CardImg = ({
  imgFirst,
  styleForImg,
  text,
  classForImg,
  classForContainer,
  setContentOnFullScreen,
}: any) => {
  return (
    <div
      className={classNames(styles.cardImg, classForContainer)}
      onClick={() => {
        if (setContentOnFullScreen) setContentOnFullScreen(imgFirst);
      }}
    >
      <div className={styles.imageContainer}>
        <img
          className={classNames(styles.img, classForImg)}
          style={styleForImg}
          src={imgFirst}
        />
        {/* <video autoPlay controls src={img2}></video> */}
      </div>
      {/* {text && <p className={styles.test}>{text}</p>} */}
    </div>
  );
};
