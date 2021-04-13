import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteArticle, getAllArticles, getArticleById } from "../../modules/ArticleManager";
import { Article } from "./Article"

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const history = useHistory();

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
        <div className="article-cards">
            {articles.map(article => 
                <Article 
                    key={article.id} 
                    article={article} 
                    handleDeleteArticle={handleDeleteArticle} />)}
        </div>
    );
};