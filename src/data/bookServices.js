import axios from 'axios';
import {key} from './key'

const url = "https://www.googleapis.com/books/v1/volumes?"

export const getBooksByName = (query) => {
    return (
        axios.get(`${url}q=intitle:${query}+inauthor:${query}&key=${key}&maxResults=15&startIndex=4`)
        .then(res => {
            console.log(`${url}q=intitle:${query}+inauthor:${query}&key=${key}&maxResults=15&startIndex=4`)
            return res.data;
        }).catch(function(error) {
            console.log(error);
        })
    );
}