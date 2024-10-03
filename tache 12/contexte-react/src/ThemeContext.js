// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({
    couleurPrincipale: 'blue',
    police: 'Arial',
    setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        couleurPrincipale: 'blue',
        police: 'Arial',
    });

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook pour accéder au contexte
export const useTheme = () => {
    return useContext(ThemeContext);
};

export default ThemeContext;
