import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { scroller } from "react-scroll";

import BannerImg from '../../assets/banner.svg';

const Banner = ({screenSize}) => {
    return (
        <section id="banner">
            {
                screenSize === 'standard' && (
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="banner" style={{
                                    backgroundImage: `url(${BannerImg})`
                                }}>
                                    <span className="banner__container">
                                        <h1 className="banner__container--title">Jens Deryckere</h1>
                                        <p className="banner__container--subtitle">Belgium-based freelance software developer with a lot of spare time</p>
                                        <span onClick={() => scroller.scrollTo('about-me', {duration: 1500, smooth: true})} className="banner__container--button">And what’s about me</span>
                                    </span>
                                 </div>
                            </Col>
                        </Row>
                    </Container>
                )
            } 
            {
                screenSize === 'standard' && (
                    <div className="banner__grey-block"></div>
                )
            }
            {
                screenSize === 'small' && (
                    <>
                        <div className="banner__res">
                            <div className="banner__res--text">
                                <h1 className="banner__res--text--title">Jens Deryckere</h1>
                                <p className="banner__res--text--subtitle">Belgium-based freelance software developer with a lot of spare time</p>
                                <p className="banner__res--text--more">Scroll down to see more</p>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
};

export default Banner;