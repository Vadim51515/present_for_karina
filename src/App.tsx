import { CardImg } from "./components/CardImg/CardImg";
import karina_1 from "./assets/images/karina_1.jpg";
import karina_2 from "./assets/images/karina_2.jpg";
import karina_4 from "./assets/images/karina_4.jpg";
import karina_5 from "./assets/images/karina_5.jpg";
import karina_8 from "./assets/images/karina_8.jpg";
import karina_9 from "./assets/images/karina_9.jpg";
import karina_10 from "./assets/images/karina_10.jpg";
import karina_11 from "./assets/images/karina_11.jpg";
import karina_12 from "./assets/images/karina_12.jpg";
import karina_13 from "./assets/images/karina_13.jpg";
import karina_15 from "./assets/images/karina_15.jpg";
import karina_16 from "./assets/images/karina_16.jpg";
import karina_17 from "./assets/images/karina_17.jpg";
import karina_18 from "./assets/images/karina_18.jpg";
import karina_19 from "./assets/images/karina_19.jpg";
import karina_20 from "./assets/images/karina_20.jpg";
import karina_21 from "./assets/images/karina_21.jpg";
import karina_22 from "./assets/images/karina_22.jpg";
import karina_24 from "./assets/images/karina_24.jpg";
//@ts-ignore
import karina3 from "./assets/images/karina_3.mp4";
//@ts-ignore
import karina6 from "./assets/images/karina_6.mp4";
//@ts-ignore
import karina_7 from "./assets/images/karina_7.mp4";
//@ts-ignore
import karina_14 from "./assets/images/karina_14.mp4";
//@ts-ignore
import karina_23 from "./assets/images/karina_23.mp4";

import styles from "./App.module.scss";
import { GalleryForThree } from "./layouts/GalleryForThree/GalleryForThree";
import { Video } from "./components/Video/Video";
import { GalleryForFive } from "./layouts/GalleryForFive/GalleryForFive";
import classNames from "classnames";
import { GalleryForFourth } from "./layouts/GalleryForFourth/GalleryForFourth";
import { GalleryForSix } from "./layouts/GalleryForSix/GalleryForSix";

function App() {
  const isMobile = /Mobi|Android/i.test(window.navigator.userAgent);
  console.log("isMobile", isMobile);

  return (
    <div className={styles.App}>
      <h1 style={{ alignSelf: "center" }}>
        Наша 4-х месячная, без одного дня история❤️
      </h1>
      <div style={{ display: "flex", marginBottom: 40 }}>
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
        </GalleryForThree>
        <div style={{ marginLeft: 30 }}>
          <h2>{`Наша первая встреча. Боже, это было безумно офигенно. Огромное количество разговоров, много воспоминаний о прошлом`}</h2>
          <h2>{`Капи-бара, бука-бяка, утятки, "Какие-то проблемы🕶️?", и это ведь только самая вершина айсберга приколов и локальных мемов, которые начали появляться с первого дня наших взаимоотношений`}</h2>
          <h2>{`Сейчас смотря на наши глаза, я вспоминаю те первые, безумно милые и классные эмоции от нашей встречи. Кажется в них, уже в тот момент начинала гореть искра, искра - наших теплых взаимоотношений`}</h2>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 80 }}>
        <div style={{ marginRight: 30 }}>
          <h2>{`После этого последовали очень частые встречи и прогулки. Макаровский мост, "Сегодня болен тобой", посиделки на балках моста`}</h2>
          <h2>{`Кажется уже тогда я понял, что хочу видеть настолько веселую и необычную девченку рядом с собой`}</h2>
          <h2>{`Наверное было заметно, как я пытался максимально быть ближе к тебе в те моменты. Мне очень сильно хотелось добиться твоего расположения и доверия, ведь раз судьба дала мне еще один шанс побыть рядом с тобой, я должен был цепляться за него как никогда раньше...`}</h2>
        </div>
        <GalleryForFive classContainer={classNames(styles.block_2)}>
          <Video
            src={karina_7}
            styleForVideo={{ width: 300, height: 500 }}
            previewImg={karina_8}
          />
          <Video
            src={karina6}
            styleForVideo={{ width: 300, height: 500 }}
            previewImg={karina_9}
          />
          <CardImg
            imgFirst={karina_10}
            styleForImg={{ width: 198, height: 200 }}
          />
          <CardImg
            imgFirst={karina_11}
            styleForImg={{ width: 198, height: 200 }}
          />
          <CardImg
            imgFirst={karina_12}
            styleForImg={{ width: 200, height: 200 }}
          />
        </GalleryForFive>
      </div>
      <h2>{`Самый переживательный, но одовременно счастливый день. Помню, как будто это было буквально вчера. Смена номера, отсутвие интернета, и чуство, что я могу подвести нашу встречу. Прогулка, непреодолимое желание признаться во всем тебе...`}</h2>
      <h2>{`Помню твой взгляд в тот момент). Было очень страшно услышать отказ, неужели это все было просто так, и мы больше не сможем быть рядом друг с другом...`}</h2>
      <h2>{`Но по итогу, все оказалось гораздо лучше, чем я когда либо мог себе представить💞`}</h2>
      <div style={{ display: "flex" }}>
        <GalleryForFourth classContainer={styles.border1}>
          <Video
            src={karina_14}
            styleForVideo={{ width: 300, height: 300 }}
            previewImg={karina_17}
          />
          <CardImg
            imgFirst={karina_13}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_15}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_16}
            styleForImg={{ width: 300, height: 300 }}
          />
        </GalleryForFourth>
        <div style={{ marginLeft: 30 }}>
          <h2>{`Первый раз в твоей квартире, множество отвлеченных разговоров на различные интересные темы`}</h2>
          <h2>{`Знакомство с Шейлой и бамбуком😅. Береги их, они офигенные😊`}</h2>
          <h2>{`Несколько пропущенных автобусов. Честно говоря, я конечно собирался уходить, но очень не хотел, поэтому не сильно был растроен пропущенным автобусом в тот момент`}</h2>
          <h2>{`Конечно же готовка пакейков, это наверное один из самых милых моментов за всё время. Мы вместе готовили, дурили, и были как дети, маленькие дети, которые напрочь забыли про время)`}</h2>
          <h2>{`Особенно мне запомнился момент, когда ты отходила, а потом пришла, и смотрела как я готовлю. Когда я обернулся посмотреть на тебя, я был безумно рад, и шокирован одновременно. Твои глаза просто сияли от счастья. Твоя улыбка была неподдельно красивой и искренней`}</h2>
          <h2>{`Возможно я ошибаюсь, но мне кажется что впервые, я увидел твои влюбленные глаза именно в тот самый момент💗`}</h2>
        </div>
      </div>
      <h2>{`После того как мы допекли панкейки, в нашу жизнь ворвалась музыка🎵 (Конечно, что еще делать то в 2 часа ночи, ахахаха). Я помню, как лежал у тебя на животике, и наверное не было более счастливого человека в тот момент, чем я`}</h2>
      <h2>{`Часа в 4 ночи кажется, мы пошли спать, но это лишь пошли, по настоящему легли спать мы сильно сильно позже`}</h2>
      <h2
        style={{ marginBottom: 140 }}
      >{`Воскресенье было не менее насыщенным на события. Этот день подарил нам прекрасный обед мороженного с энергетиком, первую кражу телефончика, который конечно крала ты, но не ты😅, кстати, это безумно классно и мило) первые обнимашки, первый поцелуй💋, ну и наверное самое главное - начало наших отношений❤️`}</h2>
      <div style={{ display: "flex" }}>
        <GalleryForSix>
          <CardImg
            imgFirst={karina_18}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_19}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_20}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_21}
            styleForImg={{ width: 300, height: 300 }}
          />
          <CardImg
            imgFirst={karina_22}
            styleForImg={{ width: 300, height: 300 }}
          />
          <Video
            src={karina_23}
            styleForVideo={{ width: 300, height: 300 }}
            previewImg={karina_24}
          />
        </GalleryForSix>
      </div>
    </div>
  );
}

export default App;
