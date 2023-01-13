import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = ({items, items_eng, selectedLanguage}) => {   

  return (
    <footer className='footer'>
      <ul className="footer__list">
                    {(!selectedLanguage ? (items) : (items_eng)).map(item =>
                        <li className="footer__list-item" key={item.id}>
                          <Link className="footer__list-link"
                          smooth={true}
                          offset={-30}
                          duration={800}
                          to={item.href}
                          >
                            {item.value}
                          </Link>
                        </li>
                    )}
                </ul>
      <p className="footer__text">© 2022 Pavel Alekseev</p>
    </footer>
  );
};

export default Footer;