import React from 'react';
import Radium from 'radium';
import Person from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass1 from '../../../hoc/withClass1'

const person = (props) => {
    // const style ={
    //     '@media (min-width:500px)':{
    //         width: '450px'
    //     }
    // }
    return (
    <Aux>
        <p onClick={props.click}>I am {props.name} and age {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
    )
}

export default withClass1(person,"Person");