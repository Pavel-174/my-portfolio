import React from "react";

function Experience({educations, educations_eng, works, works_eng, selectedLanguage}) {

    return (
      <div className='experience'>
        <div className="experience__headers">
          <h3 className="experience__header_3">{!selectedLanguage ? ("Опыт") : ("Experience")}</h3>
          <h2 className="experience__header_2">{!selectedLanguage ? ("Где я работал и учился") : ("Work and courses")}</h2>
        </div>
        <div className="experience__content">
          <ul className="experience__education">
            <h4 className="experience__header4">{!selectedLanguage ? ("Образование:") : ("Educational courses:")}</h4>
            {(!selectedLanguage ? (educations) : (educations_eng)).map(education =>
              <li className="experience__item" key={education.id}>
                <h5 className="experience__header5">{education.title}</h5>
                <p  className="experience__item-text">{education.text}</p>
              </li>
            )}
          </ul>
          <ul className="experience__work">
            <h4 className="experience__header4">{!selectedLanguage ? ("Работа и соревнования:") : ("Work and competitions:")}</h4>
            {(!selectedLanguage ? (works) : (works_eng)).map(work =>
              <li className="experience__item" key={work.id}>
                <h5 className="experience__header5">{work.title}</h5>
                <p  className="experience__item-text">{work.text}</p>
              </li>
            )}
          </ul>
        </div>
      </div>   
    );
  }
  
  export default Experience;