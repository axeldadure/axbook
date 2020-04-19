import React, {useState} from 'react';

function Searchbar(props) {
    return (
        <form onSubmit={(event) => props.handleSearchSubmit(event)} className="searchbar">
            <input value={props.input}
            onChange={(event) => props.handleSearchInput(event.target.value)} 
            placeholder="Search books" 
            // minLength="3"
            type="text"/>
            
            <input type="submit" value="Search" className="searchbarOk"/>
        </form>
    )
}

export default Searchbar;