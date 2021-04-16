// Component to contain a single article
// Author: Brandon Vinson
// Minor touch-ups: Carter Culkin

import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

export const Article = ({ article, handleDeleteArticle, currentUser }) => {
    return (
        <>
            {currentUser === article.userId ?
                <>
                    <article className="articleCard">
                        <div className="card-content">
                            <h3>{article.title}</h3>
                            <h9>You posted this</h9>
                            <p></p>
                            <p>{article.synopsis}</p>
                            <p>{article.timestamp}</p>
                            <Link to={`/${article.id}/edit`}>
                                <button type="button">
                                    Edit
                                </button>
                            </Link>
                            <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                            <p><a href={article.url}>{article.url}</a></p>
                        </div>
                    </article>
                </> :
                <>
                    <article className="articleCard__friend">
                        <div className="card-content">
                            <h3>{article.title}</h3>
                            <h9>Posted by your friend {article.user.name}</h9>
                            <p></p>
                            <p>{article.synopsis}</p>
                            <p>{article.timestamp}</p>
                            <p><a href={article.url}>{article.url}</a></p>
                        </div>
                    </article>
                </>
                
            }
        </>
    )
}