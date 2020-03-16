import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import './style.scss';

const Loader = ({ mapObject }) => {

    const [dataLoading, setDataLoading] = React.useState(true);

    React.useEffect(() => {
        let tilesRenderedChecker = false;

        if (mapObject) {
            mapObject.once('styledata', () => { // Catch the 'final rendering'
                const waiting = () => {
                    if (!mapObject.isStyleLoaded()) {
                        setTimeout(waiting, 200);
                    } else {
                        if (!tilesRenderedChecker) {
                            setDataLoading(false);
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

Loader.defaultProps = {
    mapObject: Map
};

Loader.propTypes = {
    mapObject: PropTypes.instanceOf(Map),
    dataLoading: PropTypes.bool.isRequired
};

export { Loader };
