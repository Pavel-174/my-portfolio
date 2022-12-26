import React from "react";
import './Promo.css';

const Promo = ({title, subtitle}) => {
    return (
        <div className="promo">
          <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className="promo__content">
            <h1 className="promo__header">{title}</h1>
            <p className="promo__subtitle">{subtitle}</p>
          </div>
          <div className="promo__mouse">
            <span></span>
           </div>
        </div>
    );
};

export default Promo;