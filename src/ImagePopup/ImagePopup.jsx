import React from "react";
import "./ImagePopup.css";

function ImagePopup(props){
    return(
    <div className={`popup popup_type_image ${props.project ? 'popup_opened' : ''}`}>
        <div className="popup__image-box">
            <img className="popup__image" src={props.project ? props.project.src : ''} alt={props.project ? props.project.title : ''}></img>
            <p className="popup__caption">{props.project ? props.project.title : ''}</p>
            <p className="popup__caption">{props.project ? props.project.text : ''}</p>
            <button className="popup__close button-image-close" type="button" aria-label="кнопка закрытия" onClick={props.onClose}></button>
        </div>      
    </div>
    )
}

export default ImagePopup;