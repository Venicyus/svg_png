import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import registerServiceWorker from './registerServiceWorker';
import Svg from './svg';
import './index.css';
import html2canvas from 'html2canvas-webpack';

const limiteMax = 350;

class App extends Component {

    constructor() {
        super();
        this.state = { markers: [] };
        this.onSubmit = this.download.bind(this);
        this.markers = [];
    }

    download(e) {
        e.preventDefault();
        var self = this;
        console.log('Processando...');

        if (false) {
            fetch('http://localhost:5000/api/SvgToPng', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(self.markers)
            }).then((res) => {
                res.json().then((url) => {
                    console.log('Concluído');
                    let link = document.createElement("a");
                    link.download = "markers.zip";
                    link.href = url;
                    console.log(url);
                    link.click();
                    console.log('Concluído...');
                });
            });
        } else {
            html2canvas(document.getElementById("imgs")).then((canvas) => {
                let link = document.createElement("a");
                link.download = "pin_label.png";
                link.href = canvas.toDataURL();
                link.click();
                console.log('Concluído...');
            });
        }
    }

    render() {
        let imagens = [];
        let cores = [
            { background: '#037029', borderColor: '#000000', color: '#FFF' },
            { background: '#009FFD', borderColor: '#000000', color: '#FFF' },
            { background: '#BB0A21', borderColor: '#000000', color: '#FFF' },
            { background: '#FFA400', borderColor: '#000000', color: '#FFF' },
            { background: '#841B67', borderColor: '#000000', color: '#FFF' },
            { background: '#3D005F', borderColor: '#000000', color: '#FFF' },
            { background: '#000000', borderColor: '#000000', color: '#FFF' },

            { background: '#68E991', borderColor: '#000000', color: '#000' },
            { background: '#8DC0EB', borderColor: '#000000', color: '#000' },
            { background: '#EB9292', borderColor: '#000000', color: '#000' },
            { background: '#EBD476', borderColor: '#000000', color: '#000' },
            { background: '#DB63BA', borderColor: '#000000', color: '#000' },
            { background: '#A89ECB', borderColor: '#000000', color: '#000' },
            { background: '#AAAAAA', borderColor: '#000000', color: '#000' }
        ];

        for (let j = 0; j < cores.length; j++) {

            let config = {
                background: cores[j].background,
                borderColor: cores[j].borderColor,
                labelColor: cores[j].color
            };

            for (let i = 0; i <= limiteMax; i++) {
                if (i !== 0) {
                    config.label = i;
                    if (i > 0 && i < 10) {
                        config.labelX = 6.6;
                        config.labelY = 14;
                        config.labelSize = '14px';
                    } else if (i >= 10 && i < 100) {
                        config.labelX = 2.5;
                        config.labelY = 14;
                        config.labelSize = '14px';
                    } else if (i >= 100 && i < limiteMax) {
                        config.labelX = 1.6;
                        config.labelY = 13;
                        config.labelSize = '11px';
                    } else {
                        config.label = "+";
                        config.labelX = 4;
                        config.labelY = 17;
                        config.labelSize = '24px';
                    }
                }

                const dataUri = 'data:image/svg+xml,' + encodeURIComponent(renderToStaticMarkup(<Svg config={config} />));
                imagens.push(<img src={dataUri} key={i + (j * 1000)} alt="" />);

                this.markers.push({
                    data: renderToStaticMarkup(<Svg config={config} />),
                    name: i === 501 ? 'plus' : i,
                    folder: cores[j].background
                });
            }
        }

        return (
            <div>
                <div id="imgs" style={{ width: 20 * (limiteMax + 1) }}>{imagens}</div>
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
