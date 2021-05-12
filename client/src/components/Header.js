import React, { useState } from "react";
import "./css/Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`nav ${isActive ? "nav-active" : ""}`}>
      <div className="nav-left">
        <div
          className={`hamburger ${isActive ? "hamburger-active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
      <div className="nav-right">
        <h3>FB</h3>
        <h3>IG</h3>
      </div>
      <div className={`nav-items ${isActive ? "nav-items-active" : ""}`}>
        <h2 className="nav-item">O mnie</h2>
        <h2 className="nav-item">Projekty</h2>
        <h2 className="nav-item">Kontakt</h2>
      </div>
    </div>
  );
};

export default Header;
