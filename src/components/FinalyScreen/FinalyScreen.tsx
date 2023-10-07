import styles from "./FinalyScreen.module.scss";
import React from "react";
import karina_282 from "../../assets/images/karina_282.jpg";
import karina_283 from "../../assets/images/karina_283.mp4";
import { Video } from "../Video/Video";
import Button from "../../ui/Button/Button";
export const FinalyScreen = ({ onClick }: { onClick: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Video
          isControls
          isFullScreenBtn={false}
          src={karina_283}
          previewImg={karina_282}
          styleForVideo={{
            height: "700px",
            width: "400px",
            borderRadius: "4px",
            maxWidth: "100%",
            marginBottom: "40px",
          }}
          classForContainer={styles.videoContainer}
        />
        <Button onClick={onClick}>{`Конец 3?)`}</Button>
      </div>
    </div>
  );
};
