import { Cursor, useTypewriter } from "react-simple-typewriter";

const Header = () => {
  const [text, count] = useTypewriter({
    words: ["Full Stack Web Developer", "Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <header id="header" className="header">
      <div className="header__image">
        <div className="header__title ">
          <h5>Jonathan Tellkampf</h5>
          <h1>
            {text} <Cursor cursorColor="#3195ff" />
          </h1>
          <h2>I create beautiful and functional websites for the web.</h2>
          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
