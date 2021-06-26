import React from 'react';
import './Hello.scss';
import { Parallax } from 'react-scroll-parallax';
import { Col, Row } from 'reactstrap'
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Hello = () => (

    <React.Fragment>
        <Row style = {{width: '100%'}}>
            <Col md="6">
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                    <Fade >
                        <Parallax x={[-80, 100]}>
                            <div className="image" />
                        </Parallax>
                    </Fade>
                </div>
            </Col>

            <Col md="6">
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                    <Fade >
                        <main className="root">
                            <Parallax x={[80, -100]}>
                                <h1 className="headline">Build a personal website.</h1>
                            </Parallax>
                            {/* <Parallax x={[80, -80]}>
                                <p className="text">
                                    React + github pages <br />
                                    <br />
                                </p>
                            </Parallax> */}
                        </main>
                    </Fade>
                </div>

            </Col>
        </Row>

    </React.Fragment>

);

export default Hello;
