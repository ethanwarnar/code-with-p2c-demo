import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Intro.scss';
import { Button, ButtonGroup } from 'reactstrap';



// const copy = ''.split('');
// const date = '26-June-2021 | 2-4pm'.split('');
const topic = 'With  P2C'.split('')


const Intro = () => (
    <React.Fragment>
        <div className="buttons">
            {/* <ButtonGroup>
                <Button>Contact</Button>
                <Button>LinkedIn</Button>
            </ButtonGroup> */}
        </div>

        <div className="main">
            {/* <div className="bar" /> */}
            {/* <span className="title1">
                {copy.map((letter, i) => (
                    <Parallax
                        key={`copy-${i}`}
                        className="letter h1"
                        x={[0 + 'px', ((i - 3.5) * 40) + 'px']}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span> */}
            {/* <span className="title2">
                {topic.map((letter, i) => (
                    <Parallax
                        key={`copy-${i}`}
                        className="letter h2"
                        x={[0 + 'px', ((i - 4) * 40) + 'px']}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span> */}





            {/* <div className="bar" /> */}
        </div>
    </React.Fragment>
);

export default Intro;