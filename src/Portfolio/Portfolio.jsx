import React, {useState} from "react";
import './Portfolio.css';
import Project from '../Project/Project';

function Portfolio({projects, onCardClick, title, subtitle}) {

  const initialCountItem = 6;
  const [isExpanded, setIsExpanded] = useState(false);
  const activeItems = isExpanded ? projects : projects.slice(0, initialCountItem);

    return (
      <div className='portfolio'>
        <div className="portfolio__headers">
            <h3 className="portfolio__header3">{title}</h3>
            <h2 className="portfolio__header2">{subtitle}</h2>
        </div>
        <ul className="portfolio__items">
        {activeItems.map(project =>
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
        <div className="portfolio__buttons">
          {!isExpanded ? (
            <button className="portfolio__button" onClick={() => setIsExpanded(true)}>Показать больше проетов</button>
          ) : ("")}
          {isExpanded ? (
            <button className="portfolio__button" onClick={() => setIsExpanded(false)}>Показать меньше проетов</button>
          ) : ("")}
        </div>
      </div>   
    );
  }
  
  export default Portfolio;