 // фото для раздела Skills
import html5 from '../images/html5.svg';
import css3 from '../images/css3.svg';
import js from '../images/JS.svg';
import react from '../images/React.svg';
import redux from  '../images/redux.png';
import node from  '../images/Node.js.svg';
import express from  '../images/Expressjs.png';
import mongo from  '../images/Mongo.db.svg';

// фото для раздела Projects
import mesto from '../images/mesto.png';
import portfolio from '../images/my-portfolio.png';
import mesto_auth from '../images/mesto-auth.png';
import landing from '../images/landing-praktik.png';
import travel from '../images/russian-travel.png';
import learn from '../images/how-to-learn.png';
import norman from '../images/dr-norman.png';
 
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
      id: '1',
      title: 'Хакатон Яндекса (2022)',
      text: 'Участвовал в совместном хакатоне студентов курсов «Дизайнер интерфейсов» и «Веб-разработчик» по разработке лендинга для HR-команды Практикума'
    },
    {
      id: '2',
      title: 'Freelance (2022-настоящее время)',
      text: 'Разработка сайтов и веб-приложений. Хочу перейти с фриланса в компанию.'
    }
  ]
  
  //данные для раздела Skills

export const skills = [
    {
      id: '1',
      image: html5,
      alt:"логотип html5",
      text: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта'
    },
    {
      id: '2',
      image: css3,
      alt:"логотип css3",
      text: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'
    },
    {
      id: '3',
      image: js,
      alt:"логотип JavaScript",
      text: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'
    },
    {
      id: '4',
      image: react,
      alt:"логотип React",
      text: 'Эотот фрэймворк позволяет создавать web-приложения. Он помогает создать максимально интерактивный продукт именно под ваши цели'
    },
    {
      id: '5',
      image: redux,
      alt:"логотип Redux",
      text: 'Эта библиотека предназначенна для управления состоянием приложения. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст'
    },
    {
      id: '6',
      image: node,
      alt:"логотип Node.js",
      text: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит'
    },
    {
      id: '7',
      image: express,
      alt:"логотип Express",
      text: 'Этот фрэймворк помогает ускорить разработку бэкэнда вашего продукта.'
    },
    {
      id: '8',
      image: mongo,
      alt:"логотип Mongo.db",
      text: 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения'
    },
  ]

  //данные для раздела Projects

export const projects = [
    {
      id: '1', 
      src: portfolio,
      title: 'Portfolio', text: 'Проект-портфолио.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {
      id: '2',
      src: mesto_auth,
      site: 'https://pavel-174.github.io/react-mesto-auth/',
      git: 'https://github.com/Pavel-174/react-mesto-auth',
      title: 'Mesto Auth',
      text: 'Учебный проект Mesto на реакте с регистрацией и авторизацией'
    },
    {
      id: '3',
      src: landing,
      site: 'https://pavel-174.github.io/landing-yandex-praktikum/',
      git: 'https://github.com/Pavel-174/landing-yandex-praktikum',
      title: 'Landing for Yandex.practicum',
      text: 'Конкурсный проект для хакатона Яндекс.Практикума.'
    },
    {
      id: '4',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto-react/',
      git: 'https://github.com/Pavel-174/mesto-react',
      title: 'Mesto React',
      text: 'Учебный проект Mesto на реакте'
    },
    {
      id: '5',
      src: travel,
      site: 'https://pavel-174.github.io/russian-travel/',
      git: 'https://github.com/Pavel-174/russian-travel',
      title: 'Russian travel',
      text: 'Проект о путишествия по России.'
    },
    {
      id: '6',
      src: learn,
      site: 'https://pavel-174.github.io/how-to-learn/',
      git: 'https://github.com/Pavel-174/how-to-learn',
      title: 'How to learn',
      text: 'Проект о том как научиться учиться.'
    },
    {
      id: '7',
      src: norman,
      site: 'https://pavel-174.github.io/norman-borlaug/',
      git: 'https://github.com/Pavel-174/norman-borlaug',
      title: 'Dr. Norman Borlaug',
      text: 'Самая первая верстка с Free Code Camp'
    },
    {
      id: '8',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto/',
      git: 'https://github.com/Pavel-174/mesto',
      title: 'Mesto',
      text: 'Учебный проект Mesto'
    },
  ]