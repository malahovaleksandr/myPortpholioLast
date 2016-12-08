$(function(){

    console.log('map');
    var map;
    var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
    var mapCoordinates = new google.maps.LatLng(50.507075, 30.497253),
        marker1=new google.maps.LatLng(50.507034, 30.497239);
    var markers = [];
    var image = new google.maps.MarkerImage(
        '../image/marker.png',
        new google.maps.Size(320,80),
        new google.maps.Point(0,0),
        new google.maps.Point(10,10)
    );
    function addMarker()
    {
        markers.push(new google.maps.Marker({
            position: marker1,
            raiseOnDrag: false,
            icon: image,
            map: map,
            draggable: false
        }));
    }
    function initialize() {
        var mapOptions = {
            backgroundColor: "#ffffff",
            zoom: 13,
            disableDefaultUI: true,
            center: mapCoordinates,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]

        };
        map = new google.maps.Map(document.getElementById('js_connectMap'),mapOptions);
        addMarker();
    }
    google.maps.event.addDomListener(window, 'load', initialize);








});
//
// $(document).ready(function(){
//     google.maps.event.addDomListener(window, 'load', init);
//     var map;
//     function init() {
//         var mapOptions = {
//             center: new google.maps.LatLng(50.4504996602356, 30.51102876663208),
//             zoom: 13,
//             zoomControl: true,
//             zoomControlOptions: {
//                 style: google.maps.ZoomControlStyle.DEFAULT
//             },
//             disableDoubleClickZoom: true,
//             mapTypeControl: false,
//             scaleControl: true,
//             scrollwheel: false,
//             panControl: true,
//             streetViewControl: false,
//             draggable : true,
//             overviewMapControl: true,
//             overviewMapControlOptions: {
//                 opened: true
//             },
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//             styles: [
//                 {"featureType": "all",
//                     "stylers":[
//                         {"saturation": 0},
//                         {"hue": "#e7ecf0"}
//                     ]
//                 },
//                 {"featureType": "road",
//                     "stylers":[
//                         {"saturation": -70}
//                     ]
//                 },
//                 {"featureType": "transit",
//                     "stylers":[
//                         {"visibility": "off"}
//                     ]
//                 },
//                 {"featureType": "poi",
//                     "stylers":[
//                         {"visibility": "off"}
//                     ]
//                 },
//                 {"featureType": "water",
//                     "stylers":[
//                         {"visibility": "simplified"},
//                         {"saturation": -60}
//                     ]
//                 }
//             ]
//         }
//         var mapElement = document.getElementById('js_connectMap');
//         var map = new google.maps.Map(mapElement, mapOptions);
//         var locations = [
//             [ '063-1275355', 'pro100boy@gmail.com',  50.507034, 30.497239, '../image/marker.png']
//         ];
//         for (i = 0; i < locations.length; i++) {
//
//             if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][0];}
//             if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][1];}
//             if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][4];}
//             marker = new google.maps.Marker({
//                 icon: markericon,
//                 position: new google.maps.LatLng(locations[i][2], locations[i][3]),
//                 map: map,
//                 title: locations[i][0],
//                 tel: telephone,
//                 email: email
//
//             });
//             link = '';            bindInfoWindow(marker, map, locations[i][0], telephone, email);
//         }
//
//         function bindInfoWindow(marker, map, title, telephone, email ) {
//             var infoWindowVisible = (function () {
//                 var currentlyVisible = false;
//                 return function (visible) {
//                     if (visible !== undefined) {
//                         currentlyVisible = visible;
//                     }
//                     return currentlyVisible;
//                 };
//             }());
//             iw = new google.maps.InfoWindow();
//             google.maps.event.addListener(marker, 'click', function() {
//                 if (infoWindowVisible()) {
//                     iw.close();
//                     infoWindowVisible(false);
//                 } else {
//                     var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+telephone+"<p></div>";
//                     iw = new google.maps.InfoWindow({content:html});
//                     iw.open(map,marker);
//                     infoWindowVisible(true);
//                 }
//             });
//             google.maps.event.addListener(iw, 'closeclick', function () {
//                 infoWindowVisible(false);
//             });
//         }
//     }


//});