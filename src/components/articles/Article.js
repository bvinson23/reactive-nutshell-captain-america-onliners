import React from "react";
import "./Article.css";

export const Article = ({ article, handleDeleteArticle }) => {
    return (
        <article className="article">
            <div className="card-content">
                <h3>{article.title}</h3>
                <p>{article.synopsis}</p>
                <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            </div>
        </article>
    )
}