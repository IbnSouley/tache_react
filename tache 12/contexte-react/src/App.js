// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import ThemeChanger from './ThemeChanger';

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <Header />
                <ThemeChanger />
            </div>
        </ThemeProvider>
    );
};

export default App;
