import React, { Component } from 'react';
import axios from 'axios';
import {api_url} from '../../config/config';


class EditBookDetails extends Component {

    state = {
        BookIsbn : '',
        form: false
    };
    searchHandler = () => {
        var ISBN = document.getElementById("isbnInput").value;
        if (ISBN === "") {
            alert("Please enter valid ISBN");
        }
        else {
            axios.get(`${api_url}book/${ISBN}`)
                .then((response) => {       
                    this.setState({
                        form : true,
                        BookIsbn : ISBN
                    })

                    document.getElementById("author").value = response.data.book[0].author; 
                    document.getElementById("title").value = response.data.book[0].title;
                    document.getElementById("publishDate").value = response.data.book[0].publishDate;
                    document.getElementById("publisher").value = response.data.book[0].publisher;
                    document.getElementById("url").value =response.data.book[0].url;
                    document.getElementById("picUrl").value = response.data.book[0].picUrl;
                    document.getElementById("totalPage").value = response.data.book[0].totalPage;
                    document.getElementById("category").value = response.data.book[0].category;
                    document.getElementById("quantity").value = response.data.book[0].quantity;
                    
                    alert(response.data.message);

                    
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        }
    }

    saveBookhandler =(event) =>{
        var totalPageInt = parseInt(event.target.totalPage.value,10);
        var quantityInt = parseInt(event.target.quantity.value,10);
        var dataObject = {isbn:this.state.BookIsbn, title:event.target.title.value ,author:event.target.author.value ,publishDate:event.target.publishDate.value ,publisher:event.target.publisher.value ,url:event.target.url.value ,picUrl:event.target.picUrl.value ,totalPage:totalPageInt ,category:event.target.category.value, quantity:quantityInt};
        axios.post(`${api_url}book/updateBook`,dataObject)
        .then((response)=>{
            alert(response.data.message);
            document.getElementById("updateBookForm").reset();
        })
        .catch((err)=>{alert(err.response.data.message);});
        event.preventDefault();
    }


    render() {
        let block = (
            <div>
                <h2 align="center">Change field values as per requirement</h2>
            <div className="row mx-auto" style={{ border: "1px solid black", padding: "20px", width: "500px" }}>
                <br />
                <form className="mx-auto" id="updateBookForm" onSubmit={this.saveBookhandler}>
                    <div className="form-group">
                        <label >Book Titile:</label>
                        <input type="text" name="title" className="form-control" id="title" required />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" name="author" className="form-control" id="author" />
                    </div>
                    <div className="form-group">
                        <label>Number of pages:</label>
                        <input type="text" name="totlPage" className="form-control" id="totalPage" />
                    </div>
                    <div className="form-group">
                        <label>Publish Date:</label>
                        <input type="text" name="publishDate" className="form-control" id="publishDate" />
                    </div>
                    <div className="form-group">
                        <label>Publisher:</label>
                        <input type="text" name="publisher" className="form-control" id="publisher" />
                    </div>
                    <div className="form-group">
                        <label>Book details URL:</label>
                        <input type="text" name="url" className="form-control" id="url" />
                    </div>
                    <div className="form-group">
                        <label>Cover Picture URL:</label>
                        <input type="text" name="picUrl" className="form-control" id="picUrl" />
                    </div>
                    <div className="form-group">
                        <label>Book Category:</label>
                        <select name="category" className="form-control" id="category" required>
                            <option value=""> -- Select a Category -- </option>
                            <option value="Text Book">Text Book</option>
                            <option value="Computer and Tech">Computer and Tech</option>
                            <option value="Science">Science</option>
                            <option value="Bussiness">Bussiness</option>
                            <option value="Biographies">Biographies</option>
                            <option value="History">History</option>
                            <option value="Arts and Music">Arts and Music</option>
                            <option value="Kids">Kids</option>
                            <option value="Comics">Comics</option>
                            <option value="Health and fitness">Health and fitness</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Total quantity available:</label>
                        <input type="text" name="quantity" className="form-control" id="quantity" required />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
            <br/>
            </div>
        );
        let showDiv = this.state.form ? block : null;
        return (
            <div className="conatiner">
                <br />
                <div className="row ">
                    <div className="col-md-6 mx-auto">
                        <h2 align="center">Enter ISBN of the Book to Edit it</h2>
                        <div id="custom-search-input">
                            <div className="input-group col-md-12">
                                <input type="text" id="isbnInput" className="form-control input-lg" placeholder="Enter ISBN" />
                                <span className="input-group-btn">
                                    <button className="btn btn-info btn-lg" onClick={this.searchHandler} type="button">Search And Edit</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {showDiv}
            </div>
        );
    };
}

export default EditBookDetails;