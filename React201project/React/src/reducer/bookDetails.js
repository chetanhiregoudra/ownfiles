import { SET_BOOK_DETAILS } from '../actions/getbookdetails';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_BOOK_DETAILS:
        return action.bookList;

    default: return state;
  }
}