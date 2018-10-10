import React, { Component } from 'react';
import './ErrorPage.css';


class Errorpage extends Component {
    render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found
                            </h2>
                            <div class="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div class="error-actions">
                                <a href="/home" class="btn btn-primary btn-lg">Take Me Home </a>
                                <a href="/contact" class="btn btn-secondary btn-lg"> Contact Support </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Errorpage;