const CURSOR = 'pointer';

class HoverEffect {
  constructor(definition) {
    this.map = definition.map;
    this.id = definition.id;
    this.sourceId = definition.sourceId;
    this.sourceLayer = definition.sourceLayer;
    this.popupFieldsConfig = definition.popupFieldsConfig || {};
    this._hoveredFeature = 0;
    this._hoveredId = null;
    this._popupInfo = {};
  }

  get popupInfo() {
    return this._popupInfo;
  }

  mouseMove(e) {
    this.map.getCanvas().style.cursor = CURSOR;

    if (e.features.length > 0) {
      if (this._hoveredId) {
        this.map.setFeatureState(
          {
            source: this.sourceId,
            id: this._hoveredId,
            sourceLayer: this.sourceLayer
          },
          { hover: false }
        );
      }

      this._hoveredId = e.features[0].id;

      this.map.setFeatureState(
        {
          source: this.sourceId,
          id: this._hoveredId,
          sourceLayer: this.sourceLayer
        },
        { hover: true }
      );
    }

    const coords = e.lngLat;

    const popupFields = Object.keys(this.popupFieldsConfig);
    const featureProperties = e.features[0].properties;

    for (const popupField of popupFields) {
      if (featureProperties.hasOwnProperty(popupField)) {
        this._popupInfo = {
          ...this._popupInfo,
          coords: [coords.lng, coords.lat],
          shouldRender: true,
          info: {
            ...this._popupInfo.info,
            [popupField]: {
              ...this.popupFieldsConfig[popupField],
              value: featureProperties[popupField]
            }
          }
        };
      }
    }
  }

  mouseLeave() {
    this.map.getCanvas().style.cursor = '';

    this._popupInfo = { shouldRender: false };

    if (this._hoveredId) {
      this.map.setFeatureState(
        {
          source: this.sourceId,
          id: this._hoveredId,
          sourceLayer: this.sourceLayer
        },
        { hover: false }
      );
    }

    this._hoveredId = null;
  }
}

export default HoverEffect;
