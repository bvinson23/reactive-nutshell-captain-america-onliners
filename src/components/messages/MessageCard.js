import React from "react";

export const MessageCard = ({ message, handleDeleteMessage }) => {
    return (
        <>
            <div className="chat-message">
                <p>{message.user.name} said, "{message.chat}"</p>
                <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            </div>
        </>
    )
}