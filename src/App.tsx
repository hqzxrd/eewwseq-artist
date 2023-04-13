import "./style.scss";
import "./stylenull.scss";
function App() {
  return (
    <>
      <div className="main">
        <div className="main-image">
          <img src="/1.png" alt="" />
        </div>

        <div className="main_block">
          <h1>EeWwseq</h1>
          <p>Я люта люблю чаи гонять долго рисую фон у миня запор</p>
          <div className="main_menu">
            <div className="main_menu-button">Прайс</div>
            <div className="main_menu-button">Мой подход к работе</div>
            <div className="main_menu-button">Книпка 3</div>
            <div className="main_menu-links">
              <a
                href="https://vk.com/eewwseqq"
                className="main_menu-link"
                target="_blank"
              >
                <img src="./vk_icon.png" alt="" />
              </a>
              <a
                href="https://www.deviantart.com/eewwseq"
                className="main_menu-link"
                target="_blank"
              >
                <img src="./deviant_icon.png" alt="" />
              </a>
              <a
                href="https://www.artstation.com/eewwseq"
                className="main_menu-link"
                target="_blank"
              >
                <img src="./artstation_icon.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
