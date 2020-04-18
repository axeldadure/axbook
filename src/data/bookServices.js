import axios from 'axios';
import {key} from './key'

export const getBooks = () => {
    return (
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=quilting&key=${key}`)
        .then(res => {
            return res.data;
        }).catch(function(error) {
            console.log(error);
        })
    );
}