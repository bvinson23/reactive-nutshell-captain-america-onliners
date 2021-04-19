// Author: Cody Jones, Carter Culkin
import React, { useState, useEffect } from 'react';
import "./Event.css"; 
import { EventCard } from './EventCard';
import {remove, getAll} from '../../modules/EventManager';
import { WeatherCard } from '../weather/weatherCard'
import { getCoordinates, getWeather } from '../../modules/weatherManager'
import { useHistory } from 'react-router-dom'

export const EventList = (props) => {
    const [events, setEvents] = useState([]);
    const [weather, setWeather] = useState({})
    const [dailyWeather, setDailyWeather] = useState(false)
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    const getEvents = () => {
        return getAll().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };
    useEffect(() => {
        getEvents()
    }, []);

    const deleteEvent = id => {
        remove(id)
            .then(() => getAll().then(setEvents));
        console.log(deleteEvent)
    }
    
    const weatherApi = "d59dc1f6992122e296b8623774f76b27"
    const getDailyWeather = (eventObject) => {
        return getCoordinates(eventObject.location)
            .then(coordinates => {
                getWeather(coordinates.lat, coordinates.lon, weatherApi).then(
                    weather => {
                        let dailyWeather = {}
                        dailyWeather = weather.filter(daily => {
                            if (daily.dt <= timeconverter(eventObject.eventdate) && timeconverter(eventObject.eventdate) <= daily.dt + 86400) {
                                return true
                            } else return false
                        }
                        )
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
    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/events/new") }}>
                    New Event
                </button>
            </section>

            {weather?.dt > 0 ? <WeatherCard daily={weather} dailyWeather={dailyWeather} /> : ""}
            <div className="event-container-cards">
                {events.map(event => {
                    if (event.userId === parseInt(sessionStorage.getItem("nutshell_user"))) {
                        return (
                            <EventCard
                                key={event.id}
                                event={event}
                                deleteEvent={deleteEvent}
                                getDailyWeather={getDailyWeather}
                                {...props}
                            />
                        )
                    }
                })}
            </div>

        </>
    );
};

