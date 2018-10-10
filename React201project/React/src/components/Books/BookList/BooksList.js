import React from 'react';
import PropTypes from 'prop-types'

import Thumbnail from '../../Thumbnail/Thumbnail';
import Aux from '../../../hoc/_Aux';

const BooksList = ({ books,clicked,ermsg }) => {
    const emptyMessage =(
        <p>{ermsg}</p>
    );

    const booksList =(
        books.map(book => {
           
             return <Thumbnail 
                         key={book.isbn}
                         book={book}
                         clicked={clicked}
                         id={book.isbn}/>
         })
    );

    return (
        <Aux>
            {books.length === 0 ? emptyMessage : booksList}
        </Aux>
            
        
    );
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired
}

export default BooksList;