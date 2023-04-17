import { FC } from "react";

import "./style.scss";
import "./stylenull.scss";

import Button from "./components/button/Button";
import Link from "./components/link/Link";

const buttons = [`Прайс`, `Мой подход к работе`, `КнOпка 3`];
const socialLinks = [
  { link: `https://vk.com/eewwseqq`, icon: "./vk_icon.png" },
  { link: `https://www.deviantart.com/eewwseq`, icon: `./deviant_icon.png` },
  { link: `https://www.artstation.com/eewwseq`, icon: `./vk_icon.png` },
];

const App: FC = () => {
  return (
    <>
      <div className="main">
        <div className="main-image">
          <img src="./1.png" alt="" />
        </div>

        <div className="main_block">
          <h1>EeWwseq</h1>
          <p>Я люта люблю чаи гонять и уже неделю рисую фон!!!!!!!!!</p>

          <div className="main_menu">
            {buttons.map((val, i) => {
              return <Button value={val} key={i} />;
            })}

            <div className="main_menu-links">
              {socialLinks.map(({ link, icon }, i) => {
                return <Link link={link} icon={icon} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
