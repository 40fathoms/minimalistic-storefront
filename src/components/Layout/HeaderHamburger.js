import React, { Component } from 'react'

export default class HeaderHamburger extends Component {
    render() {
        return (
            <div
                className="header-hamburger hide-desktop"
                onClick={this.props.handleMobileMenu.bind(this)}
            >
                <span className={`line-1 ${this.props.mobileMenuVisible ? 'active' : ''}`}></span>
                <span className={`line-2 ${this.props.mobileMenuVisible ? 'active' : ''}`}></span>
                <span className={`line-3 ${this.props.mobileMenuVisible ? 'active' : ''}`}></span>
            </div>
        )
    }
}
