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
import nest from '../images/nest.png';

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
export const items_eng = [
    {id: '1', value:'Main', href:'promo'}, 
    {id: '2', value:'About me', href:'about'},
    {id: '3', value:'Experience', href:'experience'},
    {id: '4', value:'Skills', href:'skills'},
    {id: '5', value:'Portfolio', href:'portfolio'},
    {id: '6', value:'Contacts', href:'contacts'}
  ]

// данные для раздела About
// первый текстовый блок раздела about хранится в компонентах AboutContent и AboutContentEng
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
      id: '4',
      title: 'TypeScript (self-education) (2023)',
      text: 'Independently studied  TypeScript and the Nest framework (backend). For training, I mainly used documentation and training videos on YouTube.'
    },
    { 
      id: '3',
      title: 'Educational course Yandex.Practicum (2022)',
      text: 'Profession: Web-developer'
    },
    {
      id: '2',
      title: 'Educational course Free Code Camp (2021)',
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
      id: '2',
      title: 'Freelance (2022-present time)',
      text: 'Website and web application development.'
    },
    {
      id: '1',
      title: 'Yandex Hackathon (2022)',
      text: 'Participated in the hackathon of students of the courses "Interface Designer" and "Web developer" to develop a landing page for the HR team of Yandex.Practicum'
    }
  ]
  
//данные для раздела Skills
export const skills_eng = [    
  <div className="skills__content" key={1}>
    <img className="skills__content-image" src={html5} alt="logo html5"></img>
    <p className="skills__content-text">HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
  </div>,
  
  <div className="skills__content" key={2}>
    <img className="skills__content-image" src={css3} alt="logo css3"></img>
    <p className="skills__content-text">CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
  </div>,
  
  <div className="skills__content" key={3}>
    <img className="skills__content-image" src={js} alt="logo JavaScript"></img>
    <p className="skills__content-text">JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.</p>
  </div>,
  
  <div className="skills__content" key={4}>
    <img className="skills__content-image" src={react} alt="logo React"></img>
    <p className="skills__content-text">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
  </div>,
  
  <div className="skills__content" key={5}>
    <img className="skills__content-image" src={redux} alt="logo Redux"></img>
    <p className="skills__content-text">Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</p>
  </div>,
  
  <div className="skills__content" key={6}>
    <img className="skills__content-image" src={node} alt="logo Node.js"></img>
    <p className="skills__content-text">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p>
  </div>,
  
  <div className="skills__content" key={7}>
    <img className="skills__content-image" src={express} alt="logo Express"></img>
    <p className="skills__content-text">Express, is a back end web application framework for building RESTful APIs with Node.js. It is designed for building web applications and APIs.</p>
  </div>,
  
  <div className="skills__content" key={8}>
    <img className="skills__content-image" src={mongo} alt="logo Mongo.db"></img>
    <p className="skills__content-text">MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
  </div>,
  
  <div className="skills__content" key={9}>
    <img className="skills__content-image" src={typescript} alt="logo TypeScript"></img>
    <p className="skills__content-text">TypeScript is a free and open source programming language. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.</p>
  </div>,

  <div className="skills__content" key={10}>
    <img className="skills__content-image" src={nest} alt="logo NestJS"></img>
    <p className="skills__content-text">A progressive Node.js framework for building efficient, reliable and scalable server-side applications.</p>
  </div>,
];

//данные для раздела Projects
export const projects_eng = [
  {
    id: '10', 
    src: react_mesto_api_full,
    title: 'React-mesto-api-full', text: 'My first fuul-stack project.',
    site: 'https://pavel-174.github.io/chess/',
    git: 'https://github.com/Pavel-174/react-mesto-api-full'
  },
  {
    id: '10', 
    src: chess,
    title: 'Chess', text: 'Second TypeScript project.',
    site: 'https://pavel-174.github.io/chess/',
    git: 'https://github.com/Pavel-174/chess'
  },
    {
      id: '9', 
      src: todo,
      title: 'To-do-list', text: 'First TypeScript project.',
      site: 'https://pavel-174.github.io/to-do-list/',
      git: 'https://github.com/Pavel-174/to-do-list'
    },
    {
      id: '8', 
      src: portfolio,
      title: 'Portfolio', text: 'Project-portfolio.',
      site: 'https://pavel-174.github.io/my-portfolio/',
      git: 'https://github.com/Pavel-174/my-portfolio'
    },
    {
      id: '7',
      src: mesto_auth,
      site: 'https://pavel-174.github.io/react-mesto-auth/',
      git: 'https://github.com/Pavel-174/react-mesto-auth',
      title: 'Mesto Auth',
      text: 'Mesto training project with registration and authorization. Written with React.js'
    },
    {
      id: '6',
      src: landing,
      site: 'https://pavel-174.github.io/landing-yandex-praktikum/',
      git: 'https://github.com/Pavel-174/landing-yandex-praktikum',
      title: 'Landing for Yandex.practicum',
      text: 'Competitive project for the Yandex.Praktikum hackathon'
    },
    {
      id: '5',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto-react/',
      git: 'https://github.com/Pavel-174/mesto-react',
      title: 'Mesto React',
      text: 'Mesto training project with React.js'
    },
    {
      id: '4',
      src: travel,
      site: 'https://pavel-174.github.io/russian-travel/',
      git: 'https://github.com/Pavel-174/russian-travel',
      title: 'Russian travel',
      text: 'Project about traveling in Russia.'
    },
    {
      id: '3',
      src: learn,
      site: 'https://pavel-174.github.io/how-to-learn/',
      git: 'https://github.com/Pavel-174/how-to-learn',
      title: 'How to learn',
      text: 'Project is about how to learn.'
    },
    {
      id: '2',
      src: norman,
      site: 'https://pavel-174.github.io/norman-borlaug/',
      git: 'https://github.com/Pavel-174/norman-borlaug',
      title: 'Dr. Norman Borlaug',
      text: 'First "Free Code Camp" project'
    },
    {
      id: '1',
      src: mesto,
      site: 'https://pavel-174.github.io/mesto/',
      git: 'https://github.com/Pavel-174/mesto',
      title: 'Mesto',
      text: 'Mesto training project with JS.'
    },
  ]