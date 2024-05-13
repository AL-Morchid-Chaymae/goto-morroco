import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.png";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+212654354578</p>
          <p>chaymaetravels@gmail.com</p>
          <a href="https://www.facebook.com/Chaymae.AlMorchid.Jamal?mibextid=LQQJ4d">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/chaymae-al-morchid-2a0128163/?originalSubdomain=ma">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/AL-Morchid-Chaymae">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Chaymae <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
