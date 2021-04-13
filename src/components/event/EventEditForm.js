import React, { useState, useEffect } from "react"
import EventManager from "../../modules/EventManager"

const EventEditForm = props=>{
    const [event, setEvent] =useState({ name:"", date:"", location:"", userId:""})
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = event =>{
        const stateToChange = { ...event };
        stateToChange[event.target.id] = event.target.value;
        setEvent(stateToChange);
    }
    const updateExistingEvent = event => {
        event.preventDefault()
        setIsLoading(true);
        const editedEvent = {
            id: event.id,
            name: event.name,
            date: event.date,
            location: event.location,
            userId: event.userId
        }
  
    EventManager.updateEvent(editedEvent)
    .then(() => props.history.push("/events"))
    }
    useEffect(() =>{
        EventManager.get(props.match.params.eventId)
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

export default EventEditForm