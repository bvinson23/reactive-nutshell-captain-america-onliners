// Author: Cody Jones
import React from "react";
import "./Friends.css"
export const FriendCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="friend-card">
                    
            <div className="card-content ">
                <h3>
                    <span className="friendCardName">{friend.user.name}</span>
                    <p className="friendCardEmail">{friend.user.email}</p>
                    <button className="buttonRemoveFriend" type="button" onClick={() => handleDeleteFriend(friend.id)}> Remove Friend </button>

                </h3>
            </div>
        </div>
    )
}