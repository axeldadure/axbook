import React, {useState} from 'react';

function Searchbar(props) {
    return (
        <form onSubmit={(event) => props.handleSearchSubmit(event)} className="searchbar">
            <input defaultValue={props.input} 
            onChange={(event) => props.handleSearchInput(event.target.value)} 
            placeholder="Search books" type="text"/>
            
            <input type="submit" value="Search" className="searchbarOk"/>
        </form>
    )
}

export default Searchbar;