import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Books from '../../components/Books/Books';
import Book from '../../components/Books/Book/Book';
import BookDetails from '../../components/Book-Details/Book-Details';
import Login from '../../components/LoginNSignup/LoginPage';
import Footer from '../../components/Footer/Footer';
import AddNewBook from '../../components/AddNewBook/AddNewBook';
import EditBookDetails from '../../components/EditBookDetails/EditBookDetails';
import Register from '../../components/LoginNSignup/Register/Register';
import Profile from '../../components/Profile/Profile';

class LibraryMain extends Component{
    render () {
        
        return(
            <div>
                <Header />
                    <Switch >
                        <Route path="/login" exact  component={Login} />
                        <Route path="/" exact component={Home} />
                        <Route path="/books" exact component={Books} />
                        <Route path="/bookdetails" exact  component={BookDetails} />
                        <Route path="/books/:id" exact  component={Book} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/addNewBook" exact component={AddNewBook} />
                        <Route path="/editBook" exact component={EditBookDetails} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                <Footer />
            </div>
        );
    }
}


export default LibraryMain;
