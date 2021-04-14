import React, { useEffect, useState } from 'react';
import { MessageCard } from "./MessageCard";
import { deleteMessage, getAllMessages, getMessageById } from '../../modules/MessageManager';
import { useHistory } from 'react-router-dom';

export const MessageList = () => {
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

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="container-cards">
            {messages.map(message => 
                <MessageCard 
                    key={message.id} 
                    message={message} 
                    handleDeleteMessage={handleDeleteMessage} />
                )}
        </div>
    );
};