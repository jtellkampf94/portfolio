import { Cursor, useTypewriter } from "react-simple-typewriter";

import { PageInfoMe } from "../../typing";
import { urlFor } from "../../sanity";

interface HeaderProps {
  pageInfoMe: PageInfoMe;
}

const Header: React.FC<HeaderProps> = ({ pageInfoMe }) => {
  const [text, count] = useTypewriter({
    words: ["Full Stack Web Developer", "Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <header id="header" className="header">
      <div
        className="header__image"
        style={{
          background: `radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 1) 100%),
        url(${urlFor(pageInfoMe.backgroundImage).url()})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="header__title ">
          <h5>{pageInfoMe.name}</h5>
          <h1>
            {text} <Cursor cursorColor="#3195ff" />
          </h1>
          <h2>{pageInfoMe.about}</h2>
          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
