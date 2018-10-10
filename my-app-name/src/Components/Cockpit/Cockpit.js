import React from 'react'

import Radium, {StyleRoot} from 'radium'
import Aux from '../../hoc/Aux'
import Cockpit from './Cockpit.css'

const cockpit = ( props ) => {
    const style = {
        backgroundColor: 'green',
        border : '1px solid black',
        cursor : 'pointer',
        font : 'inherit',
        color : 'white',
        ':hover':{
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };
    const Cockpit = [];
    if(props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
        backgroundColor : 'salmon',
        color:'black'
        }
    }
       
    if(props.persons.length <= 2){
        Cockpit.push('red')
    }

    if(props.persons.length <= 1){
        Cockpit.push('bold')
    }
    return (
        <StyleRoot>
            <Aux>
                <h1>{props.title}</h1>
                <p className={Cockpit.join(' ')}>Dynamic Styling</p> 
                <button style={style} onClick={props.clicked}>Switch Name</button>
            </Aux>
        </StyleRoot>
    );
}

export default Radium(cockpit)