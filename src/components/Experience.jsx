import React from "react";

function Experience({educations, works, title, subtitle}) {

    return (
      <div className='experience'>
        <div className="experience__headers">
          <h3 className="experience__header3">{title}</h3>
          <h2 className="experience__header2">{subtitle}</h2>
        </div>
        <div className="experience__content">
          <ul className="experience__education">
            <h4 className="experience__header4">Образование:</h4>
            {educations.map(education =>
              <li className="experience__item" key={education.id}>
                <h5>{education.title}</h5>
                <p  className="experience__item-text">{education.text}</p>
              </li>
            )}
          </ul>
          <ul className="experience__work">
            <h4 className="experience__header4">Работа и соревнования:</h4>
            {works.map(work =>
              <li className="experience__item" key={work.id}>
                <h5>{work.title}</h5>
                <p  className="experience__item-text">{work.text}</p>
              </li>
            )}
          </ul>
        </div>
      </div>   
    );
  }
  
  export default Experience;