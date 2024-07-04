var map;
var OSM;
var lyrOSM;
var mrkCurrentLocation;
var ctlPan;
var ctlMeasure;
var ctlButton;
var ctlSidebar;
var Dark;
var finds;
var baseMaps;
var ctlPan;
var ARROWHEAD;
var COIN;
var HORSEHOENAIL;
var EXCAVATION;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13;
var newMarker, markerLocation;
$(document).ready(function () {
	

    // Create Map 
    map = L.map('map_div',  {center:[39.12, 42.58], zoom:13, zoomControl:false });

    
    // Plug-ins
    ctlPan = L.control.pan().addTo(map);
    ctlMousePosition = L.control.mousePosition().addTo(map);
    ctlMeasure =L.control.polylineMeasure().addTo(map);
    ctlSidebar = L.control.sidebar('side-bar').addTo(map);
    ctlEasyButton = L.easyButton('fa-exchange', function () {
        ctlSidebar.toggle();
    }).addTo(map);


    // Legend
    L.control.Legend({
    position: "bottomleft",
    legends: [{
        label: "Arrowhead",
        type: "image",
        url: "data/arrowhead.png",},
        {
        label: "Coin",
        type: "image",
        url: "data/coin.png",},
        {
        label: "Horsehoe Nail",
        type: "image",
        url: "data/horsehoe.png",}
    ]
}).addTo(map);


// Calling GeoJSON
var heatMapPoints = [];
fetch("data/all-finds.geojson", {  
  method: 'GET'
})
.then(response => response.json())
.then(json => {
  json.features.forEach(function(feature) {
    heatMapPoints.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1])
});


// Heat Map //
var heat = L.heatLayer(heatMapPoints, {
  radius: 18,
  minOpacity: 20,
  max: 0.5,
  gradient: {
   '0.60': 'Red',
   '0': 'Yellow',
   '1': 'White'
  },
  blur: 50
}).addTo(map);
})
	

// Icons
var arrowhead = L.icon({
    iconUrl: 'data/arrowhead.png',

    iconSize:     [15, 15], 
    iconAnchor:   [0,0], 
    popupAnchor:  [0, 0] 
});
var coin = L.icon({
    iconUrl: 'data/coin.png',

    iconSize:     [15, 15], 
    iconAnchor:   [0,0], 
    popupAnchor:  [0, 0] 
});
var horsehoenail = L.icon({
    iconUrl: 'data/horsehoe.png',

    iconSize:     [15, 15], 
    iconAnchor:   [0,0],
    popupAnchor:  [0, 0] 
});
var excavation = L.icon({
    iconUrl: 'data/excavation4.png',
    iconSize:     [30, 30], 
    iconAnchor:   [20,20],
    popupAnchor:  [0, 0]
})

    e1 = L.marker([39.139154,42.710497], {icon: excavation}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>ARKEOLOJİK KAZI</b><br><br><b>Kazı ismi:</b> Ziyaret Tepe Kazısı")});
    e2 = L.marker([39.138075,42.587695], {icon: excavation}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>ARKEOLOJİK KAZI</b><br><br><b>Kazı ismi:</b> Gezo Düzü Kazısı")});
    e3 = L.marker([39.146686,42.544858], {icon: excavation}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>ARKEOLOJİK KAZI</b><br><br><b>Kazı ismi:</b> İç Kale Kazısı")});
    e4 = L.marker([39.093995,42.551671], {icon: excavation}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>ARKEOLOJİK KAZI</b><br><br><b>Kazı ismi:</b> Tatar Düzü Kazısı")});
    e5 = L.marker([39.080396,42.593588], {icon: excavation}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>ARKEOLOJİK KAZI</b><br><br><b>Kazı ismi:</b> Afşin Kazısı")});

    // Finds
    a = L.marker([39.126545929189171,42.58231474102032], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow3.png' width='300'>")}); 
    b = L.marker([39.089670512000055,42.54934989100008], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Tatar Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    c = L.marker([39.137664759000074,42.58778806900005], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow3.png' width='300'>")});
    d = L.marker([39.138923565000032,42.58886225300006], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow3.png' width='300'>")});
    e = L.marker([39.140460579000035,42.59052156900003], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Gülkoru Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow3.png' width='300'>")});
    f = L.marker([39.13842210500007,42.587910384000054], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Tatar Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")});
    g = L.marker([39.13814944100005,42.587045002000025], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow2.png' width='300'>")});
    h = L.marker([39.137952002000082,42.58557894300003], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    i = L.marker([39.116031210000074,42.59371968100004], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow2.png' width='300'>")}); 
    j = L.marker([39.08686048300006,42.552032163000035], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    k = L.marker([39.09310409000005,42.552448619000074], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow2.png' width='300'>")}); 
    l = L.marker([39.09279351100002,42.552031801000055], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    m = L.marker([39.11528319700005,42.594369777000054], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    n = L.marker([39.08688482500003,42.552325960000076], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Gülkoru Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    o = L.marker([39.09478055100004,42.552235483000060], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow2.png' width='300'>")}); 
    p = L.marker([39.138473185000066,42.58802349700005], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Tatar Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow1.png' width='300'>")}); 
    q = L.marker([39.13817804900003,42.587878269000040], {icon: arrowhead}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Arrowhead<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/arrow2.png' width='300'>")}); 
    
    a1 =  L.marker([39.103086458000064,42.54954669000006], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a2 =  L.marker([39.10432967300005,42.549744848000046], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Tatar Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a3 =  L.marker([39.10578610600004,42.548168019000060], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a4 =  L.marker([39.101981601000034,42.55098748600005], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a5 =  L.marker([39.13842174300004,42.588168359000065], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a6 =  L.marker([39.13881644200006,42.588552387000050], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a7 =  L.marker([39.13807016800007,42.585568290000026], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a8 =  L.marker([39.11822246100007,42.594263473000070], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a9 =  L.marker([39.12040741100003,42.592772926000066], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Çivi Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a10 = L.marker([39.09321181900003,42.551634050000075], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Gülkoru Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a11 = L.marker([39.09352620200008,42.552247730000030], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 
    a12 = L.marker([39.105591454000034,42.56504803800004], {icon: horsehoenail}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Horsehoe Nail<br>Material: Iron<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/horsehoenail1.png' width='300'>")}); 

    b1 =  L.marker([39.08676385600006,42.552282543000050], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b2 =  L.marker([39.094492212000034,42.55149613700007], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b3 =  L.marker([39.094652894000035,42.55236115800005], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gülkoru Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b4 =  L.marker([39.11942314200007,42.595797845000050], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b5 =  L.marker([39.120256753000035,42.59756195100004], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b6 =  L.marker([39.10103606100006,42.559541815000046], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gülkoru Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b7 =  L.marker([39.11738143400004,42.597023651000030], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b8 =  L.marker([39.09185739000003,42.548362656000050], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b9 =  L.marker([39.10561012100004,42.566947993000040], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b10 = L.marker([39.11537300700007,42.596041162000060], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b11 = L.marker([39.07650188300005,42.533167370000060], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b12 = L.marker([39.086977069000056,42.55243971100003], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Gezo Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});
    b13 = L.marker([39.093778506000035,42.55187144900003], {icon: coin}).addTo(map).on('click',function () {ctlSidebar.show();ctlSidebar.setContent("<b>SMALL FIND</b><br><br>Find Name: Coin<br>Material: Bronze<br>District: Aytaç Düzü<br>Length:<br>Width:<br>Description:<br><br><img src='data/coin1.png' width='300'>")});

    ARROWHEAD = L.layerGroup([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q]);
    HORSEHOENAIL = L.layerGroup([a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]);
    COIN = L.layerGroup([b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13]);
    EXCAVATION = L.layerGroup([e1, e2, e3, e4, e5])


    // Basemap Layer
    lyrOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png');
    map.addLayer(lyrOSM);
    other = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	maxZoom: 19,
	ext: 'png'});
    Dark = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
    }).addTo(map);
    OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
    }).addTo(map);

    // Right Click Marker
    map.on('contextmenu',function (e) {

        L.marker(e.latlng).addTo(map).bindPopup(e.latlng.toString());
    });



    baseMaps = {
    "Black and White": other,
    "OSM": OSM,
    "Topographic": Dark
};

    finds = {
    "Archaeological Excavations": EXCAVATION,    
    "Coins": COIN,
    "Horsehoe Nails": HORSEHOENAIL,
    "Arrowheads": ARROWHEAD,
};


map.removeLayer(OSM)
map.removeLayer(Dark)


L.control.layers(baseMaps, finds, {collapsed: false}, {sortLayers: true}).addTo(map);

});
