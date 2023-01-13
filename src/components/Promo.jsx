import React from "react";

const Promo = ({title, subtitle}) => {
    return (
        <div className="promo">
          <div className="promo__waves">
            <div className="promo__wave"></div>
            <div className="promo__wave"></div>
            <div className="promo__wave"></div>
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