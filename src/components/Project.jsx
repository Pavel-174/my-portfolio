import React from "react";
import globe from '../images/globe.svg';
import github from '../images/github.png';

function Project({onCardClick, project, id, src, title, site, git, fade}) {
  
    function handleClick() {
      onCardClick(project);
    }

    return(
      <li className={fade ? `portfolio__item portfolio__item-fade-in` : `portfolio__item portfolio__item-fade`} key={id} onClick={handleClick}>
        <img className="portfolio__img" src={src} alt={title}></img>
        <div className="portfolio__links">
          <h5 className="portfolio__header5">{title}</h5>
          <a className="portfolio__link" href={site} onClick={(e) => {e.stopPropagation();}}><img className="portfolio__icon portfolio__icon_globe" src={globe}></img></a>
          <a className="portfolio__link" href={git} onClick={(e) => {e.stopPropagation();}}><img className="portfolio__icon portfolio__icon_git" src={github}></img></a>
        </div>
      </li>
    )
}

export default Project;