// Author: Cody Jones, Carter Culkin
import React from "react";
import {useHistory} from 'react-router-dom'
export const EventCard = ({ event, deleteEvent }) => {
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
                
                    <button type="button" onClick={() => history.push(`events/${event.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => deleteEvent(event.id)}>Delete</button>
                </h3>
            </div>
        </div>
    )
}
