import React, {Component} from "react";
import {Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';
import PDF from '../resumeAnthony.pdf';
import {Particles} from 'react-particles-js'

import { Document , Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    };


    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };
    render() {
        const { pageNumber, numPages } = this.state;

        return(
            <div >
            <Particles
                className="resume-grid"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '625px', height: '830px'}}>
                <CardTitle style={{color: '#fff', height: '780px', background: 'white', padding: '0px 7px'}}>
                    <Document
                            file={PDF}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>

                </CardTitle>

                <CardActions border style={{height: '400px'}}>
                    <Button colored>Download</Button>
                </CardActions>
            </Card>
            </div>


        )
    }
}

export default Resume;