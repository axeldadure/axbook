import React, {useState, useEffect} from 'react';
import {getBooks} from '../data/bookServices';

function Booklist(props) {

    const breakPoint = 0;
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        let books = await getBooks();
        setBooks(books);
    }

    useEffect(() => {
        fetchBooks();
    }, [breakPoint]);

    return (
        <div>
            {props.searchQuery ? (
                <div className="noResult">No books found with the words : "<span>{props.searchQuery}"</span></div>
            ) : (
                <div className="noResult">Research your favorite books first !</div>
            )}
            {/* {books.map(book => (
                <div>yoyo</div>
            ))} */}
            {
                console.log(books)
            }
        </div>
    )
}

export default Booklist;