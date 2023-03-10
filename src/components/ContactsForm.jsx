import React, { useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';


function ContactsForm ({setIsSend, selectedLanguage}){
  const [isNameInputValid, setNameInputValid] = useState(false);
  const [isAboutInputValid, setAboutInputValid] = useState(false);
  const [isTextareaValid, setTextareaValid] = useState(false);
  const [nameValidationMessage, setNameValidationMessage] = useState('');
  const [aboutValidationMessage, setAboutValidationMessage] = useState('');
  const [textareaValidationMessage, setTextareaValidationMessage] = useState('');
  const [isTextareaInitial, setTextareaInitial] = useState(true);
  const [buttonSubmitState, setButtonSubmitState] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_b18e62x', 'template_xtjfbya', form.current, '-TypPntNugNMrEo2X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
    setIsSend(true);
  };

  function handleNameChange(evt) {
    checkNameValidation(evt.target);
  }

  function handleDescriptionChange(evt) {
    checkAboutValidation(evt.target);
  }

  function handleTextChange(evt) {
    checkTextValidation(evt.target);
  }


  //Валидация формы
  useEffect(()=> {
    if (isNameInputValid && isAboutInputValid && isTextareaValid && !isTextareaInitial) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [isNameInputValid, isAboutInputValid, isTextareaValid]);

  function checkNameValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setNameInputValid(false);
      setNameValidationMessage(inputElement.validationMessage);
    } else {
      setNameInputValid(true);
    }
  }

  function checkAboutValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setAboutInputValid(false);
      setAboutValidationMessage(inputElement.validationMessage);
    } else {
      setAboutInputValid(true);
    }
  }

  function checkTextValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setTextareaInitial(false);
      setTextareaValid(false);
      setTextareaValidationMessage(inputElement.validationMessage);
    } else {
      setTextareaValid(true);
    }
  }

    return(
        <form className={'popup__form'} ref={form} onSubmit={sendEmail} method="post" noValidate>
          <input 
            required 
            className={`popup__text ${!isNameInputValid ? 'popup__text_type_error' : 'popup__text_type_ok'}`}
            type="text" 
            placeholder={!selectedLanguage ? ("Имя") : ("Name")}
            name="user_name"
            minLength="2" 
            maxLength="40" 
            onChange={handleNameChange}
          >
          </input>
          <span className={`popup__text-error ${!isNameInputValid ? 'popup__text-error_active' : 'popup__text-error_inactive'}`}>{nameValidationMessage}</span>
          <input 
            required 
            className={`popup__text ${!isAboutInputValid ? 'popup__text_type_error' : 'popup__text_type_ok'}`}
            type="email"
            placeholder="E-mail" 
            name="user_email" 
            minLength="5" 
            maxLength="200" 
            onChange={handleDescriptionChange}
          >
          </input>
          <span className={`popup__text-error ${!isAboutInputValid ? 'popup__text-error_active' : 'popup__text-error_inactive'}`}>{aboutValidationMessage}</span>
          <textarea 
            className={`popup__text popup__textarea ${!isTextareaValid ? 'popup__text_type_error' : 'popup__text_type_ok'}`}
            name="message"
            type="text"
            placeholder={!selectedLanguage ? ("Текст сообщения") : ("Message text")}
            minLength="5" 
            maxLength="10000"
            required
            onChange={handleTextChange}
          />
          <span className={`popup__text-error ${!isTextareaValid ? 'popup__text-error_active' : 'popup__text-error_inactive'}`}>{textareaValidationMessage}</span>
          <button 
            className={`popup__save button-hide ${!buttonSubmitState ? 'popup__save_invalid' :'popup__save_valid'}`} 
            disabled={!buttonSubmitState ? true :''} 
            type="submit"
          >
            {!selectedLanguage ? ("Отправить") : ("Send")}
          </button>
        </form>
    )    
}

export default ContactsForm;