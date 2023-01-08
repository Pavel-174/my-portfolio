import React, {useState} from "react";
import './Portfolio.css';
import Project from '../Project/Project';
import { Link, animateScroll as scroll } from "react-scroll";


function Portfolio({projects, onCardClick, title, subtitle, id}) {

  const initialCountItem = 3;
  const [isExpanded, setIsExpanded] = useState(false);
  const [fade, setFade] = useState(true);
  const activeItems = isExpanded ? projects : projects.slice(0, initialCountItem);

  async function showLess () {
    setFade(false);
    setTimeout(function() {setIsExpanded(false)}, 1000);
  }

  function showMore () {
    setFade(true);
    setIsExpanded(true);
  }

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
                fade={fade}
              />
            )}
        </ul>
        <div className="portfolio__buttons">
          {!isExpanded ? (
            <button className="portfolio__button" onClick={showMore}>Показать больше проетов</button>
          ) : ("")}
          {isExpanded ? (
             <Link
             smooth={true}
             offset={-30}
             duration={400}
             to={id}
             >
              <button className="portfolio__button" onClick={showLess}>Показать меньше проетов</button>
            </Link>
          ) : ("")}
        </div>
      </div>   
    );
  }
  
  export default Portfolio;