// Component to hold the list of articles
// Author: Brandon Vinson, Cody Jones

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteArticle, getAllArticles, getArticleByUser } from "../../modules/ArticleManager";
import { getFriends } from "../../modules/FriendManager";
import { Article } from "./Article"
import "./Article.css"
import {WeatherCard} from '../weather/weatherCard'
import { getCoordinatesforNashville, getWeather } from '../../modules/weatherManager'


export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const history = useHistory();
    const [weather, setWeather] = useState({})
    const [dailyWeather, setDailyWeather] = useState(false)
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
    const weatherApi = "d59dc1f6992122e296b8623774f76b27"
    const getDailyWeather = (eventObject) => {
        return getCoordinatesforNashville()
            .then(coordinates => {
                getWeather(coordinates.lat, coordinates.lon, weatherApi).then(
                    weather => {
                        let dailyWeather = {}
                        dailyWeather = weather
                        if (dailyWeather.length > 0) {
                            setWeather(dailyWeather[0])
                            setDailyWeather(true)
                        } else {
                            setWeather(weather[0])
                            setDailyWeather(false)
                        }

                    }
                )
            })
    }


    const timeconverter = (time) => {
        let myDate = new Date(time)
        let shortend = myDate.getTime() / 1000
        return shortend;
    }
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
            <button type="button" onClick={() => getDailyWeather()}>Show Weather</button>
           
            {weather?.dt > 0 ? <WeatherCard daily={weather} dailyWeather={dailyWeather} /> : ""}
            <div className="article-cards">
                {articles.map(article => 
                    <Article 
                        key={article.id} 
                        article={article} 
                        handleDeleteArticle={handleDeleteArticle}
                        currentUser={currentUser}
                        getDailyWeather={getDailyWeather} />)}
            </div>
        </>
    );
};