import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux';
import { logout } from '../../../actions/authActions';
import Logo from '../Logo/Logo';

class MenuBar extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
        console.log(this.props)
    }
    render (){
        
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        const user = localStorage.getItem('user');
        // console.log(user);
        // console.log(localStorage.getItem('role'));
        
        // const {  user } = this.props.auth;
        
        const userLinks = (
            <Aux> 
                <NavItem >
                    <span className="navbar-text white-text">
                        Welcome-{user}
                    </span>
                </NavItem>
                <NavItem >
                    <NavLink onClick={this.logout.bind(this)} to='/'>Logout</NavLink>
                </NavItem>
            </Aux>
            
          );
          const userProfile = (
            <Aux>
                <NavItem>
                    <NavLink to="/bookdetails">BooksDetails</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/profile">Profile</NavLink>
                </NavItem>
            </Aux>
          );
          const guestLinks = (
            <NavItem >
                <NavLink to="/login">Login/Signup</NavLink>
            </NavItem>
          );
          const adminLinks = (
            <Aux>
                <NavItem>
                    <NavLink to="/addNewBook">AddNewBook</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/editBook">EditBooks</NavLink>
                </NavItem>
            </Aux>
            
          )
        return (
            <Aux>
                
                    <Navbar color="indigo" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <Logo />
                        </NavbarBrand>
                        { !this.props.isWideEnough && <NavbarToggler onClick = { this.props.clicked } />}
                        <Collapse isOpen = { this.props.collapse } navbar>
                            <NavbarNav left>
                              <NavItem >
                                  <NavLink to="/">Home</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink to="/books">Books</NavLink>
                              </NavItem>
                              { isAuthenticated === null ? ' ' : userProfile }
                              { localStorage.getItem('role') === "admin" ? adminLinks : ''}
                              
                            </NavbarNav>
                            <NavbarNav right>
                            {localStorage.getItem('isAuthenticated') ? userLinks : guestLinks}
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                
                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href=""><Logo /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="">Disabled</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav> */}
                
            </Aux>
        );
    }
} 

MenuBar.propTypes = {
    auth: PropTypes.object,
    logout:PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
      
    return {
      auth: state.auth,
    };
  }
export default connect(mapStateToProps, {logout})(MenuBar);