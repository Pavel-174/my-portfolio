import React from "react";

function NavBar({switchMenu, showEng, selectedLanguage}) {

    return (
      <nav className="navbar">
        <div className='navbar__btn' onClick={switchMenu}>
          <span/>
        </div>
        <span className='nav__language-button' onClick={showEng}>{!selectedLanguage ? ("Eng") : ("Ru")}</span>
      </nav>
    );
  }
  
  export default NavBar;