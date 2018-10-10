import React from 'react';
import Moment from 'react-moment';

import Aux from '../../../hoc/_Aux';

const bookReturn = ({booklist,renewBook,returnBook}) => {
  const emptyMessage =(
    <tr>
      <td>Empty!!!!!</td>
    </tr>
  );
  let count = 1;
  
  let booksList;
  if(booklist !== null){
    booksList = (
    
      booklist.map(book => {
        
            return (<tr key={book._id}>
                <th scope="row">{count++}</th>
                <td>{book.isbn}</td>
                <td>{book.bookName}</td>
                <td>{book.category}</td>
                <td>
                  <Moment format="DD/MM/YYYY">
                    {book.returnDate}
                  </Moment>
                </td>
                <td><button type="button" className="btn btn-mdb-color" 
                  onClick={()=> renewBook(book.isbn)} >Renewal</button>
                <button type="button" className="btn btn-deep-orange" 
                  onClick={()=> returnBook(book.isbn)}>Return</button></td>
              </tr>);
        })
    );
   
  }


  return(
      <Aux>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ISBN</th>
                  <th>BookName</th>
                  <th>Category</th>
                  <th>ReturnDate</th>
                  <th>Renewal/Return</th>
                </tr>
              </thead>
              <tbody>
                
                  {booklist !== null   ? booksList : emptyMessage}
              
              </tbody>
            </table>
          </div>
          
      </Aux> 
  );
};

export default bookReturn;