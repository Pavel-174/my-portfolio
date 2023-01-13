import React from "react";

function Skills({skills, skills_eng, selectedLanguage}) {

    return (
      <div className='skills'>
        <div className="skills__headers">
          <h2 className="skills__header_2">{!selectedLanguage ? ("Мои навыки") : ("Skills")}</h2>
          <h3 className="skills__header_3">{!selectedLanguage ? ("Что я использую в работе") : ("Working tools")}</h3>
        </div>
        <div className="skills__box">
          {(!selectedLanguage ? (skills) : (skills_eng)).map(skill =>
            <div className="skills__content" key={skill.id}>
              <img className="skills__content-image" src={skill.image} alt={skill.alt}></img>
              <p className="skills__content-text">{skill.text}</p>
            </div>
          )}
        </div>
      </div>   
    );
  }
  
  export default Skills;