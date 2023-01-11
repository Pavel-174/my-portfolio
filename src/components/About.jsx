import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function About({title, subtitle}) {
    return (
      <div className='about'>
        <div className="about__headers">
            <h3 className="about__header3">{title}</h3>
            <h2 className="about__header2">{subtitle}</h2>
        </div>
        <img src="https://avatars.githubusercontent.com/u/103818677?v=4" alt="на фото Павел Алексеев"></img>
        <div className="about__texts">
            <p className="about__paragraph">
                Я вэб-разработчик. 
                Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения. 
                Меня захватывает процесс разработки и возможность создавать удобные и полезные продукты. 
                Посмотрите мои работы в разделе&nbsp;
                <Link 
                  smooth={true} 
                  offset={-30} 
                  duration={800} 
                  to='portfolio'
                  className="about__link"
                >
                  Портфолио
                </Link>. 
                Я открыт к предложениям на позицию фронтэнд-разработчика, 
                где могу внести свой вклад и развиваться вместе с компанией. 
                Если у вас есть вакансия, которая соответствует моим навыкам и опыту, не стесняйтесь&nbsp;
                <Link 
                  smooth={true} 
                  offset={-30} 
                  duration={800} 
                  to='contacts'
                  className="about__link"
                >
                  связаться со мной
                </Link>,
                 буду рад сотрудничеству.
            </p>
            <div className="about__list-box">
            <h4 className="about__list-header">Умею:</h4>
            <ul className="about__list">
                <li className="about__list-items">Писать код на HTML, CSS и JavaScript в парадигме ООП;</li>
                <li className="about__list-items">Создавать адаптивные интерфейсы для разных устройств;</li>
                <li className="about__list-items">Разрабатывать сайты и веб-приложения на React;</li>
                <li className="about__list-items">Писать простой back-end на Node.js;</li>
            </ul>
            </div>
        </div>
        
      </div>   
    );
  }
  
  export default About;