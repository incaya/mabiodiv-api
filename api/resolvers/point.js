const { PointObject } = require('graphql-geojson');

module.exports =  {
    Point: {
        type: "Feature",
        geometry: PointObject,
        properties: {}
    }
}