import React, {useState, useEffect} from 'react';
import {getBooksByName} from '../data/bookServices';

function Booklist({searchQuery}) {

    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        let booksQuery = await getBooksByName(searchQuery.replace(/\s/g, '+'));
        if ('items' in booksQuery) {
            console.log(searchQuery)
            setBooks(booksQuery.items);
        }
        else {
            setBooks([]);
        }
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            fetchBooks();
        }
        else {
            setBooks([]);
        }
    }, [searchQuery]);

    return (
        <div>
            {searchQuery.length > 0 ? (
                books.length > 0 ? (
                    books.map(book => (
                        <div key={book.id}>{book.volumeInfo.title}</div>
                    ))
                ):(
                    <div className="noResult">
                        No books found with the words : "<span>{searchQuery}"</span>
                    </div>
                )
            ):(
                <div className="noResult">Type in the searchbar to find your favorite books !</div>
            )
            }
        </div>
    )
}

export default Booklist;