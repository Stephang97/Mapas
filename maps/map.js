
var map = L.map('mapid').setView([-0.2247332, -78.5179488], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.2247332, -78.5179488]).addTo(map)
    .bindPopup('Yavirac')
    .openPopup();


L.marker([-0.283223, -78.557771]).addTo(map)
    .bindPopup('Aqui vivo yo :)')
    .openPopup();



    var circle = L.circle([-0.283223, -78.557771], {
        color: 'green',
        fillColor: '#f04',
        fillOpacity: 0.5,
        radius: 2000
    }).addTo(map);


    var latlngs = [
        [-0.2247332, -78.5179488],
        [-0.283223, -78.557771],
        
    ];

    var polyline = L.polyline(latlngs, {color: 'orange'}).addTo(map);