import React from 'react';
import photo from '../images/my-photo.jpg';
import git from '../images/Github2.png';
import linkedin from '../images/LinkedIn.png';
import telegram from '../images/Telegram.jpg';

const Contacts = ({onSendForm, title, subtitle}) => {   

  return (
    <div className='contacts'>
      <div className="contacts__headers">
        <h3 className="contacts__header_3">{title}</h3>
        <h2 className="contacts__header_2">{subtitle}</h2>
      </div>
      <div className='contacts__content'>
        <img className='contacts__photo' src={photo} alt="на фото Павел Алексеев"></img>
        <div className='contacts__info-box'>
          <h4 className="contacts__header_4">Любым удобным вам способом:</h4>
          <div className='contacts__link-box'>
            <a href="https://github.com/Pavel-174"><img className='contacts__image-link' src={git}></img></a>
            <a href="https://www.linkedin.com/in/павел-алексеев/"><img className='contacts__image-link' src={linkedin}></img></a>
            <a href="https://t.me/alekseevps93/"><img className='contacts__image-link' src={telegram}></img></a>
          </div>
          <button className='contacts__button' onClick={onSendForm}>Форма обратной<br/> связи</button>
        </div>
        <iframe className='contacts__frame' src="https://yandex.ru/map-widget/v1/?um=constructor%3A7eab4a1b44118a193c4a8ac721bdcde91571a5bd4c4336b1d5af0b7e57475015&amp;source=constructor" width="320" height="320" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Contacts;