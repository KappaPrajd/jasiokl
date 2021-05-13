import React from "react";
import Header from "./Header";
import "./css/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <div className="home-content">
          <div className="left-panel"></div>
          <div className="right-panel">
            <img
              className="portrait"
              src="img/portrait1.png"
              alt="portrait"
            ></img>
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
