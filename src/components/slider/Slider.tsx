import { useState } from "react";

import cn from "classnames";

import styles from "./slider.module.scss";

interface SliderProps {
  slides: string[];
  slidesToShow?: number;
}

const Slider = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handle = (move: number) => {
    if (currentSlide + move < 0 || currentSlide + move >= slides.length) {
      return;
    }
    setCurrentSlide((s) => s + move);
  };

  const isHideLeft = currentSlide === 0 ? styles.none : ``;
  const isHideRight = currentSlide === slides.length - 1 ? styles.none : ``;

  return (
    <div className={styles.slider}>
      <div
        className={cn(styles.button, styles.left, isHideLeft)}
        onClick={() => handle(-1)}
      >
        <img src="./arrow.png" alt="" />
      </div>
      <div>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        ></div>
      </div>
      <div
        className={cn(styles.button, styles.right, isHideRight)}
        onClick={() => handle(1)}
      >
        <img src="./arrow.png" alt="" />
      </div>
    </div>
  );
};

export default Slider;
