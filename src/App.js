import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import About from './About/About';
import './App.css';
import Menu from './Menu/Menu';
import Promo from './Promo/Promo';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import ImagePopup from './ImagePopup/ImagePopup';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function closeAll() {
    setMenuActive(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    if (menuActive || selectedCard) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAll();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [menuActive]);

  function handleCardClick(project) {
    setSelectedCard(project);
  }

  // данные для бургер-меню

  const items = [
    {id: '1', value:'Главная', href:'promo'}, 
    {id: '2', value:'Про меня', href:'about'},
    {id: '3', value:'Опыт', href:'experience'},
    {id: '4', value:'Навыки', href:'skills'},
    {id: '5', value:'Портфолио', href:'portfolio'}
  ]

  // данные для раздела Experience колонки Образование

  const educations = [
    { 
      id: '1',
      title: 'Курсы Яндекс.Практикум (2022-2023)',
      text: 'Специальность: Web-разработчик'
    },
    { 
      id: '2',
      title: 'ЮУрГУ (2016-2021)',
      text: 'Специальность: Туризм, баклавр'
    },
  ]

  // данные для раздела Experience колонки Работа и соревнования

  const works = [
    {
      id: '1',
      title: 'Хакатон Яндекса (2022)',
      text: 'Учавствовал в совместном хакатоне студентов курсов «Дизайнер интерфейсов» и «Веб-разработчик» по разработке лендинга для HR-команды Практикума'
    }
  ]
  
  //данные для раздела Skills

  const skills = [
    {
      id: '1',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/html5.svg',
      alt:"логотип html5",
      text: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта'
    },
    {
      id: '2',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/css3.svg',
      alt:"логотип css3",
      text: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'
    },
    {
      id: '3',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/JS.svg',
      alt:"логотип JavaScript",
      text: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'
    },
    {
      id: '4',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/React.svg',
      alt:"логотип React",
      text: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели'
    },
    {
      id: '5',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/Node.js.svg',
      alt:"логотип Node.js",
      text: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит'
    },
    {
      id: '6',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/5a946e32e2eb0926f2b6a3fb39c4c4ccdedc7652/src/images/Mongo.db.svg',
      alt:"логотип Mongo.db",
      text: 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения'
    },
    {
      id: '7',
      image: 'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/redux.png?raw=true',
      alt:"логотип Redux",
      text: 'Эта библиотека предназначенна для управления состоянием приложения. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст'
    }
  ]

  const projects = [
    {
      id: '1', 
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/my-portfolio.png?raw=true',
      title: 'Portfolio', text: 'Проект-портфолио.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {id: '2', src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/my-portfolio.png?raw=true', title: 'Portfolio', text: 'Проект-портфолио.'},
    {id: '3', src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/my-portfolio.png?raw=true', title: 'Portfolio', text: 'Проект-портфолио.'},
  ]
  
  return (
    <div className='app'>
      <BrowserRouter>
      <nav>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
        <h2 className='nav__header'>Eng</h2>
      </nav>
      <main>
        <Promo id="promo"/>
        <About id='about'/>
        <Experience id='experience' educations={educations} works={works}/>
        <Skills id='skills' skills={skills}/>
        <Portfolio id='portfolio' projects={projects} onCardClick={handleCardClick}/>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Карта сайта"} items={items}/>
      <ImagePopup 
        project={selectedCard}
        onClose={closeAll}
       />
      </BrowserRouter>
    </div>
  );
}

export default App;