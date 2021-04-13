import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getArticleById, updateArticle } from "../../modules/ArticleManager";
import "./ArticleForm.css";

export const ArticleEditForm = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const {articleId} = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = { ...article };
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[event.target.id] = selectedVal;
        setArticle(stateToChange);
    };

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setArticle(article);
                setIsLoading(false);
            });
    }, [articleId]);

    const updateExistingArticle = event => {
        event.preventDefault()
        setIsLoading(true);

        const title = article.title
        const url = article.url
        const synopsis = article.synopsis

        if (title.length <= 0 || url.length <= 0 || synopsis.length <= 0) {
            window.alert("Please fill out all inputs")
        } else {
            const editedArticle = {
                id: articleId,
                title: article.title,
                userId: article.userId,
                synopsis: article.synopsis,
                url: article.url,
                timestamp: article.timestamp
            };

            updateArticle(editedArticle)
                .then(() => history.push("/"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={article.title}
                        />
{/*------------THIS IS WHERE I LEFT OFF!!!--------------*/}
                    </div>
                </fieldset>
            </form>
        </>
    )
}