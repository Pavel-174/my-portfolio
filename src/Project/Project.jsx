import React from "react";

function Project(props) {
  
    function handleClick() {
      props.onCardClick(props.project);
    }

    return(
      <li className="portfolio__item" key={props.id} onClick={handleClick}>
        <img className="portfolio__img" src={props.src} alt={props.title}></img>
        <div className="portfolio__link">
          <h5>{props.title}</h5>
          <a href={props.site}><img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/ebfda2bae11af2cfdc4f3d93360cf65cc0121304/src/images/globe.svg"></img></a>
          <a href={props.git}><img src="https://github.com/Pavel-174/my-portfolio/blob/master/src/images/github.png?raw=true"></img></a>
        </div>
        <p>{props.text}</p>
      </li>
    )
}

export default Project;