import React, { useEffect, useState } from 'react';

import { useToolbox } from '../../services';

import Logo from '../../assets/logo.svg';

const Header = () => {
    const { screenSize } = useToolbox();
    const [ scrolling, setScrolling ] = useState();

    useEffect(() => {
        window.onscroll = function() {
            if (window.pageYOffset > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            };
        }
    });

    return (
        <header className={`${screenSize === 'standard' ? `header ${scrolling ? 'scrolling' : ''}`: `res-header ${scrolling ? 'scrolling-phone' : ''}`}`}>
            <img src={Logo} alt="logo" />
            {
                screenSize === 'standard' && (
                    <ul>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Some work</li>
                    </ul>
                )
            }
        </header>
    )
};

export default Header;