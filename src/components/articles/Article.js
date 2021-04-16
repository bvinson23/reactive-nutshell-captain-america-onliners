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
                            <h6>You posted this</h6>
                            <p></p>
                            <p>{article.synopsis}</p>
                            <p>{article.timestamp}</p>
                            <p><a href={article.url}>{article.url}</a></p>
                            <Link to={`/${article.id}/edit`}>
                                <button type="button">
                                    Edit
                                </button>
                            </Link>
                            <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                        </div>
                    </article>
                </> :
                <>
                    <article className="articleCard__friend">
                        <div className="card-content">
                            <h3>{article.title}</h3>
                            <h6>Posted by your friend {article.user.name}</h6>
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