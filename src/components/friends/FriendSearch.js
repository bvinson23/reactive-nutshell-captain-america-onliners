// Component that searches for friends
// Author: Cody Jones

import React from 'react';
import {FriendList} from './FriendList'
import {Link} from 'react-router-dom'

export const SearchBar =({ handleAddFriend, search }) => {
    return (
      <div className="SearchBox">
        <h3>{search.name}</h3>
        <Link to= {`/friends`}> <button type="button" className="searchbutton" onClick={() => handleAddFriend(search.id)}>
        Add Friend</button> </Link>
      </div>

    );
  }

