import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import CartoMVTRequest from '../Classes/CartoMVTRequest.js';
import QUERY from '../Config/queries';
import CONFIG from '../Config/config';
import PAINT from '../Config/paints';

class CartoMVTRequest {
  constructor(definition) {
    this.cartoAccount = definition.cartoAccount;
    this.cartoMapsKey = definition.cartoMapsKey;
    this.id = definition.id;
    this.sql = definition.sql;
    this.getGeoJSON = definition.getGeoJSON;
    this.aggregationConfig = definition.aggregationConfig;
  }

  async getTiles() {
    const mapConfig = {
      buffersize: { mvt: 1 },
      layers: [
        {
          id: this.id,
          type: 'mapnik',
          options: {
            sql: this.sql,
            aggregation: this.aggregationConfig || undefined,
            id: 'cartodb_id'
          }
        }
      ]
    };

    const response = await fetch(
      `https://${this.cartoAccount}.carto.com/api/v1/map${
        this.cartoMapsKey ? `?api_key=${this.cartoMapsKey}` : ''
      }`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapConfig)
      }
    );

    const layergroup = await response.json();

    return layergroup.metadata.tilejson.vector.tiles;
  }

  get requestInfo() {
    return {
      carto_account: this.cartoAccount,
      carto_maps_key: this.cartoMapsKey,
      request_id: this.id,
      sql_query: this.sql,
      aggregation_config: this.aggregationConfig || undefined
    };
  }

  set updateSql(query) {
    this.sql = query;
  }
}

function useCartoTiles(mapFilters) {
  const [layersConfig, setLayers] = useState(null);

  const getStaticTiles = async () => {
      
    const voronoiInfo = new CartoMVTRequest({
      cartoAccount: CONFIG.dotgisUser,
      cartoMapsKey: CONFIG.dotgisMapsKey,
      id: CONFIG.voronoiSourceLayer,
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

    Promise.all([
      voronoiInfo.getTiles(),
      pharmacyClusterInfo.getTiles(),
      pharmacyInfo.getTiles(),
      supermarketInfo.getTiles(),
      supermarketClusterInfo.getTiles(),
      supermarketsVoronoiInfo.getTiles()
    ]).then(response => {
      setLayers({
        voronoi_id: {
          isSource: true,
          id: CONFIG.voronoiId,
          sourceId: CONFIG.voronoiSourceId,
          sourceLayer: CONFIG.voronoiSourceLayer,
          pbf: response[0],
          promoteId: 'cartodb_id',
          type: 'fill',
          paint: PAINT.voronoi,
          layout: {
            'visibility': 'visible'
          }
        },
        pharmacy_id_raw: {
          isSource: true,
          id: `${CONFIG.pharmacyId}_raw`,
          sourceId: `${CONFIG.pharmacySourceId}_raw`,
          sourceLayer: `${CONFIG.pharmacySourceLayer}_raw`,
          pbf: response[2],
          promoteId: 'cartodb_id',
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
            'visibility': 'visible'
          }
        },
        pharmacy_id: {
          isSource: true,
          id: CONFIG.pharmacyId,
          sourceId: CONFIG.pharmacySourceId,
          sourceLayer: CONFIG.pharmacySourceLayer,
          pbf: response[1],
          promoteId: 'cartodb_id',
          type: 'circle',
          paint: PAINT.cluster(CONFIG.aggregatedField),
          layout: {
            'visibility': 'visible'
          }
        },
        pharmacy_labels_id: {
          id: `${CONFIG.pharmacyId}_labels`,
          sourceId: CONFIG.pharmacySourceId,
          sourceLayer: CONFIG.pharmacySourceLayer,
          pbf: response[1],
          promoteId: 'cartodb_id',
          type: 'symbol',
          paint: PAINT.label_paint(CONFIG.aggregatedField).textColor,
          layout: { 'visibility': 'visible', ...PAINT.label_paint(CONFIG.aggregatedField).layout }
        },
        supermarkets_voronoi_id: {
          isSource: true,
          id: CONFIG.supermarketsVoronoiId,
          sourceId: CONFIG.supermarketsVoronoiSourceId,
          sourceLayer: CONFIG.supermarketsVoronoiSourceLayer,
          pbf: response[5],
          promoteId: 'cartodb_id',
          type: 'fill',
          paint: PAINT.voronoi,
          layout: {
            'visibility': 'none'
          }
        },
        supermarket_id_raw: {
          isSource: true,
          id: `${CONFIG.supermarketsId}_raw`,
          sourceId: `${CONFIG.supermarketsSourceId}_raw`,
          sourceLayer: `${CONFIG.supermarketsSourceLayer}_raw`,
          pbf: response[3],
          promoteId: 'cartodb_id',
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
        supermarket_id: {
          isSource: true,
          id: CONFIG.supermarketsId,
          sourceId: CONFIG.supermarketsSourceId,
          sourceLayer: CONFIG.supermarketsSourceLayer,
          pbf: response[4],
          promoteId: 'cartodb_id',
          type: 'circle',
          paint: PAINT.cluster(CONFIG.aggregatedSupermarketsField),
          layout: {
            'visibility': 'none'
          }
        },
        supermarket_labels_id: {
          id: `${CONFIG.supermarketsId}_labels`,
          sourceId: CONFIG.supermarketsSourceId,
          sourceLayer: CONFIG.supermarketsSourceLayer,
          pbf: response[4],
          promoteId: 'cartodb_id',
          type: 'symbol',
          paint: PAINT.label_paint(CONFIG.aggregatedSupermarketsField).textColor,
          layout: { 'visibility': 'none', ...PAINT.label_paint(CONFIG.aggregatedSupermarketsField).layout }
        },
      });
    });
  };

  React.useEffect(() => {
    getStaticTiles(mapFilters);
  }, [mapFilters]);

  return [layersConfig];
}

useCartoTiles.propTypes = {
  mapFilters: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export { useCartoTiles };
