import React from 'react';
import { store } from '../store/store';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGL, { MapContext, ZoomControl } from 'react-mapbox-gl';
import { Sources, Layers, useCartoTiles } from '../layers';
import { Loader, WidgetsContainer, LayerSelector, Form, Footer } from '../components';
import CONFIG from '../layers/Config/config';

const Map = ReactMapboxGL({
  accessToken: 'pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNqd3Z6amtjMTBjOTA0OW84ZjVvYzF6bjQifQ.LIbUaYq3GaiWTzsBV6YnTA',
  dragRotate: false,
  minZoom: 12
});

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const checkBrowserSupport = () => {
  if (!mapboxgl.supported()) {
    // eslint-disable-next-line
    alert('Tu navegador no soporta Mapbox GL JS.');
    return false;
  }
  return true;
};

const layersVisibilityConfig = [
  { shouldShowOnInit: true, layersIds: [CONFIG.infectedId], layerTitle: 'Positivos' },
  { shouldShowOnInit: false, layersIds: [CONFIG.infectedIdWas], layerTitle: 'Fueron positivos' },
  { shouldShowOnInit: false, layersIds: [CONFIG.infectedIdTest], layerTitle: 'Hubo síntomas, sin prueba de test' },
  { shouldShowOnInit: false, layersIds: [CONFIG.infectedIdNo], layerTitle: 'Sin síntomas' },
  { shouldShowOnInit: false, layersIds: [CONFIG.pharmacyId, CONFIG.pharmacyVoronoiId, `${CONFIG.pharmacyId}_raw`, `${CONFIG.pharmacyId}_labels`], layerTitle: 'Farmacias' },
  { shouldShowOnInit: false, layersIds: [CONFIG.supermarketsId, CONFIG.supermarketsVoronoiId, `${CONFIG.supermarketsId}_raw`, `${CONFIG.supermarketsId}_labels`], layerTitle: 'Supermercados' }
];

const MapboxMap = () => {
  // const globalState = React.useContext(store);
  // const { state: { forceUpdate } } = globalState;

  const [mapObject, setMap] = React.useState();
  const [allLoaded, setAllLoaded] = React.useState(false);
  const [layersConfig] = useCartoTiles();

  return (
    <>
      {checkBrowserSupport() && (
        <>
          { 
            mapObject && (
              <>
                <Loader mapObject={mapObject} />
                <Form mapObject={mapObject} />
                <WidgetsContainer>
                  <LayerSelector key="layer-picker" mapObject={mapObject} layers={layersVisibilityConfig} />
                </WidgetsContainer>
              </>
            )
          }
          <Map
            style={style}
            center={[-3.703790, 40.416775]}
            zoom={[15]}
            containerStyle={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <MapContext.Consumer>
              {map => {
                !mapObject && setMap(map);

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
                        <ZoomControl
                          key="zoom-control"
                          position="bottom-left"
                          className="custom__zoom"
                        />
                      </>
                    )}
                  </>
                );
              }}
            </MapContext.Consumer>
          </Map>
          <Footer />
        </>
      )}
    </>
  );
};

export default MapboxMap;
