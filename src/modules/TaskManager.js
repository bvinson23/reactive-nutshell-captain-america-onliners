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

  export const deleteTask = (id) => {
      return fetch(`${remoteURL}/tasks/${id}`,{
          method: "DELETE"})
      .then(result => result.json())
  }

  export const completeTask = (completedTask) => {
    completedTask.isCompleted = true
    return fetch(`${remoteURL}/tasks/${completedTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completedTask),
      }).then((data) => data.json());
    };

    export const addTask = (newTask) => {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(res => res.json())
    };

    export const editTask = (editTask) => {
        //!fetch call is broken, after fixing this it should work.
        return fetch(`${remoteURL}/tasks/${editTask.id}/edit`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editTask)
        }).then(res => res.json())
    };

//   export const completeTask = (id) => {
//       return fetch(`${remoteURL}/task/${id}`,{
//           method: "PUT",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(id)})
//       .then(result => result.json())
//   }