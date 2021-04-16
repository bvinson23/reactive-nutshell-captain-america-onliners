// Component to hold an individual Message
// Author: Brandon Vinson, Cody Jones

import React from "react";
import { Link } from "react-router-dom";

export const MessageCard = ({ message, handleDeleteMessage, handleAddFriend }) => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    return (
        <>
            <div className="chat-message">
                <p>{message.user.name} said, "{message.chat}"</p>

                {message.userId === currentUser ?
                    <>
                        <div className="button-box">
                            <Link to={`/messages/${message.id}/edit`}>
                                <button type="button">
                                    Edit
                                </button>
                            </Link>
                            <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                        </div>
                    </>
                    : null}
                <div className="button-box">
                    <button type="button" onClick={() => {
                    if (window.confirm(`Do you want to add ${message.user.name} as a friend ?`)) {
                         (handleAddFriend(message.user.id))} 
                         else {}}}> Add {message.user.name} as a Friend</button>
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