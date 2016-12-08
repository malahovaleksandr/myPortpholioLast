$(document).ready(function(){

 var buttonAuthorithation=$('.js_buttonAuthorithation'),//кнопка Авторизация
     buttonMainBackRevers=$('.js_buttonMainBackRevers'),//кнопка На главную, чтоб перевернуть обратно блок
    flipper_wrap=$('.flipper_wrap'),//обертка блоков авторизация/приветствие
    frontBlock=$('.blockWellcome_front'),//передняя часть блока приветствия
    backBlock=$('.blockWellcome_back');//задняя часть блока приветствия

    //нажимаем на кнопку Авторизация и переворачивается блок с полями для входа
    buttonAuthorithation.on('click',function(){
        console.log('показать бэк');
      setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
      setTimeout(function(){backBlock.toggleClass('display_none')}, 200);

      flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
      buttonAuthorithation.fadeOut(500);// кнопке Авторизация делаем невидимой

      //нажимаем на кнопку На главнуб и переворачивается блок с полями для входа
      buttonMainBackRevers.on('click',function(e){
          console.log('показать фронт');
        e.preventDefault();
        setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
        setTimeout(function(){backBlock.toggleClass('display_none')}, 200);

        flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
        buttonAuthorithation.fadeIn(500);// кнопке Авторизация делаем невидимой
      })
    })
});



$(function(){
   console.log('parralax на страницах');
    

//ФУНКЦИЯ ПАРАЛАКСА ДЛЯ ТЕКСТА ,ФОТО И ГОР ВЕРТИКАЛЬНО
    var parralaxVertical= (function(){
        var wordBig=$('.svg_portfolio'),//большая налпись которую будем двигать
            movePhoto=$('.blockPresent'),//блок с фото которое будем двигать
            moveBackground=$('.verticalParrallaxWpap');//картинка  которую будем двигать
        return  {
            move : function(wScroll,block,procentMove){
                var strafe=wScroll/-procentMove+'%',
                transform3D='translate3d(0,'+strafe+',0)';
                block.css({
                    'transform':transform3D,
                    '-webkit-transform':transform3D
                })
            },
            init: function(wScroll){
                this.move(wScroll,movePhoto,3);
                this.move(wScroll,wordBig,20);
                this.move(wScroll,moveBackground,45);
            }
        }
    }());
   $(window).scroll(function(){
       var wScroll=$(window).scrollTop();
       parralaxVertical.init(wScroll);
   })


});
$(function(){
    console.log('большое меню'); 
    var buttonGamburger=$('.header__blockClose'),//кнопка открытия меню на весь экран
        closeLine=$('.blockClose_line'),//центральная полоса из кнопки гамбургер
        wrapBlueWall=$('.wrapperBlueWall'),//обертка для стены меню
        leftSide_wall=$('.blueWall__leftSide'),//левая сторона меню которая появляется
        rightSide_wall=$('.blueWall__rightSide'),//правая сторона меню которая появляется
        menuWall=$('.blueWall_menuLink');//блок с названиями меню

        buttonGamburger.on('click',function(){
            leftSide_wall.toggleClass('left0');
            rightSide_wall.toggleClass('right0');
            closeLine.toggleClass('blockClose_line_active');//меняем класс который переворачивает полоски кнопки
            wrapBlueWall.toggleClass('wrapperBlueWall_active');
            menuWall.toggleClass('blueWall_menuLink_active');
    });
});
$(function(){

    var pathname = window.location.pathname;
    console.log('страница '+pathname);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4UGFnZV9yZXZlcnNCbG9jay5qcyIsInBhcnJhbGF4VmVydGljYWwuanMiLCJzaG93Qmx1ZVdhbGxNZW51LmpzIiwiel9tYXBfY29ubmVjdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwib24iLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInRvZ2dsZUNsYXNzIiwiZmFkZU91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZhZGVJbiIsInBhcnJhbGF4VmVydGljYWwiLCJ3b3JkQmlnIiwibW92ZVBob3RvIiwibW92ZUJhY2tncm91bmQiLCJtb3ZlIiwid1Njcm9sbCIsImJsb2NrIiwicHJvY2VudE1vdmUiLCJzdHJhZmUiLCJ0cmFuc2Zvcm0zRCIsImNzcyIsInRyYW5zZm9ybSIsIi13ZWJraXQtdHJhbnNmb3JtIiwiaW5pdCIsInRoaXMiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJidXR0b25HYW1idXJnZXIiLCJjbG9zZUxpbmUiLCJ3cmFwQmx1ZVdhbGwiLCJsZWZ0U2lkZV93YWxsIiwicmlnaHRTaWRlX3dhbGwiLCJtZW51V2FsbCIsImFkZE1hcmtlciIsIm1hcmtlcnMiLCJwdXNoIiwiZ29vZ2xlIiwibWFwcyIsIk1hcmtlciIsInBvc2l0aW9uIiwibWFya2VyMSIsInJhaXNlT25EcmFnIiwiaWNvbiIsImltYWdlIiwibWFwIiwiZHJhZ2dhYmxlIiwiaW5pdGlhbGl6ZSIsIm1hcE9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6b29tIiwiZGlzYWJsZURlZmF1bHRVSSIsImNlbnRlciIsIm1hcENvb3JkaW5hdGVzIiwiem9vbUNvbnRyb2wiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJzdHlsZSIsIlpvb21Db250cm9sU3R5bGUiLCJMQVJHRSIsImRpc2FibGVEb3VibGVDbGlja1pvb20iLCJtYXBUeXBlQ29udHJvbCIsInNjYWxlQ29udHJvbCIsInNjcm9sbHdoZWVsIiwicGFuQ29udHJvbCIsInN0cmVldFZpZXdDb250cm9sIiwib3ZlcnZpZXdNYXBDb250cm9sIiwib3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyIsIm9wZW5lZCIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIlJPQURNQVAiLCJzdHlsZXMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInZpc2liaWxpdHkiLCJodWUiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJMYXRMbmciLCJNYXJrZXJJbWFnZSIsIlNpemUiLCJQb2ludCIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBRUEsR0FBQUMsR0FBQUgsRUFBQSw0QkFDQUksRUFBQUosRUFBQSw0QkFDQUssRUFBQUwsRUFBQSxpQkFDQU0sRUFBQU4sRUFBQSx3QkFDQU8sRUFBQVAsRUFBQSxzQkFHQUcsR0FBQUssR0FBQSxRQUFBLFdBQ0FDLFFBQUFDLElBQUEsZ0JBQ0FDLFdBQUEsV0FBQUwsRUFBQU0sWUFBQSxpQkFBQSxLQUNBRCxXQUFBLFdBQUFKLEVBQUFLLFlBQUEsaUJBQUEsS0FFQVAsRUFBQU8sWUFBQSxVQUNBVCxFQUFBVSxRQUFBLEtBR0FULEVBQUFJLEdBQUEsUUFBQSxTQUFBTSxHQUNBTCxRQUFBQyxJQUFBLGtCQUNBSSxFQUFBQyxpQkFDQUosV0FBQSxXQUFBTCxFQUFBTSxZQUFBLGlCQUFBLEtBQ0FELFdBQUEsV0FBQUosRUFBQUssWUFBQSxpQkFBQSxLQUVBUCxFQUFBTyxZQUFBLFVBQ0FULEVBQUFhLE9BQUEsV0N6QkFoQixFQUFBLFdBQ0FTLFFBQUFDLElBQUEsd0JBSUEsSUFBQU8sR0FBQSxXQUNBLEdBQUFDLEdBQUFsQixFQUFBLGtCQUNBbUIsRUFBQW5CLEVBQUEsaUJBQ0FvQixFQUFBcEIsRUFBQSx5QkFDQSxRQUNBcUIsS0FBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUNBLEdBQUFDLEdBQUFILEdBQUFFLEVBQUEsSUFDQUUsRUFBQSxpQkFBQUQsRUFBQSxLQUNBRixHQUFBSSxLQUNBQyxVQUFBRixFQUNBRyxvQkFBQUgsS0FHQUksS0FBQSxTQUFBUixHQUNBUyxLQUFBVixLQUFBQyxFQUFBSCxFQUFBLEdBQ0FZLEtBQUFWLEtBQUFDLEVBQUFKLEVBQUEsSUFDQWEsS0FBQVYsS0FBQUMsRUFBQUYsRUFBQSxRQUlBcEIsR0FBQWdDLFFBQUFDLE9BQUEsV0FDQSxHQUFBWCxHQUFBdEIsRUFBQWdDLFFBQUFFLFdBQ0FqQixHQUFBYSxLQUFBUixPQzNCQXRCLEVBQUEsV0FDQVMsUUFBQUMsSUFBQSxlQUNBLElBQUF5QixHQUFBbkMsRUFBQSx1QkFDQW9DLEVBQUFwQyxFQUFBLG9CQUNBcUMsRUFBQXJDLEVBQUEsb0JBQ0FzQyxFQUFBdEMsRUFBQSx1QkFDQXVDLEVBQUF2QyxFQUFBLHdCQUNBd0MsRUFBQXhDLEVBQUEscUJBRUFtQyxHQUFBM0IsR0FBQSxRQUFBLFdBQ0E4QixFQUFBMUIsWUFBQSxTQUNBMkIsRUFBQTNCLFlBQUEsVUFDQXdCLEVBQUF4QixZQUFBLDBCQUNBeUIsRUFBQXpCLFlBQUEsMEJBQ0E0QixFQUFBNUIsWUFBQSxnQ0NkQVosRUFBQSxXQWVBLFFBQUF5QyxLQUVBQyxFQUFBQyxLQUFBLEdBQUFDLFFBQUFDLEtBQUFDLFFBQ0FDLFNBQUFDLEVBQ0FDLGFBQUEsRUFDQUMsS0FBQUMsRUFDQUMsSUFBQUEsRUFDQUMsV0FBQSxLQUdBLFFBQUFDLEtBQ0EsR0FBQUMsSUFDQUMsZ0JBQUEsVUFDQUMsS0FBQSxHQUNBQyxrQkFBQSxFQUNBQyxPQUFBQyxFQUNBQyxhQUFBLEVBQ0FDLG9CQUNBQyxNQUFBbkIsT0FBQUMsS0FBQW1CLGlCQUFBQyxPQUVBQyx3QkFBQSxFQUNBQyxnQkFBQSxFQUNBQyxjQUFBLEVBQ0FDLGFBQUEsRUFDQUMsWUFBQSxFQUNBQyxtQkFBQSxFQUNBbEIsV0FBQSxFQUNBbUIsb0JBQUEsRUFDQUMsMkJBQ0FDLFFBQUEsR0FFQUMsVUFBQS9CLE9BQUFDLEtBQUErQixVQUFBQyxRQUNBQyxTQUFBQyxZQUFBLHlCQUFBQyxZQUFBLFdBQUFDLFVBQUFDLFdBQUEsZUFBQUMsSUFBQSxjQUdBL0IsR0FBQSxHQUFBUixRQUFBQyxLQUFBdUMsSUFBQW5GLFNBQUFvRixlQUFBLGlCQUFBOUIsR0FDQWQsSUFqREEsR0FBQTZDLEdBQUF0RCxPQUFBdUQsU0FBQUQsUUFDQTdFLFNBQUFDLElBQUEsWUFBQTRFLEVBQ0EsSUFBQWxDLEdBRUFRLEdBREEsR0FBQWhCLFFBQUFDLEtBQUEyQyxPQUFBLGlCQUFBLG1CQUNBLEdBQUE1QyxRQUFBQyxLQUFBMkMsT0FBQSxVQUFBLFlBQ0F4QyxFQUFBLEdBQUFKLFFBQUFDLEtBQUEyQyxPQUFBLFNBQUEsV0FDQTlDLEtBQ0FTLEVBQUEsR0FBQVAsUUFBQUMsS0FBQTRDLFlBQ0Esc0JBQ0EsR0FBQTdDLFFBQUFDLEtBQUE2QyxLQUFBLElBQUEsS0FDQSxHQUFBOUMsUUFBQUMsS0FBQThDLE1BQUEsRUFBQSxHQUNBLEdBQUEvQyxRQUFBQyxLQUFBOEMsTUFBQSxHQUFBLElBeUNBL0MsUUFBQUMsS0FBQStDLE1BQUFDLGVBQUE3RCxPQUFBLE9BQUFzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiB2YXIgYnV0dG9uQXV0aG9yaXRoYXRpb249JCgnLmpzX2J1dHRvbkF1dGhvcml0aGF0aW9uJyksLy/QutC90L7Qv9C60LAg0JDQstGC0L7RgNC40LfQsNGG0LjRj1xyXG4gICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzPSQoJy5qc19idXR0b25NYWluQmFja1JldmVycycpLC8v0LrQvdC+0L/QutCwINCd0LAg0LPQu9Cw0LLQvdGD0Y4sINGH0YLQvtCxINC/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0L7QsdGA0LDRgtC90L4g0LHQu9C+0LpcclxuICAgIGZsaXBwZXJfd3JhcD0kKCcuZmxpcHBlcl93cmFwJyksLy/QvtCx0LXRgNGC0LrQsCDQsdC70L7QutC+0LIg0LDQstGC0L7RgNC40LfQsNGG0LjRjy/Qv9GA0LjQstC10YLRgdGC0LLQuNC1XHJcbiAgICBmcm9udEJsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2Zyb250JyksLy/Qv9C10YDQtdC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcbiAgICBiYWNrQmxvY2s9JCgnLmJsb2NrV2VsbGNvbWVfYmFjaycpOy8v0LfQsNC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcblxyXG4gICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICBidXR0b25BdXRob3JpdGhhdGlvbi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QutCw0LfQsNGC0Ywg0LHRjdC6Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuXHJcbiAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVPdXQoNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcblxyXG4gICAgICAvL9C90LDQttC40LzQsNC10Lwg0L3QsCDQutC90L7Qv9C60YMg0J3QsCDQs9C70LDQstC90YPQsSDQuCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGC0YHRjyDQsdC70L7QuiDRgSDQv9C+0LvRj9C80Lgg0LTQu9GPINCy0YXQvtC00LBcclxuICAgICAgYnV0dG9uTWFpbkJhY2tSZXZlcnMub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LrQsNC30LDRgtGMINGE0YDQvtC90YInKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcblxyXG4gICAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgICAgYnV0dG9uQXV0aG9yaXRoYXRpb24uZmFkZUluKDUwMCk7Ly8g0LrQvdC+0L/QutC1INCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0LTQtdC70LDQtdC8INC90LXQstC40LTQuNC80L7QuVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxufSk7XHJcblxyXG5cclxuIiwiJChmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZygncGFycmFsYXgg0L3QsCDRgdGC0YDQsNC90LjRhtCw0YUnKTtcclxuICAgIFxyXG5cclxuLy/QpNCj0J3QmtCm0JjQryDQn9CQ0KDQkNCb0JDQmtCh0JAg0JTQm9CvINCi0JXQmtCh0KLQkCAs0KTQntCi0J4g0Jgg0JPQntCgINCS0JXQoNCi0JjQmtCQ0JvQrNCd0J5cclxuICAgIHZhciBwYXJyYWxheFZlcnRpY2FsPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgd29yZEJpZz0kKCcuc3ZnX3BvcnRmb2xpbycpLC8v0LHQvtC70YzRiNCw0Y8g0L3QsNC70L/QuNGB0Ywg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlUGhvdG89JCgnLmJsb2NrUHJlc2VudCcpLC8v0LHQu9C+0Log0YEg0YTQvtGC0L4g0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlQmFja2dyb3VuZD0kKCcudmVydGljYWxQYXJyYWxsYXhXcGFwJyk7Ly/QutCw0YDRgtC40L3QutCwICDQutC+0YLQvtGA0YPRjiDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgIG1vdmUgOiBmdW5jdGlvbih3U2Nyb2xsLGJsb2NrLHByb2NlbnRNb3ZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmU9d1Njcm9sbC8tcHJvY2VudE1vdmUrJyUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtM0Q9J3RyYW5zbGF0ZTNkKDAsJytzdHJhZmUrJywwKSc7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOnRyYW5zZm9ybTNELFxyXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6dHJhbnNmb3JtM0RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsbW92ZVBob3RvLDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsd29yZEJpZywyMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCxtb3ZlQmFja2dyb3VuZCw0NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICBwYXJyYWxheFZlcnRpY2FsLmluaXQod1Njcm9sbCk7XHJcbiAgIH0pXHJcblxyXG5cclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ9Cx0L7Qu9GM0YjQvtC1INC80LXQvdGOJyk7IFxyXG4gICAgdmFyIGJ1dHRvbkdhbWJ1cmdlcj0kKCcuaGVhZGVyX19ibG9ja0Nsb3NlJyksLy/QutC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRjyDQvNC10L3RjiDQvdCwINCy0LXRgdGMINGN0LrRgNCw0L1cclxuICAgICAgICBjbG9zZUxpbmU9JCgnLmJsb2NrQ2xvc2VfbGluZScpLC8v0YbQtdC90YLRgNCw0LvRjNC90LDRjyDQv9C+0LvQvtGB0LAg0LjQtyDQutC90L7Qv9C60Lgg0LPQsNC80LHRg9GA0LPQtdGAXHJcbiAgICAgICAgd3JhcEJsdWVXYWxsPSQoJy53cmFwcGVyQmx1ZVdhbGwnKSwvL9C+0LHQtdGA0YLQutCwINC00LvRjyDRgdGC0LXQvdGLINC80LXQvdGOXHJcbiAgICAgICAgbGVmdFNpZGVfd2FsbD0kKCcuYmx1ZVdhbGxfX2xlZnRTaWRlJyksLy/Qu9C10LLQsNGPINGB0YLQvtGA0L7QvdCwINC80LXQvdGOINC60L7RgtC+0YDQsNGPINC/0L7Rj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgcmlnaHRTaWRlX3dhbGw9JCgnLmJsdWVXYWxsX19yaWdodFNpZGUnKSwvL9C/0YDQsNCy0LDRjyDRgdGC0L7RgNC+0L3QsCDQvNC10L3RjiDQutC+0YLQvtGA0LDRjyDQv9C+0Y/QstC70Y/QtdGC0YHRj1xyXG4gICAgICAgIG1lbnVXYWxsPSQoJy5ibHVlV2FsbF9tZW51TGluaycpOy8v0LHQu9C+0Log0YEg0L3QsNC30LLQsNC90LjRj9C80Lgg0LzQtdC90Y5cclxuXHJcbiAgICAgICAgYnV0dG9uR2FtYnVyZ2VyLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGVmdFNpZGVfd2FsbC50b2dnbGVDbGFzcygnbGVmdDAnKTtcclxuICAgICAgICAgICAgcmlnaHRTaWRlX3dhbGwudG9nZ2xlQ2xhc3MoJ3JpZ2h0MCcpO1xyXG4gICAgICAgICAgICBjbG9zZUxpbmUudG9nZ2xlQ2xhc3MoJ2Jsb2NrQ2xvc2VfbGluZV9hY3RpdmUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0L/QvtC70L7RgdC60Lgg0LrQvdC+0L/QutC4XHJcbiAgICAgICAgICAgIHdyYXBCbHVlV2FsbC50b2dnbGVDbGFzcygnd3JhcHBlckJsdWVXYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtZW51V2FsbC50b2dnbGVDbGFzcygnYmx1ZVdhbGxfbWVudUxpbmtfYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnNvbGUubG9nKCfRgdGC0YDQsNC90LjRhtCwICcrcGF0aG5hbWUpO1xyXG4gICAgdmFyIG1hcDtcclxuICAgIHZhciBlZ2dsYWJzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC40NTA0OTk2NjAyMzU2LCAzMC41MTEwMjg3NjY2MzIwOCk7XHJcbiAgICB2YXIgbWFwQ29vcmRpbmF0ZXMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ3NjEzNCwgMzAuNTEzODY3KSxcclxuICAgICAgICBtYXJrZXIxPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTAuNTA3OTYwLCAzMC40OTg4ODMpO1xyXG4gICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXJJbWFnZShcclxuICAgICAgICAnLi4vaW1hZ2UvbWFya2VyLnBuZycsXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlNpemUoMTAwLDE0MCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDEwLDEwKVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGFkZE1hcmtlcigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFya2Vycy5wdXNoKG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyMSxcclxuICAgICAgICAgICAgcmFpc2VPbkRyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiBpbWFnZSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyOiBtYXBDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuTEFSR0VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICAgICAgICAgIHN0eWxlczogW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifSx7XCJodWVcIjpcIiNmZjAwMDBcIn1dfV1cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19jb25uZWN0TWFwJyksbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgYWRkTWFya2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpO1xyXG5cclxuXHJcbn0pO1xyXG4iXX0=
