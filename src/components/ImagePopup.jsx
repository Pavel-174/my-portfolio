import React from "react";

function ImagePopup({project, onClose, selectedLanguage}){
    return(
    <div className={`popup ${project ? 'popup_opened' : ''}`} onClick={onClose}>
        <div className="popup__image-box" onClick={(e) => {e.stopPropagation();}}>
            <img className="popup__image" src={project ? project.src : ''} alt={project ? project.title : ''}></img>
            <p className="popup__caption">{project ? project.title : ''}&nbsp;
              <a className="popup__link" href={project ? project.site : ''}>{!selectedLanguage ? ("Сайт") : ("Site")}</a>&nbsp;
              <a className="popup__link" href={project ? project.git : ''}>GitHub</a>
            </p>
            <p className="popup__caption">{project ? project.text : ''}</p>
            <button className="popup__close button-image-close" type="button" aria-label="кнопка закрытия" onClick={onClose}></button>
        </div>      
    </div>
    )
}

export default ImagePopup;