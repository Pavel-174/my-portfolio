import React from "react";
import "./Experience.css"

function Experience() {

    return (
      <div className='experience'>
        <div className="experience__headers">
          <h3 className="experience__header3">Опыт</h3>
          <h2 className="experience__header2">Чем я буду полезен</h2>
        </div>
        <div className="experience__content">
          <ul className="experience__education">
            <h4 className="experience__header4">Образование:</h4>
            <li className="experience__item">
              <h5>Курсы Яндекс.Практикум (2022-2023)</h5>
              <p  className="experience__item-text">Специальность: Web-разработчик</p>
            </li>
            <li className="experience__item">
              <h5>ЮУрГУ (2016-2021)</h5>
              <p  className="experience__item-text">Специальность: Туризм, баклавр</p>
            </li>
          </ul>
          <ul className="experience__work">
            <h4 className="experience__header4">Работа и соревнования:</h4>
            <li className="experience__item">
              <h5>Хакатон Яндекса (2021)</h5>
              <p className="experience__item-text">Учавствовал в первом хакатоне Яндекса (эксперементальный Хакатон)</p>
            </li>
          </ul>
        </div>
      </div>   
    );
  }
  
  export default Experience;