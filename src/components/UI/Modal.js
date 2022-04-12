import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className="backdrop" onClick={props.handleModal}></div>
}

const ModalOverlay = props => {
    return (
        <div className="modal">
            {props.children}
        </div>
    )
}

const portal = document.getElementById("overlays")

export default class Modal extends Component {
    render() {
        return (
            <React.Fragment>
                {ReactDOM.createPortal(<Backdrop handleModal={this.props.handleModal} />, portal)}
                {ReactDOM.createPortal(<ModalOverlay>{this.props.children}</ModalOverlay>, portal)}
            </React.Fragment>
        )
    }
}
