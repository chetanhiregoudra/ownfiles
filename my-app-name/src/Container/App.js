import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import withClass1 from '../hoc/withClass1'
import Aux from '../hoc/Aux'
class App extends Component {
  state = {
    persons : [
      {name : "chetan", age : 28},
      {name : "nishant", age : 28},
      {name : "shwetha", age : 25},
    ],
    showPersons : false
  }
  
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons:[
  //       {name : newName, age : 28},
  //       {name : "nishant MA", age : 27},
  //       {name : "shwetha M", age : 25}
  //     ]
  //   })
  // }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({person : persons})
  }


  changeNameHandler = ( event , personIndex ) => {
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  
  

  render() {
    
    let  persons = null;

    if(this.state.showPersons)
    {
      persons = (
       
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}/>
          );
          
            
       
      
      
    }
    console.log("vvv"+classes.App);
    return (
     
      <Aux>
      <Cockpit 
        title={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {
          persons
          /* {
          this.state.showPersons === true ?
            <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,"Chetan Hiregoudra")} 
                changed={this.changeNameHandler}>my Hobbies : Reading </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
              </div> : null
        } */}
       
              
      </Aux>
     
    );
  }
}

export default withClass1(App,"App");
