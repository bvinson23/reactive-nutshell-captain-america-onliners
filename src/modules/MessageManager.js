// Module to handle all fetch calls for messages
// Author: Brandon Vinson

const remoteURL = "http://localhost:8088"

export const getMessageById = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}`)
        .then(res => res.json())
}

export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages?_expand=user`)
        .then(res => res.json())
}

export const deleteMessage = (id) => {
    return fetch(`${remoteURL}/messages/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(res => res.json())
}

export const updateMessage = (editedMessage) => {
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMessage)
    }).then(res => res.json());
}