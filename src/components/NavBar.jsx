import React from "react";

function NavBar({switchMenu}) {

    return (
      <nav className="navbar">
        <div className='navbar__btn' onClick={switchMenu}>
          <span/>
        </div>
        <h2 className='nav__header_h2'>Eng</h2>
      </nav>
    );
  }
  
  export default NavBar;