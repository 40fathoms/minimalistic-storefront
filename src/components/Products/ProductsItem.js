import React, { Component } from 'react'
import { Link } from "react-router-dom"

import CartIcon from '../../assets/cart-white.svg'

export default class ProductItem extends Component {

    render() {

        const currentItem = this.props.item

        const currentItemPrice = currentItem.prices.filter(price => {
            return price.currency.symbol === this.props.currentCurrency
        })[0]

        const isAvailable = currentItem.inStock

        return (
            <div className="products-list-item">

                {!isAvailable &&
                    <>
                        <div className="out-of-stock">OUT OF STOCK</div>
                        <div className="out-of-stock-overlay"></div>
                    </>
                }

                <Link
                    to={`/product/${currentItem.id}`}
                    className={`${!isAvailable ? 'unavailable':''}`}
                >

                    <img
                        className="products-list-item-image"
                        src={currentItem.gallery[0]}
                        alt="Product"
                    />

                    <span className="products-list-item-cart">
                        <img src={CartIcon} alt="cart icon" />
                    </span>

                    <div className="products-list-item-content">
                        <h3>{currentItem.brand} {currentItem.name}</h3>
                        <p>{currentItemPrice.currency.symbol} {currentItemPrice.amount}</p>
                    </div>

                </Link>

            </div>
        )
    }
}
