import React, { FC, SetStateAction, useState } from "react";

import cn from "classnames";

import styles from "./slider.module.scss";
import ModalSlider from "./ModalSlider";

export interface ISliderProps {
  slides: string[];
  status?: `default` | `modal`;
  curSlide?: number;
}

const Slider: FC<ISliderProps> = ({ slides, status = `default`, curSlide }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(
    curSlide ? curSlide : 0
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handle = (move: number) => {
    if (currentSlide + move < 0 || currentSlide + move >= slides.length) {
      return;
    }
    setCurrentSlide((s) => s + move);
  };

  const isHideLeft = currentSlide === 0 ? styles.none : ``;
  const isHideRight = currentSlide === slides.length - 1 ? styles.none : ``;

  // if (curSlide) {
  //   setCurrentSlide(curSlide);
  // }

  return (
    <div className={styles.slider}>
      {openModal && (
        <ModalSlider
          slides={slides}
          status="modal"
          state={{ currentSlide, setOpenModal }}
        />
      )}
      <div
        className={cn(styles.button, styles.left, isHideLeft)}
        onClick={() => handle(-1)}
      >
        <img src="./arrow.png" alt="" />
      </div>

      <div
        className={cn(
          styles.slide,
          status === "modal" ? styles.slide_full : ``
        )}
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        onClick={() => {
          if (status === `modal`) {
            return;
          }
          setOpenModal(true);
        }}
      ></div>

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
