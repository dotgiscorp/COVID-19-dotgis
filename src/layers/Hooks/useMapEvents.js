import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import HoverEffect from '../Classes/MapboxHoverEffect';

function useMapEvents(map, layersIds) {
  const [popupConfig, setPopupConfig] = useState({
    shouldRender: false
  });

  const [clickedFeature, setFeature] = useState(null);

  function enableEvents() {
    const mapObject = map;

    const hoverObjects = [];
    const values = Object.values(layersIds);

    for (let i = 0; i < values.length; i += 1) {
      hoverObjects.push(
        new HoverEffect({
          map: mapObject,
          id: values[i].id,
          sourceId: values[i].sourceId,
          sourceLayer: values[i].sourceLayer,
          popupFieldsConfig: values[i].popupFieldsConfig
        })
      );
    }

    for (let i = 0; i < values.length; i += 1) {
      mapObject.on('mousemove', values[i].id, e => {
        hoverObjects[i].mouseMove(e);

        const popup = hoverObjects[i].popupInfo;
        popup && setPopupConfig(popup);
      });

      mapObject.on('mouseleave', values[i].id, () => {
        hoverObjects[i].mouseLeave();

        const popup = hoverObjects[i].popupInfo;
        popup && setPopupConfig(popup);
      });

      mapObject.on('click', values[i].id, e => {
        e.features.length !== 0 && setFeature(e.features[0]);
      });
    }
  }

  function removeEvents() {
    const mapObject = map;
    const launchedIds = Object.values(layersIds);

    for (const id of launchedIds) {
      mapObject.off('mousemove', id);
      mapObject.off('mouseleave', id);
    }
  }

  React.useEffect(() => {
    if (map && layersIds) {
      enableEvents();
    }

    return () => {
      removeEvents();
    };
  }, [map, layersIds]);

  return [popupConfig, clickedFeature];
}

useMapEvents.propTypes = {
  map: PropTypes.instanceOf(Map).isRequired,
  layersIds: PropTypes.shape({
    cadastre_id: PropTypes.object
  }).isRequired
};

export { useMapEvents };
