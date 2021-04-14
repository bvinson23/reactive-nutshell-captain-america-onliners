import React from 'react';
import { useHistory } from 'react-router-dom'



export const AddFriendCard = ({user, handleAddFriend}) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="userCardName">{user.name}</span>
                    <p className="userCardName">{user.email}</p>
                    <button type="button" onClick={() => handleAddFriend(user.id)}>Add friend</button>
                </h3>
            </div>
        </div>
    )
}
