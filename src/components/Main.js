import React, {useState} from 'react';
import userContext from '../userContext';
import Searchbar from './Searchbar';
import Booklist from './Booklist';

function Main(props) {

    const [input, setInput] = useState("");

    const [searchQuery, setSearchQuery] = useState("");

    const setInputText = (value) => {
        const regex = /^([a-zA-Z ',?! 0-9]*)$/;
        if (value === '' || regex.test(value)) {
            setInput(value);
        }
    }

    const handleSearchSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        setSearchQuery(input);
    }

    return (
        <div className="ct">
            <userContext.Consumer>
                {(value) => (
                    <header>
                        <div className="headerLogo">axBook</div>
                        <div className="headerProfile">Profile <span>({value.name})</span></div>
                    </header>
                )}
            </userContext.Consumer>
            <div className="bookIn">
                <Searchbar handleSearchSubmit={handleSearchSubmit} 
                handleSearchInput={setInputText} 
                input={input}/>
                <Booklist searchQuery={searchQuery} />
            </div>
        </div>
    )
}

export default Main;