import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const positions = {
    'top-right': { top: '1rem', right: '1rem', bottom: 'auto', left: 'auto' },
    'top-left': { top: '1rem', left: '1rem', bottom: 'auto', right: 'auto' },
    'bottom-right': { bottom: '1rem', right: '1rem', top: 'auto', left: 'auto' },
    'bottom-left': { bottom: '1rem', left: '1rem', top: 'auto', right: 'auto' }
};

const POSITIONS = Object.keys(positions);

const WidgetsContainer = ({ children, position }) => (
    <div className="map-container" style={{ ...positions[position] }}>
        {Array.isArray(children) ? children : [children].map((child, i) => (
            <div key={`widget-${i + 1}`} className="map-container__child">
                {child}
            </div>
        ))}
    </div>
);

WidgetsContainer.propTypes = {
    position: PropTypes.oneOf(POSITIONS),
    // eslint-disable-next-line
    children: PropTypes.any.isRequired
};

WidgetsContainer.defaultProps = {
    position: POSITIONS[0]
};

export { WidgetsContainer };
