import { useEffect } from "react";
import { CardImg } from "../CardImg/CardImg";
import styles from "./FullScreenContent.module.scss";
import { Video } from "../Video/Video";
import cross from "../../assets/images/cross.svg";

export const FullScreenContent = ({ content, onClose }: any) => {
  const fileExtension = content.split(".").pop().toLowerCase();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  if (!content) return onClose();

  return (
    <div className={styles.container}>
      {fileExtension === "jpg" ? (
        <CardImg classForImg={styles.containerImg} imgFirst={content} />
      ) : (
        <Video
          isControls
          isFullScreenBtn={false}
          src={content}
          styleForVideo={{
            height: "89vh",
            borderRadius: "4px",
            maxWidth: "100%",
          }}
          classForContainer={styles.videoContainer}
        />
      )}
      <img className={styles.closeBtn} onClick={onClose} src={cross} />
    </div>
  );
};
