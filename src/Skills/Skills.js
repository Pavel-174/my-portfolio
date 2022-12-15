import React from "react";
import "./Skills.css"

function Skills() {

    return (
      <div className='skills'>
        <div className="skills__headers">
          <h3 className="skills__header3">Мои навыки</h3>
          <h2 className="skills__header2">Что я использую в работе</h2>
        </div>
        <div className="skills__box">
          <div className="skills__content">
            <img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/html5.svg" alt="логотип html5"></img>
            <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</p>
          </div>
          <div className="skills__content">
            <img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/css3.svg" alt="логотип css3"></img>
            <p>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
          </div>
          <div className="skills__content">
            <img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/JS.svg" alt="логотип JavaScript"></img>
            <p>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</p>
          </div>
          <div className="skills__content">
            <img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/React.svg" alt="логотип React"></img>
            <p>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели</p>
          </div>
          <div className="skills__content">
            <img src="https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/Node.js.svg" alt="логотип Node.js"></img>
            <p>Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит</p>
          </div>
        </div>
      </div>   
    );
  }
  
  export default Skills;