import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import { store } from '../../store/store';
import '@carto/airship-style';
import './style.scss';

const LayerSelector = ({ mapObject, layers }) => {
    const globalState = React.useContext(store);
    const { state: { selectedLayer }, dispatch } = globalState;

    React.useEffect(() => {
        if (layers) {
            for (const layer of layers) {
                if (layer.shouldShowOnInit) {
                    dispatch({ type: 'switch layer', payload: layer.layersIds[0] });
                }
            }
        }
    }, []);

    const switchVisibility = id => {
        dispatch({ type: 'switch layer', payload: id });

        for (const config of layers) {
            for (const layer of config.layersIds) {
                if (mapObject.getLayer(layer)) {
                    layer.includes(id) ?
                        mapObject.setLayoutProperty(layer, 'visibility', 'visible') :
                        mapObject.setLayoutProperty(layer, 'visibility', 'none')
                }
            }
        }
    };

    React.useEffect(() => {
        if (selectedLayer) {
            switchVisibility(selectedLayer);
        }
    }, [selectedLayer]);

    return (
          <div className="layers-picker">
            {selectedLayer && layers.map((layer, index) => (
                <div key={layer.layersIds[0]} className="as-radio">
                    <input
                        className="as-radio__input"
                        type="radio"
                        name={layer.layersIds[0]}
                        id={layer.layersIds[0]}
                        value={index}
                        checked={selectedLayer === layer.layersIds[0]}
                        onChange={e => switchVisibility(e.target.name)}
                    />
                    <label className="as-caption" htmlFor={layer.layersIds[0]}>{layer.layerTitle}</label>
                </div>
            ))}
          </div>
    );
};
  
LayerSelector.propTypes = {
    mapObject: PropTypes.instanceOf(Map).isRequired,
    layers: PropTypes.arrayOf(
        PropTypes.shape({
          shouldShowOnInit: PropTypes.bool,
          layersIds: PropTypes.arrayOf(PropTypes.string),
          layerTitle: PropTypes.string
        })
      ).isRequired
};

export { LayerSelector };
