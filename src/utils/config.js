const DOTGIS_CARTO_USER = 'dotgis';
const DOTGIS_API_KEY = 'nSD6SXZdlIi-u0lsX0Vxfg';

const CARTO_ENDPOINT = query => `https://${DOTGIS_CARTO_USER}.carto.com/api/v2/sql?q=${query}&api_key=${DOTGIS_API_KEY}`;

const CHECK_DATA_QUERY = (type, coords) => `
  WITH sub as (
    SELECT grid.cartodb_id AS id,
           grid.type_${type},
           CASE
             WHEN ST_INTERSECTS(grid.the_geom, ST_SetSRID(ST_Point(${coords.lat}, ${coords.long}), 4326)) THEN true
           ELSE false
           END AS hasData
    FROM grid_pob1001 grid
  ) SELECT * FROM sub WHERE hasData IS true`;

const UPDATE_DATA_QUERY = (id, type, value) => `UPDATE grid_pob1001 SET type_${type} = ${value} WHERE cartodb_id = ${id}`;

export { CARTO_ENDPOINT, CHECK_DATA_QUERY, UPDATE_DATA_QUERY };
