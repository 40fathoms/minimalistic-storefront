import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from './ProductDescription'

/* 
This functional component only exists to get the selected product id via 
the useParams hook. It works as a bridge between App.js and ProductDescription.js
*/

const ProductDescriptionId = (props) => {
    const params = useParams()
    return (
        <ProductDescription
            productId={params.id}
            products={props.products}
            currentCurrency={props.currentCurrency}
        />
    )
}

export default ProductDescriptionId