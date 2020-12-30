import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import Figma from '../../assets/figma.svg';
import Git from '../../assets/git.svg';
import Graphql from '../../assets/graphql.svg';
import Laravel from '../../assets/laravel.svg';
import Node from '../../assets/node.svg';
import ReactLogo from '../../assets/react.svg';
import WordPress from '../../assets/wp.svg';
import Sass from '../../assets/sass.svg';
import Socket from '../../assets/socket.svg';
import Vue from '../../assets/vue.svg';
import RouteZ from '../../assets/Devices/routez.svg';
import Localz from '../../assets/Devices/localz.svg';
import DuckAway from '../../assets/Devices/duckaway.svg';
import Next from '../../assets/next.svg';

const Works = ({screenSize}) => {
    const arrayWithWork = [
        {
            mock: RouteZ,
            title: "RouteZ",
            subtitle: "Study time for teachers",
            text: "Teach teachers some important skills? That is the task of RouteZ. This developed web platform ensures that teachers can enter into different learning paths and expand their skills.",
            tools: [
                {
                    img: Figma, alt: "figma",
                },
                {
                    img: ReactLogo, alt: "react",
                },
                {
                    img: Node, alt: "node",
                },
                {
                    img: Sass, alt: "sass",
                },
            ],
            roles: [
                {
                    role: "Design",
                    name: "Valentine Callebaut",
                },
                {
                    role: "Back-end",
                    name: "Jens Deryckere",
                },
                {
                    role: "Front-end",
                    name: "Yentel De Hauwere",
                },            
            ],
        },
        {
            mock: Localz,
            title: "Localz",
            subtitle: "Consult talent in your area",
            text: "There is a lot of talent in this world and often these talents don't live too far from your own door. Through Localz you can discover these artists and stream their songs or albums.",
            tools: [
                {
                    img: Figma, alt: "figma",
                },
                {
                    img: ReactLogo, alt: "react",
                },
                {
                    img: WordPress, alt: "wp",
                },
                {
                    img: Sass, alt: "sass",
                },
            ],
            roles: [
                {
                    role: "Design",
                    name: "Jens Deryckere",
                },
                {
                    role: "Back-end",
                    name: "Jens Deryckere",
                },
                {
                    role: "Front-end",
                    name: "Jens Deryckere",
                },            
            ],
        },
        {
            mock: DuckAway,
            title: "DuckAway",
            subtitle: "Ducklings that don't sit still",
            text: "The concept is simple. Our ducklings have to get as far as possible and we do that by passing them on to different people. Together we give the ducks an unforgettable journey.",
            tools: [
                {
                    img: Figma, alt: "figma",
                },
                {
                    img: ReactLogo, alt: "react",
                },
                {
                    img: Node, alt: "node",
                },
                {
                    img: Sass, alt: "sass",
                },
            ],
            roles: [
                {
                    role: "Design",
                    name: "Jens Deryckere",
                },
                {
                    role: "Back-end",
                    name: "Hans Vertriest",
                },
                {
                    role: "Front-end",
                    name: "Jens Deryckere",
                },            
            ],
        },
    ];

    const [ index, setIndex ] = useState(0);

    const changeView = () => {
        if (index === arrayWithWork.length-1) {
            const work = document.getElementsByClassName('work')[0];
            work.classList.add('away');
    
            setTimeout(() => {
                setIndex(0);
                work.classList.remove('away');
            }, 1100);

            return;
        };

        const work = document.getElementsByClassName('work')[0];
        work.classList.add('away');

        setTimeout(() => {
            setIndex(index+1);
            work.classList.remove('away');
        }, 1100);
    };

    const WorksDesktop = () => {
        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <div className="work__text">
                            <h1>
                                {arrayWithWork[index].title}
                            </h1>
                            <h2>
                                {arrayWithWork[index].subtitle}
                            </h2>
                            <span className="work__text--underline"></span>
                            <p>
                                {arrayWithWork[index].text}
                            </p>
                            <h5>
                                USED TOOLS
                            </h5>
                            <div className="work__text--used">
                                {
                                    arrayWithWork[index].tools.map((element, index) => {
                                        return <img src={element.img} alt={element.alt} key={index} />
                                    })
                                }
                            </div>
                            <h5>
                                ROLES
                            </h5>
                            <p>
                                {
                                    arrayWithWork[index].roles.map((element, index) => {
                                        return <><strong key={index}>{element.role}: </strong>{element.name}<br/></>
                                    })
                                }
                            </p>
                            <div className="work__text--bottom">
                                <div className="work__text--button" onClick={changeView}>
                                    <img src={Next} alt="next" />
                                </div>
                                <span className="work__text--index">
                                    {index+1}/{arrayWithWork.length}
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="work__mock">
                            <img src={arrayWithWork[index].mock} alt="mockup" />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };

    const WorksMobile = () => {
        return (
            <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="work-res__text">
                            <h1>
                                {arrayWithWork[index].title}
                            </h1>
                            <h2>
                                {arrayWithWork[index].subtitle}
                            </h2>
                            <span className="work-res__text--underline"></span>
                            <p>
                                {arrayWithWork[index].text}
                            </p>
                            <h5>
                                USED TOOLS
                            </h5>
                            <div className="work-res__text--used">
                                {
                                    arrayWithWork[index].tools.map((element, index) => {
                                        return <img src={element.img} alt={element.alt} key={index} />
                                    })
                                }
                            </div>
                            <h5>
                                ROLES
                            </h5>
                            <p className="work-res__text--roles">
                                {
                                    arrayWithWork[index].roles.map((element, index) => {
                                        return <><strong key={index}>{element.role}: </strong>{element.name}<br/></>
                                    })
                                }
                            </p>
                            <div className="work-res__text--bottom">
                                <div className="work-res__text--button" onClick={changeView}>
                                    <img src={Next} alt="next" />
                                </div>
                                <span className="work-res__text--index">
                                    {index+1}/{arrayWithWork.length}
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="work-res__mock">
                    <img src={arrayWithWork[index].mock} alt="mockup" />
            </div>
            </>
        )
    };

    return (
            <section className="work">
                {
                    screenSize === 'standard' && (
                        <WorksDesktop />
                    )
                }
                {
                    screenSize === 'small' && (
                        <WorksMobile />
                    )
                }
            </section>
    )
};

export default Works;