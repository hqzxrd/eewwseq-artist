import React, { FC, useRef } from "react";

import Slider from "./Slider";

import { ISliderProps } from "./Slider";

import styles from "./modal-slider.module.scss";

export interface IModalProps extends ISliderProps {
  state: {
    currentSlide: number;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ModalSlider: FC<IModalProps> = ({ slides, status, state }) => {
  const modalRef = useRef(null);
  return (
    <div
      ref={modalRef}
      className={styles.modal_wrapper}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          state.setOpenModal(false);
        }
      }}
    >
      <div className={styles.modal}>
        <Slider slides={slides} status={status} curSlide={state.currentSlide} />
      </div>
    </div>
  );
};

export default ModalSlider;
