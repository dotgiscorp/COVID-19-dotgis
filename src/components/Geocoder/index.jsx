import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl, { Map } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = ({ mapObject }) => {
    const geocoderContainerRef = React.useRef(null);

    React.useEffect(() => {
        const geocoderObject = new MapboxGeocoder({
            accessToken: 'pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNrN3o0bmt4NzAyNXEzam9naXVqbm5vb2wifQ.irrtd8SmU9Ce_iQRUAqxEQ',
            mapboxgl: mapboxgl,
            marker: { color: '#03fcad' },
            placeholder: 'Buscar dirección'
        });

        geocoderContainerRef.current.appendChild(geocoderObject.onAdd(mapObject));
    }, [geocoderContainerRef]);

    return <div ref={geocoderContainerRef} className="calculator-geocoder"></div>;
};

Geocoder.propTypes = {
    mapObject: PropTypes.instanceOf(Map).isRequired
};

export { Geocoder };
