import React, { createContext, useContext, useEffect, useState } from 'react';

const ToolboxContext = createContext();
const useToolbox = () => useContext(ToolboxContext);

const ToolboxProvider = ({children}) => {
    const [ screenSize, setScreenSize ] = useState((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ) > 768 ? 'standard': 'small');

    useEffect(() => {
        window.addEventListener('resize', () => {
            let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;    

            if (width > 976) {
                setScreenSize('standard');
            } else {
                setScreenSize('small');
            };
        });
    });

    return (
        <ToolboxContext.Provider value={{
            screenSize,
        }}>
            {children}
        </ToolboxContext.Provider>
    )
};

export {
    ToolboxContext,
    useToolbox,
    ToolboxProvider,
};