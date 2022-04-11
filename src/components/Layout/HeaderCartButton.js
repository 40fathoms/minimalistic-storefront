import React, { Component } from 'react'

import CartIcon from '../../assets/cart.svg'

export default class HeaderCartButton extends Component {




    render() {

        /*const numberOfCartItems = cartContext.items.reduce((curNumber, item)=>{
            return curNumber + item.amount
        }, 0)*/
        const numberOfCartItems = 0


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
