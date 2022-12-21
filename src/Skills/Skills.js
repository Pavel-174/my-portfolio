import React from "react";
import "./Skills.css"

function Skills({skills}) {

    return (
      <div className='skills'>
        <div className="skills__headers">
          <h3 className="skills__header3">Мои навыки</h3>
          <h2 className="skills__header2">Что я использую в работе</h2>
        </div>
        <div className="skills__box">
          {skills.map(skill =>
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