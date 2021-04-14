import React, { useState, useEffect } from 'react';
import { getFriendById, potentialFriends, addFriend } from '../../modules/FriendManager'
import { useParams, useHistory } from 'react-router-dom'
import userEvent from '@testing-library/user-event';
import { AddFriendCard } from './AddFriendCard';
export const AddFriendList = () => {
    const history = useHistory();
    const [users, setFriends] = useState([]);

    const handleAddFriend = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": parseInt(sessionStorage.getItem("nutshell_user"))
        }
        addFriend(newUserObject)
            .then(() => potentialFriends().then(setFriends));

    }

    const getPotentialFriends = () => {
        const currentUser = sessionStorage.getItem("nutshell_user")
        return potentialFriends(currentUser).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
                ;
        });
    };
    useEffect(() => {
        getPotentialFriends();
    }, [])
        return (
            <div className="container-cards">
                {users.map(user =>
                    <AddFriendCard
                        key={user.id}
                        user={user}
                        handleAddFriend={handleAddFriend} />)}
            </div>
        )
}