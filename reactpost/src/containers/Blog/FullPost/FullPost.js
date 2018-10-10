import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadPost:null
    }
    componentDidMount(){
        
        console.log(this.props.match.params.id)
        this.loadData();
        
    }
    componentDidUpdate(){
        console.log(this.props.match.params.id)
        this.loadData();
    }
    loadData (){
        if(this.props.match.params.id)
        {
            if(!this.state.loadPost || (this.state.loadPost && this.state.loadPost.id !== +this.props.match.params.id)){
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({loadPost: response.data})
                    console.log(response);
                });
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
    }

    render () {
        
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign:'center'}}>Loading!!!!!!</p>;
        }
        if(this.state.loadPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadPost.title}</h1>
                    <p>{this.state.loadPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;