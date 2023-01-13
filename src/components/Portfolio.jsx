import React, {useState} from "react";
import Project from './Project';
import { Link, animateScroll as scroll } from "react-scroll";
import { projects_eng } from "../data/data_eng";


function Portfolio({projects, onCardClick, selectedLanguage, id}) {
  // при необходимости поменять число отображаемых карточек необходимо так же 
  // изменить выражение в значении псевдоклассов у классов portfolio__item-fade и portfolio__item-fade-in
  const initialCountItem = 3;
  const [isExpanded, setIsExpanded] = useState(false);
  const [fade, setFade] = useState(true);
  const activeItems = isExpanded ? (!selectedLanguage ? (projects) : (projects_eng)) : (!selectedLanguage ? (projects) : (projects_eng)).slice(0, initialCountItem);

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
            <h2 className="portfolio__header_2">{!selectedLanguage ? ("Портфолио") : ("Portfolio")}</h2>
            <h3 className="portfolio__header_3">{!selectedLanguage ? ("Мои работы") : ("My projects")}</h3>
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
            <button className="portfolio__button" onClick={showMore}>{!selectedLanguage ? ("Показать больше проектов") : ("Show more projects")}</button>
          ) : ("")}
          {isExpanded ? (
             <Link
             smooth={true}
             offset={-30}
             duration={400}
             to={id}
             >
              <button className="portfolio__button" onClick={showLess}>{!selectedLanguage ? ("Показать меньше проектов") : ("Show less projects")}</button>
            </Link>
          ) : ("")}
        </div>
      </div>   
    );
  }
  
  export default Portfolio;