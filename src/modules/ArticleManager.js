// Module that handles the fetch calls for articles
// Author: Brandon Vinson


const remoteURL = "http://localhost:8088"

export const getArticleById = (articleId) => {
    return fetch(`${remoteURL}/articles/${articleId}`)
        .then(res => res.json())
}

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles?_expand=user`)
        .then(res => res.json())
}

export const deleteArticle = (id) => {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(res => res.json())
}

export const updateArticle = (editedArticle) => {
    return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedArticle)
    }).then(res => res.json());
}

// Fetch call that gets articles by userId
export const getArticleByUser = (id) => {
    return fetch(`${remoteURL}/articles?userId=${id}&_expand=user`)
        .then(res => res.json())
}