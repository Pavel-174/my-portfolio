import React from "react";

function NavBar({switchMenu}) {

    return (
      <nav>
        <div className='burger-btn' onClick={switchMenu}>
          <span/>
        </div>
        <h2 className='nav__header'>Eng</h2>
      </nav>
    );
  }
  
  export default NavBar;