import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import Arrow from '../../assets/currency-button-arrow.svg'

export default class HeaderCurrency extends Component {

    constructor() {
        super()

        this.state = {
            currencyMenuIsVisible: false
        }
    }

    // Updates the new currency
    changeCurrency = (e) => {
        this.props.handleCurrency(e.target.value)
    }

    // handles the currency menu visibility
    handleCurrencyMenu = () => {
        this.setState(curState => {
            return { currencyMenuIsVisible: !curState.currencyMenuIsVisible }
        })
    }
    

    render() {

        const currenciesList = [
            { label: "USD", symbol: "$" },
            { label: "GBP", symbol: "£" },
            { label: "AUD", symbol: "A$" },
            { label: "JPY", symbol: "¥" },
            { label: "RUB", symbol: "₽" }
        ]

        const currenciesListRender = currenciesList.map(currency => {
            return (
                <option
                    key={nanoid()}
                    label={`${currency.symbol} ${currency.label}`}
                    value={currency.symbol}

                    onClick={this.changeCurrency.bind(this)}
                >
                </option>
            )
        })

        return (
            <div
                className='currency-button'
                onClick={this.handleCurrencyMenu.bind(this)}
            >

                <button>
                    {this.props.currentCurrency}
                    <img
                        className={`${this.state.currencyMenuIsVisible ? 'active' : ''}`}
                        src={Arrow}
                        alt="arrow that indicates if the currency selection menu is opened or not"
                    />
                </button>

                {this.state.currencyMenuIsVisible &&
                    <nav>
                        {currenciesListRender}
                    </nav>
                }

            </div>
        )
    }
}
