import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#header" className="navbar__logo-container">
          <img
            src="/assets/images/JT-logo.png"
            width={50}
            height={50}
            alt="Jonathan Tellkampf Logo"
            className="navbar__logo"
          />
        </a>

        <div
          className={`navbar__nav-container ${
            isActive && isSmallScreen ? "is-active" : ""
          }`}
        >
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <a href="#about">About Me</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#skills">Skills</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#work">Work</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {isSmallScreen && (
          <div
            className={`hamburger ${isActive ? "is-active" : ""}`}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
