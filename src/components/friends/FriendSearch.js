import React from 'react';

export const SearchBar =({ handleAddFriend, search }) => {
    return (
      <div className="SearchBox">
        <h3>{search.name}</h3>
        <button type="button" className="searchbutton" onClick={() => handleAddFriend(search.id)}>Add Friend</button>
      </div>

    );
  }

