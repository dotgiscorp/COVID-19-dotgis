export default {
    voronoi: {
        'fill-color': ['case', ['boolean', ['feature-state', 'hover'], false], 'rgba(204, 102, 255, 0.15)', 'rgba(204, 102, 255, 0.1)'],
        'fill-outline-color': 'rgba(204, 102, 255, 0.3)',
    },
    cluster: aggregatedField => ({
        'circle-color': ['step', ['get', aggregatedField], 'rgba(0, 0, 0, 0)', 100, '#b4d9cc', 750, '#63a6a0', 2000, '#287274'],
        'circle-radius': [
            'case',
            ['>', ['get', aggregatedField], 1],
            ['step', ['get', aggregatedField], 20, 100, 30, 750, 40],
            6
        ],
    }),
    pharmacy: {
        'circle-color': ['case', ['boolean', ['feature-state', 'hover'], false], 'rgb(255, 102, 0)', 'rgb(0, 255, 0)'],
        'circle-radius': ['interpolate', ['exponential', 0.7], ['zoom'], 4, 0, 10, 3, 15, 5, 20, 7]
    },
    supermarket: {
        'circle-color': ['case', ['boolean', ['feature-state', 'hover'], false], 'rgb(255, 102, 0)', 'rgb(0, 102, 255)'],
        'circle-radius': ['interpolate', ['exponential', 0.7], ['zoom'], 4, 0, 10, 3, 15, 5, 20, 7]
    },
    label_paint: labelField => ({
        textColor: {
            'text-color': ['case', ['>', ['get', labelField], 100], '#333', 'rgba(0, 0, 0, 0)']
        },
        layout: {
            'text-field': `{${labelField}}`,
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': ['step', ['get', labelField], 12, 100, 13, 750, 14],
            'text-allow-overlap': true
        }
    })
};
