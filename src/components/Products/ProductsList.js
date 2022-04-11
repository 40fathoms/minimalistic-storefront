import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import ProductsItem from './ProductsItem'

export default class ProductsList extends Component {

    render() {

        const productsList = this.props.products.products

        const productsItem = productsList.map(product => {
            return (
                <ProductsItem
                    key={nanoid()}
                    item={{ ...product }}
                    
                    currentCurrency={this.props.currentCurrency}
                />
            )
        })


        return (
            <main className="products">

                <h1>
                    {this.props.currentCategory === "all" ?                    
                        `${this.props.currentCategory[0].toUpperCase()
                            .concat(this.props.currentCategory.slice(1))} products`                    
                        :                    
                        this.props.currentCategory[0].toUpperCase()
                            .concat(this.props.currentCategory.slice(1))
                    }
                </h1>

                <section className="products-list">
                    {productsItem}
                </section>

            </main>
        )
    }
}