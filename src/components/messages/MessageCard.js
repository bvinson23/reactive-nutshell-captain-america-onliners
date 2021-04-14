import React from "react";

export const MessageCard = ({ message }) => {
    return (
        <>
            <div className="chat-message">
                <p>{message.chat}</p>
            </div>
        </>
    )
}