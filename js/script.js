var map = L.map('mapid').setView([49.586956, 34.552131], 15);

var spiderbee = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);



// add your own pin
var teardrop = L.icon({
    iconUrl: 'images/marker-icon_red-1.png',
    //iconUrl: 'images/marker-cian.png',
    iconSize: [19, 29],
    iconAnchor: [8, 29],
    popupAnchor: [1, -25],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});

//add some changes to onEachFeature function  
function styleGeoJson(feature, layer) {
    var popupContent = "<b>Номер: </b>" + feature.properties.Nr + "</br><b>Имя: </b> " + feature.properties.Name + "</br><b>Адресс: </b>" + feature.properties.Address + "</br><b>Город: </b>" + feature.properties.City + "</br><b>Собрание: </b>" + feature.properties.Congregation + "</br><b>Телефон: </b>" + feature.properties.Tel;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    // call popup
    layer.bindPopup(popupContent);
    //call custom pins
    layer.setIcon(teardrop);
}



//for each feature for servants run the function define above - styleGeoJson
L.geoJson(servants, {
        onEachFeature: styleGeoJson,

    })
    .addTo(map);



///// add Polygon
// Зона 2
var latlngs1 = [
    [49.587026, 34.552195],
    [49.581544, 34.546337],
    [49.580473, 34.544985],
    [49.575715, 34.537368],
    [49.573572, 34.535823], // Панаса Мирного /- Европейская
    [49.573488, 34.537539],
    [49.571693, 34.544256],
    [49.561019, 34.576044],
    [49.566141, 34.586259],
    [49.575715, 34.586431],
    [49.575715, 34.584886], // Небесной Сотни /- Миру
    [49.580223, 34.56952],
    [49.58089, 34.565142],
    [49.583116, 34.560077],
    [49.586956, 34.552265] // Небесной сотни /- Европейской 
];
L.polygon(latlngs1, {
    color: 'green',
    fillOpacity: 0.1
}).bindPopup('Зона 1').addTo(map);

// Зона 2
var latlngs2 = [
    [49.587026, 34.552195],//Европейской /- Монастырской
    [49.590517, 34.556015],// 
    [49.594495, 34.572301],//
    [49.599975, 34.57552],//
    [49.601226, 34.581699], //
    [49.600893, 34.585218],//
    [49.586372, 34.584961],//
    [49.583617, 34.584403],
    //[49.566141, 34.586259],//************ */
    [49.575715, 34.586431],
    [49.575715, 34.584886], 
    [49.580223, 34.56952],
    [49.58089, 34.565142],
    [49.583116, 34.560077],
    [49.586956, 34.552265]  // Небесной Сотни /- Миру
];
L.polygon(latlngs2, {
    color: 'blue',
    fillOpacity: 0.1
}).bindPopup('Зона 2').addTo(map);

// Зона 3
var latlngs3 = [
    [49.587026, 34.552195],//Европейской /- Монастырской
    [49.590322, 34.549727],// 
    [49.59711, 34.535394],//
    [49.603785, 34.539471],//
    [49.606983, 34.543591], //
    [49.618051, 34.567494],//
    [49.619552, 34.577193],//
    [49.600907, 34.58524],
    [49.601237, 34.58171],
    [49.599992, 34.575514],
    [49.594495, 34.572274],
    [49.590524, 34.556009]
    
  
];
L.polygon(latlngs3, {
    color: 'grey',
    fillOpacity: 0.1
}).bindPopup('Зона 3').addTo(map);




// --------- Leaflet Draw Plugin------------- //
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);
var MyCustomMarker = L.Icon.extend({
    options: {
        shadowUrl: null,
        iconAnchor: new L.Point(12, 12),
        iconSize: new L.Point(24, 24),
        iconUrl: 'link/to/image.png'
    }
});
var options = {
    position: 'topright',
    draw: {
        polyline: {
            shapeOptions: {
                color: '#f357a1',
                weight: 10
            }
        },
        polygon: {
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
                color: '#e1e100', // Color the shape will turn when intersects
                message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
            },
            shapeOptions: {
                color: '#bada55'
            }
        },
        circle: false, // Turns off this drawing tool
        rectangle: {
            shapeOptions: {
                clickable: false
            }
        },
        marker: {
            icon: new MyCustomMarker()
        }
    },
    edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: false
    }
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    editableLayers.addLayer(layer);
});
// var place = L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup("<b>Hello world!</b><br />I am a popup.");


// var circle = L.circle([51.508, -0.11], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.2
// }).addTo(map).bindPopup("I am a circle.");

// L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map).bindPopup("I am a polygon.");



//// the code bellow will help you to get any coordinates on map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);