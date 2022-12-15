import React from "react";
import "./Skills.css"

function Skills() {

    return (
      <div className='skils'>
        <div className="skills__headers">
          <h3 className="skills__header3">Мои навыки</h3>
          <h2 className="skills__header2">Что я использую в работе</h2>
        </div>
        <div className="skills__box">
          <div className="skills__content">
            <img src="" alt="логотип html5"></img>
            <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</p>
          </div>
        </div>
      </div>   
    );
  }
  
  export default Skills;
  