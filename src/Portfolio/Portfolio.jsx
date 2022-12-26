import React from "react";
import './Portfolio.css';
import Project from '../Project/Project';

function Portfolio({projects, onCardClick, title, subtitle}) {
    return (
      <div className='portfolio'>
        <div className="portfolio__headers">
            <h3 className="portfolio__header3">{title}</h3>
            <h2 className="portfolio__header2">{subtitle}</h2>
        </div>
        <ul className="portfolio__items">
        {projects.map(project =>
          <Project
            key={project.id}
            project={project}
            src={project.src}
            title={project.title}
            text={project.text}
            site={project.site}
            git={project.git}
            onCardClick={onCardClick}
          />
        )}
        </ul>
      </div>   
    );
  }
  
  export default Portfolio;