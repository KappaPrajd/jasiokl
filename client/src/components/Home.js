import React from "react";
import Header from "./Header";
import "./css/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <div className="home-content">
          <div className="left-panel">
            <div className="image-container"></div>
            <div className="image-container"></div>
            <div className="image-container"></div>
          </div>
          <div className="right-panel">
            <div className="portrait-container"></div>
          </div>
        </div>
        <div className="footer">
          <h3>Jan Kluczkiewicz</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
