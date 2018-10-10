import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../assets/images/logo.png";

const userHeader = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img style={{height:"60px"}} src={logo} alt="ALT"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link"
                            to={'/home'}
                            activeStyle={{
                                color: '#fa923f'
                            }}> Home
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink 
                            className="nav-link"
                            to={'/xxx'}
                            activeStyle={{
                                color: '#fa923f'
                            }}>This is User Header
                        </NavLink>
                    </li>
                </ul>
                <ul className="mx-auto">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </ul>
                <ul className="my-2 my-lg-0 navbar-nav">
                    <li className="nav-item">
                        <p style={{color:"white", paddingRight: "30px"}}>Welcome {props.name}</p>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className=" nav-item nav-link"
                            to={'/logout'}
                            activeStyle={{
                            color: '#fa923f'
                            }}>Logout
                        </NavLink>
                    </li>
                </ul> 
            </div>
        </nav>
    );

};

export default userHeader;