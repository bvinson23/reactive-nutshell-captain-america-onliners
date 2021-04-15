// Component to hold the form to edit a single message
// Author: Brandon Vinson

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMessageById, updateMessage } from "../../modules/MessageManager";

export const MessageEditForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [message, setMessage] = useState({chat: "", userId: ""});
    const [isLoading, setIsLoading] = useState(false);

    const {messageId} = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = { ...message };
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[event.target.id] = selectedVal;
        setMessage(stateToChange);
    };

    useEffect(() => {
        getMessageById(messageId)
            .then(message => {
                setMessage(message);
                setIsLoading(false);
            });
    }, [messageId]);

    const updateExistingMessage = event => {
        event.preventDefault()
        setIsLoading(true);

        const chat = message.chat
        
        if (chat.length <= 0) {
            window.alert("Please enter a message")
        } else {
            const editedMessage = {
                id: messageId,
                chat: message.chat,
                userId: message.userId
            };

            updateMessage(editedMessage)
                .then(() => history.push("/messages"))
        }
    }

    return (
        <>
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
                onClick={updateExistingMessage}>
                Add Message
            </button>
        </section>
        </>
    )
}