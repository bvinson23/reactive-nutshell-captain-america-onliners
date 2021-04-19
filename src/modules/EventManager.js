//Author Carter Culkin
const remoteURL = "http://localhost:8088"
export const get = (id) => {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
    };
    export const getAll = () => {
return fetch(`${remoteURL}/events/`).then(result => result.json())
    };
    export const remove = (id) =>{
return fetch(`${remoteURL}/events/${id}`, {
    method: "DELETE"
}).then(result => result.json())
    };
    export const post = (newEvent) =>{
return fetch(`${remoteURL}/events`, {
    method: "POST",
    headers: {
"Content-Type": "application/json"
    },
    body: JSON.stringify(newEvent)
}).then(data => data.json())
    };
    export const updateEvent = (editedEvent) => {
console.log(editedEvent)
return fetch(`${remoteURL}/events/${editedEvent.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(editedEvent)
}).then(data => data.json());
      }
