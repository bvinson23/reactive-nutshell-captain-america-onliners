import React from "react";

export const MessageCard = ({ message }) => {
    return (
        <>
            <div className="chat-message">
                <p>{message.user.name} said, "{message.chat}"</p>
            </div>
        </>
    )
}