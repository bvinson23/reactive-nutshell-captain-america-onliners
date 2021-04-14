const remoteURL = "http://localhost:8088"

export const getMessageById = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}`)
        .then(res => res.json())
}

export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages`)
}