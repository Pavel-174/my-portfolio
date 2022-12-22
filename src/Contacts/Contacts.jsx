import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";

const Contacts = (props) => {   
    
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [isLinkInputValid, setLinkInputValid] = React.useState(true);
  const [isLinkInputInitial, setLinkInputInitial] = React.useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b18e62x', 'template_xtjfbya', form.current, '-TypPntNugNMrEo2X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//   React.useEffect(()=> {
//     if (isLinkInputValid && !isLinkInputInitial) {
//       setButtonSubmitState(true);
//     } else {
//       setButtonSubmitState(false);
//     }
//   }, [isLinkInputValid, isLinkInputInitial]);

//   function handleChange(evt) {
//     setLink(evt.target.value);
//     if (!evt.target.validity.valid) {
//     //   setLinkInputInitial(false);
//       setLinkInputValid(false);
//       setLinkValidationMessage(evt.target.validationMessage);
//     } else {
//     //   setLinkInputInitial(false);
//       setLinkInputValid(true);
//     }
//   };
    

  return (
    <div className='contacts'>
      <form ref={form} onSubmit={sendEmail}>
      <input 
            // ref={ref} 
            id="avatar" 
            name="user_name" 
            type="text" 
            required 
            placeholder="Имя" 
            minLength="2"
            className={`popup__text ${!isLinkInputValid ? 'popup__text_type_error' : 'popup__text_type_ok'}`}
            // onChange={handleChange}
            />
      <input 
            // ref={ref} 
            id="avatar" 
            name="user_email" 
            type="email" 
            required 
            placeholder="e-mail" 
            minLength="5"
            className={`popup__text ${!isLinkInputValid ? 'popup__text_type_error' : 'popup__text_type_ok'}`}
            // onChange={handleChange}
            />
        <textarea 
            className='contacts__textarea' 
            name="message" 
            placeholder="Текст сообщения" 
            required
            />
        <button
        className={`contacts__submit-btn contacts__submit_invalid ${!buttonSubmitState ? 'contacts__submit_invalid' :'contacts__submit_valid'}`} 
        disabled={buttonSubmitState ? true :''} 
        // type="submit"
        >
            {props.buttonTitle}
        </button>
      </form>
    </div>
  );
};

export default Contacts;