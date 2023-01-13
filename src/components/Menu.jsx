import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = ({header, items, items_eng, active, setActive, selectedLanguage}) => {

    return (
        <div className={active ? 'menu menu_active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu__blur"/>
            <div className="menu__content">
                <div className="menu__header">{!selectedLanguage ? ('Карта сайта') : ('Site sections')}</div>
                <ul className="menu__list">
                    {(!selectedLanguage ? (items) : (items_eng)).map(item =>
                        <li className="menu__list-item" key={item.id}>
                          <Link className="menu__list-link"
                          smooth={true}
                          offset={0}
                          duration={800}
                          to={item.href}
                          onClick={() => setActive(false)}
                          >
                            {item.value}
                          </Link>
                        </li>
                    )}
                </ul>
            </div>        
        </div>
    );
};

export default Menu;