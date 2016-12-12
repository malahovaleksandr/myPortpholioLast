(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
   
    var blur=(function(){
        var blur=$('.block_blur'),
            sectionBlur=$('.js_sectionBlur');
        return {
            set: function(){
              var  widthBackgr=sectionBlur.width(),//ширина секции с бэкграундом
                  posTop=sectionBlur.offset().top-blur.offset().top,//положение от верха
                  posLeft=sectionBlur.offset().left-blur.offset().left; //положение блока от левого края
                console.log('sec top top- '+sectionBlur.offset().top);
                console.log('blur top- '+blur.offset().top);

                console.log('top- '+posTop);
                console.log('left- '+posLeft);
                blur.css({
                    'background-size':widthBackgr+'px'+' '+ 'auto',
                    'background-position': posLeft +'px'+' '+posTop+'px'
                })
            }
        }
    }());
    $(document).ready(function(){
        blur.set();
    });
    $(window).resize(function(){
        blur.set();
    });
});

$(document).ready(function(){

 var buttonAuthorithation=$('.js_buttonAuthorithation'),//кнопка Авторизация
     buttonMainBackRevers=$('.js_buttonMainBackRevers'),//кнопка На главную, чтоб перевернуть обратно блок
    flipper_wrap=$('.flipper_wrap'),//обертка блоков авторизация/приветствие
    frontBlock=$('.blockWellcome_front'),//передняя часть блока приветствия
    backBlock=$('.blockWellcome_back');//задняя часть блока приветствия

    //нажимаем на кнопку Авторизация и переворачивается блок с полями для входа
    buttonAuthorithation.on('click',function(){
        //console.log('показать бэк');
      setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
      setTimeout(function(){backBlock.toggleClass('display_none')}, 200);

      flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
      buttonAuthorithation.fadeOut(500);// кнопке Авторизация делаем невидимой

      //нажимаем на кнопку На главнуб и переворачивается блок с полями для входа
      buttonMainBackRevers.on('click',function(e){
          //console.log('показать фронт');
        e.preventDefault();
        setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
        setTimeout(function(){backBlock.toggleClass('display_none')}, 200);

        flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
        buttonAuthorithation.fadeIn(500);// кнопке Авторизация делаем невидимой
      })
    })
});



$(function(){
var parralaxLayer=$('.parralax_layer');//слой паралакса
    $(document).ready(function(){
        var w=(window.innerWidth/2),
            h=(window.innerHeight/2);
        parralaxLayer.map(function(key, value){
            var posirionLeft=w*(key/100),
                posutionBottom=h*(key/100);
            $(value).css({
                'left':'-'+posirionLeft+'px',
                'bottom':'-'+posutionBottom+'px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            })
        });
    });
    $(window).on('mousemove',function(e){
        var w=(window.innerWidth/2)-e.pageX,
            h=(window.innerHeight/2)-e.pageY;
        parralaxLayer.map(function(key, value){
            var moveX=w*((key)/100),
                moveY=h*((key)/100);
            console.log(moveX,moveY);
                $(value).css({
                'transform':'translate3d('+moveX+'px,'+moveY+'px,0)',
                 'left':-10*(key)+'px',
                 'bottom':-5*(key)+'px',
                 backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            })
        });

    });
});
$(function(){
   //console.log('parralax на страницах');
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
                this.move(wScroll,moveBackground,60);
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdXJGb3JtLmpzIiwiaW5kZXhQYWdlX3JldmVyc0Jsb2NrLmpzIiwicGFyYWxsYXhNYWluLmpzIiwicGFycmFsYXhWZXJ0aWNhbC5qcyIsInNob3dCbHVlV2FsbE1lbnUuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIiQiLCJibHVyIiwic2VjdGlvbkJsdXIiLCJzZXQiLCJ3aWR0aEJhY2tnciIsIndpZHRoIiwicG9zVG9wIiwib2Zmc2V0IiwidG9wIiwicG9zTGVmdCIsImxlZnQiLCJjb25zb2xlIiwibG9nIiwiY3NzIiwiYmFja2dyb3VuZC1zaXplIiwiYmFja2dyb3VuZC1wb3NpdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJyZXNpemUiLCJidXR0b25BdXRob3JpdGhhdGlvbiIsImJ1dHRvbk1haW5CYWNrUmV2ZXJzIiwiZmxpcHBlcl93cmFwIiwiZnJvbnRCbG9jayIsImJhY2tCbG9jayIsIm9uIiwic2V0VGltZW91dCIsInRvZ2dsZUNsYXNzIiwiZmFkZU91dCIsInByZXZlbnREZWZhdWx0IiwiZmFkZUluIiwicGFycmFsYXhMYXllciIsInciLCJpbm5lcldpZHRoIiwiaCIsImlubmVySGVpZ2h0IiwibWFwIiwia2V5IiwidmFsdWUiLCJwb3NpcmlvbkxlZnQiLCJwb3N1dGlvbkJvdHRvbSIsImJvdHRvbSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlWCIsIm1vdmVZIiwidHJhbnNmb3JtIiwicGFycmFsYXhWZXJ0aWNhbCIsIndvcmRCaWciLCJtb3ZlUGhvdG8iLCJtb3ZlQmFja2dyb3VuZCIsIm1vdmUiLCJ3U2Nyb2xsIiwiYmxvY2siLCJwcm9jZW50TW92ZSIsInN0cmFmZSIsInRyYW5zZm9ybTNEIiwiLXdlYmtpdC10cmFuc2Zvcm0iLCJpbml0IiwidGhpcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImJ1dHRvbkdhbWJ1cmdlciIsImNsb3NlTGluZSIsIndyYXBCbHVlV2FsbCIsImxlZnRTaWRlX3dhbGwiLCJyaWdodFNpZGVfd2FsbCIsIm1lbnVXYWxsIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxHQUFBRSxHQUFBLGtCQUFBQyxVQUFBQSxPQUFBLEtBQUFGLEdBQUFDLEVBQUEsTUFBQUEsR0FBQUYsR0FBQSxFQUFBLElBQUFJLEVBQUEsTUFBQUEsR0FBQUosR0FBQSxFQUFBLE1BQUEsSUFBQUssT0FBQSx1QkFBQUwsRUFBQSxLQUFBLEdBQUFNLEdBQUFULEVBQUFHLElBQUFPLFdBQUFYLEdBQUFJLEdBQUEsR0FBQVEsS0FBQUYsRUFBQUMsUUFBQSxTQUFBWixHQUFBLEdBQUFFLEdBQUFELEVBQUFJLEdBQUEsR0FBQUwsRUFBQSxPQUFBSSxHQUFBRixFQUFBQSxFQUFBRixJQUFBVyxFQUFBQSxFQUFBQyxRQUFBWixFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLE1BQUFELEdBQUFHLEdBQUFPLFFBQUEsSUFBQSxHQUFBSCxHQUFBLGtCQUFBRCxVQUFBQSxRQUFBSCxFQUFBLEVBQUFBLEVBQUFGLEVBQUFXLE9BQUFULElBQUFELEVBQUFELEVBQUFFLEdBQUEsT0FBQUQsS0FBQVcsR0FBQSxTQUFBUCxFQUFBUSxFQUFBSixHQUNBSyxFQUFBLFdBRUEsR0FBQUMsR0FBQSxXQUNBLEdBQUFBLEdBQUFELEVBQUEsZUFDQUUsRUFBQUYsRUFBQSxrQkFDQSxRQUNBRyxJQUFBLFdBQ0EsR0FBQUMsR0FBQUYsRUFBQUcsUUFDQUMsRUFBQUosRUFBQUssU0FBQUMsSUFBQVAsRUFBQU0sU0FBQUMsSUFDQUMsRUFBQVAsRUFBQUssU0FB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QUNBbUUsRUFBQW5FLEVBQUEsb0JBQ0FvRSxFQUFBcEUsRUFBQSx1QkFDQXFFLEVBQUFyRSxFQUFBLHdCQUNBc0UsRUFBQXRFLEVBQUEscUJBRUFpRSxHQUFBeEMsR0FBQSxRQUFBLFdBQ0EyQyxFQUFBekMsWUFBQSxTQUNBMEMsRUFBQTFDLFlBQUEsVUFDQXVDLEVBQUF2QyxZQUFBLDBCQUNBd0MsRUFBQXhDLFlBQUEsMEJBQ0EyQyxFQUFBM0MsWUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIHZhciBibHVyPShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBibHVyPSQoJy5ibG9ja19ibHVyJyksXHJcbiAgICAgICAgICAgIHNlY3Rpb25CbHVyPSQoJy5qc19zZWN0aW9uQmx1cicpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB2YXIgIHdpZHRoQmFja2dyPXNlY3Rpb25CbHVyLndpZHRoKCksLy/RiNC40YDQuNC90LAg0YHQtdC60YbQuNC4INGBINCx0Y3QutCz0YDQsNGD0L3QtNC+0LxcclxuICAgICAgICAgICAgICAgICAgcG9zVG9wPXNlY3Rpb25CbHVyLm9mZnNldCgpLnRvcC1ibHVyLm9mZnNldCgpLnRvcCwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQvtGCINCy0LXRgNGF0LBcclxuICAgICAgICAgICAgICAgICAgcG9zTGVmdD1zZWN0aW9uQmx1ci5vZmZzZXQoKS5sZWZ0LWJsdXIub2Zmc2V0KCkubGVmdDsgLy/Qv9C+0LvQvtC20LXQvdC40LUg0LHQu9C+0LrQsCDQvtGCINC70LXQstC+0LPQviDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlYyB0b3AgdG9wLSAnK3NlY3Rpb25CbHVyLm9mZnNldCgpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmx1ciB0b3AtICcrYmx1ci5vZmZzZXQoKS50b3ApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3AtICcrcG9zVG9wKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0LSAnK3Bvc0xlZnQpO1xyXG4gICAgICAgICAgICAgICAgYmx1ci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOndpZHRoQmFja2dyKydweCcrJyAnKyAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBwb3NMZWZ0ICsncHgnKycgJytwb3NUb3ArJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGJsdXIuc2V0KCk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBibHVyLnNldCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIHZhciBidXR0b25BdXRob3JpdGhhdGlvbj0kKCcuanNfYnV0dG9uQXV0aG9yaXRoYXRpb24nKSwvL9C60L3QvtC/0LrQsCDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPXHJcbiAgICAgYnV0dG9uTWFpbkJhY2tSZXZlcnM9JCgnLmpzX2J1dHRvbk1haW5CYWNrUmV2ZXJzJyksLy/QutC90L7Qv9C60LAg0J3QsCDQs9C70LDQstC90YPRjiwg0YfRgtC+0LEg0L/QtdGA0LXQstC10YDQvdGD0YLRjCDQvtCx0YDQsNGC0L3QviDQsdC70L7QulxyXG4gICAgZmxpcHBlcl93cmFwPSQoJy5mbGlwcGVyX3dyYXAnKSwvL9C+0LHQtdGA0YLQutCwINCx0LvQvtC60L7QsiDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGPL9C/0YDQuNCy0LXRgtGB0YLQstC40LVcclxuICAgIGZyb250QmxvY2s9JCgnLmJsb2NrV2VsbGNvbWVfZnJvbnQnKSwvL9C/0LXRgNC10LTQvdGP0Y8g0YfQsNGB0YLRjCDQsdC70L7QutCwINC/0YDQuNCy0LXRgtGB0YLQstC40Y9cclxuICAgIGJhY2tCbG9jaz0kKCcuYmxvY2tXZWxsY29tZV9iYWNrJyk7Ly/Qt9Cw0LTQvdGP0Y8g0YfQsNGB0YLRjCDQsdC70L7QutCwINC/0YDQuNCy0LXRgtGB0YLQstC40Y9cclxuXHJcbiAgICAvL9C90LDQttC40LzQsNC10Lwg0L3QsCDQutC90L7Qv9C60YMg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQuCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGC0YHRjyDQsdC70L7QuiDRgSDQv9C+0LvRj9C80Lgg0LTQu9GPINCy0YXQvtC00LBcclxuICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCfQv9C+0LrQsNC30LDRgtGMINCx0Y3QuicpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZnJvbnRCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcblxyXG4gICAgICBmbGlwcGVyX3dyYXAudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQsdC70L7QulxyXG4gICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlT3V0KDUwMCk7Ly8g0LrQvdC+0L/QutC1INCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0LTQtdC70LDQtdC8INC90LXQstC40LTQuNC80L7QuVxyXG5cclxuICAgICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCd0LAg0LPQu9Cw0LLQvdGD0LEg0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCfQv9C+0LrQsNC30LDRgtGMINGE0YDQvtC90YInKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcblxyXG4gICAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgICAgYnV0dG9uQXV0aG9yaXRoYXRpb24uZmFkZUluKDUwMCk7Ly8g0LrQvdC+0L/QutC1INCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0LTQtdC70LDQtdC8INC90LXQstC40LTQuNC80L7QuVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxufSk7XHJcblxyXG5cclxuIiwiJChmdW5jdGlvbigpe1xyXG52YXIgcGFycmFsYXhMYXllcj0kKCcucGFycmFsYXhfbGF5ZXInKTsvL9GB0LvQvtC5INC/0LDRgNCw0LvQsNC60YHQsFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdz0od2luZG93LmlubmVyV2lkdGgvMiksXHJcbiAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKTtcclxuICAgICAgICBwYXJyYWxheExheWVyLm1hcChmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIHBvc2lyaW9uTGVmdD13KihrZXkvMTAwKSxcclxuICAgICAgICAgICAgICAgIHBvc3V0aW9uQm90dG9tPWgqKGtleS8xMDApO1xyXG4gICAgICAgICAgICAkKHZhbHVlKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOictJytwb3NpcmlvbkxlZnQrJ3B4JyxcclxuICAgICAgICAgICAgICAgICdib3R0b20nOictJytwb3N1dGlvbkJvdHRvbSsncHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciB3PSh3aW5kb3cuaW5uZXJXaWR0aC8yKS1lLnBhZ2VYLFxyXG4gICAgICAgICAgICBoPSh3aW5kb3cuaW5uZXJIZWlnaHQvMiktZS5wYWdlWTtcclxuICAgICAgICBwYXJyYWxheExheWVyLm1hcChmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIG1vdmVYPXcqKChrZXkpLzEwMCksXHJcbiAgICAgICAgICAgICAgICBtb3ZlWT1oKigoa2V5KS8xMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb3ZlWCxtb3ZlWSk7XHJcbiAgICAgICAgICAgICAgICAkKHZhbHVlKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3RyYW5zbGF0ZTNkKCcrbW92ZVgrJ3B4LCcrbW92ZVkrJ3B4LDApJyxcclxuICAgICAgICAgICAgICAgICAnbGVmdCc6LTEwKihrZXkpKydweCcsXHJcbiAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6LTUqKGtleSkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIC8vY29uc29sZS5sb2coJ3BhcnJhbGF4INC90LAg0YHRgtGA0LDQvdC40YbQsNGFJyk7XHJcbi8v0KTQo9Cd0JrQptCY0K8g0J/QkNCg0JDQm9CQ0JrQodCQINCU0JvQryDQotCV0JrQodCi0JAgLNCk0J7QotCeINCYINCT0J7QoCDQktCV0KDQotCY0JrQkNCb0KzQndCeXHJcbiAgICB2YXIgcGFycmFsYXhWZXJ0aWNhbD0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHdvcmRCaWc9JCgnLnN2Z19wb3J0Zm9saW8nKSwvL9Cx0L7Qu9GM0YjQsNGPINC90LDQu9C/0LjRgdGMINC60L7RgtC+0YDRg9GOINCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICAgICAgbW92ZVBob3RvPSQoJy5ibG9ja1ByZXNlbnQnKSwvL9Cx0LvQvtC6INGBINGE0L7RgtC+INC60L7RgtC+0YDQvtC1INCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICAgICAgbW92ZUJhY2tncm91bmQ9JCgnLnZlcnRpY2FsUGFycmFsbGF4V3BhcCcpOy8v0LrQsNGA0YLQuNC90LrQsCAg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICBtb3ZlIDogZnVuY3Rpb24od1Njcm9sbCxibG9jayxwcm9jZW50TW92ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyYWZlPXdTY3JvbGwvLXByb2NlbnRNb3ZlKyclJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTNEPSd0cmFuc2xhdGUzZCgwLCcrc3RyYWZlKycsMCknO1xyXG4gICAgICAgICAgICAgICAgYmxvY2suY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzp0cmFuc2Zvcm0zRCxcclxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOnRyYW5zZm9ybTNEXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbih3U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLG1vdmVQaG90bywzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLHdvcmRCaWcsMjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsbW92ZUJhY2tncm91bmQsNjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgdmFyIHdTY3JvbGw9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgcGFycmFsYXhWZXJ0aWNhbC5pbml0KHdTY3JvbGwpO1xyXG4gICB9KVxyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCfQsdC+0LvRjNGI0L7QtSDQvNC10L3RjicpOyBcclxuICAgIHZhciBidXR0b25HYW1idXJnZXI9JCgnLmhlYWRlcl9fYmxvY2tDbG9zZScpLC8v0LrQvdC+0L/QutCwINC+0YLQutGA0YvRgtC40Y8g0LzQtdC90Y4g0L3QsCDQstC10YHRjCDRjdC60YDQsNC9XHJcbiAgICAgICAgY2xvc2VMaW5lPSQoJy5ibG9ja0Nsb3NlX2xpbmUnKSwvL9GG0LXQvdGC0YDQsNC70YzQvdCw0Y8g0L/QvtC70L7RgdCwINC40Lcg0LrQvdC+0L/QutC4INCz0LDQvNCx0YPRgNCz0LXRgFxyXG4gICAgICAgIHdyYXBCbHVlV2FsbD0kKCcud3JhcHBlckJsdWVXYWxsJyksLy/QvtCx0LXRgNGC0LrQsCDQtNC70Y8g0YHRgtC10L3RiyDQvNC10L3RjlxyXG4gICAgICAgIGxlZnRTaWRlX3dhbGw9JCgnLmJsdWVXYWxsX19sZWZ0U2lkZScpLC8v0LvQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDQvNC10L3RjiDQutC+0YLQvtGA0LDRjyDQv9C+0Y/QstC70Y/QtdGC0YHRj1xyXG4gICAgICAgIHJpZ2h0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fcmlnaHRTaWRlJyksLy/Qv9GA0LDQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICBtZW51V2FsbD0kKCcuYmx1ZVdhbGxfbWVudUxpbmsnKTsvL9Cx0LvQvtC6INGBINC90LDQt9Cy0LDQvdC40Y/QvNC4INC80LXQvdGOXHJcblxyXG4gICAgICAgIGJ1dHRvbkdhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxlZnRTaWRlX3dhbGwudG9nZ2xlQ2xhc3MoJ2xlZnQwJyk7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdyaWdodDAnKTtcclxuICAgICAgICAgICAgY2xvc2VMaW5lLnRvZ2dsZUNsYXNzKCdibG9ja0Nsb3NlX2xpbmVfYWN0aXZlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINC/0L7Qu9C+0YHQutC4INC60L3QvtC/0LrQuFxyXG4gICAgICAgICAgICB3cmFwQmx1ZVdhbGwudG9nZ2xlQ2xhc3MoJ3dyYXBwZXJCbHVlV2FsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgbWVudVdhbGwudG9nZ2xlQ2xhc3MoJ2JsdWVXYWxsX21lbnVMaW5rX2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
