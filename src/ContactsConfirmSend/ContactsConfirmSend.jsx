import React from "react";

function ContactsConfirmSend({setIsSend, onClose}){

    function closeConfirmation () {
        onClose();
        setIsSend(false);
    }

    return(
      <div className="popup__form">
        <img className='popup__form_image' src="https://github.com/Pavel-174/my-portfolio/blob/master/src/images/Checkmark.png?raw=true"/>
        <p className="popup__form_message">Сооющение успешно отправлено!</p>
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