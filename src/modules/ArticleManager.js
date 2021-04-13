const remoteURL = "http://localhost:8088"

export const getArticleById = (articleId) => {
    return fetch(`${remoteURL}/articles/${articleId}`)
        .then(res => res.json())
}

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
        .then(res => res.json())
}