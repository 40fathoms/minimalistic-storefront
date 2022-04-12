import React, { Component } from 'react'

import CartContext from '../../store/CartContext'

export default class TotalAmount extends Component {

    static contextType = CartContext

    render() {

        let updatedAmount = 0
        this.context.items.forEach(item => {
            return item.prices.forEach(price => {
                if (this.props.currentCurrency === price.currency.symbol) {
                    updatedAmount += price.amount * item.amount
                }
            })
        })

        const totalAmount = updatedAmount


        return (
            <p className="cart-overlay-amount">
                <span>Total</span>
                <span>{this.props.currentCurrency}{totalAmount}</span>
            </p>
        )
    }
}