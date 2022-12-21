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
          <p>{props.text}</p>
        </div>
      </li>
    )
}

export default Project;