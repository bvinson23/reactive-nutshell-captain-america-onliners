// Component to hold an individual Message
// Author: Brandon Vinson, Cody Jones

import React from "react";
import { Link } from "react-router-dom";

export const MessageCard = ({ message, handleDeleteMessage }) => {
    return (
        <>
            <div className="chat-message">
                <p>{message.user.name} said, "{message.chat}"</p>
                <div className="button-box">
                    <Link to={`/messages/${message.id}/edit`}>
                        <button type="button">
                            Edit
                        </button>
                    </Link>
                    <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                </div>
            </div>
        </>
    )
}