import React from 'react';

import { Banner } from '../components';
import { useToolbox } from '../services';

const Home = () => {
    const { screenSize } = useToolbox();

    return (
        <main>
            <Banner 
                screenSize={screenSize}
            />
        </main>
    )
};

export default Home;