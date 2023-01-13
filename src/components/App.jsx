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
import { about } from '../data/data';
import { abilitys } from '../data/data';
import { experience } from '../data/data';
import { educations } from '../data/data';
import { works } from '../data/data';
import { skills } from '../data/data';
import { projects } from '../data/data';
import { items } from '../data/data';
// импорты массивов с данными Eng
import { about_eng } from '../data/data_eng';
import { abilitys_eng } from '../data/data_eng';
import { experience_eng } from '../data/data_eng';
import { educations_eng } from '../data/data_eng';
import { works_eng } from '../data/data_eng';
import { skills_eng } from '../data/data_eng';
import { projects_eng } from '../data/data_eng';
import { items_eng } from '../data/data_eng';

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(false);

  const [menuActive, setMenuActive] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const [isPopupContactsOpened, setIsPopupContactsOpened] = useState(false)

  function showEng() {
    setSelectedLanguage(!selectedLanguage);
  }

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
      <NavBar switchMenu={switchMenu} selectedLanguage={selectedLanguage} showEng={showEng}/>
      <main>
        <Promo id="promo" selectedLanguage={selectedLanguage}/>
        <About id='about' abilitys={abilitys} abilitys_eng={abilitys_eng} selectedLanguage={selectedLanguage}/>
        <Experience id='experience' educations={educations} educations_eng={educations_eng} works={works} works_eng={works_eng} selectedLanguage={selectedLanguage}/>
        <Skills id='skills' skills={skills} title="Мои навыки" subtitle="Что я использую в работе"/>
        <Portfolio id='portfolio' projects={projects} onCardClick={handleCardClick} title="Портфолио" subtitle="Мои работы"/>
        <Contacts id='contacts' onSendForm={handlePopupContactsClick} title="Контакты" subtitle="Свяжитесь со мной"/>
      </main>
      <Footer items={items} items_eng={items_eng} selectedLanguage={selectedLanguage}/>
      <Menu active={menuActive} setActive={setMenuActive} items={items} items_eng={items_eng} selectedLanguage={selectedLanguage}/>
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