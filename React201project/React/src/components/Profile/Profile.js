import React, { Component } from 'react';
import axios from 'axios';
import { api_url } from '../../config/config';
// import Aux from '../../hoc/_Aux';
import { NavLink, Fa } from 'mdbreact';

class Profile extends Component {
    state = { prof: [] };
    componentDidMount() {
        const user = localStorage.getItem('user');
        //console.log("user: " + user)
        axios.get(`${api_url}user/getUserByName/${user}`)
            .then(res => {
                console.log(res.data.user)
                this.setState({ prof: res.data.user })
            }
            );

    }
    render() {
        const emptymsg = (
            <p>User Not Found</p>
        )
        this.state.prof.name
        const msg =
            (
                <div className="container">
                    <div className="row">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 style={{ margin: "2% 0% 0% 9%", color: "brown" }}>{this.state.prof.name}</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 " > <img alt="User Pic" src="https://strategichealthcare.net/wp-content/uploads/2016/11/icon-user-200x200.png" class="img-circle img-responsive" /> </div>
                                    <div className=" col-md-6 col-lg-6 ">
                                        <br /><r />
                                        <table className="table table-user-information">
                                            <tbody>
                                                <tr>
                                                    <td style={{ color: "brown", fontWeight: "bold" }}> Role&nbsp;&nbsp;&nbsp;:</td>
                                                    <td style={{ fontWeight: "bold" }}>{this.state.prof.role}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ color: "brown", fontWeight: "bold" }}>UserId:</td>
                                                    <td style={{ fontWeight: "bold" }}>{this.state.prof.userID}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ color: "brown", fontWeight: "bold" }}>Email :</td>
                                                    <td style={{ fontWeight: "bold" }}>{this.state.prof.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button className="btn btn-info btn-lg" style={{ margin: "0% 0% 0% 55%" }} >
                                        <NavLink to="/books" style={{ color: "white" }}>    Borrow Books</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        return (

            <div className="container" style={{ marginTop: "1%" }}>
                {this.state.prof.length !== 0 ? msg : emptymsg}
            </div>
        );
    }

}

export default Profile;
