// Component to hold the list of messages
// Author: Brandon Vinson

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageCard } from "./MessageCard";
import { MessageForm } from "./MessageForm";
import { deleteMessage, getAllMessages, addMessage } from '../../modules/MessageManager';
import { addFriend, getFriends } from '../../modules/FriendManager';

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [message, setMessage] = useState({ chat: "", userId: currentUser })
    const [isFriends, setIsFriends] = useState([])
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages().then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    const handleAddFriend = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": currentUser
        }
        addFriend(newUserObject)
            .then(setMessages(messages))
    }

    const getMessageFriends = () => {
        return getFriends(currentUser)
            .then(friends => {
                setIsFriends(friends)
            })
    }

    const checkForFriend = (message) => {
        let isFriend = false
        let checkedFriends = []
        checkedFriends = isFriends.filter(friend =>
            friend.userId === message.userId)

        if (checkedFriends.length > 0) {
            isFriend = true
        } else if (message.userId === currentUser) {
            isFriend = true
        }
        return isFriend
    }

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

    useEffect(() => {
        getMessageFriends()
    }, [])

    return (
        <>
            <div className="container-cards">
                {messages.map(message => 
                    <MessageCard 
                        key={message.id}
                        checkForFriend={checkForFriend}
                        message={message} 
                        handleDeleteMessage={handleDeleteMessage}
                        handleAddFriend={handleAddFriend} />
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