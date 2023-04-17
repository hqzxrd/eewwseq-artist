import { FC } from "react";
import style from "./button.module.scss";

interface props {
  value: string;
}

const Button: FC<props> = ({ value }) => {
  return <div className={style.button}>{value}</div>;
};

export default Button;
