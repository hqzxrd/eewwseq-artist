import { FC } from "react";

import Slider from "../../components/slider/Slider";

import styles from "./price.module.scss";

const imgs = ["./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg"];

const Price: FC = () => {
  return (
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
        <p>- контент 18+ (но при этом цена увеличивается от 2-х тысяч)</p>
      </div>

      <div className={styles.full}>
        <h2>Цена на арты с полной детализацией:</h2>
        <p>По плечи: 5000р</p>
        <p>Бюст: 6000р</p>
        <p>Пол тела: 7000р</p>
        <p>Полный рост: 8000-10000р (зависит от сложности деталей)</p>
        <div className={styles.full_wrapper}>
          <Slider slides={imgs} />
        </div>
      </div>
    </div>
  );
};

export default Price;
