import React from "react";
import { Link, useHistory} from "react-router-dom"

export const FriendCard =({friend, handleDeleteFriend}) =>{
    const history =useHistory();
    return (
        <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="friendCardName">{friend.user.name}</span>

                    <Link to={`/friends/${friend.id}`}>
                    <button>Details</button>
                </Link>
                    <button type ="button" onClick={() =>handleDeleteFriend(friend.id) }> Remove Friend </button>
                </h3>
                </div>
            </div>
    )
}