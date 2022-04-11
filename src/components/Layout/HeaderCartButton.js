import React, { Component } from 'react'

import CartIcon from '../../assets/cart.svg'

import CartContext from '../../store/CartContext'

export default class HeaderCartButton extends Component {

    static contextType = CartContext


    render() {
        
        console.log(this.context.items)

        const numberOfCartItems = this.context.items.reduce((curNumber, item)=>{
            return curNumber + item.amount
        }, 0)


        return (
            <button className="cart-button">

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
