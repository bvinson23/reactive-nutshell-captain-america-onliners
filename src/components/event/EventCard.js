//Component that contains one event card
// Authors: Cody Jones, Carter Culkin

import React from "react";
import {useHistory} from 'react-router-dom'
import "./Event.css"
export const EventCard = ({ getDailyWeather, event, deleteEvent }) => {
const history = useHistory();
    return (
        <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="eventCardName">{event.name}</span>
                    <p className="eventDate">Date: {event.date}</p>
                    <p className="eventLocation"> Location: {event.location}</p>
                    <p className="eventZipcode">Zipcode: {event.zipcode}</p>
                    <p className="eventUserId">User: {event.userId}</p>
                    <button className="eventButton" type="button" onClick={() => getDailyWeather(event)}>Show Weather</button>
                    <button className="eventButton" type="button" onClick={() => history.push(`events/${event.id}/edit`)}>Edit</button>
                    <button className="eventButton" type="button" onClick={() => deleteEvent(event.id)}>Delete</button>
                </h3>
            </div>
        </div>
    )
}