// Component to hold the list of messages
// Author: Brandon Vinson, Cody Jones

import React, { useEffect, useState } from 'react';
import { MessageCard } from "./MessageCard";
import { MessageForm } from "./MessageForm";
import { deleteMessage, getAllMessages, getMessageById, addMessage } from '../../modules/MessageManager';
import { useHistory } from 'react-router-dom';
import {addFriend} from '../../modules/FriendManager'
import "./MessageCard.css"
export const MessageList = () => {
    const handleAddFriend = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": currentUser
        }
        addFriend(newUserObject)
    }
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [message, setMessage] = useState({ chat: "", userId: currentUser })
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages().then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    const handleDeleteMessage = id => {
        deleteMessage(id)
            .then(() => getAllMessages().then(setMessages));
    };

    const handleFieldChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()

        addMessage(message)
            .then(() => getAllMessages().then(setMessages))
            .then(message.chat = "");
    }

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
            <div className="message-container-cards">
                {messages.map(message => 
                    <MessageCard 
                        key={message.id} 
                        message={message} 
                        handleAddFriend={handleAddFriend}
                        handleDeleteMessage={handleDeleteMessage} />
                    )}
            </div>
            <div className="chat-input">
                <MessageForm 
                    key={message.id}
                    message={message}
                    handleClickSaveMessage={handleClickSaveMessage}
                    handleFieldChange={handleFieldChange} />
            </div>
        </>
    );
};