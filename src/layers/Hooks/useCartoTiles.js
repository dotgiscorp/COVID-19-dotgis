import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartoMVTRequest from '../Classes/CartoMVTRequest';
import QUERY from '../Config/queries';
import CONFIG from '../Config/config';
import PAINT from '../Config/paints';

function useCartoTiles() {
  const [layersConfig, setLayers] = useState(null);

  const getTiles = async () => {
    const voronoiInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: CONFIG.pharmacyVoronoiSourceLayer,
      sql: QUERY.voronoi
    });

    const pharmacyClusterInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: CONFIG.pharmacySourceLayer,
      sql: QUERY.pharmacy,
      aggregationConfig: {
        threshold: 1,
        placement: 'centroid',
        columns: {
          [CONFIG.aggregatedField]: {
            aggregate_function: 'count',
            aggregated_column: 'rid'
          }
        },
        filters: {
          [CONFIG.aggregatedField]: { greater_than: 1 }
        },
        resolution: 64
      }
    });

    const pharmacyInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: `${CONFIG.pharmacySourceLayer}_raw`,
      sql: QUERY.pharmacy
    });

    const supermarketInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: `${CONFIG.supermarketsSourceLayer}_raw`,
      sql: QUERY.supermarket
    });

    const supermarketClusterInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: CONFIG.supermarketsSourceLayer,
      sql: QUERY.supermarket,
      aggregationConfig: {
        threshold: 1,
        placement: 'centroid',
        columns: {
          [CONFIG.aggregatedSupermarketsField]: {
            aggregate_function: 'count',
            aggregated_column: 'id_super'
          }
        },
        filters: {
          [CONFIG.aggregatedSupermarketsField]: { greater_than: 1 }
        },
        resolution: 64
      }
    });

    const supermarketsVoronoiInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: CONFIG.supermarketsVoronoiSourceLayer,
      sql: QUERY.supermarketVoronoi
    });

    const infectedInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: '6fb966f30adb903ece7385e3aa059752a4e8fb5d',
      id: CONFIG.infectedSourceLayer,
      sql: QUERY.infected
    });

    Promise.all([
      voronoiInfo.getTiles(),
      pharmacyClusterInfo.getTiles(),
      pharmacyInfo.getTiles(),
      supermarketInfo.getTiles(),
      supermarketClusterInfo.getTiles(),
      supermarketsVoronoiInfo.getTiles(),
      infectedInfo.getTiles()
    ]).then(response => {
      setLayers({
        pharmacy_voronoi_source: {
          isSource: true,
          sourceId: CONFIG.pharmacyVoronoiSourceId,
          pbf: response[0],
          promoteId: 'cartodb_id'
        },
        pharmacy_voronoi_layer: {
          id: CONFIG.pharmacyVoronoiId,
          sourceId: CONFIG.pharmacyVoronoiSourceId,
          sourceLayer: CONFIG.pharmacyVoronoiSourceLayer,
          type: 'fill',
          paint: PAINT.voronoi,
          layout: {
            'visibility': 'none'
          }
        },
        pharmacy_raw_source: {
          isSource: true,
          sourceId: `${CONFIG.pharmacySourceId}_raw`,
          pbf: response[2],
          promoteId: 'cartodb_id'
        },
        pharmacy_raw_layer: {
          id: `${CONFIG.pharmacyId}_raw`,
          sourceId: `${CONFIG.pharmacySourceId}_raw`,
          sourceLayer: `${CONFIG.pharmacySourceLayer}_raw`,
          type: 'circle',
          paint: PAINT.pharmacy,
          popupFieldsConfig: {
            nombre: {
              fieldLabel: 'Nombre',
              label: ''
            },
            direccion: {
              fieldLabel: 'Dirección',
              label: ''
            },
          },
          layout: {
            'visibility': 'none'
          }
        },
        pharmacy_cluster_source: {
          isSource: true,
          sourceId: CONFIG.pharmacySourceId,
          pbf: response[1],
          promoteId: 'cartodb_id'
        },
        pharmacy_cluster_layer: {
          id: CONFIG.pharmacyId,
          sourceId: CONFIG.pharmacySourceId,
          sourceLayer: CONFIG.pharmacySourceLayer,
          type: 'circle',
          paint: PAINT.cluster(CONFIG.aggregatedField),
          layout: {
            'visibility': 'none'
          }
        },
        pharmacy_cluster_labels_layer: {
          id: `${CONFIG.pharmacyId}_labels`,
          sourceId: CONFIG.pharmacySourceId,
          sourceLayer: CONFIG.pharmacySourceLayer,
          type: 'symbol',
          paint: PAINT.label_paint(CONFIG.aggregatedField).textColor,
          layout: { 'visibility': 'none', ...PAINT.label_paint(CONFIG.aggregatedField).layout }
        },
        supermarkets_voronoi_source: {
          isSource: true,
          sourceId: CONFIG.supermarketsVoronoiSourceId,
          pbf: response[5],
          promoteId: 'cartodb_id'
        },
        supermarkets_voronoi_layer: {
          id: CONFIG.supermarketsVoronoiId,
          sourceId: CONFIG.supermarketsVoronoiSourceId,
          sourceLayer: CONFIG.supermarketsVoronoiSourceLayer,
          type: 'fill',
          paint: PAINT.voronoi,
          layout: {
            'visibility': 'none'
          }
        },
        supermarkets_raw_source: {
          isSource: true,
          sourceId: `${CONFIG.supermarketsSourceId}_raw`,
          pbf: response[3],
          promoteId: 'cartodb_id'
        },
        supermarkets_raw_layer: {
          id: `${CONFIG.supermarketsId}_raw`,
          sourceId: `${CONFIG.supermarketsSourceId}_raw`,
          sourceLayer: `${CONFIG.supermarketsSourceLayer}_raw`,
          type: 'circle',
          paint: PAINT.supermarket,
          popupFieldsConfig: {
            nombre: {
              fieldLabel: 'Nombre',
              label: ''
            },
            direccion: {
              fieldLabel: 'Dirección',
              label: ''
            },
          },
          layout: {
            'visibility': 'none'
          }
        },
        supermarkets_cluster_source: {
          isSource: true,
          sourceId: CONFIG.supermarketsSourceId,
          pbf: response[4],
          promoteId: 'cartodb_id'
        },
        supermarkets_cluster_layer: {
          id: CONFIG.supermarketsId,
          sourceId: CONFIG.supermarketsSourceId,
          sourceLayer: CONFIG.supermarketsSourceLayer,
          type: 'circle',
          paint: PAINT.cluster(CONFIG.aggregatedSupermarketsField),
          layout: {
            'visibility': 'none'
          }
        },
        supermarket_cluster_labels_layer: {
          id: `${CONFIG.supermarketsId}_labels`,
          sourceId: CONFIG.supermarketsSourceId,
          sourceLayer: CONFIG.supermarketsSourceLayer,
          pbf: response[4],
          promoteId: 'cartodb_id',
          type: 'symbol',
          paint: PAINT.label_paint(CONFIG.aggregatedSupermarketsField).textColor,
          layout: { 'visibility': 'none', ...PAINT.label_paint(CONFIG.aggregatedSupermarketsField).layout }
        },
        infected_source: {
          isSource: true,
          sourceId: CONFIG.infectedSourceId,
          pbf: response[6],
          promoteId: 'cartodb_id'
        },
        infected_layer: {
          id: CONFIG.infectedId,
          sourceId: CONFIG.infectedSourceId,
          sourceLayer: CONFIG.infectedSourceLayer,
          type: 'fill',
          paint: PAINT.infected(3),
          popupFieldsConfig: {
            type_3: {
              fieldLabel: 'infectados',
              label: ''
            }
          },
          layout: {
            'visibility': 'visible'
          }
        },
        infected_layer_was: {
          id: CONFIG.infectedIdWas,
          sourceId: CONFIG.infectedSourceId,
          sourceLayer: CONFIG.infectedSourceLayer,
          type: 'fill',
          paint: PAINT.infected(2),
          popupFieldsConfig: {
            type_2: {
              fieldLabel: 'fueron positivos',
              label: ''
            }
          },
          layout: {
            'visibility': 'none'
          }
        },
        infected_layer_test: {
          id: CONFIG.infectedIdTest,
          sourceId: CONFIG.infectedSourceId,
          sourceLayer: CONFIG.infectedSourceLayer,
          type: 'fill',
          paint: PAINT.infected(1),
          popupFieldsConfig: {
            type_1: {
              fieldLabel: 'hubo síntomas, sin prueba de test',
              label: ''
            }
          },
          layout: {
            'visibility': 'none'
          }
        },
        infected_layer_no: {
          id: CONFIG.infectedIdNo,
          sourceId: CONFIG.infectedSourceId,
          sourceLayer: CONFIG.infectedSourceLayer,
          type: 'fill',
          paint: PAINT.infected(0),
          popupFieldsConfig: {
            type_0: {
              fieldLabel: 'sin síntomas',
              label: ''
            }
          },
          layout: {
            'visibility': 'none'
          }
        }
      });
    });
  };

  React.useEffect(() => {
    getTiles();
  }, []);

  /* React.useEffect(() => {
    if (forceUpdate) {
      const layersToRemove = [CONFIG.infectedId, CONFIG.infectedIdWas, CONFIG.infectedIdTest, CONFIG.infectedIdNo];

      for(const layer of layersToRemove) {
        mapObject.removeLayer(layer);
      }

      mapObject.removeSource(CONFIG.infectedSourceId);
      
      getTiles();
    }
  }, [forceUpdate]); */

  return [layersConfig];
}

useCartoTiles.propTypes = {
  mapFilters: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export { useCartoTiles };
