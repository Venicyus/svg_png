import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { renderToStaticMarkup } from 'react-dom/server';
import html2canvas from 'html2canvas-webpack';
import SvgBadge from './svg-badge';

import './index.css';

const icons = {
    size: 20,
    config: [{
        background: '#0e4aa3',
        color: 'white',
        text: '1',
        textPosition: { x: 0, y: 4.4 }
    },
    {
        background: '#0da247',
        color: 'white',
        text: '2',
        textPosition: { x: 0.2, y: 4.4 }
    },
    {
        background: '#a10d5c',
        color: 'white',
        text: '3',
        textPosition: { x: 0.3, y: 4.4 }
    },
    {
        background: '#686868',
        color: 'white',
        text: '4',
        textPosition: { x: 0, y: 4.4 }
    },
    {
        background: '#af5a1d',
        color: 'white',
        text: '5+',
        textPosition: { x: 0.6, y: 4.8 }
    }]
};

class App extends Component {

    constructor() {
        super();
        this.onSubmit = this.download.bind(this);
    }

    download(e) {
        e.preventDefault();

        html2canvas(document.getElementById("imgs")).then((canvas) => {
            let link = document.createElement("a");
            link.download = "pin_label.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    render() {
        let imagens = [];

        icons.config.forEach((icon, index) => {
            const dataUri = 'data:image/svg+xml,' + encodeURIComponent(renderToStaticMarkup(<SvgBadge config={icon} size={icons.size} />));
            imagens.push(<img src={dataUri} alt="" key={index} />);
        });

        return (
            <div>
                <div id="imgs" style={{ height: "20px", width: (icons.size) * icons.config.length + "px" }}>
                    {imagens}
                </div>
                <br />
                <br />
                <form onSubmit={this.onSubmit}>
                    <input type="submit" value="Baixar" />
                </form>
            </div >
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
