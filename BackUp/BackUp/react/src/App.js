import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import LibrarianHeader from './components/Header/LibrarianHeader';
import UserHeader from './components/Header/UserHeader';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginOrSignUp/Login';
import Register from './components/LoginOrSignUp/Register';
import AdminProfile from './components/AdminProfile/AdminProfile';
import UserProfile from './components/UserProfile/UserProfile';
import AddNewBook from './components/AddNewBook/AddNewBook';
import EditBookDetails from './components/EditBookDetails/EditBookDetails';

import ErrorPage from './components/Error/ErrorPage';


class App extends Component {

  state = {
    currentHeader : 'header',
    userName : 'XXXX'
  }
  
  changeHeader = (role, name) => {
    if(role==="user"){
      this.setState({currentHeader : "userHeader"});
    }
    if(role==="librarian"){
      this.setState({currentHeader : "librarianHeader"});
    }
    this.setState({userName: name});
  }
  render() {
    return (
      <div className="container">
          {
            this.state.currentHeader ==="header" ? <Header/> : null 
          }
          {
            this.state.currentHeader === "userHeader" ? <UserHeader name={this.state.userName}/> : null
          }
          {
            this.state.currentHeader ==="librarianHeader" ? <LibrarianHeader  name={this.state.userName}/> : null
          }
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" render={()=><Login changeHeader={this.changeHeader}/>} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/adminprofile" component={AdminProfile} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/addNewBook" component={AddNewBook} />
            <Route exact path="/editBook" component={EditBookDetails} />
            <Route exact path="/" component={HomePage} />
            <Route path="/" component={ErrorPage} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
