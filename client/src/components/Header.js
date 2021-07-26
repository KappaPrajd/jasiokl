import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHide = () => {
    document.querySelector(".main").classList.toggle("hide");
    setIsActive(!isActive);
  };

  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav-left">
          <div
            className={`hamburger ${isActive ? "hamburger-active" : ""}`}
            onClick={() => toggleHide()}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        <div className="nav-right">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>FB</h3>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>IG</h3>
          </a>
        </div>
      </div>
      <div className={`nav-items ${isActive ? "nav-items-active" : ""}`}>
        <Link to="/about">
          <h2 className="nav-item" onClick={() => toggleHide()}>
            O mnie
          </h2>
        </Link>
        <Link to="/projects">
          <h2 className="nav-item" onClick={() => toggleHide()}>
            Projekty
          </h2>
        </Link>
        <Link to="/contact">
          <h2 className="nav-item" onClick={() => toggleHide()}>
            Kontakt
          </h2>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
