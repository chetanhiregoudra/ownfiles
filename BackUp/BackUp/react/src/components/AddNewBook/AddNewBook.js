import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';

class AddNewBook extends Component {
    showDiv;
    state = {
        waiting: "",
    }
    searchHandler = () => {
        var ISBN = document.getElementById("isbnInput").value;
        if(ISBN===""){
            alert("Please enter valid ISBN");
        }
        else {
            this.setState({ waiting: "loading" });
            var url = "http://openlibrary.org/api/books?bibkeys=ISBN:" + ISBN + "&jscmd=data&format=json";
            axios.get(url)
            .then((res) => {
                var key = "ISBN:" + ISBN;
                if ((Object.keys(res.data).length) < 1)
                    this.setState({ waiting: "failed" });
                else
                    this.setState({ waiting: "success" });
                //console.log(res.data);
                if((Object.keys(res.data).length) >= 1){
                    if(res.data[key].authors && res.data[key].authors[0].name) document.getElementById("author").value = res.data[key].authors[0].name; else document.getElementById("author").value ="NA";
                    if(res.data[key].title) document.getElementById("title").value = res.data[key].title; else document.getElementById("title").value ="NA";
                    document.getElementById("isbn").value = ISBN;
                    if(res.data[key].publish_date) document.getElementById("publishDate").value = res.data[key].publish_date; else document.getElementById("publishDate").value ="NA";
                    if(res.data[key].publishers && res.data[key].publishers[0].name) document.getElementById("publisher").value = res.data[key].publishers[0].name; else document.getElementById("publisher").value ="NA";
                    if(res.data[key].url) document.getElementById("url").value = res.data[key].url; else document.getElementById("url").value="NA";
                    if(res.data[key].cover && res.data[key].cover.medium) document.getElementById("picUrl").value = res.data[key].cover.medium;else document.getElementById("picUrl").value="NA";
                    if(res.data[key].number_of_pages) document.getElementById("totalPage").value = res.data[key].number_of_pages; else  document.getElementById("totalPage").value= "000" ;     
                }
            })
        }       
    };

    saveBookhandler =(event) =>{
        var totalPageInt = parseInt(event.target.totalPage.value,10);
        var quantityInt = parseInt(event.target.quantity.value,10);
        var dataObject = {isbn:event.target.isbn.value, title:event.target.title.value ,author:event.target.author.value ,publishDate:event.target.publishDate.value ,publisher:event.target.publisher.value ,url:event.target.url.value ,picUrl:event.target.picUrl.value ,totalPage:totalPageInt ,category:event.target.category.value, quantity:quantityInt};
        axios.post('http://localhost:3001/librarian/addBook',dataObject)
        .then((response)=>{
            alert(response.data.message);
            document.getElementById("addBookForm").reset();
        })
        .catch((err)=>{alert(err.response.data.message);});
        event.preventDefault();
    }

    render() {
        let showDiv1 = this.state.waiting === "loading" ? <Spinner /> : null;
        let showDiv2 = this.state.waiting === "failed" ? <h2 align="center" style={{ color: "red" }}>Book details could not be Found.Ener it Manually</h2> : null;
        let showDiv3 = this.state.waiting === "success" ? <h2 align="center" style={{ color: "green" }}>Book details Found.</h2> : null;
        return (
            <div className="conatiner">
                <br />
                <div className="row ">
                    <div className="col-md-6 mx-auto">
                        <h2 align="center">Add Book By ISBN</h2>
                        <div id="custom-search-input">
                            <div className="input-group col-md-12">
                                <input type="text" id="isbnInput" className="form-control input-lg" placeholder="Enter ISBN" />
                                <span className="input-group-btn">
                                    <button className="btn btn-info btn-lg" onClick={this.searchHandler} type="button">Search And Add</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {showDiv1}
                {showDiv2}
                {showDiv3}
                <hr/>
                <h3 align="center">Add Book Details Manually</h3>
                <div className="row mx-auto" style={{border:"1px solid black", padding: "20px", width: "500px"}}>
                    <br />
                    <form className="mx-auto" id="addBookForm" onSubmit={this.saveBookhandler}>
                        <div className="form-group">
                            <label >Book Titile:</label>
                            <input type="text" name="title" className="form-control" id="title" required />
                        </div>
                        <div className="form-group">
                            <label>Author:</label>
                            <input type="text" name="author" className="form-control" id="author" />
                        </div>
                        <div className="form-group">
                            <label>ISBN:</label>
                            <input type="text" name="isbn" className="form-control" id="isbn" required/>
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
                            <button type="submit" className="btn btn-primary">Add Book</button>
                        </div>
                    </form>
                </div>
                <br/>

            </div >
        );
    };
}

export default AddNewBook;