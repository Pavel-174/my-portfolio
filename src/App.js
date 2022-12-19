import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import About from './About/About';
import './App.css';
import Menu from './Menu/Menu';
import Promo from './Promo/Promo';
import Experience from './Experience/Experience'
import Skills from './Skills/Skills';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const items = [
    {id: '1', value:'Главная', href: '#promo', icon: "anchor"}, 
    {id: '2', value:'Про меня', href: '#about', icon: "anchor"},
    {id: '3', value:'Опыт', href: '#experience', icon: "anchor"},
    {id: '4', value:'Навыки', href: '#skills', icon: "anchor"}
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
        <Promo />
        <About />
        <Experience />
        <Skills />
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Карта сайта"} items={items}/>
      </BrowserRouter>
    </div>
  );
}

export default App;