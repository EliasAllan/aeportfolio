import React from "react";
import gitHubLogo from "../assets/github-mark.png";
import linkedInLogo from "../assets/linkedlogo.png";
import facebookLogo from "../assets/facebooklogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section id="footer-icons">
      <Link to="https://github.com/EliasAllan" href="true">
      <img
        className="footer-icon"
        src={gitHubLogo}
        alt="github-logo"
        width="40px"
        height="40px"
      />
      </Link>
      <Link to="https://www.linkedin.com/in/allan-elias-2a8a08186/" href="true">
      <img
        className="footer-icon"
        src={linkedInLogo}
        alt="linkedin-logo"
        width="40px"
        height="40px"
      />
      </Link>
      <Link to="https://www.facebook.com/allan.elias.9406" href="true">
      <img
        className="footer-icon"
        src={facebookLogo}
        alt="facebook-logo"
        width="40px"
        height="40px"
      />
      </Link>
    </section>
  );
}

export default Footer;
