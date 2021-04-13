import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addArticle, getAllArticles } from "../../modules/ArticleManager";
import "./ArticleForm.css";

export const ArticleForm = () => {
    const [article, setArticle] = useState({
        title: "",
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        synopsis: "",
        url: "",
        timestamp: new Date().toLocaleString()
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleFieldChange = (event) => {
        const newArticle = { ...article }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newArticle[event.target.id] = selectedVal
        setArticle(newArticle)
    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const title = article.title
        const url = article.url
        const synopsis = article.synopsis

        if (title.length <= 0 || url.length <= 0 || synopsis.length <= 0) {
            window.alert("Please fill out all inputs")
        } else {
            addArticle(article)
                .then(() => history.push("/"))
        }
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div>
                    <input
                        type="hidden"
                        id="timestamp"
                        onChange={handleFieldChange}
                        required autoFocus
                        className="form-control"
                        value={article.timestamp} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        onChange={handleFieldChange} 
                        required autoFocus 
                        className="form-control" 
                        placeholder="Article Title" 
                        value={article.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input
                        type="text"
                        id="synopsis"
                        onChange={handleFieldChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Synopsis"
                        value={article.synopsis} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">URL:</label>
                    <input
                        type="text"
                        id="url"
                        onChange={handleFieldChange}
                        required autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={article.url} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveArticle}>
                    Save Article
                </button>
        </form>
    )
}