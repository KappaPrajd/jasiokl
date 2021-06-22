import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Link to="/">
          <h3>Jan Kluczkiewicz</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Footer;
