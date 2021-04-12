import React from "react";
import "./Article.css";

export const Article = () => {
    return (
        <article className="article">
            <h3 className="article__title">Title of article</h3>
            <div className="article__info">Synopsis</div>
        </article>
    )
}