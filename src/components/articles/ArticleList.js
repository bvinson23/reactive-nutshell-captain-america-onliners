// Component to hold the list of articles
// Author: Brandon Vinson

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteArticle, getAllArticles, getArticleById } from "../../modules/ArticleManager";
import { Article } from "./Article"
import "./Article.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const history = useHistory();
    const currentUser = sessionStorage.getItem("nutshell_user")

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI => {
            setArticles(articlesFromAPI);
        });
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