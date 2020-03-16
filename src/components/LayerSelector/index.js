import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import './style.scss';

import '@carto/airship-style';

const LayerSelector = ({ map, layers }) => {
    const [visibility, setVisibility] = React.useState(null);

    React.useEffect(() => {
        if (layers) {
            for (const layer of layers) {
                if (layer.shouldShowOnInit) {
                    setVisibility(layer.layersIds[0]);
                }
            }
        }
    }, []);


    const switchVisibility = e => {
        const id = e.target.name;
        
        setVisibility(id);

        for (const config of layers) {
            for (const layer of config.layersIds) {
                if (map.getLayer(layer)) {
                    map.getLayoutProperty(layer, 'visibility') === 'visible' ?
                        map.setLayoutProperty(layer, 'visibility', 'none') :
                        map.setLayoutProperty(layer, 'visibility', 'visible');
                }
            }
        }
    };

    return (
          <div className="layers-picker">
            {visibility && layers.map((layer, index) => (
                <div key={layer.layersIds[0]} className="as-radio">
                    <input
                        className="as-radio__input"
                        type="radio"
                        name={layer.layersIds[0]}
                        id={layer.layersIds[0]}
                        value={index}
                        checked={visibility === layer.layersIds[0]}
                        onClick={switchVisibility}
                    />
                    <label className="as-caption" htmlFor={layer.layersIds[0]}>{layer.layerTitle}</label>
                </div>
            ))}
          </div>
    );
};
  
LayerSelector.propTypes = {
    map: PropTypes.instanceOf(Map).isRequired,
    layers: PropTypes.arrayOf(
        PropTypes.shape({
          shouldShowOnInit: PropTypes.bool,
          layersIds: PropTypes.arrayOf(PropTypes.string),
          layerTitle: PropTypes.string,
          layerColor: PropTypes.string
        })
      ).isRequired
};

export { LayerSelector };
