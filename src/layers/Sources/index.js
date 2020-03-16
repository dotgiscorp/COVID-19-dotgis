import React from 'react';
import PropTypes from 'prop-types';
import { Source } from 'react-mapbox-gl';

const Sources = ({ config, sourceLoad }) => {
  const [sourcesLoaded, setLoaded] = React.useState({});

  React.useEffect(() => {
    if (config) {
      const values = Object.values(config);

      let newObj = {};
      for (const info of values) {
        newObj = { ...newObj, [info.id]: false };
      }

      setLoaded(newObj);
    }
  }, [config]);

  React.useEffect(() => {
    if (sourcesLoaded) {
      const all = Object.keys(sourcesLoaded).every(k => sourcesLoaded[k] === true);
      all && sourceLoad(true);
    }
  }, [sourcesLoaded]);

  const manageLayersLoaded = layer => {
    setLoaded({ ...sourcesLoaded, [layer]: true });
  };

  return (
    <>
      {Object.values(config).map(
        info =>
          info.isSource && (
            <Source
              key={info.sourceId}
              id={info.sourceId}
              tileJsonSource={{
                type: 'vector',
                tiles: info.pbf,
                promoteId: info.promoteId || undefined
              }}
              onSourceLoaded={() => manageLayersLoaded(info.id)}
            />
          )
      )}
    </>
  );
};

Sources.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object]).isRequired,
  sourceLoad: PropTypes.func.isRequired
};

export { Sources };
