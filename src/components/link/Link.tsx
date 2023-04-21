import { FC } from "react";

import styles from "./link.module.scss";

interface props {
  link: string;
  icon: string;
}

const SCLink: FC<props> = ({ link, icon }) => {
  return (
    <a href={link} className={styles.link} target="_blank">
      <img src={icon} className={styles.link_icon} alt="my social link" />
    </a>
  );
};

export default SCLink;
