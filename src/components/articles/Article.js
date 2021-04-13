import React from "react";
import "./Article.css";

export const Article = ({ article, handleDeleteArticle }) => {
    return (
        <article className="card">
            <div className="card-content">
                <h3>{article.title}-{article.user.name}</h3>
                <p>{article.synopsis}</p>
                <p>{article.timestamp}</p>
                <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                <p><a href={article.url}>{article.url}</a></p>
            </div>
        </article>
    )
}