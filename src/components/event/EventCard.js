import React from "react";
import "./Event.css"; 
const EventCard = props =>{
    return (
        <div className="event-card">
            <div className="event-card-content">
                <h3>
                    <span className="eventCardName">{props.event.name}</span>
                    <p className="eventDate">Date: {props.event.date}</p>
                    <p className="eventLocation"> Location: {props.event.location}</p>
                    <p className="eventZipcode">Zipcode: {props.event.zipcode}</p>
                    <p className="eventUserId">User: {props.event.userId}</p>
                    <button className="eventButtons"type ="button" onClick={() => props.history.push(`events/${props.event.id}/edit`)}>Edit</button>
                    <button className="eventButtons" type ="button" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
                </h3>
                </div>
            </div>
    )
};
export default EventCard