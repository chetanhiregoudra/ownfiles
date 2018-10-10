import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Home from '../../components/Home/Home';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

class LibraryMain extends Component{
    render () {
        return(
            <div>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/thumbnail/:id" exact  component={Thumbnail} />
                
                
            </div>
        );
    }
}

export default LibraryMain;