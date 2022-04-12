import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { nanoid } from 'nanoid'
import Modal from './Modal'

import CartContext from '../../store/CartContext'
import CartItem from '../Cart/CartItem'
import TotalAmount from './TotalAmount'

export default class CartOverlay extends Component {

    static contextType = CartContext

    componentWillMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }

    render() {

        const numberOfCartItems = this.context.items.reduce((curNumber, item) => {
            return curNumber + item.amount
        }, 0)

        return (
            <Modal handleModal={this.props.handleModal}>

                <div className="cart-overlay">

                    <p className="cart-overlay-number-items">
                        <strong>My Bag</strong>, {numberOfCartItems} item{numberOfCartItems === 1 ? '' : 's'}
                    </p>

                    <div
                        className="cart-overlay-items"
                    >
                        {this.context.items.map(item => {
                            return (
                                <CartItem
                                    key={nanoid()}
                                    item={{ ...item }}
                                    overlay={true}
                                    currentCurrency={this.props.currentCurrency}
                                />
                            )
                        })}
                    </div>

                    <TotalAmount
                        currentCurrency={this.props.currentCurrency}
                    />

                    <div className="cart-overlay-buttons">

                        <button
                            className="cart"
                            onClick={this.props.handleCart.bind(this)}
                        >
                            <Link to={'/cart'}>VIEW BAG</Link>
                        </button>

                        <button className="check">
                            CHECKOUT
                        </button>

                    </div>

                </div>

            </Modal>
        )
    }
}
