// Author: Cody Jones
import React from "react";

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="card">
                    
            <div className="card-content ">
                <h3>
                    <span className="friendCardName">{friend.user.name}</span>
                    <p className="friendCardEmail">{friend.user.email}</p>
                    <button type="button" onClick={() => handleDeleteFriend(friend.id)}> Remove Friend </button>
                </h3>
            </div>
        </div>
    )
}