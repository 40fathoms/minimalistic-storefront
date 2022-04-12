import React, { Component } from 'react'

import CartIcon from '../../assets/cart.svg'

import CartContext from '../../store/CartContext'

export default class HeaderCartButton extends Component {

    static contextType = CartContext


    render() {

        const numberOfCartItems = this.context.items.reduce((curNumber, item)=>{
            return curNumber + item.amount
        }, 0)


        return (
            <button className="cart-button" onClick={this.props.handleCart.bind(this)}>

                <img src={CartIcon} alt="cart icon" />

                {numberOfCartItems > 0 &&
                    <span className="cart-button-items">
                        {numberOfCartItems}
                    </span>
                }

            </button>
        )
    }
}
