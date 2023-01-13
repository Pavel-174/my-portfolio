import React from "react";
import AboutContent from "./AboutContent";
import AboutContentEng from "./AboutContentEng";
import photo from '../images/my-photo2.jpg';

function About({abilitys, abilitys_eng, selectedLanguage}) {
    return (
      <div className='about'>
        <div className="about__headers">
            <h2 className="about__header_2">{!selectedLanguage ? ("Про меня") : ("About me")}</h2>
            <h3 className="about__header_3">{!selectedLanguage ? ("Меня зовут Павел Алексеев") : ("My name is Pavel Alekseev")}</h3>
        </div>
        <div className="about__content-box">
          <div className="about__content">
            <img className="about__image" src={photo} alt={!selectedLanguage ? ("на фото Павел Алексеев") : ("Pavel Alekseev")}></img>
            <div className="about__texts">
              {!selectedLanguage ? (<AboutContent/>) : (<AboutContentEng/>)}
              <div className="about__list-box">
                <h4 className="about__header_4">{!selectedLanguage ? ("Умею:") : ("I can:")}</h4>
                <ul className="about__list">
                  {(!selectedLanguage ? (abilitys) : (abilitys_eng)).map(ability =>
                    <li className="about__list-items" key={ability.id}>{ability.text}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>   
    );
  }
  
  export default About;