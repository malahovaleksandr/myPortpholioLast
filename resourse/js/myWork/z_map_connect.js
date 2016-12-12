$(function(){

    var pathname = window.location.pathname;
   // console.log('страница '+pathname);
    var map;
    var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
    var mapCoordinates = new google.maps.LatLng(50.476134, 30.513867),
        marker1=new google.maps.LatLng(50.507960, 30.498883);
    var markers = [];
    var image = new google.maps.MarkerImage(
        '../image/marker.png',
        new google.maps.Size(100,140),
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
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]

        };
        map = new google.maps.Map(document.getElementById('js_connectMap'),mapOptions);
        addMarker();
    }

    google.maps.event.addDomListener(window, 'load', initialize);


});
