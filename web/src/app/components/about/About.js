import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Element } from "react-scroll";

import Biking from '../../assets/biking.jpg';

const About = ({screenSize}) => {
    const AboutDesktop = () => {
        return (
            <>
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex align-items-center">
                            <div className="about-me__text">
                                <h1>
                                    What’s up with me?
                                </h1>
                                <p>
                                    I do not know, there is much to tell. I would like to express my appreciation. You are already reading this, which means you are interested! Thanks for that.<br/><br/>

                                    Well, I'm a <strong>22-year-old freelancer<span className="underline"></span></strong>. I'm working on my final months in the <strong>New Media Development<span className="underline"></span></strong> course and have been bitten by the code virus. I love doing business and thinking out of the box. <strong>Challenge<span className="underline"></span></strong>, that's what I'm looking for.<br/><br/>

                                    Besides programming, I love bikes and I collect a lot of vinyl. Interested in my <a href="https://open.spotify.com/playlist/7yEdd1lKdXdVNSKBZhknvM?si=mqB0MJvGRYCT0r5JIuKNCw" target="_blank">favourite songs?</a>
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} className="about-me__image">
                            <img src={Biking} alt="biking" />
                        </Col>
                    </Row>
                </Container>
                <div className="about-me__box"></div>
            </>
        )
    };

    const AboutMobile = () => {
        return (
            <>
                <div className="about-me__res">
                    <div className="about-me__res--text">
                        <h1>
                            What’s up with me?
                        </h1>
                        <p>
                            I do not know, there is much to tell. I would like to express my appreciation. You are already reading this, which means you are interested! Thanks for that.<br/><br/>
                            Well, I'm a <strong>22-year-old freelancer<span className="underline"></span></strong>. I'm working on my final months in the <strong>New Media Development<span className="underline"></span></strong> course and have been bitten by the code virus. I love doing business and thinking out of the box. <strong>Challenge<span className="underline"></span></strong>, that's what I'm looking for.<br/><br/>
                            Besides programming, I love bikes and I collect a lot of vinyl. Interested in my <a href="https://open.spotify.com/playlist/7yEdd1lKdXdVNSKBZhknvM?si=mqB0MJvGRYCT0r5JIuKNCw" target="_blank">favourite songs?</a>
                        </p>
                    </div>
                </div>
                <div className="about-me__res--img" style={{
                        backgroundImage: `url(${Biking})`
                    }}>
                </div>
            </>
        )
    }

    return (
        <Element name="about-me">
            <section className="about-me" id="about-me">
                {
                    screenSize === 'standard' && (
                        <AboutDesktop />
                    )
                }
                {
                    screenSize === 'small' && (
                        <AboutMobile />
                    )
                }
            </section>
        </Element>
    )
};

export default About;