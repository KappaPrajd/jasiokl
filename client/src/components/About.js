import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/About.css";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main about">
        <div className="about-images">
          <div className="about-image"></div>
          <div className="about-image"></div>
        </div>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nisi fuga temporibus repellendus obcaecati tempore ab
            reiciendis modi possimus tenetur, nulla molestiae sint nam quibusdam
            quae explicabo dolorem facilis accusamus minima. Non culpa, nulla
            quaerat unde harum doloremque libero nostrum accusamus, vitae sit
            officiis voluptatem animi qui, corrupti cupiditate veritatis? Non
            culpa
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
