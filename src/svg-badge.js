import React, { Component } from 'react';

export default class SvgBadge extends Component {

    constructor(props) {
        super();
        this.config = props.config;
        this.size = props.size;
    }

    render() {
        return (
            <svg width={this.size} height={this.size} xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx={this.size / 2}
                    cy={this.size / 2}
                    r={(this.size / 2) - 1}
                    stroke={'white'}
                    strokeWidth="2"
                    fill={this.config.background} />
                <text
                    x={this.size / 2 + this.config.textPosition.x}
                    y={this.size / 2 + this.config.textPosition.y}
                    textAnchor="middle"
                    fontFamily="sans-serif"
                    fontSize={this.size / 1.55}
                    fill={this.config.color}>
                    {this.config.text}
                </text>
            </svg>
        );
    }
}