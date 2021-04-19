// Component to hold the list of articles
// Author: Brandon Vinson

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteArticle, getAllArticles, getArticleByUser } from "../../modules/ArticleManager";
import { getFriends } from "../../modules/FriendManager";
import { Article } from "./Article"
import "./Article.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    const getArticles = () => {
        let userArticles = [];
        return getFriends(currentUser)
            .then(res => {
                res.forEach(friend => {
                    getArticleByUser(friend.user.id)
                        .then(response => {
                            userArticles = userArticles.concat(response)
                        })
                        .then(() => getArticleByUser(currentUser)
                            .then(article => {
                                let articles = []
                                articles = userArticles.concat(article)
                                setArticles(articles)
                            }))
                })
            })
    };

    const handleDeleteArticle = id => {
        deleteArticle(id)
            .then(() => getAllArticles().then(setArticles));
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {history.push("/create")}}>
                        New Article
                    </button>
            </section>
            <div className="article-cards">
                {articles.map(article => 
                    <Article 
                        key={article.id} 
                        article={article} 
                        handleDeleteArticle={handleDeleteArticle}
                        currentUser={currentUser} />)}
            </div>
        </>
    );
};