import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container} from 'mdbreact';


import {api_url} from '../../config/config';
import { getBookDetails } from '../../actions/getbookdetails';
import BookReturn from './Book-Return/Book-Return';
import Aux from '../../hoc/_Aux';
// import Spinner from "../Spinner/Spinner";

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class BookDetails extends Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    
        this.state = {
          toggle: false,
        //   books:[],
          selectedisbn:'',
          returnDate:'',
          errors:'',
          showingAlert:false
        }
      }
    
      toggle(event) {
        this.setState(prevState => ({
          toggle: !prevState.toggle
        }));
      }
   
    getPickerValue = (value) => {
        console.log(value);
      }
   
    componentDidMount(){
        this.props.getBookDetails()
        // .then(res => {
        //     if(this.props.bookdetails !== null) this.setState({books:[...this.props.bookdetails]})
        // });
    }

    changeHandler = (e) => {
        alert(e.target.value);
       this.setState({returnDate: e.target.value});

    }

    renewHandler = (id) =>{
        if(localStorage.getItem('isAuthenticated') !== null){
            this.setState({selectedisbn:id});
            this.toggle();
        }
        else{
            this.setState({errors:"please Login!!!", showingAlert:true});
        }
        setTimeout(() => {
            this.setState({
              showingAlert: false,
              errors:''
            });
        }, 2000);
        
        
    }
      
    returnHandler = (id) => {
        if(localStorage.getItem('isAuthenticated') !== null){
            axios.delete(`${api_url}checkoutRouter/${id}`)
            .then(res => {
                    this.props.getBookDetails();
                    this.setState({errors:"returned!!", showingAlert:true});
                },
            err => this.setState({errors:"Some Error Occured!!", showingAlert:true}) )
        }
        else{
            this.setState({errors:"please Login!!!", showingAlert:true});
            
        }
        setTimeout(() => {
            this.setState({
              showingAlert: false,
              errors:''
            });
        }, 2000);
        
        
    }
   
    saveDataHandler = (e) => {
        this.toggle();
        const data ={
            isbn:this.state.selectedisbn,
            returnDate : new Date(this.state.returnDate).toDateString()
        }
        alert(data.returnDate)
        axios.put(`${api_url}checkoutRouter/bookrenewal`,data)
        .then(res => {
            this.setState({errors:"please Login!!!", showingAlert:true});
            this.props.getBookDetails();
        });
        setTimeout(() => {
            this.setState({
              showingAlert: false,
              errors:''
            });
        }, 2000);
    }
    
    render () {
        
        const error = (
            
            <div className={`alert alert-danger ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>{this.state.errors}</div>
        )
        return (
           <Aux>
               <Container>
                <div className="row">
                    <div className="col">
                        <h5 className="h2-responsive pb-4" >Return Details</h5>
                        { this.state.errors ? error : '' }
                        {/* {this.props.bookdetails !== null ? bookReturn : <Spinner />} */}
                        <BookReturn 
                            booklist={this.props.bookdetails}
                            renewBook={this.renewHandler}
                            returnBook={this.returnHandler} />
                    </div>
                    
                </div>
                <div  className="modal" style={this.state.toggle ? display : hide} >
                    <div className="modal-dialog">

                    
                        <div className="modal-content">
                        <div className="modal-header">
                        
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <input type="date" className="form-control" format="YYYY/MM/DD" value={this.state.returnDate} onChange={this.changeHandler}/>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" 
                                onClick={this.toggle} >Close</button>
                            <button type="button" className="btn btn-default" 
                                onClick={this.saveDataHandler} >Save</button>
                        </div>
                        </div>

                    </div>
                </div>
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Container className="mt-5">
                            
                           
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        <Button color="primary" onClick={this.toggle}>Save changes</Button>
                    </ModalFooter>
                </Modal> */}
                </Container>
           </Aux>
            
        );
    }
} 

BookDetails.propTypes ={
    bookdetails: PropTypes.array,
    getBookDetails: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    
    return {
        bookdetails : state.bookdetails
    }
}
export default connect(mapStateToProps, { getBookDetails })(BookDetails);