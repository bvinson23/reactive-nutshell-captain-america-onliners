import React from "react";

const EventCard = props =>{
    return (
        <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="eventCardName">{props.event.name}</span>
                    <p className="eventDate">Date: {props.event.date}</p>
                    <p className="eventLocation"> Location: {props.event.location}</p>
                    <p className="eventUserId">User: {props.event.userId}</p>
                    <button type ="button" onClick={() => props.history.push(`events/${props.event.id}/edit`)}>Edit</button>
                    <button type ="button" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
                </h3>
                </div>
            </div>
    )
};
export default EventCard