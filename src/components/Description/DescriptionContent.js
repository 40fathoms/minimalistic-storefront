import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import DescriptionAttributes from './DescriptionAttributes'

import CartContext from '../../store/CartContext'

export default class DescriptionContent extends Component {

    static contextType = CartContext

    // handles the item added to the cart
    handleSubmitCart(e, currentItem, chosenAttributes) {
        e.preventDefault()

        //checks if the user selected all attributes
        if (this.props.currentItem.attributes.length !== Object.keys(chosenAttributes).length) {
            return alert("Please select all attributes before ordering.")
        }

        const cartItem = {
            id: nanoid(),
            brand: currentItem.brand,
            name: currentItem.name,
            gallery: currentItem.gallery,
            prices: currentItem.prices,
            attributes: chosenAttributes,
            amount: 1
        }

        // Adds the item to the cart
        this.context.addItem(cartItem)
    }

    render() {
        
        const item = this.props.currentItem

        // displays the product price according to the selected currency
        const currentItemPrice = item.prices.filter(price => {
            return price.currency.symbol === this.props.currentCurrency
        })[0]

        // handles the selected attributes
        let chosenAttributes = {}
        const handleAttribute = (name, type, value, label, id) => {
            chosenAttributes = { ...chosenAttributes, [name]: { type: type, name: name, value: value, label: label, id: id } }
        }

        return (
            <form
                className="description-content"
                onSubmit={(e) => {
                    this.handleSubmitCart(
                        e,
                        item,
                        chosenAttributes
                    )
                }}
            >

                <div className="title">
                    <h2>{item.brand}</h2>
                    <h3>{item.name}</h3>
                </div>

                {item.attributes.map(attribute => {
                    return (
                        <DescriptionAttributes
                            key={nanoid()}
                            attribute={attribute}
                            handleAttribute={handleAttribute.bind(this)}
                        />
                    )
                })}

                <div className="price">
                    <h3>PRICE:</h3>
                    <p>{currentItemPrice.currency.symbol} {currentItemPrice.amount}</p>
                </div>

                <button
                    className="button"
                >ADD TO CART</button>

                <div className="about" dangerouslySetInnerHTML={{ __html: item.description }} />

            </form>
        )
    }
}
