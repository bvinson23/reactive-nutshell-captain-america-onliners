import React, { useState, useEffect } from 'react';
import { potentialFriends, addFriend } from '../../modules/FriendManager'
import { useHistory } from 'react-router-dom'
import { AddFriendCard } from './AddFriendCard';
import { SearchBar } from './FriendSearch'

export const AddFriendList = (props) => {
    const history = useHistory();
    const [users, setFriends] = useState([]);
    const [input, setInput] = useState('');
    const [friendList, setFriendList] = useState();
    const [friendListDefault, setFriendListDefault] = useState();
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

    const updateInput = async (input) => {
        const filtered = friendListDefault.filter(friend => {
            return friend.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setFriendList(filtered)
    }
    return (
        <div className="container-cards">
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            {users.map(user => {
                if (user.id != parseInt(sessionStorage.getItem("nutshell_user")) && (user.friends.currentUserId != parseInt(sessionStorage.getItem("nutshell_user"))))
                    return (
                        <AddFriendCard
                            key={user.id}
                            user={user}
                            handleAddFriend={handleAddFriend} />)
            })}
        </div>
    )
}