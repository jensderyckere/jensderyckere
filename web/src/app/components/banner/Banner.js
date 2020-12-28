import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BannerImg from '../../assets/banner.svg';

const Banner = ({screenSize}) => {
    return (
        <section id="banner">
            <Container>
                <Row>
                    <Col xs={12}>
                        {
                            screenSize === 'standard' ? (
                                <div className="banner" style={{
                                    backgroundImage: `url(${BannerImg})`
                                }}>
                                    <span className="banner__container">
                                        <h1 className="banner__container--title">Jens Deryckere</h1>
                                        <p className="banner__container--subtitle">Belgium-based freelance software developer with a lot of spare time</p>
                                        <span className="banner__container--button">And what’s about me</span>
                                    </span>
                                </div>
                            ) : ''
                        }
                    </Col>
                </Row>
            </Container>
            {
                screenSize === 'standard' && (
                    <div className="banner__grey-block"></div>
                )
            }
        </section>
    )
};

export default Banner;