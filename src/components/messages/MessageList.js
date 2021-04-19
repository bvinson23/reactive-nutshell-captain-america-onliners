// Component to hold the list of messages
// Author: Brandon Vinson

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageCard } from "./MessageCard";
import { MessageForm } from "./MessageForm";
import { deleteMessage, getAllMessages, addMessage } from '../../modules/MessageManager';
import { addFriend, getFriends, potentialFriends } from '../../modules/FriendManager';
import "./MessageCard.css"

export const MessageList = () => {
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const [message, setMessage] = useState({ chat: "", userId: currentUser })
    const [isLoading, setIsLoading] = useState(false)
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
        let yes = window.confirm("Are you sure you would like to add this person as a friend?")
        if (yes === true) {
            addFriend(newUserObject).then(history.push("/messages"))
        }
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
        setIsLoading(true)
        let completeMessage = { ...message }

        const privateMessage = () => {
            let recId;
            const lowerCaseMessage = completeMessage.chat.toLowerCase()
            const privateDM = (
                potentialFriends()
                    .then(friends => {
                        friends.filter(friend => {
                            if (lowerCaseMessage.includes(`@${friend.name.toLowerCase()}`)) {
                                recId = friend.id
                            } return recId
                        })
                    }).then(() => {
                        return recId
                    })
            )
            return privateDM
        }

        privateMessage()
            .then((res) => completeMessage.receiverId = res)
            .then(() => addMessage(completeMessage))
            .then(getMessages)
            .then(() => {
                setMessage({
                    chat: "",
                    userId: currentUser,
                    receiverId: ""
                })
            }).then(setIsLoading(false))

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
            <div className="message-container-cards">
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