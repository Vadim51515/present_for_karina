import { useRef, useState } from "react";
import styles from "./Video.module.scss";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.png";
import classNames from "classnames";
import FullScreenBtn from "../../assets/images/FullScreenBtn.svg";

export const Video = ({
  src,
  styleForVideo,
  previewImg,
  classForContainer,
  setContentOnFullScreen,
  isFullScreenBtn = true,
  isControls = false,
}: any) => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  const testRef = useRef(null);

  const PlayPauseButton = () => {
    return (
      <div
        onClick={(e: any) => {
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
          });
          //@ts-ignore
          e.preventDefault();
        }}
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
    <div className={classNames(styles.containerVideo, classForContainer)}>
      <video
        onEnded={() => setIsPlayVideo(false)}
        ref={testRef}
        className={styles.video}
        style={styleForVideo}
        src={src}
        controls={isControls}
        poster={previewImg}
      />
      {!isControls && <PlayPauseButton />}

      {isFullScreenBtn && (
        <img
          onClick={() => {
            //@ts-ignore
            testRef.current.pause();
            setIsPlayVideo(false);
            setContentOnFullScreen(src);
          }}
          className={styles.fullScreenBtn}
          src={FullScreenBtn}
          alt=""
        />
      )}
    </div>
  );
};
