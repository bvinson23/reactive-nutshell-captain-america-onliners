import React, { useEffect, useState } from 'react';
import {FriendCard} from "./FriendCard"
import {deleteFriend, getAllFriends} from '../../modules/FriendManager'
import {useHistory} from 'react-router-dom'

export const FriendList = () =>{
    const history = useHistory();
    const handleDeleteFriend = id =>{
        deleteFriend(id)
        .then(()=> getAllFriends().then(setFriends).then(window.location.reload ()));
    };
    const [friends,setFriends] = useState([]);
    
    const getFriends = () => {
        const currentUser =  sessionStorage.getItem("nutshell_user")
        return getAllFriends(currentUser).then(friendsFromAPI =>{
            setFriends(friendsFromAPI)
            console.log(friends);
        });
    };
    useEffect(() =>{
        getFriends();
    }, [])

    return  (
        <div className= "container-cards">
            
                {console.log(friends)}
        {friends.map(friend => 
            <FriendCard
            key={friend.id}
            friend={friend}
            handleDeleteFriend={handleDeleteFriend} />)}
        </div>
    )
}