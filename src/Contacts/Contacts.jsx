import React from 'react';
import "./Contacts.css";

const Contacts = (props) => {   

  return (
    <div className='contacts'>
      <div className="contacts__headers">
            <h3 className="contacts__header3">Контакты</h3>
            <h2 className="contacts__header2">Свяжитесь со мной</h2>
        </div>
      <button onClick={props.onSendForm}>Форма обратной связи</button>
    </div>
  );
};

export default Contacts;