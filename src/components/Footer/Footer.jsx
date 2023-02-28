import React from "react";
import "./Footer.css";

const Footer = ({ phraseRamdom, changeShadow, changeColor }) => {
  return (
    <>
      <div className="global__container" style={changeShadow}>
        <p className="footer__container">{phraseRamdom.author}</p>
        <p>
          <a
            href="https://juanitho007.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={changeColor}
          >
            Visita mis otros proyectos
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
