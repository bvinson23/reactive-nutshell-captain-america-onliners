// Component that handles adding a friend
// Author: Cody Jones

import React from 'react';
import { useHistory } from 'react-router-dom'



export const AddFriendCard = ({user, handleAddFriend}) => {
    const currentUser = user.friends;
   
    const history = useHistory();
    return (
        <div className="friend-card">
            <div className="card-content">
                <h3>
                    <span className="userCardName">{user.name}</span>
                    <p className="userCardName">{user.email}</p>
                </h3>
            </div>
        </div>
    
    )
}
