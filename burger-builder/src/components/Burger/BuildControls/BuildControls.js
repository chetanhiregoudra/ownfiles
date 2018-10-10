import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'}
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => {
            console.log(ctrl.type)
            return <BuildControl
                key={ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                added ={() => props.ingredientsAdded(ctrl.type) }
                removed={() => props.ingredientsRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]}/>;
        })}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;