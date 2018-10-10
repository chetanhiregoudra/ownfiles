import axios from 'axios';
import {api_url} from '../config/config';

export const SET_BOOK_DETAILS = 'SET_BOOK_DETAILS';

export function setbookDetails(bookList) {
    return {
        type: SET_BOOK_DETAILS,
        bookList
    };
}

export function getBookDetails() {
    return dispatch => {
        return axios.get(`${api_url}checkoutRouter/booksdetails`)
        .then(res =>{
            console.log(res.data.booksdetails);
            dispatch(setbookDetails(res.data.booksdetails));},
            err => dispatch(setbookDetails(err.response.data.booksdetails))
        ) //dispatch(setbookDetails(err.response.data.booksdetails)))
    }
}
//   return dispatch => {
//     return fetch('http://localhost:3001/checkoutRouter/booksdetails', {
//             method: 'get',
//             headers: {
//             "Content-Type": "application/json"
//             }
//         })
//         .then(res => res.json())
//         .then(data =>{
//           //console.log(data.booksdetails)
//           dispatch(setbookDetails(data.booksdetails))
//         } )
//     }
   
  
