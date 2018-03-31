var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
})

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.type) {
        layer.bindPopup(feature.type);
    }
}

function addStyleToFeature(feature){
  switch (feature.geometry.type) {
            case 'MultiPolygon':
              return {
                weight: 2,
                opacity: 1,
                color: 'black',
                fillOpacity: 0.7,
                fillColor: 'blue',
              };
            case 'Polygon': 
              return {
                weight: 2,
                opacity: 1,
                color: 'black',
                fillOpacity: 0.7,
                fillColor: 'green',
              };
            case 'LineString':   
              return {
                color: "red"
              };
        }
}

L.geoJSON(careAreas, 
{ 
  style: addStyleToFeature,
  onEachFeature: onEachFeature
}).addTo(map);