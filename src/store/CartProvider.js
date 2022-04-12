import React from 'react'

import CartContext from './CartContext'

const defaultCartState = {
    items: []
}

const CartReducer = (state, action) => {

    if (action.type === 'ADD') {

        // checks if the attributes are the same
        function checkAttributes(currentState) {

            let sameAttributes = true

            //checks for each attribute
            Object.keys(action.item.attributes).forEach(attribute => {
                //checks for each item inside an attribute (type, value, etc) and compares to the current attribute state
                Object.keys(action.item.attributes[attribute]).forEach(item => {
                    if (action.item.attributes[attribute][item] !== currentState[attribute][item]) {
                        sameAttributes = false
                    }
                })
            })

            return sameAttributes
        }

        let existingCartItemIndex
        if (state.items.length > 0) {

            // checks for an already existing item
            existingCartItemIndex = state.items.findIndex(
                item => (
                    item.brand === action.item.brand &&
                    item.name === action.item.name &&
                    checkAttributes(item.attributes)
                )
            )

        }

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItem
        let updatedItems

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item)
        }

        return { items: updatedItems }

    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        )

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { items: updatedItems }
    }

    return defaultCartState
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = React.useReducer(CartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext} >{props.children}</CartContext.Provider>
}

export default CartProvider