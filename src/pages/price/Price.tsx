import { FC, useState } from "react";

import Slider from "../../components/slider/Slider";

import styles from "./price.module.scss";

const fullImgs = ["./full1.jpg", "./full2.jpg", "./full3.jpg", "./full4.jpg"];

const halfImgs = ["./half1.jpg", "./half2.jpg", "./half3.jpg"];

const Price: FC = () => {
  return (
    <div className="scroll">
      <div className={styles.main_wrapper}>
        <div className={styles.main}>
          <h2>Я рисую:</h2>
          <p>- Осов</p>
          <p>- Парочки</p>
          <p>- Монстров</p>
          <p>- Фэнтези персонажей</p>
          <p>- Фан-арты</p>
          <p>- Легкую эротику</p>
          <p>
            - Неко, фурри, человекообразных существ (за них чаще беру
            дополнительную плату, но на счет этого надо обращаться ко мне в лс
            группы. Так как зависит от сложности дизайна)
          </p>
          <p>- Контент 18+ (но цена будет больше от 2-х тысяч)</p>
        </div>

        <div className={styles.price}>
          <h2>Цена на арты с полной детализацией:</h2>
          <p>По плечи: 3000р</p>
          <p>Бюст: 4000р</p>
          <p>Пол тела: 5000р</p>
          <p>Полный рост: 6000р (в зависимости от сложности)</p>
          <div className={styles.price_wrapper}>
            <Slider slides={fullImgs} />
          </div>
        </div>
        <div className={styles.price}>
          <h2>Цена на арты с частичной детализацией:</h2>
          <p>По плечи: 1000р</p>
          <p>Бюст: 1500р</p>
          <p>Пол тела: 3000р</p>
          <p>Полный рост: 4000р (в зависимости от сложности)</p>
          <div className={styles.price_wrapper}>
            <Slider slides={halfImgs} />
          </div>
        </div>
        <div className={styles.price}>
          <h2>Дополнительно:</h2>
          <p>Легкий фон: бесплатно</p>
          <p>Сложный фон: 1000-3000р (зависит от количества деталей)</p>
          <p>Дополнительный персонаж: +100%</p>
        </div>
        <div className={styles.price}>
          <h2>Оплата:</h2>
          <p>Сбербанк, Qiwi, Tinkoff. Предоплата 100% при утверждении скетча</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
