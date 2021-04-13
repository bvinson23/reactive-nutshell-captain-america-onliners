import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventManager from '../../modules/EventManager';

const EventList = (props) => {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return EventManager.getAll().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };
    useEffect(() => {
        getEvents()
    }, []);

    const deleteEvent = id => {
        EventManager.remove(id)
            .then(() => EventManager.getAll().then(setEvents));
            console.log(deleteEvent)
    };
    return (
        <>
            
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/events/new") }}>
                    New Event
                </button>
            </section>
            <div className="container-cards">
                {events.map(event => {
                    if (event.userId === parseInt(sessionStorage.getItem("nutshell_user"))) {
                        return (
                            <EventCard
                                key={event.id}
                                event={event}
                                deleteEvent={deleteEvent}
                                {...props} 
                            />
                        )
                    }
                })}
            </div>
            
        </>
    );
};

export default EventList