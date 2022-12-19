import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Menu.css';

const Menu = ({header, items, active, setActive}) => {

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul className="menu__list">
                    {items.map(item =>
                        <li className="menu__list-item" key={item.id}>
                          <Link className="menu__list-link"
                          smooth={true}
                          offset={-30}
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