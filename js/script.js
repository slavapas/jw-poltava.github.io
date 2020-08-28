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


//

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
}).bindPopup('Зона 1 - 71').addTo(map);



// Зона 2
var latlngs2 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590517, 34.556015], // 
    [49.594495, 34.572301], //
    [49.599975, 34.57552], //
    [49.601226, 34.581699], //
    [49.600893, 34.585218], //
    [49.586372, 34.584961], //
    [49.583617, 34.584403],
    //[49.566141, 34.586259],//************ */
    [49.575715, 34.586431],
    [49.575715, 34.584886],
    [49.580223, 34.56952],
    [49.58089, 34.565142],
    [49.583116, 34.560077],
    [49.586956, 34.552265] // Небесной Сотни /- Миру
];


L.polygon(latlngs2, {
    color: 'blue',
    fillOpacity: 0.1
}).bindPopup('Зона 2 - 40').addTo(map);

// Зона 3
var latlngs3 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590322, 34.549727], // 
    [49.59711, 34.535394], //
    [49.603785, 34.539471], //
    [49.604314, 34.538183], //
    [49.605704, 34.538505], //
    [49.606983, 34.543591], //
    //[49.618051, 34.567494],//
    //[49.623305, 34.555564],//
    [49.632896, 34.561186], //
    [49.634286, 34.569941], //

    [49.619552, 34.577193], //
    [49.600907, 34.58524],
    [49.601237, 34.58171],
    [49.599992, 34.575514],
    [49.594495, 34.572274],
    [49.590524, 34.556009]


];


L.polygon(latlngs3, {
    color: 'grey',
    fillOpacity: 0.1
}).bindPopup('Зона 3 - 46').addTo(map);




// Зона 4
var latlngs4 = [
    [49.597113, 34.535378], //Шведская /- Соборности
    [49.59937, 34.530405], // 
    [49.614971, 34.529868], // 
    [49.63291, 34.561175], // 
    //[49.607001, 34.543591],// 
    // [49.606983, 34.543591], //
    [49.606983, 34.543591], //
    [49.606994, 34.543564],
    [49.605704, 34.538478],
    [49.604303, 34.538167],
    [49.603785, 34.539455],



];


L.polygon(latlngs4, {
    color: 'brown',
    fillOpacity: 0.1
}).bindPopup('Зона 4 - 18').addTo(map);


///////////////////
////////////////////
// Зона 5
var latlngs5 = [
    [49.599589, 34.530383], //Зиньковская /- Берюзова
    //[49.590319, 34.549711],// 
    [49.599836, 34.497478], // 
    [49.59946, 34.49279], // 
    [49.599356, 34.490322], // 
    [49.599808, 34.483842], // 
    [49.600183, 34.469304], // 
    [49.604953, 34.469476], // 
    [49.604929, 34.468451], // 
    [49.607043, 34.468285], // 
    [49.609848, 34.470634], // 
    [49.614961, 34.529842], // 


];


L.polygon(latlngs5, {
    color: 'green',
    fillOpacity: 0.1
}).bindPopup('Зона 5 - 50').addTo(map);


// Зона 8
var latlngs8 = [
    [49.587026, 34.552195], //Европейской /- Монастырской
    [49.590312, 34.549722], //
    [49.59364, 34.542695], //
    [49.592221, 34.541096], //
    [49.592082, 34.540957], //
    [49.587958, 34.538698], //
    [49.584229, 34.537733], //
    [49.58313, 34.537164], //
    [49.580049, 34.536842], //
    [49.575436, 34.536885], //
    [49.580501, 34.544996], //
    [49.581572, 34.546353], //
    //
    //
    //


];


L.polygon(latlngs8, {
    color: 'red',
    fillOpacity: 0.1
}).bindPopup('Зона 8 - 6').addTo(map);


// Зона 7
var latlngs7 = [
    [49.59364, 34.542695], //
    [49.592221, 34.541096], //
    [49.592082, 34.540957], //
    [49.587958, 34.538698], //

    [49.584167, 34.53769], //
    [49.583902, 34.537539], //
    [49.585509, 34.530834], //
    [49.586393, 34.528388], //

    [49.58681, 34.526752], //
    [49.596213, 34.537255], //

  


];



L.polygon(latlngs7, {
    color: 'black',
    fillOpacity: 0.1
}).bindPopup('Зона 7 - 20').addTo(map);



// Зона 6
var latlngs6 = [
    [49.59622, 34.53725], //
    [49.586824, 34.52673], //
    [49.584424, 34.524643], //
    [49.583993, 34.522347], //
    [49.580974, 34.517519], //

    [49.580974, 34.517519], //
    [49.584619, 34.51061], //
    [49.586274, 34.509065], //
    [49.590183, 34.50501], //
    [49.590524, 34.505546], //
    [49.592214, 34.505407], //

    [49.592137, 34.514558], //
    [49.595399, 34.514966], //
    [49.595399, 34.514966], //
    [49.599697, 34.514923], //
    [49.599578, 34.529933], //
];


L.polygon(latlngs6, {
    color: 'blue',
    fillOpacity: 0.1
}).bindPopup('Зона 6 - 29').addTo(map);


//////////////////////////////////////////////////////////////////////
var latLngCircle = [49.594992, 34.574514];
var circleMarker = L.circleMarker(latLngCircle, {
    color: '#3388ff',
    radius: 5
}).bindPopup('111').addTo(map);






///////////////////////////////////////////////////////////////////////
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





/////-------------------------------------------------
///        insert circleMarker                  ///
/////-------------------------------------------------
function styleGeoJson(feature, layer) {
    var popupContent = "<b>Номер: </b>" + feature.properties.Nr + "</br><b>Имя: </b> " + feature.properties.Name + "</br><b>Адресс: </b>" + feature.properties.Address + "</br><b>Город: </b>" + feature.properties.City + "</br><b>Собрание: </b>" + feature.properties.Congregation + "</br><b>Телефон: </b>" + feature.properties.Tel;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

///////////////////////////////////
L.geoJSON(servants, {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: styleGeoJson,

    pointToLayer: function (feature, latlng) {
        var colors = {
            'Браилки': 'green',
            'Центральное': 'blue',
            'Юровка': 'red',
            'Восточное': 'black',
            
        }
       
       
        return L.circleMarker(latlng, {
            radius: 7,
            fillColor: colors[feature.properties.Congregation],
            color: colors[feature.properties.Congregation],
            weight: 1,
            opacity: 1,
            fillOpacity: 0.4,
        });
    }
}).addTo(map);


/////-------------------------------------------------
//// the code bellow will help you to get any coordinates on map
/////-------------------------------------------------
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);





// --------------------------------------------
// add slide panel legend
//---------------------------------------------
$(document).ready(function() {
    $("#form1").addClass("hide");
    $("#formButton").click(function() {
      $("#form1").toggle();
    });
  });
  