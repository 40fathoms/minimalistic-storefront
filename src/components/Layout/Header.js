import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { nanoid } from 'nanoid'

import Logo from '../../assets/logo.svg'
import HeaderCurrency from './HeaderCurrency'
import HeaderCartButton from './HeaderCartButton'
import HeaderHamburger from './HeaderHamburger'

export default class Header extends Component {

    // Updates the new category
    changeCategory = (e) => {
        this.props.handleCategories(e.target.value)
    }

    render() {
        
        const categoriesListRender = this.props.categoriesList.map(category => {
            return (

                <Link to={'/'} key={nanoid()}>
                    <option
                        label={`${category.toUpperCase()}`}
                        value={category}
                        className={`${this.props.currentCategory === category ? "active" : ""}`}
                        onClick={this.changeCategory.bind(this)}
                    >
                    </option>
                </Link>

            )
        })

        return (
            <header className='header'>

                <nav className="header-categories hide-mobile">
                    {categoriesListRender}
                </nav>

                <img src={Logo} alt="Store logo" className="header-logo" />

                <div className="header-buttons hide-mobile">
                    <HeaderCurrency
                        currentCurrency={this.props.currentCurrency}
                        handleCurrency={this.props.handleCurrency.bind(this)}
                    />

                    <HeaderCartButton
                        handleCart={this.props.handleCart.bind(this)}
                    />

                </div>

                <HeaderHamburger
                    mobileMenuIsShown={this.props.mobileMenuIsShown}
                    handleMobile={this.props.handleMobile.bind(this)}
                />

            </header>
        )
    }
}
