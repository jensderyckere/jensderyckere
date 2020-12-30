import React from 'react';

import { About, Banner, Contact, Skills, Works } from '../components';
import { useToolbox } from '../services';

const Home = () => {
    const { screenSize } = useToolbox();

    return (
        <main>
            <Banner 
                screenSize={screenSize}
            />
            <About 
                screenSize={screenSize}
            />
            <Skills 
                screenSize={screenSize}
            />
            <Works 
                screenSize={screenSize}
            />
            <Contact 
                screenSize={screenSize}
            />
        </main>
    )
};

export default Home;