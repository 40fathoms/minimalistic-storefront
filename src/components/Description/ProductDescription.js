import React, { Component } from 'react'

import DescriptionContent from './DescriptionContent'
import DescriptionGallery from './DescriptionGallery'

export default class ProductDescription extends Component {

    constructor(props) {
        super(props)

        // selects the current object, according to the router param
        const filteredItem = this.props.products.products.filter(product => {
            return product.id === this.props.productId
        })[0]

        const defaultImage = filteredItem.gallery[0]

        this.state = {
            currentItem: filteredItem,
            currentImage: defaultImage
        }
    }

    // Updates the displayed image
    handleCurrentImage(item) {
        this.setState({
            currentImage: item
        })
    }

    render() {

        return (
            <section className="description">

                <DescriptionGallery
                    currentItem={this.state.currentItem}
                    currentImage={this.state.currentImage}
                    handleCurrentImage={this.handleCurrentImage.bind(this)}
                />

                <DescriptionContent
                    currentItem={this.state.currentItem}
                    currentCurrency={this.props.currentCurrency}
                />

            </section>
        )
    }
}