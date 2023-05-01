import { FC } from "react";

import "../../styles/style.scss";
import "../../styles/stylenull.scss";

import Button from "../../components/button/Button";
import SCLink from "../../components/link/Link";

const buttons = [
  { name: `Прайс`, link: `/price` },
  { name: `Мой подход к работе`, link: `/work` },
];
const socialLinks = [
  { link: `https://vk.com/eewwseqq`, icon: "./vk_icon.png" },
  { link: `https://www.deviantart.com/eewwseq`, icon: `./deviant_icon.png` },
  { link: `https://www.artstation.com/eewwseq`, icon: `./artstation_icon.png` },
];

const Main: FC = () => {
  return (
    <div className="main">
      <div className="main-image">
        <img src="./1.png" alt="" />
      </div>

      <div className="main_block">
        <h1>EeWwseq</h1>
        <p>Нарисую арт будто самый крутой китаец на земле за копейки</p>

        <div className="main_menu">
          {buttons.map((obj, i) => {
            return <Button value={obj.name} link={obj.link} key={i} />;
          })}

          <div className="main_menu-links">
            {socialLinks.map(({ link, icon }, i) => {
              return <SCLink link={link} icon={icon} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
