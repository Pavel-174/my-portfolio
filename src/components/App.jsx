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
// импорты массивов с данными
import { items } from '../data/data';
import { abilitys } from '../data/data';
import { educations } from '../data/data';
import { works } from '../data/data';
import { skills } from '../data/data';
import { projects } from '../data/data';

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
  
  return (
    <div className='page'>
      <BrowserRouter>
      <NavBar switchMenu={switchMenu}/>
      <main>
        <Promo id="promo" title="Павел Алексеев" subtitle="Front-end developer"/>
        <About id='about' abilitys={abilitys} title="Про меня" subtitle="Меня зовут Павел Алексеев"/>
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