import React from "react";

const Promo = ({selectedLanguage}) => {
    return (
        <div className="promo">
          <div className="promo__waves">
            <div className="promo__wave"></div>
            <div className="promo__wave"></div>
            <div className="promo__wave"></div>
          </div>
          <div className="promo__content">
            <h1 className="promo__header">{!selectedLanguage ? ("Павел Алексеев") : ("Pavel Alekseev")}</h1>
            <p className="promo__subtitle">Front-end developer</p>
          </div>
          <div className="promo__mouse">
            <span></span>
          </div>
        </div>
    );
};

export default Promo;