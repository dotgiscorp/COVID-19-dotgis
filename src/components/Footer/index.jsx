import React from 'react';
import './style.scss';

const DOTGIS_WEBSITE = 'https://www.dotgiscorp.com/';

const Footer = () => (
    <footer className="footer" onClick={() => window.open(DOTGIS_WEBSITE)}>
        <span>Crafted by dotGIS</span>
    </footer>
);

export { Footer };
