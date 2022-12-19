import React from "react";
import "./About.css";

function About() {
    return (
      <div className='about'>
        <div className="about__headers">
            <h3 className="about__header3">Про меня</h3>
            <h2 className="about__header2">Меня зовут Павел Алексеев</h2>
        </div>
        <img src="https://avatars.githubusercontent.com/u/103818677?v=4" alt="на фото Павел Алексеев"></img>
        <div className="about__texts">
            <p className="about__paragraph">
                Я frontend-разработчик. 
                Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения. 
                Меня захватывает процесс разработки и возможность создавать удобные и полезные продукты. 
                Посмотрите мои работы в разделе <a href="#portfolio">Портфолио</a>. Я открыт к предложениям на позицию frontend-разработчика, 
                где могу внести свой вклад и развиваться вместе с компанией. 
                Если у вас есть вакансия, которая соответствует моим навыкам и опыту, не стесняйтесь связаться со мной, буду рад сотрудничеству.
            </p>
            <div className="about__list-box">
            <h4 className="about__list-header">Умею:</h4>
            <ul className="about__list">
                <li className="about__list-items">Писать код на HTML, CSS и JavaScript в парадигме ООП;</li>
                <li className="about__list-items">Создавать адаптивные интерфейсы для разных устройств;</li>
                <li className="about__list-items">Разрабатывать сайты и веб-приложения наReact;</li>
            </ul>
            </div>
        </div>
        
      </div>   
    );
  }
  
  export default About;