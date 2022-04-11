import React, { Component } from 'react'

export default class DescriptionAttributeInput extends Component {
    render() {
        return (

            <div
                style={{ backgroundColor: this.props.attribute.type === 'swatch' ? this.props.attributeItem.value : '' }}
                className={
                    `attributes-option ${this.props.attribute.type === 'swatch' ? 'swatch' : ''}`
                }
            >

                <input
                    type='radio'
                    name={this.props.attribute.name}
                    id={this.props.id}

                    value={this.props.attributeItem.value}

                    onClick={() => {
                        this.props.handleAttribute(
                            this.props.attribute.name,
                            this.props.attribute.type,
                            this.props.attributeItem.value,
                            this.props.attributeItem.displayValue,
                            this.props.attributeItem.id
                        )
                    }}
                />

                <label
                    htmlFor={this.props.id}
                >
                    {this.props.attribute.type !== 'swatch' ? this.props.attributeItem.value : ''}
                </label>

            </div>
        )
    }
}
