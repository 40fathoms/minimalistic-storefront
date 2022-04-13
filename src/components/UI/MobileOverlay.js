import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { nanoid } from 'nanoid'

import HeaderCurrency from '../Layout/HeaderCurrency'
import HeaderCartButton from '../Layout/HeaderCartButton'

import Modal from '../UI/Modal'

export default class MobileOverlay extends Component {

    // Updates the new category
    changeCategory = (e) => {
        this.props.handleCategories(e.target.value)
    }

    componentWillMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }

    render() {

        const categoriesListRender = this.props.categoriesList.map(category => {
            return (

                <Link to={'/'} key={nanoid()}>
                    <option
                        label={`${category.toUpperCase()}`}
                        value={category}
                        onClick={this.changeCategory.bind(this)}
                    >
                    </option>
                </Link>

            )
        })


        return (
            <Modal handleModal={this.props.handleModal}>

                <div className="mobile-overlay">

                    <div className="mobile-overlay-selector">

                        <HeaderCurrency
                            currentCurrency={this.props.currentCurrency}
                            handleCurrency={this.props.handleCurrency.bind(this)}
                        />

                        <Link to={'/cart'}>
                            <HeaderCartButton
                                handleCart={this.props.handleMobileMenu.bind(this)}
                            />
                        </Link>

                    </div>

                    <div
                        className="mobile-overlay-categories"
                        onClick={this.props.handleMobileMenu.bind(this)}
                    >
                        {categoriesListRender}
                    </div>



                </div>




            </Modal>
        )
    }
}
