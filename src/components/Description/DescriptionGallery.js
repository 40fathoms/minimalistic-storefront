import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class DescriptionGallery extends Component {

    render() {
        return (
            <div className="description-gallery">

                <div className="gallery-items">
                    {this.props.currentItem.gallery.map(item => {
                        return (
                            <img
                                className={`${item === this.props.currentImage ? 'selected' : ''}`}
                                src={item}
                                onClick={() => { this.props.handleCurrentImage(item) }}
                                alt="Gallery items"
                                key={nanoid()}
                            />)
                    })}
                </div>

                <img className="gallery-current-product" src={this.props.currentImage} alt="Current product" />

            </div>
        )
    }
}
