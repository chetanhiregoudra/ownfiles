import React, {Component} from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[ordersummary]');
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKeys => {
                return (
                    <li key={igKeys}><span >{igKeys} </span>: {this.props.ingredients[igKeys]}</li>
                );
            })
        return(
            <Aux>
                <h3>Your order</h3>
                <p>Burger with following ingredients :</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Total Price : <strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;