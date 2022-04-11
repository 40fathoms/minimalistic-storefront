import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import DescriptionAttributes from './DescriptionAttributes'

export default class DescriptionContent extends Component {

    constructor() {
        super()

        this.state = {
            attributes: {}
        }
    }

    handleSubmitCart(e, attributes){
        e.preventDefault()
        console.log(attributes)
    }

    render() {

        const item = this.props.currentItem

        // displays the product price according to the selected currency
        const currentItemPrice = item.prices.filter(price => {
            return price.currency.symbol === this.props.currentCurrency
        })[0]

        // handles the selected attributes
        let currentAttributes = {}
        const handleAttribute = (name, type, value, label, id) => {
            currentAttributes = { ...currentAttributes, [name]: { type: type, name: name, value: value, label: label, id: id } }
        }

        return (
            <form className="description-content" onSubmit={(e) => {this.handleSubmitCart(e, currentAttributes)}}>

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

                <button className="button">ADD TO CART</button>

                <div className="about" dangerouslySetInnerHTML={{ __html: item.description }} />

            </form>
        )
    }
}
