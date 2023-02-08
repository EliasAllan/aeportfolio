import React from "react";
import gitHubLogo from "../github-mark.png";

function Footer() {
  return (
    <section id="footer-icons">
      <img
        className="footer-icon"
        src={gitHubLogo}
        alt="github-logo"
        width="40px"
        height="40px"
      />
    </section>
  );
}

export default Footer;
