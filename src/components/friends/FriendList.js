// Author: Cody Jones
import React, { useEffect, useState } from 'react';
import {FriendCard} from "./FriendCard"
import {deleteFriend, getAllFriends} from '../../modules/FriendManager'
import {useHistory,Link} from 'react-router-dom'
import "./Friends.css"
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
          
        });
    };
    useEffect(() =>{
        getFriends();
    }, [])

    return  (
        <div className= "friends-container-cards">
            <h2 className="friends_list">Friends List</h2>
            <Link to={`/friends/add`}>
                        <button className="addFriendButton">Add A Friend</button>
                    </Link>
               
        {friends.map(friend => {
          if (friend.userId != parseInt(sessionStorage.getItem("nutshell_user")))
          return (
            <FriendCard
            key={friend.id}
            friend={friend}
            handleDeleteFriend={handleDeleteFriend} />)
        })}
        </div>
    )
}