import { useRef, useState } from "react";
import styles from "./Video.module.scss";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.png";
import classNames from "classnames";

export const Video = ({ src, styleForVideo, previewImg }: any) => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  const testRef = useRef(null);

  const PlayPauseButton = () => {
    return (
      <div
        onClick={() =>
          setIsPlayVideo((isPlayVideo) => {
            console.log("tew");
            if (isPlayVideo) {
              //@ts-ignore
              testRef.current.pause();
            } else {
              //@ts-ignore
              testRef.current.play();
            }
            return !isPlayVideo;
          })
        }
        className={styles.playPauseBtnContainer}
      >
        <img
          className={classNames(
            styles.playPauseBtn,
            isPlayVideo && styles.isHoverBtn
          )}
          src={isPlayVideo ? pause : play}
          alt=""
        />
      </div>
    );
  };

  return (
    <div className={styles.containerVideo}>
      <video
        onEnded={() => setIsPlayVideo(false)}
        ref={testRef}
        className={styles.video}
        style={styleForVideo}
        src={src}
        //   controls
        poster={previewImg}
      />
      <PlayPauseButton />
    </div>
  );
};
