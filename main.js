let latitude = 22.7868542, longitude = 88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZ3ByaXlhbnNoYSIsImEiOiJjbDBvbmVlbmQwaWhkM2NudDJzcmY4Nmx1In0.aC8EZryP1SDw0EzcHlyNMQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

var imgamber = document.querySelector("#amber")
var imggateway = document.querySelector("#gateway")
var imggate = document.querySelector("#gate")
var imglotus = document.querySelector("#lotus")
var imgvictoria = document.querySelector("#victoria")

const marker = new mapboxgl.Marker({
    element: imgamber
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map);

const marker1 = new mapboxgl.Marker({
    element: imggateway
})
    .setLngLat([72.834608,18.921935])
    .addTo(map);

const marker2 = new mapboxgl.Marker({
    element: imggate
})
    .setLngLat([77.2273157,28.612912,])
    .addTo(map);

const marker3 = new mapboxgl.Marker({
    element: imglotus
})
    .setLngLat([77.2566324,28.553492])
    .addTo(map);

const marker4 = new mapboxgl.Marker({
    element: imgvictoria
})
    .setLngLat([88.3403638,22.5448082])
    .addTo(map);