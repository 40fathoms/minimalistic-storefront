import React, { Component } from 'react'

import Products from './data.js'

import Header from './components/Layout/Header'
import ProductsList from './components/Products/ProductsList.js';

class App extends Component {

  constructor() { 
    super();

    this.state = {
      currentCurrency: "$",
      currentCategory: "all"
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


  render = () => {


    //filters the products
    const filteredProducts = Products.filter(product => {
      return product.name === this.state.currentCategory
    })

    return (
      <React.Fragment>

        <Header
          currentCurrency={this.state.currentCurrency}
          handleCurrency={this.handleCurrency.bind(this)}

          categoriesList={Products.map(item => item.name)}
          currentCategory={this.state.currentCategory}
          handleCategories={this.handleCategories.bind(this)}
        />

        <ProductsList
          products={filteredProducts}

          currentCurrency={this.state.currentCurrency}
          currentCategory={this.state.currentCategory}
        />

      </React.Fragment>
    )
  }
}

export default App