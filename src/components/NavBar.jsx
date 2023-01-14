import React from "react";
import ru from '../images/Flag_of_Russia.svg.webp';
import eng from '../images/United_Kingdom.png';

function NavBar({switchMenu, showEng, selectedLanguage}) {

    return (
      <nav className="navbar">
        <div className='navbar__btn' onClick={switchMenu}>
          <span/>
        </div>
        <span className='navbar__language-button' onClick={showEng}><img className="navbar__flag" src={!selectedLanguage ? eng : ru}></img>{!selectedLanguage ? ("Eng") : ("Ru")}</span>
      </nav>
    );
  }
  
  export default NavBar;