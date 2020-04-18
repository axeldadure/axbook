import axios from 'axios';

export const getBooks = () => {
    return (
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=quilting&key=AIzaSyD-Q1Hb8BkVki6_rUNkRKolHbGxP9N7m50`)
        .then(res => {
            return res.data;
        }).catch(function(error) {
            console.log(error);
        })
    );
}