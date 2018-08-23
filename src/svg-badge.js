import React, { Component } from 'react';

export default class SvgBadge extends Component {
    render() {
        return (
            <div>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width={sw} fill={color} />
                    <text x={x} y={y} font-family="sans-serif" font-size="46" text-anchor="middle" fill={colorLabel}>1</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width={sw} fill={color} />
                    <text x={x} y={y} font-family="sans-serif" font-size="46" text-anchor="middle" fill={colorLabel}>2</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width={sw} fill={color} />
                    <text x={x} y={y} font-family="sans-serif" font-size="46" text-anchor="middle" fill={colorLabel}>3</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width={sw} fill={color} />
                    <text x={x} y={y} font-family="sans-serif" font-size="46" text-anchor="middle" fill={colorLabel}>4</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width={sw} fill={color} />
                    <text x={x + 4} y={y} font-family="sans-serif" font-size="46" text-anchor="middle" fill={colorLabel}>5+</text>
                </svg>
            </div >
        );
    }
}