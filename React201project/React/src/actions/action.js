import axios from 'axios';
import {api_url} from '../config/config';

export const SET_BOOKS = 'SET_BOOKS';
export const BOOK_FETCHED = 'BOOK_FETCHED';
export const SET_BORROW_STATUS = 'SET_BORROW_STATUS';



export  function fetchBooks(){
    return dispatch => {
      return axios.get(`${api_url}book/getallbooks`)
        .then(res => {
          console.log(res);
          dispatch(setBooks(res.data.books))
        });
        
    }
}

export function bookFetched(book) {
    return {
      type: BOOK_FETCHED,
      book
    }
  }

export function setBooks(books) {
    console.log(books)
    return {
      type: SET_BOOKS,
      books
    }
}
export function setBorrowDetails(data) {
    return {
      type: SET_BORROW_STATUS,
      data
    };
  }

export function fetchBook(id) {
   
    return dispatch => {
      fetch(`${api_url}book/${id}`)
        .then(res => res.json())
        .then(data => dispatch(bookFetched(data.book[0])));
    }
}

// export  function borrowBook(data){
//     return dispatch => {
//         return axios.post('http://localhost:3001/checkoutRouter', data).then(res => {
//         // //   const token = res.data.token;
//         // //   localStorage.setItem('jwtToken', token);
//         // //   setAuthorizationToken(token);
//         // console.log(res);
//           dispatch(setBorrowDetails(res.data));
//         });
//       }
    // return dispatch => {
    //     fetch('http://localhost:3001/checkoutRouter', {
    //         method: 'post',
    //         body: JSON.stringify(data) ,
    //         headers: {
    //         "Content-Type": "application/json"
    //         }
    //     })
    //     .then(res => {
    //         res.json();
    //         console.log(res)
    //     })
    //     .then(data =>{
    //         console.log(data)
    //         setBorrowDetails(data);
    //     } );
    // }
//}

