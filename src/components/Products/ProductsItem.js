import React, { Component } from 'react'

import CartIcon from '../../assets/cart-white.svg'

export default class ProductItem extends Component {

    getInfo(){
        console.log(this.props.item)
    }

    render() {

        const currentItem = this.props.item

        const currentItemPrice = currentItem.prices.filter(price => {
            return price.currency.symbol === this.props.currentCurrency
        })


        return (
            <div className="products-list-item" onClick={this.getInfo.bind(this)}>
                <img
                    src={currentItem.gallery[0]}
                    className="products-list-item-image"
                    alt="Product"
                />

                <span className="products-list-item-cart">
                    <img src={CartIcon} alt="cart icon" />
                </span>

                <div className="products-list-item-content">
                    <h3>{currentItem.brand} {currentItem.name}</h3>
                    <p>{currentItemPrice[0].currency.symbol} {currentItemPrice[0].amount}</p>
                </div>

            </div>
        )
    }
}
