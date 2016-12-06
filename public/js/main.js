$(function(){
   console.log('proverks'); 
});
$(document).ready(function(){
  console.log('privet');
 var buttonAuthorithation=$('.js_buttonAuthorithation'),//кнопка Авторизация
     buttonMainBackRevers=$('.js_buttonMainBackRevers'),//кнопка На главную, чтоб перевернуть обратно блок
    flipper_wrap=$('.flipper_wrap'),//обертка блоков авторизация/приветствие
    frontBlock=$('.blockWellcome_front'),//передняя часть блока приветствия
    backBlock=$('.blockWellcome_back');//задняя часть блока приветствия

    //нажимаем на кнопку Авторизация и переворачивается блок с полями для входа
    buttonAuthorithation.on('click',function(){
      //console.log('4444444444444');
      setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
      setTimeout(function(){backBlock.toggleClass('display_none')}, 200);
      //console.log('33333');
      flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
      buttonAuthorithation.fadeOut(500);// кнопке Авторизация делаем невидимой

      //нажимаем на кнопку На главнуб и переворачивается блок с полями для входа
      buttonMainBackRevers.on('click',function(e){
        e.preventDefault();
        //console.log('77777777777777');
        setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
        setTimeout(function(){backBlock.toggleClass('display_none')}, 200);
        //console.log('99999999999');
        flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
        buttonAuthorithation.fadeIn(500);// кнопке Авторизация делаем невидимой
      })
    })
});




    $(document).ready(function(){
        console.log('подключен main файл ');
    });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ZXN0LmpzIiwiaW5kZXhQYWdlX3JldmVyc0Jsb2NrLmpzIiwibWFpbi5qcyIsIm1hcF9jb25uZWN0LmpzIl0sIm5hbWVzIjpbIiQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwib24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmFkZUluIiwiYWRkTWFya2VyIiwibWFya2VycyIsInB1c2giLCJnb29nbGUiLCJtYXBzIiwiTWFya2VyIiwicG9zaXRpb24iLCJtYXJrZXIxIiwicmFpc2VPbkRyYWciLCJpY29uIiwiaW1hZ2UiLCJtYXAiLCJkcmFnZ2FibGUiLCJpbml0aWFsaXplIiwibWFwT3B0aW9ucyIsImJhY2tncm91bmRDb2xvciIsInpvb20iLCJkaXNhYmxlRGVmYXVsdFVJIiwiY2VudGVyIiwibWFwQ29vcmRpbmF0ZXMiLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJST0FETUFQIiwic3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJ2aXNpYmlsaXR5IiwiTWFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJMYXRMbmciLCJNYXJrZXJJbWFnZSIsIlNpemUiLCJQb2ludCIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBLFdBQ0FDLFFBQUFDLElBQUEsY0NEQUYsRUFBQUcsVUFBQUMsTUFBQSxXQUNBSCxRQUFBQyxJQUFBLFNBQ0EsSUFBQUcsR0FBQUwsRUFBQSw0QkFDQU0sRUFBQU4sRUFBQSw0QkFDQU8sRUFBQVAsRUFBQSxpQkFDQVEsRUFBQVIsRUFBQSx3QkFDQVMsRUFBQVQsRUFBQSxzQkFHQUssR0FBQUssR0FBQSxRQUFBLFdBRUFDLFdBQUEsV0FBQUgsRUFBQUksWUFBQSxpQkFBQSxLQUNBRCxXQUFBLFdBQUFGLEVBQUFHLFlBQUEsaUJBQUEsS0FFQUwsRUFBQUssWUFBQSxVQUNBUCxFQUFBUSxRQUFBLEtBR0FQLEVBQUFJLEdBQUEsUUFBQSxTQUFBSSxHQUNBQSxFQUFBQyxpQkFFQUosV0FBQSxXQUFBSCxFQUFBSSxZQUFBLGlCQUFBLEtBQ0FELFdBQUEsV0FBQUYsRUFBQUcsWUFBQSxpQkFBQSxLQUVBTCxFQUFBSyxZQUFBLFVBQ0FQLEVBQUFXLE9BQUEsV0N4QkFoQixFQUFBRyxVQUFBQyxNQUFBLFdBQ0FILFFBQUFDLElBQUEsMEJDRkFGLEVBQUEsV0FjQSxRQUFBaUIsS0FFQUMsRUFBQUMsS0FBQSxHQUFBQyxRQUFBQyxLQUFBQyxRQUNBQyxTQUFBQyxFQUNBQyxhQUFBLEVBQ0FDLEtBQUFDLEVBQ0FDLElBQUFBLEVBQ0FDLFdBQUEsS0FHQSxRQUFBQyxLQUNBLEdBQUFDLElBQ0FDLGdCQUFBLFVBQ0FDLEtBQUEsR0FDQUMsa0JBQUEsRUFDQUMsT0FBQUMsRUFDQUMsVUFBQWpCLE9BQUFDLEtBQUFpQixVQUFBQyxRQUNBQyxTQUVBQyxZQUFBLGlCQUNBQyxZQUFBLFdBQ0FDLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSw2QkFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLDhCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsTUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE1BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsU0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLGdCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsZUFDQUMsWUFBQSxTQUNBQyxVQUVBQyxXQUFBLFVBS0FILFlBQUEsYUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLFVBQ0FFLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSxRQUNBQyxZQUFBLGNBQ0FDLFVBRUFDLFdBQUEsVUFPQWhCLEdBQUEsR0FBQVIsUUFBQUMsS0FBQXdCLElBQUExQyxTQUFBMkMsZUFBQSxpQkFBQWYsR0FDQWQsSUF4SUFoQixRQUFBQyxJQUFBLE1BQ0EsSUFBQTBCLEdBRUFRLEdBREEsR0FBQWhCLFFBQUFDLEtBQUEwQixPQUFBLGlCQUFBLG1CQUNBLEdBQUEzQixRQUFBQyxLQUFBMEIsT0FBQSxVQUFBLFlBQ0F2QixFQUFBLEdBQUFKLFFBQUFDLEtBQUEwQixPQUFBLFVBQUEsV0FDQTdCLEtBQ0FTLEVBQUEsR0FBQVAsUUFBQUMsS0FBQTJCLFlBQ0Esc0JBQ0EsR0FBQTVCLFFBQUFDLEtBQUE0QixLQUFBLElBQUEsSUFDQSxHQUFBN0IsUUFBQUMsS0FBQTZCLE1BQUEsRUFBQSxHQUNBLEdBQUE5QixRQUFBQyxLQUFBNkIsTUFBQSxHQUFBLElBZ0lBOUIsUUFBQUMsS0FBQThCLE1BQUFDLGVBQUFDLE9BQUEsT0FBQXZCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgIGNvbnNvbGUubG9nKCdwcm92ZXJrcycpOyBcclxufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBjb25zb2xlLmxvZygncHJpdmV0Jyk7XHJcbiB2YXIgYnV0dG9uQXV0aG9yaXRoYXRpb249JCgnLmpzX2J1dHRvbkF1dGhvcml0aGF0aW9uJyksLy/QutC90L7Qv9C60LAg0JDQstGC0L7RgNC40LfQsNGG0LjRj1xyXG4gICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzPSQoJy5qc19idXR0b25NYWluQmFja1JldmVycycpLC8v0LrQvdC+0L/QutCwINCd0LAg0LPQu9Cw0LLQvdGD0Y4sINGH0YLQvtCxINC/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0L7QsdGA0LDRgtC90L4g0LHQu9C+0LpcclxuICAgIGZsaXBwZXJfd3JhcD0kKCcuZmxpcHBlcl93cmFwJyksLy/QvtCx0LXRgNGC0LrQsCDQsdC70L7QutC+0LIg0LDQstGC0L7RgNC40LfQsNGG0LjRjy/Qv9GA0LjQstC10YLRgdGC0LLQuNC1XHJcbiAgICBmcm9udEJsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2Zyb250JyksLy/Qv9C10YDQtdC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcbiAgICBiYWNrQmxvY2s9JCgnLmJsb2NrV2VsbGNvbWVfYmFjaycpOy8v0LfQsNC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcblxyXG4gICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICBidXR0b25BdXRob3JpdGhhdGlvbi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJzQ0NDQ0NDQ0NDQ0NDQnKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2JhY2tCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCczMzMzMycpO1xyXG4gICAgICBmbGlwcGVyX3dyYXAudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQsdC70L7QulxyXG4gICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlT3V0KDUwMCk7Ly8g0LrQvdC+0L/QutC1INCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0LTQtdC70LDQtdC8INC90LXQstC40LTQuNC80L7QuVxyXG5cclxuICAgICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCd0LAg0LPQu9Cw0LLQvdGD0LEg0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJzc3Nzc3Nzc3Nzc3Nzc3Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnOTk5OTk5OTk5OTknKTtcclxuICAgICAgICBmbGlwcGVyX3dyYXAudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQsdC70L7QulxyXG4gICAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVJbig1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiIsIlxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9IG1haW4g0YTQsNC50LsgJyk7XHJcbiAgICB9KTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtYXAnKTtcclxuICAgIHZhciBtYXA7XHJcbiAgICB2YXIgZWdnbGFicyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTAuNDUwNDk5NjYwMjM1NiwgMzAuNTExMDI4NzY2NjMyMDgpO1xyXG4gICAgdmFyIG1hcENvb3JkaW5hdGVzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC41MDcwNzUsIDMwLjQ5NzI1MyksXHJcbiAgICAgICAgbWFya2VyMT1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjUwNzAzNCwgMzAuNDk3MjM5KTtcclxuICAgIHZhciBtYXJrZXJzID0gW107XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VySW1hZ2UoXHJcbiAgICAgICAgJy4uL2ltYWdlL21hcmtlci5wbmcnLFxyXG4gICAgICAgIG5ldyBnb29nbGUubWFwcy5TaXplKDMyMCw4MCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDEwLDEwKVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGFkZE1hcmtlcigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFya2Vycy5wdXNoKG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyMSxcclxuICAgICAgICAgICAgcmFpc2VPbkRyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiBpbWFnZSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyOiBtYXBDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgICAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19jb25uZWN0TWFwJyksbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgYWRkTWFya2VyKCk7XHJcbiAgICB9XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbi8vXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdCk7XHJcbi8vICAgICB2YXIgbWFwO1xyXG4vLyAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuLy8gICAgICAgICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ1MDQ5OTY2MDIzNTYsIDMwLjUxMTAyODc2NjYzMjA4KSxcclxuLy8gICAgICAgICAgICAgem9vbTogMTMsXHJcbi8vICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIHN0eWxlOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlLkRFRkFVTFRcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgcGFuQ29udHJvbDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkcmFnZ2FibGUgOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2w6IHRydWUsXHJcbi8vICAgICAgICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcclxuLy8gICAgICAgICAgICAgICAgIG9wZW5lZDogdHJ1ZVxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG4vLyAgICAgICAgICAgICBzdHlsZXM6IFtcclxuLy8gICAgICAgICAgICAgICAgIHtcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6W1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XCJzYXR1cmF0aW9uXCI6IDB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XCJodWVcIjogXCIjZTdlY2YwXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHtcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOltcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1wic2F0dXJhdGlvblwiOiAtNzB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHtcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOltcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOltcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6W1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1wic2F0dXJhdGlvblwiOiAtNjB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX2Nvbm5lY3RNYXAnKTtcclxuLy8gICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuLy8gICAgICAgICB2YXIgbG9jYXRpb25zID0gW1xyXG4vLyAgICAgICAgICAgICBbICcwNjMtMTI3NTM1NScsICdwcm8xMDBib3lAZ21haWwuY29tJywgIDUwLjUwNzAzNCwgMzAuNDk3MjM5LCAnLi4vaW1hZ2UvbWFya2VyLnBuZyddXHJcbi8vICAgICAgICAgXTtcclxuLy8gICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGlmIChsb2NhdGlvbnNbaV1bMl0gPT0ndW5kZWZpbmVkJyl7IHRlbGVwaG9uZSA9Jyc7fSBlbHNlIHsgdGVsZXBob25lID0gbG9jYXRpb25zW2ldWzBdO31cclxuLy8gICAgICAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVszXSA9PSd1bmRlZmluZWQnKXsgZW1haWwgPScnO30gZWxzZSB7IGVtYWlsID0gbG9jYXRpb25zW2ldWzFdO31cclxuLy8gICAgICAgICAgICAgaWYgKGxvY2F0aW9uc1tpXVs3XSA9PSd1bmRlZmluZWQnKXsgbWFya2VyaWNvbiA9Jyc7fSBlbHNlIHsgbWFya2VyaWNvbiA9IGxvY2F0aW9uc1tpXVs0XTt9XHJcbi8vICAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4vLyAgICAgICAgICAgICAgICAgaWNvbjogbWFya2VyaWNvbixcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVsyXSwgbG9jYXRpb25zW2ldWzNdKSxcclxuLy8gICAgICAgICAgICAgICAgIG1hcDogbWFwLFxyXG4vLyAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2F0aW9uc1tpXVswXSxcclxuLy8gICAgICAgICAgICAgICAgIHRlbDogdGVsZXBob25lLFxyXG4vLyAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbi8vXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICBsaW5rID0gJyc7ICAgICAgICAgICAgYmluZEluZm9XaW5kb3cobWFya2VyLCBtYXAsIGxvY2F0aW9uc1tpXVswXSwgdGVsZXBob25lLCBlbWFpbCk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGZ1bmN0aW9uIGJpbmRJbmZvV2luZG93KG1hcmtlciwgbWFwLCB0aXRsZSwgdGVsZXBob25lLCBlbWFpbCApIHtcclxuLy8gICAgICAgICAgICAgdmFyIGluZm9XaW5kb3dWaXNpYmxlID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBjdXJyZW50bHlWaXNpYmxlID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZpc2libGUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVZpc2libGUgPSB2aXNpYmxlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudGx5VmlzaWJsZTtcclxuLy8gICAgICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgIH0oKSk7XHJcbi8vICAgICAgICAgICAgIGl3ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKTtcclxuLy8gICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChpbmZvV2luZG93VmlzaWJsZSgpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXcuY2xvc2UoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmZvV2luZG93VmlzaWJsZShmYWxzZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sPSBcIjxkaXYgc3R5bGU9J2NvbG9yOiMwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6NXB4O3dpZHRoOjE1MHB4Oyc+PGg0PlwiK3RpdGxlK1wiPC9oND48cD5cIit0ZWxlcGhvbmUrXCI8cD48L2Rpdj5cIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtjb250ZW50Omh0bWx9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpdy5vcGVuKG1hcCxtYXJrZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGluZm9XaW5kb3dWaXNpYmxlKHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaXcsICdjbG9zZWNsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgaW5mb1dpbmRvd1Zpc2libGUoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy99KTsiXX0=
