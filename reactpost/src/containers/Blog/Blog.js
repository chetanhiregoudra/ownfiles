import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import './Blog.css';

const AsyncNewPost = asyncComponent(() =>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className='Blogs'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'chocolate',
                                textDecoration:'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit-item'
                            }}
                            activeClassName="my-active"
                            activeStyle={{
                                color:'chocolate',
                                textDecoration:'underline'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                
                <Switch>
                    { this.state.auth ? <Route path="/new-post"  component={AsyncNewPost} /> : null }
                    <Route path="/posts"  component={Posts} />
                    <Route render={()=> <h1>Not Found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;