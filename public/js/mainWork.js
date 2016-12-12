(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpfbWFwX2Nvbm5lY3QuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIiQiLCJhZGRNYXJrZXIiLCJtYXJrZXJzIiwicHVzaCIsImdvb2dsZSIsIm1hcHMiLCJNYXJrZXIiLCJwb3NpdGlvbiIsIm1hcmtlcjEiLCJyYWlzZU9uRHJhZyIsImljb24iLCJpbWFnZSIsIm1hcCIsImRyYWdnYWJsZSIsImluaXRpYWxpemUiLCJtYXBPcHRpb25zIiwiYmFja2dyb3VuZENvbG9yIiwiem9vbSIsImRpc2FibGVEZWZhdWx0VUkiLCJjZW50ZXIiLCJtYXBDb29yZGluYXRlcyIsInpvb21Db250cm9sIiwiem9vbUNvbnRyb2xPcHRpb25zIiwic3R5bGUiLCJab29tQ29udHJvbFN0eWxlIiwiTEFSR0UiLCJkaXNhYmxlRG91YmxlQ2xpY2tab29tIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsInBhbkNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsIm92ZXJ2aWV3TWFwQ29udHJvbCIsIm92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMiLCJvcGVuZWQiLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJST0FETUFQIiwic3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJ2aXNpYmlsaXR5IiwiaHVlIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJMYXRMbmciLCJNYXJrZXJJbWFnZSIsIlNpemUiLCJQb2ludCIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJDQUFBLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsUUFBQUMsR0FBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLEdBQUFFLEdBQUEsa0JBQUFDLFVBQUFBLE9BQUEsS0FBQUYsR0FBQUMsRUFBQSxNQUFBQSxHQUFBRixHQUFBLEVBQUEsSUFBQUksRUFBQSxNQUFBQSxHQUFBSixHQUFBLEVBQUEsTUFBQSxJQUFBSyxPQUFBLHVCQUFBTCxFQUFBLEtBQUEsR0FBQU0sR0FBQVQsRUFBQUcsSUFBQU8sV0FBQVgsR0FBQUksR0FBQSxHQUFBUSxLQUFBRixFQUFBQyxRQUFBLFNBQUFaLEdBQUEsR0FBQUUsR0FBQUQsRUFBQUksR0FBQSxHQUFBTCxFQUFBLE9BQUFJLEdBQUFGLEVBQUFBLEVBQUFGLElBQUFXLEVBQUFBLEVBQUFDLFFBQUFaLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQUQsR0FBQUcsR0FBQU8sUUFBQSxJQUFBLEdBQUFILEdBQUEsa0JBQUFELFVBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQVcsT0FBQVQsSUFBQUQsRUFBQUQsRUFBQUUsR0FBQSxPQUFBRCxLQUFBVyxHQUFBLFNBQUFQLEVBQUFRLEVBQUFKLEdBQ0FLLEVBQUEsV0FlQSxRQUFBQyxLQUVBQyxFQUFBQyxLQUFBLEdBQUFDLFFBQUFDLEtBQUFDLFFBQ0FDLFNBQUFDLEVBQ0FDLGFBQUEsRUFDQUMsS0FBQUMsRUFDQUMsSUFBQUEsRUFDQUMsV0FBQSxLQUdBLFFBQUFDLEtBQ0EsR0FBQUMsSUFDQUMsZ0JBQUEsVUFDQUMsS0FBQSxHQUNBQyxrQkFBQSxFQUNBQyxPQUFBQyxFQUNBQyxhQUFBLEVBQ0FDLG9CQUNBQyxNQUFBbkIsT0FBQUMsS0FBQW1CLGlCQUFBQyxPQUVBQyx3QkFBQSxFQUNBQyxnQkFBQSxFQUNBQyxjQUFBLEVBQ0FDLGFBQUEsRUFDQUMsWUFBQSxFQUNBQyxtQkFBQSxFQUNBbEIsV0FBQSxFQUNBbUIsb0JBQUEsRUFDQUMsMkJBQ0FDLFFBQUEsR0FFQUMsVUFBQS9CLE9BQUFDLEtBQUErQixVQUFBQyxRQUNBQyxTQUFBQyxZQUFBLHlCQUFBQyxZQUFBLFdBQUFDLFVBQUFDLFdBQUEsZUFBQUMsSUFBQSxjQUdBL0IsR0FBQSxHQUFBUixRQUFBQyxLQUFBdUMsSUFBQUMsU0FBQUMsZUFBQSxpQkFBQS9CLEdBQ0FkLElBakRBLEdBRUFXLEdBRUFRLEdBSkEyQixPQUFBQyxTQUFBQyxTQUdBLEdBQUE3QyxRQUFBQyxLQUFBNkMsT0FBQSxpQkFBQSxtQkFDQSxHQUFBOUMsUUFBQUMsS0FBQTZDLE9BQUEsVUFBQSxZQUNBMUMsRUFBQSxHQUFBSixRQUFBQyxLQUFBNkMsT0FBQSxTQUFBLFdBQ0FoRCxLQUNBUyxFQUFBLEdBQUFQLFFBQUFDLEtBQUE4QyxZQUNBLHNCQUNBLEdBQUEvQyxRQUFBQyxLQUFBK0MsS0FBQSxJQUFBLEtBQ0EsR0FBQWhELFFBQUFDLEtBQUFnRCxNQUFBLEVBQUEsR0FDQSxHQUFBakQsUUFBQUMsS0FBQWdELE1BQUEsR0FBQSxJQXlDQWpELFFBQUFDLEtBQUFpRCxNQUFBQyxlQUFBUixPQUFBLE9BQUFqQyIsImZpbGUiOiJtYWluV29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgIC8vIGNvbnNvbGUubG9nKCfRgdGC0YDQsNC90LjRhtCwICcrcGF0aG5hbWUpO1xyXG4gICAgdmFyIG1hcDtcclxuICAgIHZhciBlZ2dsYWJzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC40NTA0OTk2NjAyMzU2LCAzMC41MTEwMjg3NjY2MzIwOCk7XHJcbiAgICB2YXIgbWFwQ29vcmRpbmF0ZXMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ3NjEzNCwgMzAuNTEzODY3KSxcclxuICAgICAgICBtYXJrZXIxPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTAuNTA3OTYwLCAzMC40OTg4ODMpO1xyXG4gICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXJJbWFnZShcclxuICAgICAgICAnLi4vaW1hZ2UvbWFya2VyLnBuZycsXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlNpemUoMTAwLDE0MCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDEwLDEwKVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGFkZE1hcmtlcigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFya2Vycy5wdXNoKG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyMSxcclxuICAgICAgICAgICAgcmFpc2VPbkRyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiBpbWFnZSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyOiBtYXBDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuTEFSR0VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICAgICAgICAgIHN0eWxlczogW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJodWVcIjpcIiNmZjAwMDBcIn1dfV1cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19jb25uZWN0TWFwJyksbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgYWRkTWFya2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpO1xyXG5cclxuXHJcbn0pO1xyXG4iXX0=
