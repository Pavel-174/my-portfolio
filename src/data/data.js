 // фото для раздела Skills
import html5 from '../images/html5.svg';
import css3 from '../images/css3.svg';
import js from '../images/JS.svg';
import react from '../images/React.svg';
import redux from  '../images/redux.png';
import node from  '../images/Node.js.svg';
import express from  '../images/Expressjs.png';
import mongo from  '../images/Mongo.db.svg';
import typescript from '../images/Typescript.svg'

// фото для раздела Projects
import mesto from '../images/mesto.png';
import portfolio from '../images/my-portfolio.png';
import mesto_auth from '../images/mesto-auth.png';
import landing from '../images/landing-praktik.png';
import travel from '../images/russian-travel.png';
import learn from '../images/how-to-learn.png';
import norman from '../images/dr-norman.png';
import todo from '../images/to-do-list.png';
import chess from '../images/chess.png';
import react_mesto_api_full from '../images/react-mesto-api-full.png';
 
// данные для бургер-меню
export const items = [
    {id: '1', value:'Главная', href:'promo'}, 
    {id: '2', value:'Про меня', href:'about'},
    {id: '3', value:'Опыт', href:'experience'},
    {id: '4', value:'Навыки', href:'skills'},
    {id: '5', value:'Портфолио', href:'portfolio'},
    {id: '6', value:'Контакты', href:'contacts'}
  ]

// данные для раздела About
// первый текстовый блок раздела about хранится в компонентах AboutContent и AboutContentEng
export const abilitys = [
    {
      id: '1',
      text: 'Писать код на HTML, CSS и JavaScript в парадигме ООП;'
    },
    {
      id: '2',
      text: 'Создавать адаптивные интерфейсы для разных устройств;'
    },
    {
      id: '3',
      text: 'Разрабатывать сайты и веб-приложения на React;'
    },
    {
      id: '4',
      text: 'Писать простой back-end на Node.js;'
    },
  ]

// данные для раздела Experience колонки Образование
export const educations = [
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

export const works = [
    {
      id: '2',
      title: 'Freelance (2022-настоящее время)',
      text: 'Разработка сайтов и веб-приложений. Хочу перейти с фриланса в компанию.'
    },
    {
      id: '1',
      title: 'Хакатон Яндекса (2022)',
      text: 'Участвовал в совместном хакатоне студентов курсов «Дизайнер интерфейсов» и «Веб-разработчик» по разработке лендинга для HR-команды Практикума'
    }
  ]
  
  //данные для раздела Skills

  export const skills = [    
    <div className="skills__content" key={1}>
      <img className="skills__content-image" src={html5} alt="логотип html5"></img>
      <p className="skills__content-text">Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.</p>
    </div>,
    
    <div className="skills__content" key={2}>
      <img className="skills__content-image" src={css3} alt="логотип css3"></img>
      <p className="skills__content-text">Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
    </div>,
    
    <div className="skills__content" key={3}>
      <img className="skills__content-image" src={js} alt="логотип JavaScript"></img>
      <p className="skills__content-text">Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.</p>
    </div>,
    
    <div className="skills__content" key={4}>
      <img className="skills__content-image" src={react} alt="логотип React"></img>
      <p className="skills__content-text">Эотот фрэймворк позволяет создавать web-приложения. Он помогает создать максимально интерактивный продукт именно под ваши цели</p>
    </div>,
    
    <div className="skills__content" key={5}>
      <img className="skills__content-image" src={redux} alt="логотип Redux"></img>
      <p className="skills__content-text">Эта библиотека предназначенна для управления состоянием приложения. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст</p>
    </div>,
    
    <div className="skills__content" key={6}>
      <img className="skills__content-image" src={node} alt="логотип Node.js"></img>
      <p className="skills__content-text">Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.</p>
    </div>,
    
    <div className="skills__content" key={7}>
      <img className="skills__content-image" src={express} alt="логотип Express"></img>
      <p className="skills__content-text">Этот фрэймворк помогает ускорить разработку бэкэнда вашего продукта.</p>
    </div>,
    
    <div className="skills__content" key={8}>
      <img className="skills__content-image" src={mongo} alt="логотип Mongo.db"></img>
      <p className="skills__content-text">Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения</p>
    </div>,
    
    <div className="skills__content" key={9}>
      <img className="skills__content-image" src={typescript} alt="логотип TypeScript"></img>
      <p className="skills__content-text">Это язык програмирования расширяющий возможности JavaScript. Главная особенность языка - типизация данных. Благодаря ему можно избежать многих ошибок в коде.</p>
    </div>,
  ];
    
  //данные для раздела Projects

  export const projects = [
    {
      id: '10', 
      src: react_mesto_api_full,
      title: 'React-mesto-api-full', text: 'Проект место с бэкэндом и фронтэндом.',
      site: 'https://mesto-alekseev.nomoredomainsclub.ru/',
      git: 'https://github.com/Pavel-174/react-mesto-api-full'
    },
    {
      id: '10', 
      src: chess,
      title: 'Chess', text: 'Второй проект написанный на TypeScript.',
      site: 'https://pavel-174.github.io/chess/',
      git: 'https://github.com/Pavel-174/chess'
    },
    {
      id: '9', 
      src: todo,
      title: 'To-do-list', text: 'Первый проект написанный на TypeScript.',
      site: 'https://pavel-174.github.io/to-do-list/',
      git: 'https://github.com/Pavel-174/to-do-list'
    },
    {
      id: '8', 
      src: portfolio,
      title: 'Portfolio', text: 'Проект-портфолио.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {
      id: '7',
      src: mesto_auth,
      site: 'https://pavel-174.github.io/react-mesto-auth/',
      git: 'https://github.com/Pavel-174/react-mesto-auth',
      title: 'Mesto Auth',
      text: 'Учебный проект Mesto на реакте с регистрацией и авторизацией'
    },
    {
      id: '6',
      src: landing,
      site: 'https://pavel-174.github.io/landing-yandex-praktikum/',
      git: 'https://github.com/Pavel-174/landing-yandex-praktikum',
      title: 'Landing for Yandex.practicum',
      text: 'Конкурсный проект для хакатона Яндекс.Практикума.'
    },
    {
      id: '5',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto-react/',
      git: 'https://github.com/Pavel-174/mesto-react',
      title: 'Mesto React',
      text: 'Учебный проект Mesto на реакте'
    },
    {
      id: '4',
      src: travel,
      site: 'https://pavel-174.github.io/russian-travel/',
      git: 'https://github.com/Pavel-174/russian-travel',
      title: 'Russian travel',
      text: 'Проект о путишествия по России.'
    },
    {
      id: '3',
      src: learn,
      site: 'https://pavel-174.github.io/how-to-learn/',
      git: 'https://github.com/Pavel-174/how-to-learn',
      title: 'How to learn',
      text: 'Проект о том как научиться учиться.'
    },
    {
      id: '2',
      src: norman,
      site: 'https://pavel-174.github.io/norman-borlaug/',
      git: 'https://github.com/Pavel-174/norman-borlaug',
      title: 'Dr. Norman Borlaug',
      text: 'Самая первая верстка с Free Code Camp'
    },
    {
      id: '1',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto/',
      git: 'https://github.com/Pavel-174/mesto',
      title: 'Mesto',
      text: 'Учебный проект Mesto'
    },
  ]