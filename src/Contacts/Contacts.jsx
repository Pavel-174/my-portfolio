import React from 'react';
import "./Contacts.css";

const Contacts = (props) => {   

  return (
    <div className='contacts'>
      <button onClick={props.onSendForm}>Форма обратной связи</button>
    </div>
  );
};

export default Contacts;