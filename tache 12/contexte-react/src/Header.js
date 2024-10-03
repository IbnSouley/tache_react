// src/Header.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
    const { couleurPrincipale, police } = useTheme();
    return (
        <h1 style={{ color: couleurPrincipale, fontFamily: police }}>
            Thème : {couleurPrincipale} - Police : {police}
        </h1>
    );
};

export default Header;
