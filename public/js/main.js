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

$(function(){
    console.log('fixed');
    $(window).on('scroll',function(){
        var wScroll=$(window).scrollTop(),
            menuleft=$('.column__1_blog .js_ul_menu'),
            menuClone=menuleft.clone(),
            fixedMenu=$('.fixed_menu'),
            menuStatic=$('.js_static');
            topStatic=menuStatic.offset().top;
        if(topStatic<=wScroll){
            if(!fixedMenu.find('.js_ul_menu').length){
                fixedMenu.append(menuClone);
                menuStatic.css('opacity',0);
            }
        }else{
            fixedMenu.find('.js_ul_menu').remove();
            menuStatic.css('opacity',1);
        }
       function checkSevtion(){
           $('.block__column__2_blog').each(function(){
               var $this=$(this),
                   topEdge=$this.offset().top-200,
                   bottom=topEdge+$this.height();
               if(topEdge<wScroll && bottom>wScroll){
                   var listId=$this.data('section'),
                       blockMenuleft=$('.fixed_menu .column__1_blog');//находим меню слева
                   console.log(listId);

                   blockMenuleft.find('.js_ul_menu').removeClass('.activeStroke_blogThema');
                   console.log( blockMenuleft.find('.activeStroke_blogThema').length);
                   blockMenuleft.find('[data-id='+listId+']').addClass('.activeStroke_blogThema');

               }
           })
       }
        checkSevtion();
    });


}());
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
//-----АНИМАЦИЯ ТЕКСТА-------------------------------------------------
    var flagText=true,
        arrowSlide=$('.js_arrow__slide');//стрелочка переключения слайда вверх и вниз

   function animatedText(block_text,animate_text){
        //console.log('старт анимаци текста');
        var block__text=block_text,
            trimText=block__text.trim(),
            array_text=trimText.split(''),
            word='',
            letterHtml,
            deff=$.Deferred();
        array_text.forEach(function(letter){
            if(letter!=' '){
                 letterHtml='<span class="letter_span">'+letter+'</span>';
            }else{
                 letterHtml='<span class="letter_span__space">'+letter+'</span>';
            }
            word+=letterHtml;
        });
        if(flagText){
            flagText=false;

            animate_text.html(word);
            var letter=animate_text.find('.letter_span'),
                counter=0,
                timer,
                duration=2000/array_text.length;
            console.log('кол-во букв '+letter.length);
            function showLetter(){
                var currentLetter=letter.eq(counter);
                    currentLetter.addClass('active_word');
                    counter++;
                if(counter<=letter.length){
                    timer=setTimeout(showLetter(),duration);
                }
                if(array_text.length==counter) deff.resolve();
                if(typeof timer!='undefined') clearTimeout(timer);
            }
            showLetter();
        }
        deff.done(function(){
            flagText=true;
            console.log('resolve');
        })
    }

    var strokeNameSite=$('.js_nameSite'),//строка куда будет писаться название сайта из слайда
        strokeWorkFlow=$('.js_workflow'),//строка куда будет писаться тезнологиии сайта из слайда
        strokeLinkForSite=$('.js_linkForSite');//строка куда будет писаться ссылка на сайт из слайда

    arrowSlide.on('click',function(){

        var $this=$(this),
            thisImage=$this.find('.li_slideSmall_active').find('.arrow__slideImage'),
            titleSite=thisImage.data('name'),
            workflowSite=thisImage.data('workflow'),
            linksSite=thisImage.data('link');
        // console.log('+++++++++++++++++++ ');
        // console.log('name '+titleSite);
        // console.log('work '+workflowSite);
        // console.log('link '+linksSite);

         animatedText(titleSite,strokeNameSite);
         animatedText(workflowSite,strokeWorkFlow);
        strokeNameSite.text(titleSite);
        strokeWorkFlow.text(workflowSite);
        strokeLinkForSite.attr('href',linksSite);
    });

//-----КОНЕЦ  АНИМАЦИЯ ТЕКСТА-------------------------------------------------
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

         //анимация маленького слайда где нажали стрелку
         smallSlide.eq(countSlide).animate({//меняем местомаленького слайда там где нажали стрелку
            'top':'-150%'},duration,function(){
            $(this).css('top','150%');
             $(this).removeClass('li_slideSmall_active');
         });
         smallSlide.eq(nextSlide).animate({
            'top':0},duration,function(){
             $(this).addClass('li_slideSmall_active');
         });

         // АНИМАЦИЯ СОСЕДНЕГО МАЛЕНЬКОГО СЛАЙДА
         var anotherSmallSlide=$this.siblings('.arrowForSlider_side').find('.li_slideSmall');//соседний маленький слайд
         anotherSmallSlide.eq(prev2Slide).animate({//меняем местомаленького слайда там где нажали стрелку
            'top':'100%'},duration,function(){
            $(this).css('top','-150%');
             $(this).removeClass('li_slideSmall_active');
         });
         anotherSmallSlide.eq(prevSlide).animate({
            'top':0},duration,function(){
             $(this).addClass('li_slideSmall_active');
         });

         //анимация большого слайда
         bigSlides.eq(prevSlide).animate({
            'top':'150%'},duration,function(){
            $(this).css('top','-100%');
             $(this).removeClass('li__slider_activ');
         });
         bigSlides.eq(countSlide).animate({
            'top':'50%'},duration,function(){
            flag=true;
             $(this).addClass('li__slider_activ');
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


            if(nextSlide==smallSlide.length)nextSlide=0;//счетчик для перемены маленького слайда
            if(prevSlide<0)prevSlide=smallSlide.length-1;//счетчик для перемены соседнего маленького слайда
            if(next2Slide==smallSlide.length){next2Slide=0;}//счетчик для перемены соседнего маленького слайда
            if(next2Slide==smallSlide.length+1){next2Slide=1;}//счетчик для перемены соседнего маленького слайда

            //анимация маленького слайда где нажали стрелку
            smallSlide.eq(countSlide).animate({//меняем местомаленького слайда там где нажали стрелку
                'top':'100%'},duration,function(){
                $(this).css('top','-150%');
                $(this).removeClass('li_slideSmall_active');
            });
            smallSlide.eq(prevSlide).animate({
                'top':0},duration,function(){
                $(this).addClass('li_slideSmall_active');
            });

            // АНИМАЦИЯ СОСЕДНЕГО МАЛЕНЬКОГО СЛАЙДА
            var anotherSmallSlide=$this.siblings('.arrowForSlider_side').find('.li_slideSmall');//соседний маленький слайд
            anotherSmallSlide.eq(next2Slide).animate({//меняем местомаленького слайда там где нажали стрелку
                'top':'-150%'},duration,function(){
                $(this).css('top','150%');
                $(this).removeClass('li_slideSmall_active');
            });
            anotherSmallSlide.eq(nextSlide).animate({
                'top':0},duration,function(){
                $(this).addClass('li_slideSmall_active');
            });

            //анимация большого слайда
            bigSlides.eq(nextSlide).animate({
                'top':'150%'},duration,function(){
                $(this).css('top','-100%');
                $(this).removeClass('li__slider_activ');
            });
            bigSlides.eq(countSlide).animate({
                'top':'50%'},duration,function(){
                flag=true;
                $(this).addClass('li__slider_activ');
            });
        }

    })
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdXJGb3JtLmpzIiwiZml4ZWRNZW51QmxvZy5qcyIsImluZGV4UGFnZV9yZXZlcnNCbG9jay5qcyIsInBhcmFsbGF4TWFpbi5qcyIsInBhcnJhbGF4VmVydGljYWwuanMiLCJwcmVsb2FkZXIuanMiLCJzaG93Qmx1ZVdhbGxNZW51LmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJFcnJvciIsImYiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCIkIiwiYmx1ciIsInNlY3Rpb25CbHVyIiwic2V0Iiwid2lkdGhCYWNrZ3IiLCJ3aWR0aCIsInBvc1RvcCIsIm9mZnNldCIsInRvcCIsInBvc0xlZnQiLCJsZWZ0IiwiY3NzIiwiYmFja2dyb3VuZC1zaXplIiwiYmFja2dyb3VuZC1wb3NpdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJyZXNpemUiLCJjb25zb2xlIiwibG9nIiwib24iLCJjaGVja1NldnRpb24iLCJlYWNoIiwiJHRoaXMiLCJ0aGlzIiwidG9wRWRnZSIsImJvdHRvbSIsImhlaWdodCIsIndTY3JvbGwiLCJsaXN0SWQiLCJkYXRhIiwiYmxvY2tNZW51bGVmdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2Nyb2xsVG9wIiwibWVudWxlZnQiLCJtZW51Q2xvbmUiLCJjbG9uZSIsImZpeGVkTWVudSIsIm1lbnVTdGF0aWMiLCJ0b3BTdGF0aWMiLCJhcHBlbmQiLCJyZW1vdmUiLCJidXR0b25BdXRob3JpdGhhdGlvbiIsImJ1dHRvbk1haW5CYWNrUmV2ZXJzIiwiZmxpcHBlcl93cmFwIiwiZnJvbnRCbG9jayIsImJhY2tCbG9jayIsInNldFRpbWVvdXQiLCJ0b2dnbGVDbGFzcyIsImZhZGVPdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZhZGVJbiIsInBhcnJhbGF4TGF5ZXIiLCJ3IiwiaW5uZXJXaWR0aCIsImgiLCJpbm5lckhlaWdodCIsIm1hcCIsImtleSIsInZhbHVlIiwicG9zaXJpb25MZWZ0IiwicG9zdXRpb25Cb3R0b20iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwYWdlWCIsInBhZ2VZIiwibW92ZVgiLCJtb3ZlWSIsInRyYW5zZm9ybSIsInBhcnJhbGF4VmVydGljYWwiLCJ3b3JkQmlnIiwibW92ZVBob3RvIiwibW92ZUJhY2tncm91bmQiLCJtb3ZlIiwiYmxvY2siLCJwcm9jZW50TW92ZSIsInN0cmFmZSIsInRyYW5zZm9ybTNEIiwiLXdlYmtpdC10cmFuc2Zvcm0iLCJpbml0Iiwic2Nyb2xsIiwiY291bnRQZXJjZW50IiwidG90YWwiLCJjdXJyZW50IiwicGVyY2VudCIsIk1hdGgiLCJjZWlsIiwidGV4dCIsImltZ3MiLCJiYWNrZ3JvdW5kIiwiaW1hZ2UiLCJpcyIsInBhdGgiLCJyZXBsYWNlIiwicHVzaCIsImF0dHIiLCJyZXBjZW50Tm93Iiwic3JjIiwibG9hZCIsImVycm9yIiwiYnV0dG9uR2FtYnVyZ2VyIiwiY2xvc2VMaW5lIiwid3JhcEJsdWVXYWxsIiwibGVmdFNpZGVfd2FsbCIsInJpZ2h0U2lkZV93YWxsIiwibWVudVdhbGwiLCJhbmltYXRlZFRleHQiLCJibG9ja190ZXh0IiwiYW5pbWF0ZV90ZXh0Iiwic2hvd0xldHRlciIsImN1cnJlbnRMZXR0ZXIiLCJsZXR0ZXIiLCJlcSIsImNvdW50ZXIiLCJ0aW1lciIsImR1cmF0aW9uIiwiYXJyYXlfdGV4dCIsImRlZmYiLCJyZXNvbHZlIiwiY2xlYXJUaW1lb3V0IiwibGV0dGVySHRtbCIsImJsb2NrX190ZXh0IiwidHJpbVRleHQiLCJ0cmltIiwic3BsaXQiLCJ3b3JkIiwiRGVmZXJyZWQiLCJmb3JFYWNoIiwiZmxhZ1RleHQiLCJodG1sIiwiZG9uZSIsImJ1dHRvbk5leHQiLCJidXR0b25QcmV3IiwiY291bnRTbGlkZSIsImZsYWciLCJjb250YWluZXJTbGlkZSIsImJpZ1NsaWRlcyIsImFycm93U2xpZGUiLCJzdHJva2VOYW1lU2l0ZSIsInN0cm9rZVdvcmtGbG93Iiwic3Ryb2tlTGlua0ZvclNpdGUiLCJ0aGlzSW1hZ2UiLCJ0aXRsZVNpdGUiLCJ3b3JrZmxvd1NpdGUiLCJsaW5rc1NpdGUiLCJzbWFsbFNsaWRlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwicHJldjJTbGlkZSIsImFuaW1hdGUiLCJhbm90aGVyU21hbGxTbGlkZSIsInNpYmxpbmdzIiwibmV4dDJTbGlkZSJdLCJtYXBwaW5ncyI6IkNBQUEsUUFBQUEsR0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxRQUFBQyxHQUFBQyxFQUFBQyxHQUFBLElBQUFKLEVBQUFHLEdBQUEsQ0FBQSxJQUFBSixFQUFBSSxHQUFBLENBQUEsR0FBQUUsR0FBQSxrQkFBQUMsVUFBQUEsT0FBQSxLQUFBRixHQUFBQyxFQUFBLE1BQUFBLEdBQUFGLEdBQUEsRUFBQSxJQUFBSSxFQUFBLE1BQUFBLEdBQUFKLEdBQUEsRUFBQSxNQUFBLElBQUFLLE9BQUEsdUJBQUFMLEVBQUEsS0FBQSxHQUFBTSxHQUFBVCxFQUFBRyxJQUFBTyxXQUFBWCxHQUFBSSxHQUFBLEdBQUFRLEtBQUFGLEVBQUFDLFFBQUEsU0FBQVosR0FBQSxHQUFBRSxHQUFBRCxFQUFBSSxHQUFBLEdBQUFMLEVBQUEsT0FBQUksR0FBQUYsRUFBQUEsRUFBQUYsSUFBQVcsRUFBQUEsRUFBQUMsUUFBQVosRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxNQUFBRCxHQUFBRyxHQUFBTyxRQUFBLElBQUEsR0FBQUgsR0FBQSxrQkFBQUQsVUFBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBVyxPQUFBVCxJQUFBRCxFQUFBRCxFQUFBRSxHQUFBLE9BQUFELEtBQUFXLEdBQUEsU0FBQVAsRUFBQVEsRUFBQUosR0FDQUssRUFBQSxXQUVBLEdBQUFDLEdBQUEsV0FDQSxHQUFBQSxHQUFBRCxFQUFBLGVBQ0FFLEVBQUFGLEVBQUEsa0JBQ0EsUUFDQUcsSUFBQSxXQUNBLEdBQUFDLEdBQUFG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RUFzSCxFQUFBZCxFQUFBLEVBQ0FhLEVBQUFiLEVBQUEsRUFDQW1CLEVBQUFuQixFQUFBLENBR0FhLElBQUFELEVBQUF2SixTQUFBd0osRUFBQSxHQUNBQyxFQUFBLElBQUFBLEVBQUFGLEVBQUF2SixPQUFBLEdBQ0E4SixHQUFBUCxFQUFBdkosU0FBQThKLEVBQUEsR0FDQUEsR0FBQVAsRUFBQXZKLE9BQUEsSUFBQThKLEVBQUEsR0FHQVAsRUFBQWpDLEdBQUFxQixHQUFBZ0IsU0FDQWhKLElBQUEsUUFBQThHLEVBQUEsV0FDQXRILEVBQUF3QixNQUFBYixJQUFBLE1BQUEsU0FDQVgsRUFBQXdCLE1BQUFTLFlBQUEsMEJBRUFtSCxFQUFBakMsR0FBQW1DLEdBQUFFLFNBQ0FoSixJQUFBLEdBQUE4RyxFQUFBLFdBQ0F0SCxFQUFBd0IsTUFBQVUsU0FBQSx5QkFJQSxJQUFBdUgsR0FBQWxJLEVBQUFtSSxTQUFBLHdCQUFBMUgsS0FBQSxpQkFDQXlILEdBQUF0QyxHQUFBd0MsR0FBQUgsU0FDQWhKLElBQUEsU0FBQThHLEVBQUEsV0FDQXRILEVBQUF3QixNQUFBYixJQUFBLE1BQUEsUUFDQVgsRUFBQXdCLE1BQUFTLFlBQUEsMEJBRUF3SCxFQUFBdEMsR0FBQWtDLEdBQUFHLFNBQ0FoSixJQUFBLEdBQUE4RyxFQUFBLFdBQ0F0SCxFQUFBd0IsTUFBQVUsU0FBQSwwQkFJQXlHLEVBQUF4QixHQUFBa0MsR0FBQUcsU0FDQWhKLElBQUEsUUFBQThHLEVBQUEsV0FDQXRILEVBQUF3QixNQUFBYixJQUFBLE1BQUEsU0FDQVgsRUFBQXdCLE1BQUFTLFlBQUEsc0JBRUEwRyxFQUFBeEIsR0FBQXFCLEdBQUFnQixTQUNBaEosSUFBQSxPQUFBOEcsRUFBQSxXQUNBbUIsR0FBQSxFQUNBekksRUFBQXdCLE1BQUFVLFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAgXHJcbiAgICB2YXIgYmx1cj0oZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgYmx1cj0kKCcuYmxvY2tfYmx1cicpLFxyXG4gICAgICAgICAgICBzZWN0aW9uQmx1cj0kKCcuanNfc2VjdGlvbkJsdXInKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgdmFyICB3aWR0aEJhY2tncj1zZWN0aW9uQmx1ci53aWR0aCgpLC8v0YjQuNGA0LjQvdCwINGB0LXQutGG0LjQuCDRgSDQsdGN0LrQs9GA0LDRg9C90LTQvtC8XHJcbiAgICAgICAgICAgICAgICAgIHBvc1RvcD1zZWN0aW9uQmx1ci5vZmZzZXQoKS50b3AtYmx1ci5vZmZzZXQoKS50b3AsLy/Qv9C+0LvQvtC20LXQvdC40LUg0L7RgiDQstC10YDRhdCwXHJcbiAgICAgICAgICAgICAgICAgIHBvc0xlZnQ9c2VjdGlvbkJsdXIub2Zmc2V0KCkubGVmdC1ibHVyLm9mZnNldCgpLmxlZnQ7IC8v0L/QvtC70L7QttC10L3QuNC1INCx0LvQvtC60LAg0L7RgiDQu9C10LLQvtCz0L4g0LrRgNCw0Y9cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWMgdG9wIHRvcC0gJytzZWN0aW9uQmx1ci5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JsdXIgdG9wLSAnK2JsdXIub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndG9wLSAnK3Bvc1RvcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVmdC0gJytwb3NMZWZ0KTtcclxuICAgICAgICAgICAgICAgIGJsdXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzp3aWR0aEJhY2tncisncHgnKycgJysgJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcG9zTGVmdCArJ3B4JysnICcrcG9zVG9wKydweCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBibHVyLnNldCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmx1ci5zZXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2ZpeGVkJyk7XHJcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgIG1lbnVsZWZ0PSQoJy5jb2x1bW5fXzFfYmxvZyAuanNfdWxfbWVudScpLFxyXG4gICAgICAgICAgICBtZW51Q2xvbmU9bWVudWxlZnQuY2xvbmUoKSxcclxuICAgICAgICAgICAgZml4ZWRNZW51PSQoJy5maXhlZF9tZW51JyksXHJcbiAgICAgICAgICAgIG1lbnVTdGF0aWM9JCgnLmpzX3N0YXRpYycpO1xyXG4gICAgICAgICAgICB0b3BTdGF0aWM9bWVudVN0YXRpYy5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgaWYodG9wU3RhdGljPD13U2Nyb2xsKXtcclxuICAgICAgICAgICAgaWYoIWZpeGVkTWVudS5maW5kKCcuanNfdWxfbWVudScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBmaXhlZE1lbnUuYXBwZW5kKG1lbnVDbG9uZSk7XHJcbiAgICAgICAgICAgICAgICBtZW51U3RhdGljLmNzcygnb3BhY2l0eScsMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZml4ZWRNZW51LmZpbmQoJy5qc191bF9tZW51JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG1lbnVTdGF0aWMuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgICAgICB9XHJcbiAgICAgICBmdW5jdGlvbiBjaGVja1NldnRpb24oKXtcclxuICAgICAgICAgICAkKCcuYmxvY2tfX2NvbHVtbl9fMl9ibG9nJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgIHRvcEVkZ2U9JHRoaXMub2Zmc2V0KCkudG9wLTIwMCxcclxuICAgICAgICAgICAgICAgICAgIGJvdHRvbT10b3BFZGdlKyR0aGlzLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICBpZih0b3BFZGdlPHdTY3JvbGwgJiYgYm90dG9tPndTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgdmFyIGxpc3RJZD0kdGhpcy5kYXRhKCdzZWN0aW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdD0kKCcuZml4ZWRfbWVudSAuY29sdW1uX18xX2Jsb2cnKTsvL9C90LDRhdC+0LTQuNC8INC80LXQvdGOINGB0LvQtdCy0LBcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdC5maW5kKCcuanNfdWxfbWVudScpLnJlbW92ZUNsYXNzKCcuYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGJsb2NrTWVudWxlZnQuZmluZCgnLmFjdGl2ZVN0cm9rZV9ibG9nVGhlbWEnKS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdC5maW5kKCdbZGF0YS1pZD0nK2xpc3RJZCsnXScpLmFkZENsYXNzKCcuYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICAgICAgY2hlY2tTZXZ0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KCkpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gdmFyIGJ1dHRvbkF1dGhvcml0aGF0aW9uPSQoJy5qc19idXR0b25BdXRob3JpdGhhdGlvbicpLC8v0LrQvdC+0L/QutCwINCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cclxuICAgICBidXR0b25NYWluQmFja1JldmVycz0kKCcuanNfYnV0dG9uTWFpbkJhY2tSZXZlcnMnKSwvL9C60L3QvtC/0LrQsCDQndCwINCz0LvQsNCy0L3Rg9GOLCDRh9GC0L7QsSDQv9C10YDQtdCy0LXRgNC90YPRgtGMINC+0LHRgNCw0YLQvdC+INCx0LvQvtC6XHJcbiAgICBmbGlwcGVyX3dyYXA9JCgnLmZsaXBwZXJfd3JhcCcpLC8v0L7QsdC10YDRgtC60LAg0LHQu9C+0LrQvtCyINCw0LLRgtC+0YDQuNC30LDRhtC40Y8v0L/RgNC40LLQtdGC0YHRgtCy0LjQtVxyXG4gICAgZnJvbnRCbG9jaz0kKCcuYmxvY2tXZWxsY29tZV9mcm9udCcpLC8v0L/QtdGA0LXQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG4gICAgYmFja0Jsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2JhY2snKTsvL9C30LDQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG5cclxuICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgYnV0dG9uQXV0aG9yaXRoYXRpb24ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9C/0L7QutCw0LfQsNGC0Ywg0LHRjdC6Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuXHJcbiAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVPdXQoNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcblxyXG4gICAgICAvL9C90LDQttC40LzQsNC10Lwg0L3QsCDQutC90L7Qv9C60YMg0J3QsCDQs9C70LDQstC90YPQsSDQuCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGC0YHRjyDQsdC70L7QuiDRgSDQv9C+0LvRj9C80Lgg0LTQu9GPINCy0YXQvtC00LBcclxuICAgICAgYnV0dG9uTWFpbkJhY2tSZXZlcnMub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ9C/0L7QutCw0LfQsNGC0Ywg0YTRgNC+0L3RgicpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZnJvbnRCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuXHJcbiAgICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlSW4oNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbnZhciBwYXJyYWxheExheWVyPSQoJy5wYXJyYWxheF9sYXllcicpOy8v0YHQu9C+0Lkg0L/QsNGA0LDQu9Cw0LrRgdCwXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3PSh3aW5kb3cuaW5uZXJXaWR0aC8yKSxcclxuICAgICAgICAgICAgaD0od2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgICAgIHBhcnJhbGF4TGF5ZXIubWFwKGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgcG9zaXJpb25MZWZ0PXcqKGtleS8xMDApLFxyXG4gICAgICAgICAgICAgICAgcG9zdXRpb25Cb3R0b209aCooa2V5LzEwMCk7XHJcbiAgICAgICAgICAgICQodmFsdWUpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6Jy0nK3Bvc2lyaW9uTGVmdCsncHgnLFxyXG4gICAgICAgICAgICAgICAgJ2JvdHRvbSc6Jy0nK3Bvc3V0aW9uQm90dG9tKydweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZScsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIHc9KHdpbmRvdy5pbm5lcldpZHRoLzIpLWUucGFnZVgsXHJcbiAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKS1lLnBhZ2VZO1xyXG4gICAgICAgIHBhcnJhbGF4TGF5ZXIubWFwKGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgbW92ZVg9dyooKGtleSkvMTAwKSxcclxuICAgICAgICAgICAgICAgIG1vdmVZPWgqKChrZXkpLzEwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmVYLG1vdmVZKTtcclxuICAgICAgICAgICAgICAgICQodmFsdWUpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzondHJhbnNsYXRlM2QoJyttb3ZlWCsncHgsJyttb3ZlWSsncHgsMCknLFxyXG4gICAgICAgICAgICAgICAgICdsZWZ0JzotMTAqKGtleSkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICAnYm90dG9tJzotNSooa2V5KSsncHgnLFxyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgLy9jb25zb2xlLmxvZygncGFycmFsYXgg0L3QsCDRgdGC0YDQsNC90LjRhtCw0YUnKTtcclxuLy/QpNCj0J3QmtCm0JjQryDQn9CQ0KDQkNCb0JDQmtCh0JAg0JTQm9CvINCi0JXQmtCh0KLQkCAs0KTQntCi0J4g0Jgg0JPQntCgINCS0JXQoNCi0JjQmtCQ0JvQrNCd0J5cclxuICAgIHZhciBwYXJyYWxheFZlcnRpY2FsPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgd29yZEJpZz0kKCcuc3ZnX3BvcnRmb2xpbycpLC8v0LHQvtC70YzRiNCw0Y8g0L3QsNC70L/QuNGB0Ywg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlUGhvdG89JCgnLmJsb2NrUHJlc2VudCcpLC8v0LHQu9C+0Log0YEg0YTQvtGC0L4g0LrQvtGC0L7RgNC+0LUg0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgICAgICBtb3ZlQmFja2dyb3VuZD0kKCcudmVydGljYWxQYXJyYWxsYXhXcGFwJyk7Ly/QutCw0YDRgtC40L3QutCwICDQutC+0YLQvtGA0YPRjiDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgIG1vdmUgOiBmdW5jdGlvbih3U2Nyb2xsLGJsb2NrLHByb2NlbnRNb3ZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmU9d1Njcm9sbC8tcHJvY2VudE1vdmUrJyUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtM0Q9J3RyYW5zbGF0ZTNkKDAsJytzdHJhZmUrJywwKSc7XHJcbiAgICAgICAgICAgICAgICBibG9jay5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOnRyYW5zZm9ybTNELFxyXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6dHJhbnNmb3JtM0RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsbW92ZVBob3RvLDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsd29yZEJpZywyMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCxtb3ZlQmFja2dyb3VuZCw2MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICBwYXJyYWxheFZlcnRpY2FsLmluaXQod1Njcm9sbCk7XHJcbiAgIH0pXHJcblxyXG5cclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGltZ3M9W107XHJcbiAgICAkLmVhY2goJCgnKicpLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9JHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgICAgIGltYWdlPSR0aGlzLmlzKCdpbWcnKTtcclxuICAgICAgICBpZihiYWNrZ3JvdW5kIT0nbm9uZScpe1xyXG4gICAgICAgICAgIHZhciBwYXRoPWJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywnJykucmVwbGFjZSgnXCIpJywnJyk7XHJcbiAgICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW1hZ2Upe1xyXG4gICAgICAgICAgICB2YXIgcGF0aD0kdGhpcy5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgaWYocGF0aCl7XHJcbiAgICAgICAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciByZXBjZW50Tm93PTE7XHJcbiAgICBmb3IoaT0xO2k8aW1ncy5sZW5ndGg7aSsrKXtcclxuICAgICAgICB2YXIgaW1hZ2U9JCgnPGltZz4nLHtcclxuICAgICAgICAgICAgYXR0cjp7XHJcbiAgICAgICAgICAgICAgICBzcmM6aW1nc1tpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1hZ2Uub24oe1xyXG4gICAgICAgICAgICBsb2FkOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRQZXJjZW50KGltZ3MubGVuZ3RoLCByZXBjZW50Tm93KTtcclxuICAgICAgICAgICAgICAgIHJlcGNlbnROb3crKztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXBjZW50Tm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvdW50UGVyY2VudCh0b3RhbCxjdXJyZW50KXtcclxuICAgICAgICB2YXIgcGVyY2VudD1NYXRoLmNlaWwoKGN1cnJlbnQvdG90YWwpKjEwMCk7XHJcbiAgICAgICAgaWYoIHBlcmNlbnQ+PTApICQoJy53cmFwTG9hZGVyJykuZmFkZU91dCgpO1xyXG4gICAgICAgICQoJy5wZXJjZW50Q3VyZW50JykudGV4dChwZXJjZW50KycgJScpO1xyXG4gICAgfVxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0LHQvtC70YzRiNC+0LUg0LzQtdC90Y4nKTsgXHJcbiAgICB2YXIgYnV0dG9uR2FtYnVyZ2VyPSQoJy5oZWFkZXJfX2Jsb2NrQ2xvc2UnKSwvL9C60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPINC80LXQvdGOINC90LAg0LLQtdGB0Ywg0Y3QutGA0LDQvVxyXG4gICAgICAgIGNsb3NlTGluZT0kKCcuYmxvY2tDbG9zZV9saW5lJyksLy/RhtC10L3RgtGA0LDQu9GM0L3QsNGPINC/0L7Qu9C+0YHQsCDQuNC3INC60L3QvtC/0LrQuCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICAgICAgICB3cmFwQmx1ZVdhbGw9JCgnLndyYXBwZXJCbHVlV2FsbCcpLC8v0L7QsdC10YDRgtC60LAg0LTQu9GPINGB0YLQtdC90Ysg0LzQtdC90Y5cclxuICAgICAgICBsZWZ0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fbGVmdFNpZGUnKSwvL9C70LXQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICByaWdodFNpZGVfd2FsbD0kKCcuYmx1ZVdhbGxfX3JpZ2h0U2lkZScpLC8v0L/RgNCw0LLQsNGPINGB0YLQvtGA0L7QvdCwINC80LXQvdGOINC60L7RgtC+0YDQsNGPINC/0L7Rj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgbWVudVdhbGw9JCgnLmJsdWVXYWxsX21lbnVMaW5rJyk7Ly/QsdC70L7QuiDRgSDQvdCw0LfQstCw0L3QuNGP0LzQuCDQvNC10L3RjlxyXG5cclxuICAgICAgICBidXR0b25HYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZWZ0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdsZWZ0MCcpO1xyXG4gICAgICAgICAgICByaWdodFNpZGVfd2FsbC50b2dnbGVDbGFzcygncmlnaHQwJyk7XHJcbiAgICAgICAgICAgIGNsb3NlTGluZS50b2dnbGVDbGFzcygnYmxvY2tDbG9zZV9saW5lX2FjdGl2ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQv9C+0LvQvtGB0LrQuCDQutC90L7Qv9C60LhcclxuICAgICAgICAgICAgd3JhcEJsdWVXYWxsLnRvZ2dsZUNsYXNzKCd3cmFwcGVyQmx1ZVdhbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnVXYWxsLnRvZ2dsZUNsYXNzKCdibHVlV2FsbF9tZW51TGlua19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIHZhciBidXR0b25OZXh0PSQoJy5qc19hcnJvd19fc2xpZGVOZXh0JyksLy/QutC90L7Qv9C60LAg0YHQu9C10LQg0YHQu9Cw0LnQtFxyXG4gICAgICAgYnV0dG9uUHJldz0kKCcuanNfYXJyb3dfX3NsaWRlUHJldycpLC8v0LrQvdC+0L/QutCwINC/0YDQtdC00YvQtNGG0YnQuNC5INGB0LvQsNC00LlcclxuICAgICAgIGNvdW50U2xpZGU9MSwvL9GB0YfQtdGC0YfQuNC60LAg0LDQutGC0LjQstC90L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgZmxhZz10cnVlLC8v0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuCDQuCDRh9GC0LEg0LTRgNGD0LPQsNGPINC90LUg0L3QsNGH0LDQu9Cw0YHRjCDQv9C+INC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNGC0YzRgdGPINC/0YDQtdC00YvQtNGD0YnQsNGPXHJcbiAgICAgICBjb250YWluZXJTbGlkZT0kKCcuanNfYmxvY2tTbGlkZScpLC8v0LHQu9C+0Log0YEg0LHQvtC70YzRidC40LzQuCDRhNC+0YLQutCw0LzQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICBiaWdTbGlkZXM9Y29udGFpbmVyU2xpZGUuZmluZCgnLmxpX19zbGlkZXInKSxcclxuICAgICAgIGR1cmF0aW9uPTUwMDtcclxuLy8tLS0tLdCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGZsYWdUZXh0PXRydWUsXHJcbiAgICAgICAgYXJyb3dTbGlkZT0kKCcuanNfYXJyb3dfX3NsaWRlJyk7Ly/RgdGC0YDQtdC70L7Rh9C60LAg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCDQstCy0LXRgNGFINC4INCy0L3QuNC3XHJcblxyXG4gICBmdW5jdGlvbiBhbmltYXRlZFRleHQoYmxvY2tfdGV4dCxhbmltYXRlX3RleHQpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9GB0YLQsNGA0YIg0LDQvdC40LzQsNGG0Lgg0YLQtdC60YHRgtCwJyk7XHJcbiAgICAgICAgdmFyIGJsb2NrX190ZXh0PWJsb2NrX3RleHQsXHJcbiAgICAgICAgICAgIHRyaW1UZXh0PWJsb2NrX190ZXh0LnRyaW0oKSxcclxuICAgICAgICAgICAgYXJyYXlfdGV4dD10cmltVGV4dC5zcGxpdCgnJyksXHJcbiAgICAgICAgICAgIHdvcmQ9JycsXHJcbiAgICAgICAgICAgIGxldHRlckh0bWwsXHJcbiAgICAgICAgICAgIGRlZmY9JC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGFycmF5X3RleHQuZm9yRWFjaChmdW5jdGlvbihsZXR0ZXIpe1xyXG4gICAgICAgICAgICBpZihsZXR0ZXIhPScgJyl7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3BhblwiPicrbGV0dGVyKyc8L3NwYW4+JztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3Bhbl9fc3BhY2VcIj4nK2xldHRlcisnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd29yZCs9bGV0dGVySHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihmbGFnVGV4dCl7XHJcbiAgICAgICAgICAgIGZsYWdUZXh0PWZhbHNlO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0ZV90ZXh0Lmh0bWwod29yZCk7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXI9YW5pbWF0ZV90ZXh0LmZpbmQoJy5sZXR0ZXJfc3BhbicpLFxyXG4gICAgICAgICAgICAgICAgY291bnRlcj0wLFxyXG4gICAgICAgICAgICAgICAgdGltZXIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0yMDAwL2FycmF5X3RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0LrQvtC7LdCy0L4g0LHRg9C60LIgJytsZXR0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0xldHRlcigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRMZXR0ZXI9bGV0dGVyLmVxKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXR0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZV93b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnRlcjw9bGV0dGVyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI9c2V0VGltZW91dChzaG93TGV0dGVyKCksZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlfdGV4dC5sZW5ndGg9PWNvdW50ZXIpIGRlZmYucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRpbWVyIT0ndW5kZWZpbmVkJykgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93TGV0dGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmYuZG9uZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbGFnVGV4dD10cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzb2x2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0cm9rZU5hbWVTaXRlPSQoJy5qc19uYW1lU2l0ZScpLC8v0YHRgtGA0L7QutCwINC60YPQtNCwINCx0YPQtNC10YIg0L/QuNGB0LDRgtGM0YHRjyDQvdCw0LfQstCw0L3QuNC1INGB0LDQudGC0LAg0LjQtyDRgdC70LDQudC00LBcclxuICAgICAgICBzdHJva2VXb3JrRmxvdz0kKCcuanNfd29ya2Zsb3cnKSwvL9GB0YLRgNC+0LrQsCDQutGD0LTQsCDQsdGD0LTQtdGCINC/0LjRgdCw0YLRjNGB0Y8g0YLQtdC30L3QvtC70L7Qs9C40LjQuCDRgdCw0LnRgtCwINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGU9JCgnLmpzX2xpbmtGb3JTaXRlJyk7Ly/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGB0YHRi9C70LrQsCDQvdCwINGB0LDQudGCINC40Lcg0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgYXJyb3dTbGlkZS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICB0aGlzSW1hZ2U9JHRoaXMuZmluZCgnLmxpX3NsaWRlU21hbGxfYWN0aXZlJykuZmluZCgnLmFycm93X19zbGlkZUltYWdlJyksXHJcbiAgICAgICAgICAgIHRpdGxlU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbmFtZScpLFxyXG4gICAgICAgICAgICB3b3JrZmxvd1NpdGU9dGhpc0ltYWdlLmRhdGEoJ3dvcmtmbG93JyksXHJcbiAgICAgICAgICAgIGxpbmtzU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbGluaycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcrKysrKysrKysrKysrKysrKysrICcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lICcrdGl0bGVTaXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd29yayAnK3dvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsgJytsaW5rc1NpdGUpO1xyXG5cclxuICAgICAgICAgYW5pbWF0ZWRUZXh0KHRpdGxlU2l0ZSxzdHJva2VOYW1lU2l0ZSk7XHJcbiAgICAgICAgIGFuaW1hdGVkVGV4dCh3b3JrZmxvd1NpdGUsc3Ryb2tlV29ya0Zsb3cpO1xyXG4gICAgICAgIHN0cm9rZU5hbWVTaXRlLnRleHQodGl0bGVTaXRlKTtcclxuICAgICAgICBzdHJva2VXb3JrRmxvdy50ZXh0KHdvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGUuYXR0cignaHJlZicsbGlua3NTaXRlKTtcclxuICAgIH0pO1xyXG5cclxuLy8tLS0tLdCa0J7QndCV0KYgINCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICBidXR0b25OZXh0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICArK2NvdW50U2xpZGU7XHJcbiAgICAgICAgIGlmKGNvdW50U2xpZGU+PWJpZ1NsaWRlcy5sZW5ndGgpIGNvdW50U2xpZGU9MDtcclxuICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICBzbWFsbFNsaWRlPSR0aGlzLmZpbmQoJy5saV9zbGlkZVNtYWxsJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLINC80LDQu9C10L3RjNC60LjQtVxyXG4gICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgcHJldlNsaWRlPWNvdW50U2xpZGUtMSxcclxuICAgICAgICAgICAgIHByZXYyU2xpZGU9Y291bnRTbGlkZS0yO1xyXG5cclxuICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgaWYocHJldjJTbGlkZT09LTEpe3ByZXYyU2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGlmKHByZXYyU2xpZGU9PS0yKXtwcmV2MlNsaWRlPXNtYWxsU2xpZGUubGVuZ3RoLTI7fS8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEoY291bnRTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAndG9wJzonLTE1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEobmV4dFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8g0JDQndCY0JzQkNCm0JjQryDQodCe0KHQldCU0J3QldCT0J4g0JzQkNCb0JXQndCs0JrQntCT0J4g0KHQm9CQ0JnQlNCQXHJcbiAgICAgICAgIHZhciBhbm90aGVyU21hbGxTbGlkZT0kdGhpcy5zaWJsaW5ncygnLmFycm93Rm9yU2xpZGVyX3NpZGUnKS5maW5kKCcubGlfc2xpZGVTbWFsbCcpOy8v0YHQvtGB0LXQtNC90LjQuSDQvNCw0LvQtdC90YzQutC40Lkg0YHQu9Cw0LnQtFxyXG4gICAgICAgICBhbm90aGVyU21hbGxTbGlkZS5lcShwcmV2MlNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICd0b3AnOicxMDAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsJy0xNTAlJyk7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINCx0L7Qu9GM0YjQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGJpZ1NsaWRlcy5lcShwcmV2U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTAwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYmlnU2xpZGVzLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgfSk7XHJcblxyXG4gICAgYnV0dG9uUHJldy5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAtLWNvdW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmKGNvdW50U2xpZGU8MCkgY291bnRTbGlkZT1iaWdTbGlkZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgc21hbGxTbGlkZT0kdGhpcy5maW5kKCcubGlfc2xpZGVTbWFsbCcpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRiyDQvNCw0LvQtdC90YzQutC40LVcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgICAgbmV4dDJTbGlkZT1jb3VudFNsaWRlKzI7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgaWYobmV4dDJTbGlkZT09c21hbGxTbGlkZS5sZW5ndGgpe25leHQyU2xpZGU9MDt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGlmKG5leHQyU2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKzEpe25leHQyU2xpZGU9MTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTAwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTE1MCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbWFsbFNsaWRlLmVxKHByZXZTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQkNCd0JjQnNCQ0KbQmNCvINCh0J7QodCV0JTQndCV0JPQniDQnNCQ0JvQldCd0KzQmtCe0JPQniDQodCb0JDQmdCU0JBcclxuICAgICAgICAgICAgdmFyIGFub3RoZXJTbWFsbFNsaWRlPSR0aGlzLnNpYmxpbmdzKCcuYXJyb3dGb3JTbGlkZXJfc2lkZScpLmZpbmQoJy5saV9zbGlkZVNtYWxsJyk7Ly/RgdC+0YHQtdC00L3QuNC5INC80LDQu9C10L3RjNC60LjQuSDRgdC70LDQudC0XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHQyU2xpZGUpLmFuaW1hdGUoey8v0LzQtdC90Y/QtdC8INC80LXRgdGC0L7QvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0YLQsNC8INCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgICAgICd0b3AnOictMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LHQvtC70YzRiNC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgYmlnU2xpZGVzLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTEwMCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX19zbGlkZXJfYWN0aXYnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJpZ1NsaWRlcy5lcShjb3VudFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOic1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSk7Il19
