import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import Logo from '../../assets/logo.svg'
import HeaderCurrency from './HeaderCurrency'
import HeaderCartButton from './HeaderCartButton'
import HeaderHamburger from './HeaderHamburger'

export default class Header extends Component {

    constructor() {
        super()

        this.state = {
            mobileMenuVisible: false
        }
    }

    // handles the mobile menu visibility
    handleMobileMenu = () => {
        this.setState(curState => {
            return { mobileMenuVisible: !curState.mobileMenuVisible }
        })
    }

    // Updates the new category
    changeCategory = (e) => {
        this.props.handleCategories(e.target.value)
    }

    render() {

        const categoriesListRender = this.props.categoriesList.map(category => {
            return (
                <option
                    key={nanoid()}
                    label={`${category.toUpperCase()}`}
                    value={category}
                    className={`${this.props.currentCategory === category ? "active":""}`}
                    onClick={this.changeCategory.bind(this)}
                >
                </option>
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

                    <HeaderCartButton />
                </div>

                <HeaderHamburger
                    mobileMenuVisible={this.state.mobileMenuVisible}
                    handleMobileMenu={this.handleMobileMenu.bind(this)}
                />

            </header>
        )
    }
}
