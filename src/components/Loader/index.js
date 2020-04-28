import React from 'react';
import { store } from '../../store/store';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import './style.scss';

const Loader = ({ mapObject }) => {
    const globalState = React.useContext(store);
    const { state: { dataLoading }, dispatch } = globalState;

    React.useEffect(() => {
        let tilesRenderedChecker = false;

        if (mapObject) {
            mapObject.once('styledata', () => { // Catch the 'final rendering'
                const waiting = () => {
                    if (!mapObject.isStyleLoaded()) {
                        setTimeout(waiting, 200);
                    } else {
                        if (!tilesRenderedChecker) {
                            dispatch({ type: 'set loading', payload: false });
                        }
                        tilesRenderedChecker = true;
                    }
                };
                waiting();
            });
        }
    }, [mapObject]);

    return (
        <div className={`${dataLoading ? 'loader' : 'loader--close'}`}>
            <div className="CDB-LoaderIcon CDB-LoaderIcon--big">
                <svg className="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">
                    <circle className="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>
                </svg>
            </div>
        </div>
    );
};

Loader.propTypes = {
    mapObject: PropTypes.instanceOf(Map).isRequired
};

export { Loader };
