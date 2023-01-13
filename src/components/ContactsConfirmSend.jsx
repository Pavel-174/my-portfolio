import React from "react";

function ContactsConfirmSend({setIsSend, onClose, selectedLanguage}){

    function closeConfirmation () {
        onClose();
        setIsSend(false);
    }

    return(
      <div className="popup__form popup__form_confirmation">
        <img className='popup__form-image' src="https://github.com/Pavel-174/my-portfolio/blob/master/src/images/Checkmark.png?raw=true"/>
        <p className="popup__form-message">{!selectedLanguage ? ("Сообщение успешно отправлено!") : ("Message has been sent!")}</p>
        <button 
          className='popup__save popup__save_valid'
          onClick={closeConfirmation}
        >
          OK
        </button>
      </div>
    )    
}

export default ContactsConfirmSend;