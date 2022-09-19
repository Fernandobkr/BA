import React from "react";
import './Popup.css'

export const Popup = props => {
    return(
        <div className="popup-box">
                <button className="close" onClick={props.handleClose}>X</button>
            {props.content}
        </div>
    )
}

export const PopupQuiz = props => {
    return(
        <div className="popup-boxQuiz">
                <button className="closeQuiz" onClick={props.handleClose}>X</button>
            {props.content}
        </div>
    )
}

export const PopupQuiz2 = props => {
    return(
        <div className="popup-boxQuiz2">
                <button className="closeQuiz2" onClick={props.handleClose}>X</button>
            {props.content}
        </div>
    )
}

export const PopupQuiz3 = props => {
    return(
        <div className="popup-boxQuiz3">
                <button className="closeQuiz3" onClick={props.handleClose}>X</button>
            {props.content}
        </div>
    )
}