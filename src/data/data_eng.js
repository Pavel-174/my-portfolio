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
export const items_eng = [
    {id: '1', value:'Main', href:'promo'}, 
    {id: '2', value:'About me', href:'about'},
    {id: '3', value:'Experience', href:'experience'},
    {id: '4', value:'Skills', href:'skills'},
    {id: '5', value:'Portfolio', href:'portfolio'},
    {id: '6', value:'Contacts', href:'contacts'}
  ]

// данные для раздела About
export const abilitys_eng = [
    {
      id: '1',
      text: 'Write code in HTML, CSS and JavaScript in the OOP paradigm'
    },
    {
      id: '2',
      text: 'Create adaptive interfaces for different devices;'
    },
    {
      id: '3',
      text: 'Develop websites and web applications with React;'
    },
    {
      id: '4',
      text: 'Write a simple back-end with Node.js;'
    },
  ]

// данные для раздела Experience колонки Образование
export const educations_eng = [
    { 
      id: '3',
      title: 'Educational course Yandex.Practicum (2022-2023)',
      text: 'Profession: Web-developer'
    },
    {
      id: '2',
      title: 'Educational course Free Code Camp (2022)',
      text: 'Responsive Web Design Certification.'
    },
    { 
      id: '1',
      title: 'SUSU (2016-2021)',
      text: "Profession: Tourism, Bachelor's degree"
    },
  ]

// данные для раздела Experience колонки Работа и соревнования
export const works_eng = [
    {
      id: '1',
      title: 'Yandex Hackathon (2022)',
      text: 'Participated in the hackathon of students of the courses "Interface Designer" and "Web developer" to develop a landing page for the HR team of Yandex.Practicum'
    }
  ]
  
//данные для раздела Skills
export const skills_eng = [
    {
      id: '1',
      image: html5,
      alt:"логотип html5",
      text: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
    },
    {
      id: '2',
      image: css3,
      alt:"логотип css3",
      text: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
      id: '3',
      image: js,
      alt:"логотип JavaScript",
      text: 'JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.'
    },
    {
      id: '4',
      image: react,
      alt:"логотип React",
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. '
    },
    {
      id: '5',
      image: redux,
      alt:"логотип Redux",
      text: 'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.'
    },
    {
      id: '6',
      image: node,
      alt:"логотип Node.js",
      text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.'
    },
    {
      id: '7',
      image: express,
      alt:"логотип Express",
      text: 'Express, is a back end web application framework for building RESTful APIs with Node.js. It is designed for building web applications and APIs.'
    },
    {
      id: '8',
      image: mongo,
      alt:"логотип Mongo.db",
      text: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. '
    },
  ]

//данные для раздела Projects
export const projects_eng = [
    {
      id: '1', 
      src: portfolio,
      title: 'Portfolio', text: 'Project-portfolio.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {
      id: '2',
      src: mesto_auth,
      site: 'https://pavel-174.github.io/react-mesto-auth/',
      git: 'https://github.com/Pavel-174/react-mesto-auth',
      title: 'Mesto Auth',
      text: 'Mesto training project with registration and authorization. Written with React.js'
    },
    {
      id: '3',
      src: landing,
      site: 'https://pavel-174.github.io/landing-yandex-praktikum/',
      git: 'https://github.com/Pavel-174/landing-yandex-praktikum',
      title: 'Landing for Yandex.practicum',
      text: 'Competitive project for the Yandex.Praktikum hackathon'
    },
    {
      id: '4',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto-react/',
      git: 'https://github.com/Pavel-174/mesto-react',
      title: 'Mesto React',
      text: 'Mesto training project with React.js'
    },
    {
      id: '5',
      src: travel,
      site: 'https://pavel-174.github.io/russian-travel/',
      git: 'https://github.com/Pavel-174/russian-travel',
      title: 'Russian travel',
      text: 'Project about traveling in Russia.'
    },
    {
      id: '6',
      src: learn,
      site: 'https://pavel-174.github.io/how-to-learn/',
      git: 'https://github.com/Pavel-174/how-to-learn',
      title: 'How to learn',
      text: 'Project is about how to learn.'
    },
    {
      id: '7',
      src: norman,
      site: 'https://pavel-174.github.io/norman-borlaug/',
      git: 'https://github.com/Pavel-174/norman-borlaug',
      title: 'Dr. Norman Borlaug',
      text: 'First "Free Code Camp" project'
    },
    {
      id: '8',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto/',
      git: 'https://github.com/Pavel-174/mesto',
      title: 'Mesto',
      text: 'Mesto training project with JS.'
    },
  ]