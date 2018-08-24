import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { renderToStaticMarkup } from 'react-dom/server';
import html2canvas from 'html2canvas-webpack';
import SvgBadge from './svg-badge';

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
        const dataUri = 'data:image/svg+xml,' + encodeURIComponent(renderToStaticMarkup(<SvgBadge />));
        imagens.push(<img src={dataUri} alt="" key="1" />);

        return (
            <div>
                <div id="imgs" style={{ width: 100 }}>
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
