import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Products from './data.js'

import Header from './components/Layout/Header'
import ProductsList from './components/Products/ProductsList.js';
import ProductDescriptionId from './components/Description/ProductDescriptionId';
import CartProvider from './store/CartProvider.js';
import Cart from './components/Cart/Cart.js';
import CartOverlay from './components/UI/CartOverlay.js';
import MobileOverlay from './components/UI/MobileOverlay.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentCurrency: "$",
      currentCategory: "all",
      cartIsShown: false,
      mobileMenuIsShown: false
    }
  }

  // Updates the chosen currency 
  handleCurrency(newCurrency) {
    this.setState({
      currentCurrency: newCurrency
    })
  }

  // Updates the filtered categories
  handleCategories(newCategory) {
    this.setState({
      currentCategory: newCategory
    })
  }

  // Handles the visibility of the cart overlay
  handleCart() {
    this.setState(prevState => {
      return { cartIsShown: !prevState.cartIsShown }
    })
  }

  // Handles the visibility of the mobile menu overlay
  handleMobileMenu() {
    this.setState(prevState => {
      return { mobileMenuIsShown: !prevState.mobileMenuIsShown }
    })
  }


  render = () => {

    //filters the products
    //the [0] index removes the object from the array, making it easier to work with
    const filteredProducts = Products.filter(product => {
      return product.name === this.state.currentCategory
    })[0]

    return (
      <Router>
        <CartProvider>

          {this.state.cartIsShown &&
            <CartOverlay
              handleModal={this.handleCart.bind(this)}
              currentCurrency={this.state.currentCurrency}

              handleCart={this.handleCart.bind(this)}
            />
          }

          {this.state.mobileMenuIsShown &&
            <MobileOverlay
              handleModal={this.handleMobileMenu.bind(this)}

              handleCurrency={this.handleCurrency.bind(this)}
              currentCurrency={this.state.currentCurrency}
              handleMobileMenu={this.handleMobileMenu.bind(this)}

              categoriesList={Products.map(item => item.name)}
              handleCategories={this.handleCategories.bind(this)}
            />
          }

          <Header
            currentCurrency={this.state.currentCurrency}
            handleCurrency={this.handleCurrency.bind(this)}

            categoriesList={Products.map(item => item.name)}
            currentCategory={this.state.currentCategory}
            handleCategories={this.handleCategories.bind(this)}

            handleCart={this.handleCart.bind(this)}
            handleMobile={this.handleMobileMenu.bind(this)}
            mobileMenuIsShown={this.state.mobileMenuIsShown}
          />

          <Routes>

            <Route path="/" element={
              <ProductsList
                products={filteredProducts}
                currentCurrency={this.state.currentCurrency}
                currentCategory={this.state.currentCategory}
              />
            }
            />

            <Route path="/product/:id" element={
              <ProductDescriptionId
                products={filteredProducts}
                currentCurrency={this.state.currentCurrency}
              />
            }
            />

            <Route path="/cart" element={
              <Cart
                currentCurrency={this.state.currentCurrency}
              />
            }
            />

          </Routes>

        </CartProvider>
      </Router>
    )
  }
}

export default App