import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import CartContext from '../../store/CartContext'

export default class CartItem extends Component {

    static contextType = CartContext

    // Adds the item to the cart
    handleAddItemToCart(cartItem) {
        this.context.addItem({ ...cartItem, amount: 1 })
    }

    // Removes the item from the cart
    handleRemoveItemFromCart(id) {
        // Adds the item to the cart
        this.context.removeItem(id)
    }

    render() {

        const item = this.props.item

        // displays the product price according to the selected currency
        const currentItemPrice = item.prices.filter(price => {
            return price.currency.symbol === this.props.currentCurrency
        })[0]

        return (
            <div className={`cart-item ${this.props.overlay?'overlay':''}`}>

                <div className="cart-item-content">

                    <h3 className="cart-item-content-brand">{item.brand}</h3>
                    <h3 className="cart-item-content-name">{item.name}</h3>
                    <h3 className="cart-item-content-price">
                        {currentItemPrice.currency.symbol} {currentItemPrice.amount}
                    </h3>

                    <div className="cart-item-content-attributes">

                        {Object.keys(item.attributes).map(attribute => {
                            return (
                                <div className="cart-item-content-attribute" key={nanoid()}>
                                    <h3>{attribute}:</h3>

                                    <span
                                        style={{ backgroundColor: item.attributes[attribute].type === 'swatch' ? item.attributes[attribute].value : '' }}
                                    >
                                        {
                                            item.attributes[attribute].type !== 'swatch' ?
                                                item.attributes[attribute].value : ""
                                        }
                                    </span>

                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className="cart-item-action">

                    <button
                        className="add-cart-item"
                        onClick={() => { this.handleAddItemToCart(item) }}
                    >
                        <span></span><span className="add-cart-item-rotate"></span>
                    </button>

                    <span className="cart-item-action-amount">{item.amount}</span>

                    <button
                        className="remove-cart-item"
                        onClick={() => { this.handleRemoveItemFromCart(item.id) }}
                    >
                        <span></span>
                    </button>

                </div>

                <div className="cart-item-gallery">
                    <img src={item.gallery[0]} alt="Cart Item" />
                </div>

            </div>
        )
    }
}
