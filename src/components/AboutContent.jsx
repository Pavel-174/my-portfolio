import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function AboutContent() {
  return (
    <div>
      <p className="about__paragraph">
        Я вэб-разработчик. 
        Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения.
      </p>
      <p className="about__paragraph">
        Меня захватывает процесс разработки и возможность создавать удобные и полезные продукты. 
        Посмотрите мои работы в разделе&nbsp;
        <Link 
          smooth={true} 
          offset={0} 
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
            offset={0} 
            duration={800} 
            to='contacts'
            className="about__link"
          >
            связаться со мной
          </Link>,
            буду рад сотрудничеству.
        </p>
    </div>
  );
}

export default AboutContent;