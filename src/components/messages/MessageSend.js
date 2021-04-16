import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllMessages, addMessage } from "../../modules/MessageManager";
import { potentialFriends } from "../../modules/FriendManager";

export const MessageSend = ({ getMessages, userId }) => {
    const [message, setMessage] = useState({
        message: "",
        userId: userId,
        receiverId: ""
    })

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory()

    const handleFieldChange = event => {
        const newMessage = { ...message }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        };

        newMessage[event.target.id] = selectedVal
        setMessage(newMessage)
    };

    const handleClickSaveMessage = event => {
        event.preventDefault()
        setIsLoading(true)
        let completeMessage = { ...message }
        
        const privateMessage = () => {
            let receiverId;
            const lowerCaseMessage = completeMessage.message.toLowerCase()
            const privateDM = (
                potentialFriends()
                    .then(friends => {
                        friends.map(friend => {
                            if (lowerCaseMessage.includes(`@${friend.name.toLowerCase()}`)) {
                                receiverId = user.id
                            } if (receiverId !== undefined) return receiverId
                        })
                    }).then(() => {
                        return receiverId
                    })
            )
            return privateDM
        }

        privateMesssage()
            .then(res => completeMessage.receiverId = res)
            .then(() => addMessage(completeMessage))
            .then(getMessages)
            .then(() => {
                setMessage({
                    message: "",
                    userId: userId,
                    receiverId: ""
                })
            }).then(setIsLoading(false))
    };

    return (
        <>
            <div className="message__send-container">
                <form className="messages__input">
                    <fieldset>
                        <input
                            type="text"
                            id="message"
                            onChange={handleFieldChange}
                            required autoFocus
                            className="messages__input-field"
                            placeholder="Enter chat here..."
                            value={message.chat} />
                    </fieldset>
                    <button className="message__send btn btn-primary"
                        disabled={isLoading}
                        type="button"
                        onClick={handleClickSaveMessage}>
                            Add Message
                        </button>
                </form>
            </div>
        </>
    )
}