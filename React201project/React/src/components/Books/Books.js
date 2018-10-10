import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import BooksList from './BookList/BooksList';
import { fetchBooks } from '../../actions/action';
import Search from '../Search/Search';
import CategoryList from './CategoryList/CategoryList';
import Book from './Book/Book';

class BooksPage extends Component{
    state = {
        localbooks:[],
        tempbooks:[],
        options: [],
        catBook:[],
        errMag:''
    }
    componentDidMount(){
        this.props.fetchBooks().then(res => this.setState({localbooks:[...this.props.books],tempbooks:[...this.props.books]}),err =>this.setState({errMag:err.response.data.message}));
       
    }
    toggleBook = (id) => {
        this.props.history.push({pathname:'/books/' + id}); 
    }
    
    setvalueHandler = (event) => {
        this.setState({searchValue : event.target.value}) 
        
    }

    searchHandler = () => {
        let someBooks = [...this.state.localbooks];
        //alert(tempBooks)
        someBooks = someBooks.filter(book => {
            return ((book.title).indexOf(this.state.searchValue) !== -1 || (book.isbn).indexOf(this.state.searchValue) !== -1 || (book.author).indexOf(this.state.searchValue) !== -1);
             
        })
        this.setState({tempbooks:[...someBooks]})
    }

    sortbycatHandler = (e) => {
        const options = this.state.options;
        let catBook = this.state.catBook;
        let index;
        let someBooks = [...this.state.localbooks];
        if(e.target.checked){
            options.push(e.target.value);
           
            // someBooks = someBooks.filter(book => book.category === e.target.value);
            // let v = options.map(opt =>{
            //     return (someBooks.filter(book => book.category === opt))
            // })    
            // catBook.push(...someBooks);
           
            someBooks =  someBooks.filter(book =>  {
                return book.category.indexOf(e.target.value) !== -1
            });
            catBook.push(...someBooks)
           // console.log(someBooks);
        }
        else{
            index = options.indexOf(e.target.value);
            options.splice(index, 1);
            //console.log(catBook);
            catBook =  catBook.filter(book =>  {
                return book.category.indexOf(e.target.value) === -1;
                // catBook.splice(book.category.indexOf(e.target.value),1)
            });
            //console.log(catBook)
            // catBook = catBook.filter(book => {
            //     if((book.category).indexOf(e.target.value) === -1 ){
            //         //console.log(book)
            //         return book;
            //     }
            // })
            //alert(JSON.stringify(catBook)+"2")
            //console.log("inside else") 
        }
        this.setState({ options: options })
        this.setState({ catBook: catBook })
        //console.log(catBook)
        // console.log(catBook)
        if(this.state.options.length > 0){

            this.setState({tempbooks:[...catBook]})
        }
        else{
            
            this.setState({tempbooks:[...this.state.localbooks]})
        }
        
        
    }
    render (){
        
        return (
            <div className="container" >
                <section className="section pb-3 text-center">
                    <Search onchange={this.setvalueHandler} onclick={this.searchHandler} />
                    <div className="row">
                        <div className="col-sm-3">
                            <CategoryList onclick={this.sortbycatHandler} />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <BooksList ermsg={this.state.errMag} books={this.state.tempbooks} clicked={this.toggleBook} />
                            </div>
                            <Route path={this.props.match.url+'/:id'} exact  component={Book} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

BooksPage.propTypes ={
    books: PropTypes.array.isRequired
}

function mapStateToProps (state) {
    //console.log(state.books)
    return {
        books:state.books
    }
}
export default connect(mapStateToProps,{fetchBooks})(BooksPage);
