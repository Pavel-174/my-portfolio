import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import Menu from './Menu';
import Promo from './Promo';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ImagePopup from './ImagePopup';
import Contacts from './Contacts';
import PopupContacts from './PopupContacts';
import Footer from './Footer';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const [isPopupContactsOpened, setIsPopupContactsOpened] = useState(false)

  function closeAll() {
    setMenuActive(false);
    setSelectedCard(null);
    setIsPopupContactsOpened(false);
  }

  useEffect(() => {
    if (menuActive || selectedCard || isPopupContactsOpened) {
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
  }, [menuActive, selectedCard, isPopupContactsOpened]);

  function handleCardClick(project) {
    setSelectedCard(project);
  }

  function handlePopupContactsClick() {
    setIsPopupContactsOpened(true);
  }

  function switchMenu () {
    setMenuActive(!menuActive);
  }


 // данные для бургер-меню

  const items = [
    {id: '1', value:'Главная', href:'promo'}, 
    {id: '2', value:'Про меня', href:'about'},
    {id: '3', value:'Опыт', href:'experience'},
    {id: '4', value:'Навыки', href:'skills'},
    {id: '5', value:'Портфолио', href:'portfolio'},
    {id: '6', value:'Контакты', href:'contacts'}
  ]

  // данные для раздела Experience колонки Образование

  const educations = [
    { 
      id: '3',
      title: 'Курсы Яндекс.Практикум (2022-2023)',
      text: 'Специальность: Web-разработчик'
    },
    {
      id: '2',
      title: 'Курс Free Code Camp (2022)',
      text: 'Responsive Web Design Certification. Начал изучать html и css и сделал первую проектную работу.'
    },
    { 
      id: '1',
      title: 'ЮУрГУ (2016-2021)',
      text: 'Специальность: Туризм, бакалавр'
    },
  ]

  // данные для раздела Experience колонки Работа и соревнования

  const works = [
    {
      id: '1',
      title: 'Хакатон Яндекса (2022)',
      text: 'Участвовал в совместном хакатоне студентов курсов «Дизайнер интерфейсов» и «Веб-разработчик» по разработке лендинга для HR-команды Практикума'
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
      text: 'Эотот фрэймворк позволяет создавать web-приложения. Он помогает создать максимально интерактивный продукт именно под ваши цели'
    },
    {
      id: '5',
      image: 'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/redux.png?raw=true',
      alt:"логотип Redux",
      text: 'Эта библиотека предназначенна для управления состоянием приложения. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст'
    },
    {
      id: '6',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/b3012064a264f01c469ab9a59da78cbb9db87866/src/images/Node.js.svg',
      alt:"логотип Node.js",
      text: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит'
    },
    {
      id: '7',
      image: 'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/Expressjs.png?raw=true',
      alt:"логотип Express",
      text: 'Этот фрэймворк помогает ускорить разработку бэкэнда вашего продукта.'
    },
    {
      id: '8',
      image: 'https://raw.githubusercontent.com/Pavel-174/my-portfolio/5a946e32e2eb0926f2b6a3fb39c4c4ccdedc7652/src/images/Mongo.db.svg',
      alt:"логотип Mongo.db",
      text: 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения'
    },
  ]

  const projects = [
    {
      id: '1', 
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/my-portfolio.png?raw=true',
      title: 'Portfolio', text: 'Проект-портфолио.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {
      id: '2',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/mesto-auth.png?raw=true',
      site: 'https://pavel-174.github.io/react-mesto-auth/',
      git: 'https://github.com/Pavel-174/react-mesto-auth',
      title: 'Mesto Auth',
      text: 'Учебный проект Mesto на реакте с регистрацией и авторизацией'
    },
    {
      id: '3',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/landing-praktik.png?raw=true',
      site: 'https://pavel-174.github.io/landing-yandex-praktikum/',
      git: 'https://github.com/Pavel-174/landing-yandex-praktikum',
      title: 'Landing for Yandex.practicum',
      text: 'Конкурсный проект для хакатона Яндекс.Практикума.'
    },
    {
      id: '4',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/mesto.png?raw=true',
      site: 'https://pavel-174.github.io/mesto-react/',
      git: 'https://github.com/Pavel-174/mesto-react',
      title: 'Mesto React',
      text: 'Учебный проект Mesto на реакте'
    },
    {
      id: '5',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/russian-travel.png?raw=true',
      site: 'https://pavel-174.github.io/russian-travel/',
      git: 'https://github.com/Pavel-174/russian-travel',
      title: 'Russian travel',
      text: 'Проект о путишествия по России.'
    },
    {
      id: '6',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/how-to-learn.png?raw=true',
      site: 'https://pavel-174.github.io/how-to-learn/',
      git: 'https://github.com/Pavel-174/how-to-learn',
      title: 'How to learn',
      text: 'Проект о том как научиться учиться.'
    },
    {
      id: '7',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/dr-norman.png?raw=true',
      site: 'https://pavel-174.github.io/norman-borlaug/',
      git: 'https://github.com/Pavel-174/norman-borlaug',
      title: 'Dr. Norman Borlaug',
      text: 'Самая первая верстка с Free Code Camp'
    },
    {
      id: '8',
      src:'https://github.com/Pavel-174/my-portfolio/blob/master/src/images/mesto.png?raw=true',
      site: 'https://pavel-174.github.io/mesto/',
      git: 'https://github.com/Pavel-174/mesto',
      title: 'Mesto',
      text: 'Учебный проект Mesto'
    },
  ]
  
  return (
    <div className='page'>
      <BrowserRouter>
      <NavBar switchMenu={switchMenu}/>
      <main>
        <Promo id="promo" title="Павел Алексеев" subtitle="Front-end developer"/>
        <About id='about' title="Про меня" subtitle="Меня зовут Павел Алексеев"/>
        <Experience id='experience' educations={educations} works={works} title="Опыт" subtitle="Чем я буду полезен"/>
        <Skills id='skills' skills={skills} title="Мои навыки" subtitle="Что я использую в работе"/>
        <Portfolio id='portfolio' projects={projects} onCardClick={handleCardClick} title="Портфолио" subtitle="Мои работы"/>
        <Contacts id='contacts' onSendForm={handlePopupContactsClick} title="Контакты" subtitle="Свяжитесь со мной"/>
      </main>
      <Footer items={items}/>
      <Menu active={menuActive} setActive={setMenuActive} header={"Карта сайта"} items={items}/>
      <ImagePopup 
        project={selectedCard}
        onClose={closeAll}
       />
      <PopupContacts 
      onClose={closeAll}
      isOpen={isPopupContactsOpened}
      />
      </BrowserRouter>
    </div>
  );
}

export default App;