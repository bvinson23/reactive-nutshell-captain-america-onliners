import React, { useState, useEffect } from 'react';
import { potentialFriends, addFriend, getFriends, getAllFriends, deleteFriend } from '../../modules/FriendManager'
import { useHistory, Link } from 'react-router-dom'
import { AddFriendCard } from './AddFriendCard';
import { SearchBar } from './FriendSearch'

export const AddFriendList = (props) => {
    const history = useHistory();
    const [friends, setFriends] = useState([]);
    const [search, setSearch] = useState(" ");
    const [result, setResult] = useState([])
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const handleAddFriend = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": currentUser
        }
        addFriend(newUserObject)
            .then(() => potentialFriends().then(setFriends));

    }

    const getPotentialFriends = () => {
        return potentialFriends(currentUser).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
                ;
        });
    };

    const handleSearch = event => {
        let searchChange = event.target.value
        setSearch(searchChange.toLowerCase())
    }
    const searchResults = (search) => {
        if (search.length > 0) {
            potentialFriends()
                .then(response => {
                    let searchFriends = response.filter(user => {
                        if (user.name.toLowerCase().includes(search) && user.id !== currentUser) {
                            return true
                        }
                    })
                    setResult(searchFriends)
                })
        }
        else setResult([])
    }
    useEffect(() => {
        searchResults(search)
    }, [search])

    useEffect(() => {
        getPotentialFriends();
    }, [])

    return (
        <div className="container-cards">
            <div className="searchBox">
                <input type="text"
                    id="search"
                    className="searchFriendBox"
                    required
                    onChange={handleSearch}
                    placeholder="Search Users for Friends!"
                />
            </div>

            <div className="searchResults">
                {result.length === 0 ? <div></div> :
                    result.map(search =>
                        <SearchBar
                            key={search.id}
                            search={search}
                            handleAddFriend={handleAddFriend}
                        />
                    )}
            </div>
          
        </div>
    )
}