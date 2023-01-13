import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function AboutContentEng() {
  return (
    <div>
      <p className="about__paragraph">
        I am a web developer. I like to solve complex tasks: develop websites and web applications.
      </p>
      <p className="about__paragraph">
        I am fascinated by the development process and the opportunity to create convenient and useful products. Look at my works in the&nbsp;
        <Link 
          smooth={true} 
          offset={-30} 
          duration={800} 
          to='portfolio'
          className="about__link"
        >
          Portfolio
        </Link> section.
        </p>
        <p className="about__paragraph">
          I am open to suggestions for the position of a frontend developer, where I can contribute and develop together with the company.
        </p>
        <p className="about__paragraph">
        If you have a vacancy that matches my skills and experience, do not hesitate to&nbsp;
          <Link 
            smooth={true} 
            offset={-30} 
            duration={800} 
            to='contacts'
            className="about__link"
          >
            contact me
          </Link>, I will be glad to cooperate.
        </p>
    </div>
  );
}

export default AboutContentEng;