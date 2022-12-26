import React from "react";

function Project({onCardClick, project, id, src, title, site, git}) {
  
    function handleClick() {
      onCardClick(project);
    }

    return(
      <li className="portfolio__item" key={id} onClick={handleClick}>
        <img className="portfolio__img" src={src} alt={title}></img>
        <div className="portfolio__links">
          <h5>{title}</h5>
          <a className="portfolio__link" href={site}><img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/ebfda2bae11af2cfdc4f3d93360cf65cc0121304/src/images/globe.svg"></img></a>
          <a className="portfolio__link" href={git}><img src="https://github.com/Pavel-174/my-portfolio/blob/master/src/images/github.png?raw=true"></img></a>
        </div>
      </li>
    )
}

export default Project;