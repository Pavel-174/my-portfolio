import React from "react";
import './Portfolio.css';
import Project from '../Project/Project';

function Portfolio(props) {
    return (
      <div className='portfolio'>
        <div className="portfolio__heaportfolioers">
            <h3 className="portfolio__header3">Портфолио</h3>
            <h2 className="portfolio__header2">Мои работы</h2>
        </div>
        <ul className="portfolio__items">
        {props.projects.map(project =>
          <Project
          id={project.id}
          project={project}
          src={project.src}
          title={project.title}
          text={project.text}
          onCardClick={props.onCardClick}
          />
        )}
        </ul>
      </div>   
    );
  }
  
  export default Portfolio;