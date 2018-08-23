import React, { Component } from 'react';

export default class Svg extends Component {
    render() {
        return (
            <svg width="20" height="34.892337" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1.1855854,0,0,1.1855854,-151.17715,-57.3976) " id="g3477">
                    <path
                        fill={this.props.config.background}
                        stroke={this.props.config.borderColor}
                        strokeWidth="1"
                        d="m130.02918,51.53595c-1.25816,1.34277 -2.04623,3.29881 -2.01563,5.13867c0.0639,3.84476 1.79693,5.3002 4.56836,10.59179c0.99832,2.32851 2.04027,4.79237 3.03125,8.87305c0.13772,0.60193 0.27203,1.16104 0.33416,1.20948c0.0621,0.0485 0.19644,-0.51262 0.33416,-1.11455c0.99098,-4.08068 2.03293,-6.54258 3.03125,-8.87109c2.77143,-5.29159 4.50444,-6.74704 4.56836,-10.5918c0.0306,-1.83986 -0.75942,-3.79785 -2.01758,-5.14062c-1.43724,-1.53389 -3.60504,-2.66908 -5.91619,-2.71655c-2.31115,-0.0475 -4.4809,1.08773 -5.91814,2.62162z" />
                </g>
                <text
                    x={this.props.config.labelX}
                    y={this.props.config.labelY}
                    fontSize={this.props.config.labelSize}
                    fill={this.props.config.labelColor}
                    fontFamily={'Calibri'}
                >
                    {this.props.config.label}
                </text>
            </svg>
        );
    }
}