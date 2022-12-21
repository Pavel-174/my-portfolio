import React from "react";
import './Portfolio.css'

function Portfolio({projects}) {
    return (
      <div className='portfolio'>
        <div className="portfolio__heaportfolioers">
            <h3 className="portfolio__header3">Портфолио</h3>
            <h2 className="portfolio__header2">Мои работы</h2>
        </div>
        <ul>
        {projects.map(project =>
          <li key={project.id}>
            <img src={project.src}></img>
            <h5>{project.title}</h5>
            <p>{project.text}</p>
          </li>
        )}
        </ul>
      </div>   
    );
  }
  
  export default Portfolio;