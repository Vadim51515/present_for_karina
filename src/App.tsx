import { CardImg } from "./components/CardImg/CardImg";
import karina_1 from "./assets/images/karina_1.jpg";
import karina_2 from "./assets/images/karina_2.jpg";
import karina_4 from "./assets/images/karina_4.jpg";
//@ts-ignore
import karina3 from "./assets/images/karina_3.mp4";
import styles from "./App.module.scss";
import { GalleryForThree } from "./layouts/GalleryForThree/GalleryForThree";
import { Video } from "./components/Video/Video";

function App() {
  const isMobile = /Mobi|Android/i.test(window.navigator.userAgent);
  console.log("isMobile", isMobile);

  return (
    <div className={styles.App}>
      <h1 style={{ alignSelf: "center" }}>
        Наша 4-х месячная, без одного дня история❤️
      </h1>
      <div style={{ display: "flex" }}>
        <GalleryForThree>
          <CardImg
            imgFirst={karina_1}
            // classForImg={styles.border1}
            styleForImg={{ width: 500, height: 500 }}
            // text="Первая встреча"
          />
          <CardImg
            imgFirst={karina_2}
            styleForImg={{ width: 250, height: 248 }}
          />
          <Video
            src={karina3}
            styleForVideo={{ width: 250, height: 248 }}
            previewImg={karina_4}
          />

          {/* <div style={{ background: "red" }}></div> */}
        </GalleryForThree>
        <div style={{ marginLeft: 30 }}>
          <h2>{`Это было офигенно. Огромное количество разговоров, много воспоминаний о прошлом`}</h2>
          <h2>{`Капи-бара, бука-бяка, утятки, "Какие-то проблемы🕶️?", и это ведь только самая вершина айсберга приколов и локальных мемов, которые начали появляться с первого дня наших взаимоотношений`}</h2>
          <h2>{`Сейчас смотря на наши глаза, я вспоминаю те первые, безумно милые и классные эмоции от нашей встречи. Кажется в них, уже в тот момент начиналась гореть искра, искра наших теплых взаимоотношений`}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
