import { FC } from "react";
import style from "./button.module.scss";
import { Link } from "react-router-dom";

interface props {
  value: string;
  link: string;
}

const Button: FC<props> = ({ value, link }) => {
  console.log(link);

  return (
    <Link to={link}>
      <div className={style.button}>{value}</div>
    </Link>
  );
};

export default Button;
