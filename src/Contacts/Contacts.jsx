import React from 'react';
import "./Contacts.css";

const Contacts = (props) => {   

  return (
    <div className='contacts'>
      <div className="contacts__headers">
        <h3 className="contacts__header3">Контакты</h3>
        <h2 className="contacts__header2">Свяжитесь со мной</h2>
      </div>
      <div className='contacts__content'>
      <img className='contacts__photo' src="https://avatars.githubusercontent.com/u/103818677?v=4" alt="на фото Павел Алексеев"></img>
        <div className='contacts__info-box'>
          <h4 className="contacts__header4">Любым удобным вам способом:</h4>
          <div className='contacts__link-box'>
            <a href="https://github.com/Pavel-174"><img className='contacts__image-link' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1200px-Github-desktop-logo-symbol.svg.png"></img></a>
            <a href="https://www.linkedin.com/in/павел-алексеев/"><img className='contacts__image-link' src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/06_linkedin-1024.png"></img></a>
            <a href="https://t.me/alekseevps93/"><img className='contacts__image-link' src="https://static.insales-cdn.com/files/1/2057/19826697/original/istockphoto-1145772045-170x170.jpg"></img></a>
          </div>
          <button className='contacts__button' onClick={props.onSendForm}>Форма обратной связи</button>
        </div>
        <iframe className='contacts__frame' src="https://yandex.ru/map-widget/v1/?um=constructor%3A7eab4a1b44118a193c4a8ac721bdcde91571a5bd4c4336b1d5af0b7e57475015&amp;source=constructor" width="320" height="320" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Contacts;