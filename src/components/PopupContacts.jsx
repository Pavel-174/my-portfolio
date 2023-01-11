import React, {useState} from "react";
import ContactsForm from "./ContactsForm";
import ContactsConfirmSend from "./ContactsConfirmSend";


function PopupContacts({isOpen, onClose}){

  const [isSend, setIsSend] = useState(false);

    return(
      <div className={`popup popup_contacts ${isOpen ? `popup_opened`: ""}`} onClick={onClose}>
        <div className="popup__container" onClick={(e) => {e.stopPropagation();}}>
          <h2 className="popup__header">Форма обратной связи</h2>
            {!isSend ? (
              <ContactsForm setIsSend={setIsSend} />
            ) : ("")}
            {isSend ? (
              <ContactsConfirmSend setIsSend={setIsSend} onClose={onClose} />
            ) : ("")}
          <button className="popup__close button-close" type="button" aria-label="кнопка закрытия" onClick={onClose}></button>
        </div>
      </div>  
    )    
}

export default PopupContacts;