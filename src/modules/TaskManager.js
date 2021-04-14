const remoteURL = "http://localhost:8088"


export const getTaskById = (id) => {
   return fetch(`${remoteURL}/tasks/${id}`)
    .then(res => res.json())
  }

  export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(result => result.json())
  }

  export const getUserTasks = (userId) => {
      return fetch(`${remoteURL}/tasks/?_embed=${userId}`)
      .then(result => result.json)
  }

  export const deleteTask = () => {
      return fetch(`${remoteURL}/tasks`)
      .then(result => result.json())
  }