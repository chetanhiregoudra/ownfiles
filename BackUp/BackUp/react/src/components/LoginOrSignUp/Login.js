import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

class Login extends Component {
   

    state = {
        isLoggedIn : false,
        role : null,
    };
  

    LoginHandler = (event)=>{
        var data = {
            userId : event.target.userId.value,
            password: event.target.password.value
        };

        axios.post('http://localhost:3001/user/login', data)
        .then((res)=>{
            this.setState({
                isLoggedIn : true,
                role : res.data.user.role
            });
            this.props.changeHeader(res.data.user.role, res.data.user.name);
            alert("Welcome "+res.data.user.name);
        })
        .catch((error)=>{
            alert(error.response.data.message); 
        })
        event.preventDefault();
    };

    render() {
        return(
            <div className="login-form">
            <form onSubmit={this.LoginHandler}>
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" name="userId" placeholder="Email/UserID" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" minLength="4" required="required"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me &nbsp;</label>
                    <a href="/forget" className="pull-right">Forgot Password?</a>
                </div>        
            </form>
            <p className="text-center"> <NavLink to={'/register'}>Create an Account</NavLink></p>
        </div>
        );
    };
}

export default Login;