// src/ThemeChanger.js
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const ThemeChanger = () => {
    const { setTheme } = useTheme();
    const [couleur, setCouleur] = useState('');
    const [police, setPolice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTheme((prev) => ({
            ...prev,
            couleurPrincipale: couleur || prev.couleurPrincipale,
            police: police || prev.police,
        }));
        setCouleur('');
        setPolice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Couleur principale"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
            />
            <input
                type="text"
                placeholder="Police"
                value={police}
                onChange={(e) => setPolice(e.target.value)}
            />
            <button type="submit">Changer le thème</button>
        </form>
    );
};

export default ThemeChanger;
