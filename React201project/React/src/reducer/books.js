import { SET_BOOKS, BOOK_FETCHED,SET_BORROW_STATUS } from '../actions/action';

export default function books(state = [], action ={}) {
    switch(action.type){
        case SET_BOOKS:
            return action.books;
        case BOOK_FETCHED:
        
        
        const index = state.findIndex(item => item.isbn === action.book.isbn);
        
        if (index > -1) {
          return state.map(item => {
            if (item.isbn === action.book.isbn) return action.book;
            return item;
          });
        } else {
          return [
            ...state,
            action.book
          ];
        }

        case SET_BORROW_STATUS:
            return action.data;

        
        default: return state;
    }
}