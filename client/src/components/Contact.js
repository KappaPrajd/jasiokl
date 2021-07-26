import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Contact.css";

const Contact = () => {
  const emailRef = useRef();

  useEffect(() => {
    const checkWidth = () => {
      window.innerWidth <= 900
        ? (emailRef.current.innerHTML = "Email")
        : (emailRef.current.innerHTML = "john.doe@mail.com");
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      <div className="main contact">
        <div className="contact-center">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h4>Facebook</h4>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h4>Instagram</h4>
          </a>
          <a href="mailto:john.doe@mail.com" className="contact-item">
            <h4 ref={emailRef}>Email</h4>
          </a>
          <h4 className="contact-item">123 456 789</h4>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
