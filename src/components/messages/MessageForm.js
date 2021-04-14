import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addMessage } from "../../modules/MessageManager";

export const MessageForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [message, setMessage] = useState({ chat: "", userId: currentUser});
    const history = useHistory();

    const handleFieldChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()

        addMessage(message)
            .then(() => history.push("/messages"))
    }

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