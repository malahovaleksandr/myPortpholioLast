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
                // console.log('sec top top- '+sectionBlur.offset().top);
                // console.log('blur top- '+blur.offset().top);
                //
                // console.log('top- '+posTop);
                // console.log('left- '+posLeft);
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
    var imgs=[];
    $.each($('*'),function(){
        var $this=$(this),
            background=$this.css('background-image'),
            image=$this.is('img');
        if(background!='none'){
           var path=background.replace('url("','').replace('")','');
            imgs.push(path);
        }
        if(image){
            var path=$this.attr('src');
            if(path){
                imgs.push(path);
            }
        }
    });
    var repcentNow=1;
    for(i=1;i<imgs.length;i++){
        var image=$('<img>',{
            attr:{
                src:imgs[i]
            }
        });
        image.on({
            load:function() {
                countPercent(imgs.length, repcentNow);
                repcentNow++;
            },
            error: function(){
                repcentNow++;
            }
        });
    }
    function countPercent(total,current){
        var percent=Math.ceil((current/total)*100);
        if( percent>=0) $('.wrapLoader').fadeOut();
        $('.percentCurent').text(percent+' %');
    }
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
   var buttonNext=$('.js_arrow__slideNext'),//кнопка след слайд
       buttonPrew=$('.js_arrow__slidePrew'),//кнопка предыдцщий сладй
       countSlide=1,//счетчика активного слайда
       flag=true,//для проверки выполнения анимации и чтб другая не началась по ка не закончиться предыдущая
       containerSlide=$('.js_blockSlide'),//блок с больщими фотками слайдера
       bigSlides=containerSlide.find('.li__slider'),
       duration=500;

   buttonNext.on('click',function(){

      if(flag){
         flag=false;
         ++countSlide;
         if(countSlide>=bigSlides.length) countSlide=0;
         var $this=$(this),
             smallSlide=$this.find('.li_slideSmall'),//находим все слайды маленькие
             nextSlide=countSlide+1,//след  видимый слайд маленький
             prevSlide=countSlide-1,
             prev2Slide=countSlide-2;

         if(nextSlide==smallSlide.length)nextSlide=0;//счетчик для перемены маленького слайда
         if(prevSlide<0)prevSlide=smallSlide.length-1;//счетчик для перемены соседнего маленького слайда
         if(prev2Slide==-1){prev2Slide=smallSlide.length-1;}//счетчик для перемены соседнего маленького слайда
         if(prev2Slide==-2){prev2Slide=smallSlide.length-2;}//счетчик для перемены соседнего маленького слайда
          console.log('------------------------- ');
          console.log('prev2Slide '+prev2Slide);
          console.log('prevSlide '+prevSlide);
          console.log('countSlide '+countSlide);
          console.log('nextSlide '+nextSlide);
//---------------ЗАМЕНА ТЕКСТА,ПОДСТАВКА ССЫЛКИ-----------------------------------------------------------------
             var blockNameSite=$('.js_nameSite'),//строка куда будет писаться название сайта из слайда
                 blockWorkFlow=$('.js_workflow'),//строка куда будет писаться тезнологиии сайта из слайда
                 blockLinkForSite=$('.js_linkForSite'),//строка куда будет писаться ссылка на сайт из слайда
                 nameSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('name'),//узнаем имя сайта
                 workflowSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('workflow'),//узнаем workflow для создания сайта
                 LinkForSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('link');//находим ссылку на выполненный сайт
          blockNameSite.text(nameSite);
          blockWorkFlow.text(workflowSite);
          blockLinkForSite.attr('href',LinkForSite);

//---------------ЗАМЕНА ТЕКСТА,ПОДСТАВКА ССЫЛКИ-----------------------------------------------------------------
         //анимация маленького слайда где нажали стрелку
         smallSlide.eq(countSlide).animate({//меняем местомаленького слайда там где нажали стрелку
            'top':'-150%'},duration,function(){
            $(this).css('top','150%');
         });
         smallSlide.eq(nextSlide).animate({
            'top':0},duration);

         // АНИМАЦИЯ СОСЕДНЕГО МАЛЕНЬКОГО СЛАЙДА
         var anotherSmallSlide=$this.siblings('.arrowForSlider_side').find('.li_slideSmall');//соседний маленький слайд
         anotherSmallSlide.eq(prev2Slide).animate({//меняем местомаленького слайда там где нажали стрелку
            'top':'100%'},duration,function(){
            $(this).css('top','-150%');
         });
         anotherSmallSlide.eq(prevSlide).animate({
            'top':0},duration);

         //анимация большого слайда
         bigSlides.eq(prevSlide).animate({
            'top':'150%'},duration,function(){
            $(this).css('top','-100%');
         });
         bigSlides.eq(countSlide).animate({
            'top':'50%'},duration,function(){
            flag=true;
         });
      }

   });

    buttonPrew.on('click',function(){

        if(flag){
            flag=false;
            --countSlide;
            if(countSlide<0) countSlide=bigSlides.length-1;
            var $this=$(this),
                smallSlide=$this.find('.li_slideSmall'),//находим все слайды маленькие

                prevSlide=countSlide-1,
                nextSlide=countSlide+1,//след  видимый слайд маленький
                next2Slide=countSlide+2;
                //prev2Slide=countSlide-2;

            if(nextSlide==smallSlide.length)nextSlide=0;//счетчик для перемены маленького слайда
            if(prevSlide<0)prevSlide=smallSlide.length-1;//счетчик для перемены соседнего маленького слайда
            if(next2Slide==smallSlide.length){next2Slide=0;}//счетчик для перемены соседнего маленького слайда
            if(next2Slide==smallSlide.length+1){next2Slide=1;}//счетчик для перемены соседнего маленького слайда
            // if(prev2Slide==-1){prev2Slide=smallSlide.length-1;}//счетчик для перемены соседнего маленького слайда
            // if(prev2Slide==-2){prev2Slide=smallSlide.length-2;}//счетчик для перемены соседнего маленького слайда
            console.log('------------------------- ');
            //console.log('prev2Slide '+prev2Slide);
            console.log('prevSlide '+prevSlide);
            console.log('countSlide '+countSlide);
            console.log('nextSlide '+nextSlide);
            console.log('next2Slide '+next2Slide);

//---------------ЗАМЕНА ТЕКСТА,ПОДСТАВКА ССЫЛКИ-----------------------------------------------------------------
            var blockNameSite=$('.js_nameSite'),//строка куда будет писаться название сайта из слайда
                blockWorkFlow=$('.js_workflow'),//строка куда будет писаться тезнологиии сайта из слайда
                blockLinkForSite=$('.js_linkForSite'),//строка куда будет писаться ссылка на сайт из слайда
                nameSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('name'),//узнаем имя сайта
                workflowSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('workflow'),//узнаем workflow для создания сайта
                LinkForSite=smallSlide.eq(countSlide).find('.arrow__slideImage').data('link');//находим ссылку на выполненный сайт
            blockNameSite.text(nameSite);
            blockWorkFlow.text(workflowSite);
            blockLinkForSite.attr('href',LinkForSite);

//---------------ЗАМЕНА ТЕКСТА,ПОДСТАВКА ССЫЛКИ-----------------------------------------------------------------
            //анимация маленького слайда где нажали стрелку
            smallSlide.eq(countSlide).animate({//меняем местомаленького слайда там где нажали стрелку
                'top':'100%'},duration,function(){
                $(this).css('top','-150%');
            });
            smallSlide.eq(prevSlide).animate({
                'top':0},duration);

            // АНИМАЦИЯ СОСЕДНЕГО МАЛЕНЬКОГО СЛАЙДА
            var anotherSmallSlide=$this.siblings('.arrowForSlider_side').find('.li_slideSmall');//соседний маленький слайд
            anotherSmallSlide.eq(next2Slide).animate({//меняем местомаленького слайда там где нажали стрелку
                'top':'-150%'},duration,function(){
                $(this).css('top','150%');
            });
            anotherSmallSlide.eq(nextSlide).animate({
                'top':0},duration);

            //анимация большого слайда
            bigSlides.eq(nextSlide).animate({
                'top':'150%'},duration,function(){
                $(this).css('top','-100%');
            });
            bigSlides.eq(countSlide).animate({
                'top':'50%'},duration,function(){
                flag=true;
            });
        }

    })
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdXJGb3JtLmpzIiwiaW5kZXhQYWdlX3JldmVyc0Jsb2NrLmpzIiwicGFyYWxsYXhNYWluLmpzIiwicGFycmFsYXhWZXJ0aWNhbC5qcyIsInByZWxvYWRlci5qcyIsInNob3dCbHVlV2FsbE1lbnUuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIiQiLCJibHVyIiwic2VjdGlvbkJsdXIiLCJzZXQiLCJ3aWR0aEJhY2tnciIsIndpZHRoIiwicG9zVG9wIiwib2Zmc2V0IiwidG9wIiwicG9zTGVmdCIsImxlZnQiLCJjc3MiLCJiYWNrZ3JvdW5kLXNpemUiLCJiYWNrZ3JvdW5kLXBvc2l0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsInJlc2l6ZSIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwib24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0IiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJwYXJyYWxheExheWVyIiwidyIsImlubmVyV2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInBvc2lyaW9uTGVmdCIsInBvc3V0aW9uQm90dG9tIiwiYm90dG9tIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicGFnZVgiLCJwYWdlWSIsIm1vdmVYIiwibW92ZVkiLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtIiwicGFycmFsYXhWZXJ0aWNhbCIsIndvcmRCaWciLCJtb3ZlUGhvdG8iLCJtb3ZlQmFja2dyb3VuZCIsIm1vdmUiLCJ3U2Nyb2xsIiwiYmxvY2siLCJwcm9jZW50TW92ZSIsInN0cmFmZSIsInRyYW5zZm9ybTNEIiwiLXdlYmtpdC10cmFuc2Zvcm0iLCJpbml0IiwidGhpcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImNvdW50UGVyY2VudCIsInRvdGFsIiwiY3VycmVudCIsInBlcmNlbnQiLCJNYXRoIiwiY2VpbCIsInRleHQiLCJpbWdzIiwiZWFjaCIsIiR0aGlzIiwiYmFja2dyb3VuZCIsImltYWdlIiwiaXMiLCJwYXRoIiwicmVwbGFjZSIsInB1c2giLCJhdHRyIiwicmVwY2VudE5vdyIsInNyYyIsImxvYWQiLCJlcnJvciIsImJ1dHRvbkdhbWJ1cmdlciIsImNsb3NlTGluZSIsIndyYXBCbHVlV2FsbCIsImxlZnRTaWRlX3dhbGwiLCJyaWdodFNpZGVfd2FsbCIsIm1lbnVXYWxsIiwiYnV0dG9uTmV4dCIsImJ1dHRvblByZXciLCJjb3VudFNsaWRlIiwiZmxhZyIsImNvbnRhaW5lclNsaWRlIiwiYmlnU2xpZGVzIiwiZmluZCIsImR1cmF0aW9uIiwic21hbGxTbGlkZSIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsInByZXYyU2xpZGUiLCJibG9ja05hbWVTaXRlIiwiYmxvY2tXb3JrRmxvdyIsImJsb2NrTGlua0ZvclNpdGUiLCJuYW1lU2l0ZSIsImVxIiwiZGF0YSIsIndvcmtmbG93U2l0ZSIsIkxpbmtGb3JTaXRlIiwiYW5pbWF0ZSIsImFub3RoZXJTbWFsbFNsaWRlIiwic2libGluZ3MiLCJuZXh0MlNsaWRlIl0sIm1hcHBpbmdzIjoiQ0FBQSxRQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxHQUFBRSxHQUFBLGtCQUFBQyxVQUFBQSxPQUFBLEtBQUFGLEdBQUFDLEVBQUEsTUFBQUEsR0FBQUYsR0FBQSxFQUFBLElBQUFJLEVBQUEsTUFBQUEsR0FBQUosR0FBQSxFQUFBLE1BQUEsSUFBQUssT0FBQSx1QkFBQUws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QUFBMkYsRUFBQSxXQUNBSixHQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgIFxyXG4gICAgdmFyIGJsdXI9KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGJsdXI9JCgnLmJsb2NrX2JsdXInKSxcclxuICAgICAgICAgICAgc2VjdGlvbkJsdXI9JCgnLmpzX3NlY3Rpb25CbHVyJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIHZhciAgd2lkdGhCYWNrZ3I9c2VjdGlvbkJsdXIud2lkdGgoKSwvL9GI0LjRgNC40L3QsCDRgdC10LrRhtC40Lgg0YEg0LHRjdC60LPRgNCw0YPQvdC00L7QvFxyXG4gICAgICAgICAgICAgICAgICBwb3NUb3A9c2VjdGlvbkJsdXIub2Zmc2V0KCkudG9wLWJsdXIub2Zmc2V0KCkudG9wLC8v0L/QvtC70L7QttC10L3QuNC1INC+0YIg0LLQtdGA0YXQsFxyXG4gICAgICAgICAgICAgICAgICBwb3NMZWZ0PXNlY3Rpb25CbHVyLm9mZnNldCgpLmxlZnQtYmx1ci5vZmZzZXQoKS5sZWZ0OyAvL9C/0L7Qu9C+0LbQtdC90LjQtSDQsdC70L7QutCwINC+0YIg0LvQtdCy0L7Qs9C+INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VjIHRvcCB0b3AtICcrc2VjdGlvbkJsdXIub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdibHVyIHRvcC0gJytibHVyLm9mZnNldCgpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RvcC0gJytwb3NUb3ApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlZnQtICcrcG9zTGVmdCk7XHJcbiAgICAgICAgICAgICAgICBibHVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6d2lkdGhCYWNrZ3IrJ3B4JysnICcrICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHBvc0xlZnQgKydweCcrJyAnK3Bvc1RvcCsncHgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmx1ci5zZXQoKTtcclxuICAgIH0pO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGJsdXIuc2V0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gdmFyIGJ1dHRvbkF1dGhvcml0aGF0aW9uPSQoJy5qc19idXR0b25BdXRob3JpdGhhdGlvbicpLC8v0LrQvdC+0L/QutCwINCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cclxuICAgICBidXR0b25NYWluQmFja1JldmVycz0kKCcuanNfYnV0dG9uTWFpbkJhY2tSZXZlcnMnKSwvL9C60L3QvtC/0LrQsCDQndCwINCz0LvQsNCy0L3Rg9GOLCDRh9GC0L7QsSDQv9C10YDQtdCy0LXRgNC90YPRgtGMINC+0LHRgNCw0YLQvdC+INCx0LvQvtC6XHJcbiAgICBmbGlwcGVyX3dyYXA9JCgnLmZsaXBwZXJfd3JhcCcpLC8v0L7QsdC10YDRgtC60LAg0LHQu9C+0LrQvtCyINCw0LLRgtC+0YDQuNC30LDRhtC40Y8v0L/RgNC40LLQtdGC0YHRgtCy0LjQtVxyXG4gICAgZnJvbnRCbG9jaz0kKCcuYmxvY2tXZWxsY29tZV9mcm9udCcpLC8v0L/QtdGA0LXQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG4gICAgYmFja0Jsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2JhY2snKTsvL9C30LDQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG5cclxuICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgYnV0dG9uQXV0aG9yaXRoYXRpb24ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9C/0L7QutCw0LfQsNGC0Ywg0LHRjdC6Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuXHJcbiAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVPdXQoNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcblxyXG4gICAgICAvL9C90LDQttC40LzQsNC10Lwg0L3QsCDQutC90L7Qv9C60YMg0J3QsCDQs9C70LDQstC90YPQsSDQuCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGC0YHRjyDQsdC70L7QuiDRgSDQv9C+0LvRj9C80Lgg0LTQu9GPINCy0YXQvtC00LBcclxuICAgICAgYnV0dG9uTWFpbkJhY2tSZXZlcnMub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ9C/0L7QutCw0LfQsNGC0Ywg0YTRgNC+0L3RgicpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZnJvbnRCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuXHJcbiAgICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlSW4oNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbnZhciBwYXJyYWxheExheWVyPSQoJy5wYXJyYWxheF9sYXllcicpOy8v0YHQu9C+0Lkg0L/QsNGA0LDQu9Cw0LrRgdCwXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3PSh3aW5kb3cuaW5uZXJXaWR0aC8yKSxcclxuICAgICAgICAgICAgaD0od2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgICAgIHBhcnJhbGF4TGF5ZXIubWFwKGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgcG9zaXJpb25MZWZ0PXcqKGtleS8xMDApLFxyXG4gICAgICAgICAgICAgICAgcG9zdXRpb25Cb3R0b209aCooa2V5LzEwMCk7XHJcbiAgICAgICAgICAgICQodmFsdWUpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6Jy0nK3Bvc2lyaW9uTGVmdCsncHgnLFxyXG4gICAgICAgICAgICAgICAgJ2JvdHRvbSc6Jy0nK3Bvc3V0aW9uQm90dG9tKydweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZScsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIHc9KHdpbmRvdy5pbm5lcldpZHRoLzIpLWUucGFnZVgsXHJcbiAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKS1lLnBhZ2VZO1xyXG4gICAgICAgIHBhcnJhbGF4TGF5ZXIubWFwKGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgbW92ZVg9dyooKGtleSkvMTAwKSxcclxuICAgICAgICAgICAgICAgIG1vdmVZPWgqKChrZXkpLzEwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmVYLG1vdmVZKTtcclxuICAgICAgICAgICAgICAgICQodmFsdWUpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzondHJhbnNsYXRlM2QoJyttb3ZlWCsncHgsJyttb3ZlWSsncHgsMCknLFxyXG4gICAgICAgICAgICAgICAgICdsZWZ0JzotMTAqKGtleSkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICAnYm90dG9tJzotNSooa2V5KSsncHgnLFxyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgLy9jb25zb2xlLmxvZygncGFycmFsYXgg0L3QsCDRgdGC0YDQsNC90LjRhtCw0YUnKTtcclxuLy/QpNCj0J3QmtCm0JjQryDQn9CQ0KDQkNCb0JDQmtCh0JAg0JTQm9CvINCi0JXQmtCh0KLQkCAs0KTQntCi0J4g0Jgg0JPQntCgINCS0JXQoNCi0JjQmtCQ0JvQrNCd0J5cclxuICAgIHZhciBwYXJyYWxheFZlcnRpY2FsPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgd29yZEJpZz0kKCcuc3ZnX3BvcnRmb2xpbycpLC8v0LHQvtC70YzRiNCw0Y8g0L3QsNC70L/QuNGB0Ywg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlUGhvdG89JCgnLmJsb2NrUHJlc2VudCcpLC8v0LHQu9C+0Log0YEg0YTQvtGC0L4g0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlQmFja2dyb3VuZD0kKCcudmVydGljYWxQYXJyYWxsYXhXcGFwJyk7Ly/QutCw0YDRgtC40L3QutCwICDQutC+0YLQvtGA0YPRjiDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgIG1vdmUgOiBmdW5jdGlvbih3U2Nyb2xsLGJsb2NrLHByb2NlbnRNb3ZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmU9d1Njcm9sbC8tcHJvY2VudE1vdmUrJyUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtM0Q9J3RyYW5zbGF0ZTNkKDAsJytzdHJhZmUrJywwKSc7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOnRyYW5zZm9ybTNELFxyXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6dHJhbnNmb3JtM0RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsbW92ZVBob3RvLDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsd29yZEJpZywyMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCxtb3ZlQmFja2dyb3VuZCw2MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICBwYXJyYWxheFZlcnRpY2FsLmluaXQod1Njcm9sbCk7XHJcbiAgIH0pXHJcblxyXG5cclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGltZ3M9W107XHJcbiAgICAkLmVhY2goJCgnKicpLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9JHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgICAgIGltYWdlPSR0aGlzLmlzKCdpbWcnKTtcclxuICAgICAgICBpZihiYWNrZ3JvdW5kIT0nbm9uZScpe1xyXG4gICAgICAgICAgIHZhciBwYXRoPWJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywnJykucmVwbGFjZSgnXCIpJywnJyk7XHJcbiAgICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW1hZ2Upe1xyXG4gICAgICAgICAgICB2YXIgcGF0aD0kdGhpcy5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgaWYocGF0aCl7XHJcbiAgICAgICAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciByZXBjZW50Tm93PTE7XHJcbiAgICBmb3IoaT0xO2k8aW1ncy5sZW5ndGg7aSsrKXtcclxuICAgICAgICB2YXIgaW1hZ2U9JCgnPGltZz4nLHtcclxuICAgICAgICAgICAgYXR0cjp7XHJcbiAgICAgICAgICAgICAgICBzcmM6aW1nc1tpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1hZ2Uub24oe1xyXG4gICAgICAgICAgICBsb2FkOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRQZXJjZW50KGltZ3MubGVuZ3RoLCByZXBjZW50Tm93KTtcclxuICAgICAgICAgICAgICAgIHJlcGNlbnROb3crKztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXBjZW50Tm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvdW50UGVyY2VudCh0b3RhbCxjdXJyZW50KXtcclxuICAgICAgICB2YXIgcGVyY2VudD1NYXRoLmNlaWwoKGN1cnJlbnQvdG90YWwpKjEwMCk7XHJcbiAgICAgICAgaWYoIHBlcmNlbnQ+PTApICQoJy53cmFwTG9hZGVyJykuZmFkZU91dCgpO1xyXG4gICAgICAgICQoJy5wZXJjZW50Q3VyZW50JykudGV4dChwZXJjZW50KycgJScpO1xyXG4gICAgfVxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0LHQvtC70YzRiNC+0LUg0LzQtdC90Y4nKTsgXHJcbiAgICB2YXIgYnV0dG9uR2FtYnVyZ2VyPSQoJy5oZWFkZXJfX2Jsb2NrQ2xvc2UnKSwvL9C60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPINC80LXQvdGOINC90LAg0LLQtdGB0Ywg0Y3QutGA0LDQvVxyXG4gICAgICAgIGNsb3NlTGluZT0kKCcuYmxvY2tDbG9zZV9saW5lJyksLy/RhtC10L3RgtGA0LDQu9GM0L3QsNGPINC/0L7Qu9C+0YHQsCDQuNC3INC60L3QvtC/0LrQuCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICAgICAgICB3cmFwQmx1ZVdhbGw9JCgnLndyYXBwZXJCbHVlV2FsbCcpLC8v0L7QsdC10YDRgtC60LAg0LTQu9GPINGB0YLQtdC90Ysg0LzQtdC90Y5cclxuICAgICAgICBsZWZ0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fbGVmdFNpZGUnKSwvL9C70LXQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICByaWdodFNpZGVfd2FsbD0kKCcuYmx1ZVdhbGxfX3JpZ2h0U2lkZScpLC8v0L/RgNCw0LLQsNGPINGB0YLQvtGA0L7QvdCwINC80LXQvdGOINC60L7RgtC+0YDQsNGPINC/0L7Rj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgbWVudVdhbGw9JCgnLmJsdWVXYWxsX21lbnVMaW5rJyk7Ly/QsdC70L7QuiDRgSDQvdCw0LfQstCw0L3QuNGP0LzQuCDQvNC10L3RjlxyXG5cclxuICAgICAgICBidXR0b25HYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZWZ0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdsZWZ0MCcpO1xyXG4gICAgICAgICAgICByaWdodFNpZGVfd2FsbC50b2dnbGVDbGFzcygncmlnaHQwJyk7XHJcbiAgICAgICAgICAgIGNsb3NlTGluZS50b2dnbGVDbGFzcygnYmxvY2tDbG9zZV9saW5lX2FjdGl2ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQv9C+0LvQvtGB0LrQuCDQutC90L7Qv9C60LhcclxuICAgICAgICAgICAgd3JhcEJsdWVXYWxsLnRvZ2dsZUNsYXNzKCd3cmFwcGVyQmx1ZVdhbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnVXYWxsLnRvZ2dsZUNsYXNzKCdibHVlV2FsbF9tZW51TGlua19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIHZhciBidXR0b25OZXh0PSQoJy5qc19hcnJvd19fc2xpZGVOZXh0JyksLy/QutC90L7Qv9C60LAg0YHQu9C10LQg0YHQu9Cw0LnQtFxyXG4gICAgICAgYnV0dG9uUHJldz0kKCcuanNfYXJyb3dfX3NsaWRlUHJldycpLC8v0LrQvdC+0L/QutCwINC/0YDQtdC00YvQtNGG0YnQuNC5INGB0LvQsNC00LlcclxuICAgICAgIGNvdW50U2xpZGU9MSwvL9GB0YfQtdGC0YfQuNC60LAg0LDQutGC0LjQstC90L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgZmxhZz10cnVlLC8v0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuCDQuCDRh9GC0LEg0LTRgNGD0LPQsNGPINC90LUg0L3QsNGH0LDQu9Cw0YHRjCDQv9C+INC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNGC0YzRgdGPINC/0YDQtdC00YvQtNGD0YnQsNGPXHJcbiAgICAgICBjb250YWluZXJTbGlkZT0kKCcuanNfYmxvY2tTbGlkZScpLC8v0LHQu9C+0Log0YEg0LHQvtC70YzRidC40LzQuCDRhNC+0YLQutCw0LzQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICBiaWdTbGlkZXM9Y29udGFpbmVyU2xpZGUuZmluZCgnLmxpX19zbGlkZXInKSxcclxuICAgICAgIGR1cmF0aW9uPTUwMDtcclxuXHJcbiAgIGJ1dHRvbk5leHQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgIGZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICsrY291bnRTbGlkZTtcclxuICAgICAgICAgaWYoY291bnRTbGlkZT49YmlnU2xpZGVzLmxlbmd0aCkgY291bnRTbGlkZT0wO1xyXG4gICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgIHNtYWxsU2xpZGU9JHRoaXMuZmluZCgnLmxpX3NsaWRlU21hbGwnKSwvL9C90LDRhdC+0LTQuNC8INCy0YHQtSDRgdC70LDQudC00Ysg0LzQsNC70LXQvdGM0LrQuNC1XHJcbiAgICAgICAgICAgICBuZXh0U2xpZGU9Y291bnRTbGlkZSsxLC8v0YHQu9C10LQgINCy0LjQtNC40LzRi9C5INGB0LvQsNC50LQg0LzQsNC70LXQvdGM0LrQuNC5XHJcbiAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgcHJldjJTbGlkZT1jb3VudFNsaWRlLTI7XHJcblxyXG4gICAgICAgICBpZihuZXh0U2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKW5leHRTbGlkZT0wOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGlmKHByZXZTbGlkZTwwKXByZXZTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0xOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICBpZihwcmV2MlNsaWRlPT0tMSl7cHJldjJTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0xO30vL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgaWYocHJldjJTbGlkZT09LTIpe3ByZXYyU2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMjt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmV2MlNsaWRlICcrcHJldjJTbGlkZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJldlNsaWRlICcrcHJldlNsaWRlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudFNsaWRlICcrY291bnRTbGlkZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbmV4dFNsaWRlICcrbmV4dFNsaWRlKTtcclxuLy8tLS0tLS0tLS0tLS0tLS3Ql9CQ0JzQldCd0JAg0KLQldCa0KHQotCQLNCf0J7QlNCh0KLQkNCS0JrQkCDQodCh0KvQm9Ca0JgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgdmFyIGJsb2NrTmFtZVNpdGU9JCgnLmpzX25hbWVTaXRlJyksLy/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINC90LDQt9Cy0LDQvdC40LUg0YHQsNC50YLQsCDQuNC3INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICAgICAgIGJsb2NrV29ya0Zsb3c9JCgnLmpzX3dvcmtmbG93JyksLy/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGC0LXQt9C90L7Qu9C+0LPQuNC40Lgg0YHQsNC50YLQsCDQuNC3INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICAgICAgIGJsb2NrTGlua0ZvclNpdGU9JCgnLmpzX2xpbmtGb3JTaXRlJyksLy/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGB0YHRi9C70LrQsCDQvdCwINGB0LDQudGCINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgICAgICAgbmFtZVNpdGU9c21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5maW5kKCcuYXJyb3dfX3NsaWRlSW1hZ2UnKS5kYXRhKCduYW1lJyksLy/Rg9C30L3QsNC10Lwg0LjQvNGPINGB0LDQudGC0LBcclxuICAgICAgICAgICAgICAgICB3b3JrZmxvd1NpdGU9c21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5maW5kKCcuYXJyb3dfX3NsaWRlSW1hZ2UnKS5kYXRhKCd3b3JrZmxvdycpLC8v0YPQt9C90LDQtdC8IHdvcmtmbG93INC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINGB0LDQudGC0LBcclxuICAgICAgICAgICAgICAgICBMaW5rRm9yU2l0ZT1zbWFsbFNsaWRlLmVxKGNvdW50U2xpZGUpLmZpbmQoJy5hcnJvd19fc2xpZGVJbWFnZScpLmRhdGEoJ2xpbmsnKTsvL9C90LDRhdC+0LTQuNC8INGB0YHRi9C70LrRgyDQvdCwINCy0YvQv9C+0LvQvdC10L3QvdGL0Lkg0YHQsNC50YJcclxuICAgICAgICAgIGJsb2NrTmFtZVNpdGUudGV4dChuYW1lU2l0ZSk7XHJcbiAgICAgICAgICBibG9ja1dvcmtGbG93LnRleHQod29ya2Zsb3dTaXRlKTtcclxuICAgICAgICAgIGJsb2NrTGlua0ZvclNpdGUuYXR0cignaHJlZicsTGlua0ZvclNpdGUpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS3Ql9CQ0JzQldCd0JAg0KLQldCa0KHQotCQLNCf0J7QlNCh0KLQkNCS0JrQkCDQodCh0KvQm9Ca0JgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICd0b3AnOictMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCcxNTAlJyk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBzbWFsbFNsaWRlLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICd0b3AnOjB9LGR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgIC8vINCQ0J3QmNCc0JDQptCY0K8g0KHQntCh0JXQlNCd0JXQk9CeINCc0JDQm9CV0J3QrNCa0J7Qk9CeINCh0JvQkNCZ0JTQkFxyXG4gICAgICAgICB2YXIgYW5vdGhlclNtYWxsU2xpZGU9JHRoaXMuc2libGluZ3MoJy5hcnJvd0ZvclNsaWRlcl9zaWRlJykuZmluZCgnLmxpX3NsaWRlU21hbGwnKTsvL9GB0L7RgdC10LTQvdC40Lkg0LzQsNC70LXQvdGM0LrQuNC5INGB0LvQsNC50LRcclxuICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEocHJldjJTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAndG9wJzonMTAwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTUwJScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINCx0L7Qu9GM0YjQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGJpZ1NsaWRlcy5lcShwcmV2U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTAwJScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYmlnU2xpZGVzLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgfSk7XHJcblxyXG4gICAgYnV0dG9uUHJldy5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAtLWNvdW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmKGNvdW50U2xpZGU8MCkgY291bnRTbGlkZT1iaWdTbGlkZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgc21hbGxTbGlkZT0kdGhpcy5maW5kKCcubGlfc2xpZGVTbWFsbCcpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRiyDQvNCw0LvQtdC90YzQutC40LVcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgICAgbmV4dDJTbGlkZT1jb3VudFNsaWRlKzI7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXYyU2xpZGU9Y291bnRTbGlkZS0yO1xyXG5cclxuICAgICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgaWYobmV4dDJTbGlkZT09c21hbGxTbGlkZS5sZW5ndGgpe25leHQyU2xpZGU9MDt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGlmKG5leHQyU2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKzEpe25leHQyU2xpZGU9MTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIC8vIGlmKHByZXYyU2xpZGU9PS0xKXtwcmV2MlNsaWRlPXNtYWxsU2xpZGUubGVuZ3RoLTE7fS8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICAvLyBpZihwcmV2MlNsaWRlPT0tMil7cHJldjJTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0yO30vL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3ByZXYyU2xpZGUgJytwcmV2MlNsaWRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByZXZTbGlkZSAnK3ByZXZTbGlkZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3VudFNsaWRlICcrY291bnRTbGlkZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0U2xpZGUgJytuZXh0U2xpZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV4dDJTbGlkZSAnK25leHQyU2xpZGUpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS3Ql9CQ0JzQldCd0JAg0KLQldCa0KHQotCQLNCf0J7QlNCh0KLQkNCS0JrQkCDQodCh0KvQm9Ca0JgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICB2YXIgYmxvY2tOYW1lU2l0ZT0kKCcuanNfbmFtZVNpdGUnKSwvL9GB0YLRgNC+0LrQsCDQutGD0LTQsCDQsdGD0LTQtdGCINC/0LjRgdCw0YLRjNGB0Y8g0L3QsNC30LLQsNC90LjQtSDRgdCw0LnRgtCwINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgICAgICBibG9ja1dvcmtGbG93PSQoJy5qc193b3JrZmxvdycpLC8v0YHRgtGA0L7QutCwINC60YPQtNCwINCx0YPQtNC10YIg0L/QuNGB0LDRgtGM0YHRjyDRgtC10LfQvdC+0LvQvtCz0LjQuNC4INGB0LDQudGC0LAg0LjQtyDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgICAgIGJsb2NrTGlua0ZvclNpdGU9JCgnLmpzX2xpbmtGb3JTaXRlJyksLy/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGB0YHRi9C70LrQsCDQvdCwINGB0LDQudGCINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgICAgICBuYW1lU2l0ZT1zbWFsbFNsaWRlLmVxKGNvdW50U2xpZGUpLmZpbmQoJy5hcnJvd19fc2xpZGVJbWFnZScpLmRhdGEoJ25hbWUnKSwvL9GD0LfQvdCw0LXQvCDQuNC80Y8g0YHQsNC50YLQsFxyXG4gICAgICAgICAgICAgICAgd29ya2Zsb3dTaXRlPXNtYWxsU2xpZGUuZXEoY291bnRTbGlkZSkuZmluZCgnLmFycm93X19zbGlkZUltYWdlJykuZGF0YSgnd29ya2Zsb3cnKSwvL9GD0LfQvdCw0LXQvCB3b3JrZmxvdyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgdCw0LnRgtCwXHJcbiAgICAgICAgICAgICAgICBMaW5rRm9yU2l0ZT1zbWFsbFNsaWRlLmVxKGNvdW50U2xpZGUpLmZpbmQoJy5hcnJvd19fc2xpZGVJbWFnZScpLmRhdGEoJ2xpbmsnKTsvL9C90LDRhdC+0LTQuNC8INGB0YHRi9C70LrRgyDQvdCwINCy0YvQv9C+0LvQvdC10L3QvdGL0Lkg0YHQsNC50YJcclxuICAgICAgICAgICAgYmxvY2tOYW1lU2l0ZS50ZXh0KG5hbWVTaXRlKTtcclxuICAgICAgICAgICAgYmxvY2tXb3JrRmxvdy50ZXh0KHdvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgICAgIGJsb2NrTGlua0ZvclNpdGUuYXR0cignaHJlZicsTGlua0ZvclNpdGUpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS3Ql9CQ0JzQldCd0JAg0KLQldCa0KHQotCQLNCf0J7QlNCh0KLQkNCS0JrQkCDQodCh0KvQm9Ca0JgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTAwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTE1MCUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOjB9LGR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCQ0J3QmNCc0JDQptCY0K8g0KHQntCh0JXQlNCd0JXQk9CeINCc0JDQm9CV0J3QrNCa0J7Qk9CeINCh0JvQkNCZ0JTQkFxyXG4gICAgICAgICAgICB2YXIgYW5vdGhlclNtYWxsU2xpZGU9JHRoaXMuc2libGluZ3MoJy5hcnJvd0ZvclNsaWRlcl9zaWRlJykuZmluZCgnLmxpX3NsaWRlU21hbGwnKTsvL9GB0L7RgdC10LTQvdC40Lkg0LzQsNC70LXQvdGM0LrQuNC5INGB0LvQsNC50LRcclxuICAgICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEobmV4dDJTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6Jy0xNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCcxNTAlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbm90aGVyU21hbGxTbGlkZS5lcShuZXh0U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINCx0L7Qu9GM0YjQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGJpZ1NsaWRlcy5lcShuZXh0U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6JzE1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsJy0xMDAlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiaWdTbGlkZXMuZXEoY291bnRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzonNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGZsYWc9dHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pOyJdfQ==
