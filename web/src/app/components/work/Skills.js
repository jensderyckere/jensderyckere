import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from "react-scroll";

import Figma from '../../assets/figma.svg';
import Git from '../../assets/git.svg';
import Graphql from '../../assets/graphql.svg';
import Laravel from '../../assets/laravel.svg';
import Node from '../../assets/node.svg';
import ReactLogo from '../../assets/react.svg';
import Sass from '../../assets/sass.svg';
import Socket from '../../assets/socket.svg';
import Vue from '../../assets/vue.svg';

const Skills = ({screenSize}) => {
    const arrayOfSkills = [
        {
            img: Figma, alt: "figma",
        },
        {
            img: Git, alt: "git",
        },
        {
            img: Graphql, alt: "graphql",
        },
        {
            img: Laravel, alt: "laravel",
        },
        {
            img: Node, alt: "node",
        },
        {
            img: ReactLogo, alt: "react",
        },
        {
            img: Sass, alt: "sass",
        },
        {
            img: Socket, alt: "socket",
        },
        {
            img: Vue, alt: "vue",
        },
    ];

    const SkillsDesktop = () => {
        return (
            <Container>
                <Row>
                    <Col xs={5}>
                        <div className="skills__box">
                            {
                                arrayOfSkills.map((element, index) => {
                                    return <img src={element.img} alt={element.alt} key={index} />
                                })
                            }
                        </div>
                    </Col>
                    <Col xs={7} className="d-flex align-items-center">
                        <div className="skills__text">
                            <h1>And what did i do untill now?</h1>
                            <p>
                                Now that you know who I am, you would also like to know what I can do. On the left you can see some of my <strong>skills<span className="underline"></span></strong>. Below you can see some of the <strong>projects<span className="underline"></span></strong> I am proud of. Rest assured, these will be completed.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };

    const SkillsMobile = () => {
        return (
            <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="skills__text-res">
                            <h1>And what did i do until now?</h1>
                            <p>
                                Now that you know who I am, you would also like to know what I can do. On the left you can see some of my <strong>skills<span className="underline"></span></strong>. Below you can see some of the <strong>projects<span className="underline"></span></strong> I am proud of. Rest assured, these will be completed.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="skills__box-res">
                    {
                        arrayOfSkills.map((element, index) => {
                            return <img src={element.img} alt={element.alt} key={index} />
                        })
                    }
                </div>
            </>
        )
    };

    return (
        <Element name="work">
            <section className="skills">
                {
                    screenSize === 'standard' && (
                        <SkillsDesktop />
                    )
                }
                {
                    screenSize === 'small' && (
                        <SkillsMobile />
                    )
                }
            </section>
        </Element>
    )
};

export default Skills;