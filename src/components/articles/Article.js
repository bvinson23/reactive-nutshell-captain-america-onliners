import React from "react";
import "./Article.css";

export const Article = ({article}) => {
    return (
        <article className="article">
            <div className="card-content">
                <h3>{article.title}</h3>
                <p>{article.synopsis}</p>
            </div>
        </article>
    )
}