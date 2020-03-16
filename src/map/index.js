import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGL, { MapContext, ZoomControl } from 'react-mapbox-gl';
import { Sources, Layers, useCartoTiles } from '../layers';
import { Loader, LayerSelector } from '../components';
import CONFIG from '../layers/Config/config';

const Map = ReactMapboxGL({
  accessToken:
    'pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNqd3Z6amtjMTBjOTA0OW84ZjVvYzF6bjQifQ.LIbUaYq3GaiWTzsBV6YnTA'
});

const style = 'mapbox://styles/mapbox/dark-v10';

const checkBrowserSupport = () => {
  if (!mapboxgl.supported()) {
    // eslint-disable-next-line
    alert('Tu navegador no soporta Mapbox GL JS.');
    return false;
  }
  return true;
};

const layersVisibilityConfig = [
  { shouldShowOnInit: true, layersIds: [CONFIG.pharmacyId, CONFIG.voronoiId, `${CONFIG.pharmacyId}_raw`, `${CONFIG.pharmacyId}_labels`], layerTitle: 'Farmacias', layerColor: 'rgb(0, 255, 0)' },
  { shouldShowOnInit: false, layersIds: [CONFIG.supermarketsId, CONFIG.supermarketsVoronoiId, `${CONFIG.supermarketsId}_raw`, `${CONFIG.supermarketsId}_labels`], layerTitle: 'Supermercados', layerColor: 'rgb(0, 102, 255)' }
]

const MapboxMap = ({ mapFilters }) => {

  const [allLoaded, setAllLoaded] = React.useState(false);
  const [mapObject, setMap] = React.useState(null);
  const [layersConfig] = useCartoTiles(mapFilters);

  return (
    <>
      {checkBrowserSupport() && (
        <>
          {
            mapObject && (
              <>
                <Loader mapObject={mapObject} />
                <LayerSelector key="layer-picker" map={mapObject} layers={layersVisibilityConfig} />
              </>
            )
          }
          <Map
            style={style}
            fitBounds={[
              [-4.2129351236574735, 40.23670360815473],
              [-3.1320186657642637, 40.64109281781327]
            ]}
            containerStyle={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <MapContext.Consumer>
              {map => {
                setMap(map);

                return (
                  <>
                    {layersConfig && (
                      <>
                        <Sources
                          key="sources"
                          config={layersConfig}
                          sourceLoad={response => setAllLoaded(response)}
                        />
                        {allLoaded && (
                          <>
                            <Layers key="map" map={map} config={layersConfig} />
                          </>
                        )}
                        <ZoomControl key="zoom-control" position="bottom-left" />
                      </>
                    )}
                  </>
                );
              }}
            </MapContext.Consumer>
          </Map>
        </>
      )}
    </>
  );
};

MapboxMap.propTypes = {
  mapFilters: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default MapboxMap;
