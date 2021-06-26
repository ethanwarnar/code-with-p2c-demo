
import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import Hello from '../Hello/Hello';
import About from '../About/About';

import './Content.scss';

export default class Content extends Component {

    render() {
        return (
            <div className="blah">
                <Intro />
                <Hello />
                <About />
            </div>
        );
    }
}