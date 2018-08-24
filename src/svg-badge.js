import React, { Component } from 'react';

export default class SvgBadge extends Component {
    render() {
        return (
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="45" cy="52" r="40" stroke="white" strokeWidth="5" fill={'white'} />
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="#0e4aa3" />
                <text x="49" y="70" fontFamily="sans-serif" fontSize="60" textAnchor="middle" fill="white">1</text>
            </svg>
            // <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            //     <circle cx="45" cy="52" r="40" stroke="white" strokeWidth="5" fill={'white'} />
            //     <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="#0da247" />
            //     <text x="50" y="68" fontFamily="sans-serif" fontSize="60" textAnchor="middle" fill="white">2</text>
            // </svg>
            // <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            //     <circle cx="45" cy="52" r="40" stroke="white" strokeWidth="5" fill={'white'} />
            //     <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="#a10d5c" />
            //     <text x="50" y="71" fontFamily="sans-serif" fontSize="60" textAnchor="middle" fill="white">3</text>
            // </svg>
            // <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            //     <circle cx="45" cy="52" r="40" stroke="white" strokeWidth="5" fill={'white'} />
            //     <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="#686868" />
            //     <text x="48" y="70" fontFamily="sans-serif" fontSize="60" textAnchor="middle" fill="white">4</text>
            // </svg>
            // <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            //     <circle cx="45" cy="52" r="40" stroke="white" strokeWidth="5" fill={'white'} />
            //     <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="#af5a1d" />
            //     <text x="52" y="71" fontFamily="sans-serif" fontSize="60" textAnchor="middle" fill={'white'}>5+</text>
            // </svg>
        );
    }
}