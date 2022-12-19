import React from "react";
import './Promo.css';

const Promo = () => {
    return (
        <div className="promo" id='promo'>
          <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className="promo__content">
            <h1 className="promo__header">Павел Алексеев</h1>
            <p className="promo__subtitle">Front-end developer</p>
          </div>
          <div className="promo__mouse">
            <span></span>
           </div>
        </div>
    );
};

export default Promo;