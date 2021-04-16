import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const MessageForm = ({ message, handleClickSaveMessage, handleFieldChange }) => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const history = useHistory();

    return (
        <section className="section-content">
            <div>
                <input 
                    type="text" 
                    id="chat" 
                    onChange={handleFieldChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Enter chat here..." value={message.chat} />
                <input type="hidden" id="userId" value={currentUser} />
            </div>
            <button type="button"
                className="btn"
                onClick={handleClickSaveMessage}>
                Add Message
            </button>
        </section>
    )
}