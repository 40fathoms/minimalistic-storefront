import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import DescriptionAttributeInput from './DescriptionAttributeInput'

export default class DescriptionAttributes extends Component {
    render() {

        return (

            <div className="attributes">
                <h3>{this.props.attribute.name.toUpperCase()}:</h3>

                <div className={`attributes-options ${this.props.attribute.type === 'swatch' ? 'swatch' : ''}`}>

                    {this.props.attribute.items.map(attributeItem => {
                        return (
                            <DescriptionAttributeInput
                                key={nanoid()}
                                id={nanoid()}
                                attribute={this.props.attribute}
                                attributeItem={attributeItem}
                                handleAttribute={this.props.handleAttribute.bind(this)}
                            />
                        )
                    })}

                </div>
            </div>
        )
    }
} 
