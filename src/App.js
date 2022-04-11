import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Products from './data.js'

import Header from './components/Layout/Header'
import ProductsList from './components/Products/ProductsList.js';
import ProductDescriptionId from './components/Description/ProductDescriptionId';

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
    //the [0] index removes the object from the array, making it easier to work with
    const filteredProducts = Products.filter(product => {
      return product.name === this.state.currentCategory
    })[0]

    return (
      <Router>

        <Header
          currentCurrency={this.state.currentCurrency}
          handleCurrency={this.handleCurrency.bind(this)}

          categoriesList={Products.map(item => item.name)}
          currentCategory={this.state.currentCategory}
          handleCategories={this.handleCategories.bind(this)}
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

        </Routes>

      </Router>
    )
  }
}

export default App