import { useState } from 'react';
import About from './About/About';
import './App.css';
import Menu from './Menu/Menu';
import Promo from './Promo/Promo';
import Skills from './Skills/Skills';

function App() {

  const [menuActive, setMenuActive] = useState(false);

  const items = [
    {id: '1', value:'Главная', href: '/main', icon: "anchor"}, 
    {id: '2', value:'Про меня', href: '/main/about', icon: "anchor"}, 
    {id: '3', value:'Навыки', href: '/main/skills', icon: "anchor"}
  ]
  
  return (
    <div className='app'>
      <nav>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
        <h2 className='nav__header'>Pavel Alekseev</h2>
      </nav>
      <main>
        <Promo />
        <About />
        <Skills />
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
    </div>   
  );
}

export default App;