import React from "react";
import Header from "./Header";
import "./css/Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="main contact">
        <div className="contact-center">
          <a
            href="https://www.facebook.com/jasiokl"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h4>Facebook</h4>
          </a>
          <a
            href="https://www.instagram.com/jasiokl_photo/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h4>Instagram</h4>
          </a>
          <a href="mailto:jan.kluczkiewicz@gmail.com" className="contact-item">
            <h4>jan.kluczkiewicz@gmail.com</h4>
          </a>
          <h4 className="contact-item">675 589 478</h4>
        </div>

        <div className="footer">Jan Kluczkiewicz</div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
