// Component to hold an individual Message
// Author: Brandon Vinson, Cody Jones

import React from "react";
import { Link } from "react-router-dom";
import "./MessageCard.css"

export const MessageCard = ({ message, handleDeleteMessage, handleAddFriend, checkForFriend }) => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    return (
        <section className="messageCard">
            <div className="message"> { checkForFriend(message) ? <>{message.user.name} </>:<Link to={"/messages"}><button type="button" className="friendadd" onClick={() => handleAddFriend(message.userId)}>{message.user.name}</button></Link>} : {message.chat}
            {message.userId === currentUser ? 
            <>
            <div className="message-btns">
                <Link to={`/messages/${message.id}/edit`}>
                <button type="button" className="messageButtons">Edit</button>
                </Link>
                <button type="button" 
                        className="messageButtons"
                        onClick={() => handleDeleteMessage(message.id)}>
                            Delete
                </button>

            </div>
            </>
            : null
        }</div>
        </section>
        // <>
        //     <div className="chat-message">
        //         <p>{message.user.name} said, "{message.chat}"</p>

        //         {message.userId === currentUser ?
        //             <>
        //                 <div className="button-box">
        //                     <Link to={`/messages/${message.id}/edit`}>
        //                         <button type="button">
        //                             Edit
        //                         </button>
        //                     </Link>
        //                     <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
        //                 </div>
        //             </>
        //             : null}
        //         <div className="button-box">
        //             <button type="button" onClick={() => {
        //             if (window.confirm(`Do you want to add ${message.user.name} as a friend ?`)) {
        //                  (handleAddFriend(message.user.id))} 
        //                  else {}}}> Add {message.user.name} as a Friend</button>
        //         </div>
        //     </div>
        // </>
    )
}