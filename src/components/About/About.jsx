
import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import { Col, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
import { FaFacebookSquare } from "react-icons/fa";

import './About.scss';

const About = () => (

    <React.Fragment>

        <Row style = {{width: '100%'}}>
            <div className="space">
                {/* <h1>test</h1> */}
            </div>
        </Row>
        <Row style = {{width: '100%'}}>
            <Col md="2" />
            <Col md="8" >
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                    <Fade >
                        <Parallax x={[-50, 50]}>
                            <h1 className="banner_text">React + github pages</h1>
                        </Parallax>
                    </Fade>
                </div>
            </Col >
            <Col md="4" />
        </Row>
        <Row style = {{width: '100%'}}>
            <Col md="6">
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                    <Fade >
                        <main className="root">

                            <Parallax x={[80, -0]}>
                                <p className="text">
                                26-June-2021 | 2-4pm <br />
                                    <br />
                                    {/* I have a passion for solving problems, helping others, and watching the Leafs. */}
                                    </p>
                            </Parallax>
                        </main>
                    </Fade>
                </div>
            </Col>
            <Col md="6">
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                    <Fade >
                        <main className="root">
                            <Parallax x={[-80, 0]}>
                                <h1 className="text" >
                                    RSVP to the event here. 
                                </h1>                                   
                                <br />
                                {/* <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}> */}

<a target="_blank" href="https://www.facebook.com/events/197719935560769?ref=newsfeed" >
                                    <FaFacebookSquare className= "icon" size={70} /> 
                                </a>
                                {/* </div> */}
                            
                            </Parallax>
                        </main>
                    </Fade>
                </div>
            </Col>



        </Row>

        <Row>
            <div className="space" >
                {/* <h1 className="banner_text">
                    Here are some of the technologies and languages I have worked with.
                </h1> */}
            </div>
        </Row>








    </React.Fragment >

);

export default About;
