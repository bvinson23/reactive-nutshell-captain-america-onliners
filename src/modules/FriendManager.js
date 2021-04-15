const remoteURL = "http://localhost:8088"

export const getFriendById = (friendId) =>{
    return fetch (`${remoteURL}friends/${friendId}?_expand=user`)
    .then(response => response.json())
}

export const potentialFriends = () =>{
    return fetch (`${remoteURL}/users/?_embed=friends`)
    .then(response => response.json())
}

export const getAllFriends = (id) =>{

   return fetch(`http://localhost:8088/friends/?currentUserId=${id}&_expand=user`)
   .then(response => response.json())
}
export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}?_expand=user`, {
      method: "DELETE"
    }).then(result => result.json())
  }

export const addFriend = (newFriend) =>{
    return fetch ( `${remoteURL}/friends`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
}