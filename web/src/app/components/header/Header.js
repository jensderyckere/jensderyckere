import React, { useEffect, useState } from 'react';
import { animateScroll, scroller } from "react-scroll";

import { useToolbox } from '../../services';

import Logo from '../../assets/logo.svg';

const Header = () => {
    const { screenSize } = useToolbox();
    const [ scrolling, setScrolling ] = useState();

    useEffect(() => {
        window.onscroll = function() {
            if (window.pageYOffset > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            };
        }
    });

    const setNav = (ref) => {
        if (ref === 'home') animateScroll.scrollToTop();
        if (ref === 'about-me') scroller.scrollTo('about-me', {
            duration: 1500,
            smooth: true,
        });
        if (ref === 'work') scroller.scrollTo('work', {
            duration: 1500,
            smooth: true,
        });
    };

    return (
        <header className={`${screenSize === 'standard' ? `header ${scrolling ? 'scrolling' : ''}`: `res-header ${scrolling ? 'scrolling-phone' : ''}`}`}>
            <img src={Logo} alt="logo" />
            {
                screenSize === 'standard' && (
                    <ul>
                        <li onClick={() => setNav('home')}>Home</li>
                        <li onClick={() => setNav('about-me')}>About me</li>
                        <li onClick={() => setNav('work')}>Some work</li>
                    </ul>
                )
            }
        </header>
    )
};

export default Header;