import React, {useState} from "react";
import './Portfolio.css';
import Project from '../Project/Project';
import { Link, animateScroll as scroll } from "react-scroll";

function Portfolio({projects, onCardClick, title, subtitle, id}) {

  const initialCountItem = 3;
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
             <Link
             smooth={true}
             offset={-30}
             duration={400}
             to={id}
             >
              <button className="portfolio__button" onClick={() => setIsExpanded(false)}>Показать меньше проетов</button>
            </Link>
          ) : ("")}
        </div>
      </div>   
    );
  }
  
  export default Portfolio;