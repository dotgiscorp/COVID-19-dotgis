import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import { Layer, Popup } from 'react-mapbox-gl';
import { useMapEvents } from '../Hooks/useMapEvents';
import { PopupTemplate } from '../../components';
import CONFIG from '../Config/config';

const Layers = ({ map, config }) => {
  const [popupConfig, clickedFeature] = useMapEvents(map, config);

  React.useEffect(() => {
    if (clickedFeature && clickedFeature.source === CONFIG.pharmacySourceId) {
      const centerIn = clickedFeature.geometry.coordinates;

      map.flyTo({
        center: centerIn,
        zoom: Math.round(map.getZoom() + 2),
        essential: true
      });
    }
  }, [clickedFeature]);

  return (
    <>
      {Object.values(config).map(info => (
        <Layer
          key={info.id}
          id={info.id}
          type={info.type}
          sourceId={info.sourceId}
          sourceLayer={info.sourceLayer}
          paint={info.paint}
          layout={info.layout || undefined}
          minZoom={info.minZoom || undefined}
          maxZoom={info.maxZoom || undefined}
        />
      ))}
      {popupConfig && popupConfig.coords && (
        <Popup
          coordinates={popupConfig.coords}
          style={{ display: popupConfig.shouldRender ? '' : 'none' }}
          offset={{
            bottom: [0, 80]
          }}
        >
          <PopupTemplate content={popupConfig.info} />
        </Popup>
      )}
    </>
  );
};

Layers.propTypes = {
  map: PropTypes.instanceOf(Map).isRequired,
  config: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export { Layers };
