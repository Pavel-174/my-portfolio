import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import photo from '../images/my-photo2.jpg'

function About({title, subtitle, abilitys}) {
    return (
      <div className='about'>
        <div className="about__headers">
            <h3 className="about__header_3">{title}</h3>
            <h2 className="about__header_2">{subtitle}</h2>
        </div>
        <div className="about__content-box">
          <div className="about__content">
            <img className="about__image" src={photo} alt="на фото Павел Алексеев"></img>
            <div className="about__texts">
              <p className="about__paragraph">
                Я вэб-разработчик. 
                Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения.
              </p>
              <p className="about__paragraph">
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
              </p>
              <p className="about__paragraph">
                Я открыт к предложениям на позицию фронтэнд-разработчика, 
                где могу внести свой вклад и развиваться вместе с компанией.
              </p>
              <p className="about__paragraph">
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
                <h4 className="about__header_4">Умею:</h4>
                <ul className="about__list">
                  {abilitys.map(ability =>
                    <li className="about__list-items" key={ability.id}>{ability.text}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>   
    );
  }
  
  export default About;