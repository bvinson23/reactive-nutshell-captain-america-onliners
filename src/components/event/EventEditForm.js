// Component that handles the editing of an event
// Author: Carter Culkin

import React, { useState, useEffect } from "react"
import {updateEvent, get} from "../../modules/EventManager"
import {useHistory, useParams} from 'react-router-dom'

export const EventEditForm = () => {
    const [event, setEvent] =useState({ name:"", date:"", location:"", zipcode: "", userId:parseInt(sessionStorage.getItem("nutshell_user"))})
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const eventId = useParams();
    const handleFieldChange = evt =>{
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    }
    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);
        const editedEvent = {
            id: eventId,
            name: event.name,
            date: event.date,
            location: event.location,
            zipcode: event.zipcode,
            userId: event.userId
        }
  
    updateEvent(editedEvent)
    .then(() => history.push("/events"))
    }
    useEffect(() =>{
        get(eventId)
        .then(event => {
            setEvent(event);
            setIsLoading(false);
        });
    }, []);
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
                        <label htmlFor="name">Event name</label>    
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={event.name}
                        />
                        
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date}
                        />
                        
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                        />
                        <label htmlFor="zip">Zipcode</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="zipcode"
                            value={event.zipcode}
                        />
                        

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEvent}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

