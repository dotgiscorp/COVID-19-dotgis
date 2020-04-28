import React from 'react';
import { store } from '../../store/store';
import PropTypes from 'prop-types';
import mapboxgl, { Map } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './style.scss';

const Geocoder = ({ mapObject }) => {
    const globalState = React.useContext(store);
    const { dispatch } = globalState;

    const geocoderContainerRef = React.useRef(null);
    const [center, setCenter] = React.useState([]);

    const [geocoderObject, setGeocoderObject] = React.useState(null);
    React.useEffect(() => {
        if (center.length !== 0) {
            dispatch({ type: 'set step', payload: 'symptom' });
            dispatch({ type: 'set info', payload: { info: 'userAddressXY', value: center }});
        }
    }, [center]);

    React.useEffect(() => {
        setGeocoderObject(new MapboxGeocoder({
            accessToken: 'pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNrNnVxcmd3cjAxd2YzbnF1MTg3a2k4MTMifQ.iGvDEmTNK_94AabfNKfytA',
            mapboxgl: mapboxgl,
            flyTo: false,
            marker: { color: '#1785fb' },
            placeholder: 'Buscar dirección...',
            countries: 'es'
        }));
    }, [geocoderContainerRef]);

    React.useEffect(() => {
        if (geocoderObject) {
            geocoderContainerRef.current.appendChild(geocoderObject.onAdd(mapObject));

            geocoderObject.on('result', e => {
                const center = e && e.result && e.result.center;
                center && setCenter(center);
            });

            geocoderObject.on('error', () => {
                setCenter([]);
                geocoderObject.clear();
            });

            geocoderObject.on('clear', () => {
                setCenter([]);
            });

            if (geocoderContainerRef && geocoderContainerRef.current) {
                geocoderObject.clear(); // Trigger 'focus'
            }
        }
    }, [geocoderObject]);

    return <div ref={geocoderContainerRef} className="calculator-geocoder"></div>;
};

Geocoder.propTypes = {
    mapObject: PropTypes.instanceOf(Map).isRequired
};

export { Geocoder };
