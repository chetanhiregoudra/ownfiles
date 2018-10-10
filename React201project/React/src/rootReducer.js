import { combineReducers } from 'redux';

import books from './reducer/books';
import auth from './reducer/auth';
import bookdetails from './reducer/bookDetails';

export default combineReducers({
    books,
    auth,
    bookdetails
});