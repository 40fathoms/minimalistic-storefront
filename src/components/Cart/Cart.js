import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import CartItem from './CartItem'

import CartContext from '../../store/CartContext'

export default class Cart extends Component {

    static contextType = CartContext

    render() {

        console.log(this.context.items)

        return (
            <section className="cart">

                <h2 className="cart-title">
                    CART
                </h2>

                <div className="cart-items">
                    {this.context.items.map(item => {
                        return (
                            <CartItem
                                key={nanoid()}
                                item={{ ...item }}
                                currentCurrency={this.props.currentCurrency}
                            />
                        )
                    })}
                </div>

            </section>
        )
    }
}
