$(function(){
  // console.log('proverks');    
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



$(function(){
    console.log('большое меню'); 
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ZXN0LmpzIiwiaW5kZXhQYWdlX3JldmVyc0Jsb2NrLmpzIiwic2hvd0JsdWVXYWxsTWVudS5qcyIsInpfbWFwX2Nvbm5lY3QuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uQXV0aG9yaXRoYXRpb24iLCJidXR0b25NYWluQmFja1JldmVycyIsImZsaXBwZXJfd3JhcCIsImZyb250QmxvY2siLCJiYWNrQmxvY2siLCJvbiIsInNldFRpbWVvdXQiLCJ0b2dnbGVDbGFzcyIsImZhZGVPdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJhZGRNYXJrZXIiLCJtYXJrZXJzIiwicHVzaCIsImdvb2dsZSIsIm1hcHMiLCJNYXJrZXIiLCJwb3NpdGlvbiIsIm1hcmtlcjEiLCJyYWlzZU9uRHJhZyIsImljb24iLCJpbWFnZSIsIm1hcCIsImRyYWdnYWJsZSIsImluaXRpYWxpemUiLCJtYXBPcHRpb25zIiwiYmFja2dyb3VuZENvbG9yIiwiem9vbSIsImRpc2FibGVEZWZhdWx0VUkiLCJjZW50ZXIiLCJtYXBDb29yZGluYXRlcyIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIlJPQURNQVAiLCJzdHlsZXMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInZpc2liaWxpdHkiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsIkxhdExuZyIsIk1hcmtlckltYWdlIiwiU2l6ZSIsIlBvaW50IiwiZXZlbnQiLCJhZGREb21MaXN0ZW5lciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUEsY0NBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBQyxRQUFBQyxJQUFBLFNBQ0EsSUFBQUMsR0FBQUwsRUFBQSw0QkFDQU0sRUFBQU4sRUFBQSw0QkFDQU8sRUFBQVAsRUFBQSxpQkFDQVEsRUFBQVIsRUFBQSx3QkFDQVMsRUFBQVQsRUFBQSxzQkFHQUssR0FBQUssR0FBQSxRQUFBLFdBRUFDLFdBQUEsV0FBQUgsRUFBQUksWUFBQSxpQkFBQSxLQUNBRCxXQUFBLFdBQUFGLEVBQUFHLFlBQUEsaUJBQUEsS0FFQUwsRUFBQUssWUFBQSxVQUNBUCxFQUFBUSxRQUFBLEtBR0FQLEVBQUFJLEdBQUEsUUFBQSxTQUFBSSxHQUNBQSxFQUFBQyxpQkFFQUosV0FBQSxXQUFBSCxFQUFBSSxZQUFBLGlCQUFBLEtBQ0FELFdBQUEsV0FBQUYsRUFBQUcsWUFBQSxpQkFBQSxLQUVBTCxFQUFBSyxZQUFBLFVBQ0FQLEVBQUFXLE9BQUEsV0N6QkFoQixFQUFBLFdBQ0FHLFFBQUFDLElBQUEsa0JDREFKLEVBQUEsV0FjQSxRQUFBaUIsS0FFQUMsRUFBQUMsS0FBQSxHQUFBQyxRQUFBQyxLQUFBQyxRQUNBQyxTQUFBQyxFQUNBQyxhQUFBLEVBQ0FDLEtBQUFDLEVBQ0FDLElBQUFBLEVBQ0FDLFdBQUEsS0FHQSxRQUFBQyxLQUNBLEdBQUFDLElBQ0FDLGdCQUFBLFVBQ0FDLEtBQUEsR0FDQUMsa0JBQUEsRUFDQUMsT0FBQUMsRUFDQUMsVUFBQWpCLE9BQUFDLEtBQUFpQixVQUFBQyxRQUNBQyxTQUVBQyxZQUFBLGlCQUNBQyxZQUFBLFdBQ0FDLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSw2QkFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLDhCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsTUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE1BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsU0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLGdCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsZUFDQUMsWUFBQSxTQUNBQyxVQUVBQyxXQUFBLFVBS0FILFlBQUEsYUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLFVBQ0FFLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSxRQUNBQyxZQUFBLGNBQ0FDLFVBRUFDLFdBQUEsVUFPQWhCLEdBQUEsR0FBQVIsUUFBQUMsS0FBQXdCLElBQUE1QyxTQUFBNkMsZUFBQSxpQkFBQWYsR0FDQWQsSUF4SUFkLFFBQUFDLElBQUEsTUFDQSxJQUFBd0IsR0FFQVEsR0FEQSxHQUFBaEIsUUFBQUMsS0FBQTBCLE9BQUEsaUJBQUEsbUJBQ0EsR0FBQTNCLFFBQUFDLEtBQUEwQixPQUFBLFVBQUEsWUFDQXZCLEVBQUEsR0FBQUosUUFBQUMsS0FBQTBCLE9BQUEsVUFBQSxXQUNBN0IsS0FDQVMsRUFBQSxHQUFBUCxRQUFBQyxLQUFBMkIsWUFDQSxzQkFDQSxHQUFBNUIsUUFBQUMsS0FBQTRCLEtBQUEsSUFBQSxJQUNBLEdBQUE3QixRQUFBQyxLQUFBNkIsTUFBQSxFQUFBLEdBQ0EsR0FBQTlCLFFBQUFDLEtBQUE2QixNQUFBLEdBQUEsSUFnSUE5QixRQUFBQyxLQUFBOEIsTUFBQUMsZUFBQUMsT0FBQSxPQUFBdkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAvLyBjb25zb2xlLmxvZygncHJvdmVya3MnKTsgICAgXHJcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgY29uc29sZS5sb2coJ3ByaXZldCcpO1xyXG4gdmFyIGJ1dHRvbkF1dGhvcml0aGF0aW9uPSQoJy5qc19idXR0b25BdXRob3JpdGhhdGlvbicpLC8v0LrQvdC+0L/QutCwINCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cclxuICAgICBidXR0b25NYWluQmFja1JldmVycz0kKCcuanNfYnV0dG9uTWFpbkJhY2tSZXZlcnMnKSwvL9C60L3QvtC/0LrQsCDQndCwINCz0LvQsNCy0L3Rg9GOLCDRh9GC0L7QsSDQv9C10YDQtdCy0LXRgNC90YPRgtGMINC+0LHRgNCw0YLQvdC+INCx0LvQvtC6XHJcbiAgICBmbGlwcGVyX3dyYXA9JCgnLmZsaXBwZXJfd3JhcCcpLC8v0L7QsdC10YDRgtC60LAg0LHQu9C+0LrQvtCyINCw0LLRgtC+0YDQuNC30LDRhtC40Y8v0L/RgNC40LLQtdGC0YHRgtCy0LjQtVxyXG4gICAgZnJvbnRCbG9jaz0kKCcuYmxvY2tXZWxsY29tZV9mcm9udCcpLC8v0L/QtdGA0LXQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG4gICAgYmFja0Jsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2JhY2snKTsvL9C30LDQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG5cclxuICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgYnV0dG9uQXV0aG9yaXRoYXRpb24ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCc0NDQ0NDQ0NDQ0NDQ0Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgLy9jb25zb2xlLmxvZygnMzMzMzMnKTtcclxuICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgYnV0dG9uQXV0aG9yaXRoYXRpb24uZmFkZU91dCg1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuXHJcbiAgICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQndCwINCz0LvQsNCy0L3Rg9CxINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgICBidXR0b25NYWluQmFja1JldmVycy5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCc3Nzc3Nzc3Nzc3Nzc3NycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2JhY2tCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJzk5OTk5OTk5OTk5Jyk7XHJcbiAgICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlSW4oNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0LHQvtC70YzRiNC+0LUg0LzQtdC90Y4nKTsgXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWFwJyk7XHJcbiAgICB2YXIgbWFwO1xyXG4gICAgdmFyIGVnZ2xhYnMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ1MDQ5OTY2MDIzNTYsIDMwLjUxMTAyODc2NjYzMjA4KTtcclxuICAgIHZhciBtYXBDb29yZGluYXRlcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTAuNTA3MDc1LCAzMC40OTcyNTMpLFxyXG4gICAgICAgIG1hcmtlcjE9bmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC41MDcwMzQsIDMwLjQ5NzIzOSk7XHJcbiAgICB2YXIgbWFya2VycyA9IFtdO1xyXG4gICAgdmFyIGltYWdlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKFxyXG4gICAgICAgICcuLi9pbWFnZS9tYXJrZXIucG5nJyxcclxuICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMjAsODApLFxyXG4gICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLDApLFxyXG4gICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwxMClcclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiBhZGRNYXJrZXIoKVxyXG4gICAge1xyXG4gICAgICAgIG1hcmtlcnMucHVzaChuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlcjEsXHJcbiAgICAgICAgICAgIHJhaXNlT25EcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgaWNvbjogaW1hZ2UsXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogbWFwQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5uZWlnaGJvcmhvb2RcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNfY29ubmVjdE1hcCcpLG1hcE9wdGlvbnMpO1xyXG4gICAgICAgIGFkZE1hcmtlcigpO1xyXG4gICAgfVxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4vL1xyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXQpO1xyXG4vLyAgICAgdmFyIG1hcDtcclxuLy8gICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbi8vICAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbi8vICAgICAgICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC40NTA0OTk2NjAyMzU2LCAzMC41MTEwMjg3NjY2MzIwOCksXHJcbi8vICAgICAgICAgICAgIHpvb206IDEzLFxyXG4vLyAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XHJcbi8vICAgICAgICAgICAgICAgICBzdHlsZTogZ29vZ2xlLm1hcHMuWm9vbUNvbnRyb2xTdHlsZS5ERUZBVUxUXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbi8vICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHBhbkNvbnRyb2w6IHRydWUsXHJcbi8vICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZHJhZ2dhYmxlIDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbi8vICAgICAgICAgICAgICAgICBvcGVuZWQ6IHRydWVcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuLy8gICAgICAgICAgICAgc3R5bGVzOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOltcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1wic2F0dXJhdGlvblwiOiAwfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1wiaHVlXCI6IFwiI2U3ZWNmMFwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjpbXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcInNhdHVyYXRpb25cIjogLTcwfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjpbXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAge1wiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjpbXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAge1wiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOltcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcInNhdHVyYXRpb25cIjogLTYwfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIF1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19jb25uZWN0TWFwJyk7XHJcbi8vICAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbi8vICAgICAgICAgdmFyIGxvY2F0aW9ucyA9IFtcclxuLy8gICAgICAgICAgICAgWyAnMDYzLTEyNzUzNTUnLCAncHJvMTAwYm95QGdtYWlsLmNvbScsICA1MC41MDcwMzQsIDMwLjQ5NzIzOSwgJy4uL2ltYWdlL21hcmtlci5wbmcnXVxyXG4vLyAgICAgICAgIF07XHJcbi8vICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBpZiAobG9jYXRpb25zW2ldWzJdID09J3VuZGVmaW5lZCcpeyB0ZWxlcGhvbmUgPScnO30gZWxzZSB7IHRlbGVwaG9uZSA9IGxvY2F0aW9uc1tpXVswXTt9XHJcbi8vICAgICAgICAgICAgIGlmIChsb2NhdGlvbnNbaV1bM10gPT0ndW5kZWZpbmVkJyl7IGVtYWlsID0nJzt9IGVsc2UgeyBlbWFpbCA9IGxvY2F0aW9uc1tpXVsxXTt9XHJcbi8vICAgICAgICAgICAgIGlmIChsb2NhdGlvbnNbaV1bN10gPT0ndW5kZWZpbmVkJyl7IG1hcmtlcmljb24gPScnO30gZWxzZSB7IG1hcmtlcmljb24gPSBsb2NhdGlvbnNbaV1bNF07fVxyXG4vLyAgICAgICAgICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuLy8gICAgICAgICAgICAgICAgIGljb246IG1hcmtlcmljb24sXHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsb2NhdGlvbnNbaV1bMl0sIGxvY2F0aW9uc1tpXVszXSksXHJcbi8vICAgICAgICAgICAgICAgICBtYXA6IG1hcCxcclxuLy8gICAgICAgICAgICAgICAgIHRpdGxlOiBsb2NhdGlvbnNbaV1bMF0sXHJcbi8vICAgICAgICAgICAgICAgICB0ZWw6IHRlbGVwaG9uZSxcclxuLy8gICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4vL1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgbGluayA9ICcnOyAgICAgICAgICAgIGJpbmRJbmZvV2luZG93KG1hcmtlciwgbWFwLCBsb2NhdGlvbnNbaV1bMF0sIHRlbGVwaG9uZSwgZW1haWwpO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBmdW5jdGlvbiBiaW5kSW5mb1dpbmRvdyhtYXJrZXIsIG1hcCwgdGl0bGUsIHRlbGVwaG9uZSwgZW1haWwgKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBpbmZvV2luZG93VmlzaWJsZSA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgY3VycmVudGx5VmlzaWJsZSA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2aXNpYmxlKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlWaXNpYmxlID0gdmlzaWJsZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRseVZpc2libGU7XHJcbi8vICAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICB9KCkpO1xyXG4vLyAgICAgICAgICAgICBpdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XHJcbi8vICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5mb1dpbmRvd1Zpc2libGUoKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGl3LmNsb3NlKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5mb1dpbmRvd1Zpc2libGUoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbD0gXCI8ZGl2IHN0eWxlPSdjb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjVweDt3aWR0aDoxNTBweDsnPjxoND5cIit0aXRsZStcIjwvaDQ+PHA+XCIrdGVsZXBob25lK1wiPHA+PC9kaXY+XCI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXcgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7Y29udGVudDpodG1sfSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaXcub3BlbihtYXAsbWFya2VyKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmZvV2luZG93VmlzaWJsZSh0cnVlKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGl3LCAnY2xvc2VjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgICAgIGluZm9XaW5kb3dWaXNpYmxlKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vfSk7Il19
