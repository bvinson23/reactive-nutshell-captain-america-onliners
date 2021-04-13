import React, { useState } from 'react';
import EventManager from '../../modules/EventManager';

const EventForm = props => {
    const [event, setEvent] = useState({ name: "", date: "", location: "", userId: 0 });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    }
    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event.name === "" || event.date === "" || event.location === "") {
            window.alert("Fill all fields to proceed");
        } else {
            setIsLoading(true);
            EventManager.post(event)
                .then(() => props.history.push("/events"));
        }
    }

    const activeId = sessionStorage.getItem("activeUser")
    event.userId = parseInt(activeId)

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="hidden"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={event.userId}
                        />

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={event.name}
                        />
                        <label htmlFor="name">Event name</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date}
                        />
                        <label htmlFor="date">Date</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                        />
                        <label htmlFor="location">Location</label>
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
};

export default EventForm