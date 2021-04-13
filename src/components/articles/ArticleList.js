import React, { useEffect, useState } from "react";
import { getAllArticles, getArticleById } from "../../modules/ArticleManager";
import { Article } from "./Article"

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI => {
            console.log(articlesFromAPI);
        });
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="article-cards">
            {articles.map(article => <Article key={article.id} article={article} />)}
        </div>
    );
};