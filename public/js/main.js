(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
   console.log('dssdd');
    var authLogin=$('.js_login'),//поле логина
        authPassword=$('.js_password'),//поле пароля
        checkBox=$('.js_checkRobot'),//чек бокс проверка на работа
        buttonEnter=$('.js_enterButton'),//кнопка входа
        imgCheckbox=$('.imageCheckboxRobot'),//изображение чекбокса
        logintest=0,
        checkTest=0,
        passwordtest=0;
    buttonEnter.on('click',function(){

        if(authLogin.val().length>0)logintest=1;
        if(authPassword.val().length>0)passwordtest=1;
        if(checkBox.prop('checked')==true){
            checkTest=1;
        }else {
            imgCheckbox.css('border','2px solid red');
            setTimeout(function(){imgCheckbox.css('border','none');},1500);
        }
         
        if(logintest==1 && passwordtest==1 && checkTest==1){
            console.log('совпало');
            $.ajax({
                type: "POST",
                url: "../php/checkLogin.php",
                data: {
                    login:authLogin.val(),
                    password:authPassword.val()
                },
                success: function(msg){
                    console.log(msg);
                   if(msg=='location'){

                       window.location.href = 'page/authorization.php';
                   }
                }
            });
        }
        
    });

}());
$(function(){
   
    var blur=(function(){
        var blur=$('.block_blur'),
            sectionBlur=$('.js_sectionWithBlur');
        return {
            set: function(){
              var  widthBackgr=sectionBlur.width(),//ширина секции с бэкграундом
                  hightBackgr=sectionBlur.height(),//ширина секции с бэкграундом
                  // posTop=sectionBlur.offset().top-blur.offset().top,//положение от верха
                  // posLeft=sectionBlur.offset().left-blur.offset().left; //положение блока от левого края
                    leftBackground=-(sectionBlur.width()-blur.width())/2,//положение от верха
                    topBackground=-(sectionBlur.height()-blur.height())/2; //положение блока от левого края
                blur.css({
                    'background-size':widthBackgr+'px'+' '+ hightBackgr+'px',
                    'background-position': leftBackground +'px'+' '+topBackground+'px'

                });
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
                menuleft.hide();
            }
        }else{
            fixedMenu.find('.js_ul_menu').remove();
            menuleft.show();
        }

       function checkSection(){
           $('.block__column__2_blog').each(function(){
               var $this=$(this),
                   topEdge=$this.offset().top-200,
                   bottom=topEdge+$this.height();
               if(topEdge<wScroll && bottom>wScroll){
                   var listId=$this.data('section'),
                       blockMenuleft=$('.fixed_menu .js_ul_menu');//находим меню слева

                   blockMenuleft.find('.column__1_blog__line').find('.activeStroke_blogThema').removeClass('activeStroke_blogThema');
                   blockMenuleft.find('[data-id='+listId+']').find('.js_linkActiv').addClass('activeStroke_blogThema');
               }
           })
       }
        checkSection();
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
      setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
      setTimeout(function(){backBlock.toggleClass('display_none')}, 200);
      flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
      buttonAuthorithation.fadeOut(500);// кнопке Авторизация делаем невидимой
    });
    //нажимаем на кнопку На главнуб и переворачивается блок с полями для входа
    buttonMainBackRevers.on('click',function(e){
        e.preventDefault();
        setTimeout(function(){backBlock.toggleClass('display_none')}, 200);
        setTimeout(function(){frontBlock.toggleClass('display_none')}, 200);
        flipper_wrap.toggleClass('rotate');//меняем класс который переворачивает блок
        buttonAuthorithation.fadeIn(500);// кнопке Авторизация делаем невидимой
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
            //console.log(moveX,moveY);
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
  //console.log('sand mail');
    var battonSand=$('.js_sandMail'),//кнопка отправки письма
        clearForm=$('.js_clearForm'),//кнопка очистки формы отправки письма
        inputName=$('.js_inputName'),//поле имя автора письма
        inputEmail=$('.js_inputEmail'),//поле эл.почты
        inputText=$('.js_inputText');//поле текста письма
//функция очистки формы
    function clearInputForm(){
        inputName.val('');
        inputEmail.val('');
        inputText.val('');
    }
    clearForm.on('click',function(){
        clearInputForm();
    });
    battonSand.on('click',function(){
        //Валидность поля email
        var validIcon=$('.validateIcon'),
            validName=$('.validName'),
            validText=$('.validText');
            var email = inputEmail.val(),
                emailTest=0,
                nameTest=0,
                textTest=0;
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }
            if(email != 0){
                if(isValidEmailAddress(email)){
                        validIcon.css({"background-image": "url('../image/validyes.png')","opacity":1 });
                        emailTest=1;
                    setTimeout(function(){validIcon.css('opacity',0);},1500);
                    } else { validIcon.css({"background-image": "url('../image/validno.png')","opacity":1});
                    setTimeout(function(){validIcon.css('opacity',0);},1500);
                }
            } else {validIcon.css({ "background-image": "none"  });  }
        //конец Валидность поля email------------------------------------
        //проверка заполнения поля имени
        console.log(' name '+inputName.val().length);
        if(inputName.val().length>0){
            nameTest=1;
        }else{ validName.css('opacity',1);
            setTimeout(function(){validName.css('opacity',0);},1500);}
        //конец проверка заполнения поля имени
        //проверка заполнения поля сообщения
        if(inputText.val().length<1){
            validText.css('opacity',1);
            setTimeout(function(){validText.css('opacity',0);},1500);
        }else{validText=1;}
        //конец проверка заполнения поля сообщения
        if(validText==1 && nameTest==1 && emailTest==1 ){
            $.ajax({
                type: "POST",
                url: "../php/sandMail.php",
                data: {
                    sender_name:inputName.val(),
                    sender_email:inputEmail.val(),
                    sender_text:inputText.val()
                },
                success: function(msg){
                    //console.log(msg);
                    clearInputForm();
                }
            });
        }
    });






}());
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
$(function(){
    var tab=$('.title__tabs'),
        nav_tabs=$('.main_adminka_tabs_nav');//блок ярлыков табов
        mainWrapper=$('.main_adminka');//блок где лежат все табы

    tab.on('click',function(){
        var $this=$(this),
            activeTab=$this.data('tab');
        nav_tabs.find('.activeTabs').removeClass('activeTabs');
        $this.addClass('activeTabs');
        mainWrapper.find('.main_tabActive').removeClass('main_tabActive');//удаляем активный класс у табы
        mainWrapper.find('.'+activeTab).addClass('main_tabActive');//добавляем активный класс нужному табу
    })
}());

$(function(){
    var
        circleBlock1=$('.js_lineCircle1').offset().top-500,//блок1 где лежат круши
        circleBlock2=$('.js_lineCircle2').offset().top-500,//блок где лежат круши
        circleBlock3=$('.js_lineCircle3').offset().top-500,//блок где лежат круши
        html=$('.cricle_html'),
        css=$('.cricle_css'),
        ls=$('.cricle_js'),
        php=$('.cricle_php'),
        mysql=$('.cricle_mysql'),
        nodejs=$('.cricle_nodejs'),
        git=$('.cricle_git'),
        gulp=$('.cricle_gulp'),
        bower=$('.cricle_bower');

    $(document).on('scroll',function(){
       var wScroll=$(window).scrollTop();//высота прокрутки
        if(wScroll>=circleBlock1){
            html.css('stroke-dashoffset',html.data('score'));
            css.css('stroke-dashoffset',css.data('score'));
            ls.css('stroke-dashoffset',ls.data('score'));
        }
        if(wScroll>=circleBlock2){
            php.css('stroke-dashoffset',php.data('score'));
            mysql.css('stroke-dashoffset',mysql.data('score'));
            nodejs.css('stroke-dashoffset',nodejs.data('score'));
        }
        if(wScroll>=circleBlock3){
            git.css('stroke-dashoffset',git.data('score'));
            gulp.css('stroke-dashoffset',gulp.data('score'));
            bower.css('stroke-dashoffset',bower.data('score'));
        }
    })
}());
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24uanMiLCJibHVyRm9ybS5qcyIsImZpeGVkTWVudUJsb2cuanMiLCJpbmRleFBhZ2VfcmV2ZXJzQmxvY2suanMiLCJwYXJhbGxheE1haW4uanMiLCJwYXJyYWxheFZlcnRpY2FsLmpzIiwicHJlbG9hZGVyLmpzIiwic2FuZE1haWwuanMiLCJzaG93Qmx1ZVdhbGxNZW51LmpzIiwic2xpZGVyLmpzIiwic3dpdGNoVGFicy5qcyIsInVwZGF0ZVNraWxsLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJFcnJvciIsImYiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCIkIiwiY29uc29sZSIsImxvZyIsImF1dGhMb2dpbiIsImF1dGhQYXNzd29yZCIsImNoZWNrQm94IiwiYnV0dG9uRW50ZXIiLCJpbWdDaGVja2JveCIsImxvZ2ludGVzdCIsImNoZWNrVGVzdCIsInBhc3N3b3JkdGVzdCIsIm9uIiwidmFsIiwicHJvcCIsImNzcyIsInNldFRpbWVvdXQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJsb2dpbiIsInBhc3N3b3JkIiwic3VjY2VzcyIsIm1zZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImJsdXIiLCJzZWN0aW9uQmx1ciIsInNldCIsIndpZHRoQmFja2dyIiwid2lkdGgiLCJoaWdodEJhY2tnciIsImhlaWdodCIsImxlZnRCYWNrZ3JvdW5kIiwidG9wQmFja2dyb3VuZCIsImJhY2tncm91bmQtc2l6ZSIsImJhY2tncm91bmQtcG9zaXRpb24iLCJkb2N1bWVudCIsInJlYWR5IiwicmVzaXplIiwiY2hlY2tTZWN0aW9uIiwiZWFjaCIsIiR0aGlzIiwidGhpcyIsInRvcEVkZ2UiLCJvZmZzZXQiLCJ0b3AiLCJib3R0b20iLCJ3U2Nyb2xsIiwibGlzdElkIiwiYmxvY2tNZW51bGVmdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2Nyb2xsVG9wIiwibWVudWxlZnQiLCJtZW51Q2xvbmUiLCJjbG9uZSIsImZpeGVkTWVudSIsIm1lbnVTdGF0aWMiLCJ0b3BTdGF0aWMiLCJhcHBlbmQiLCJoaWRlIiwicmVtb3ZlIiwic2hvdyIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0IiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJwYXJyYWxheExheWVyIiwidyIsImlubmVyV2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInBvc2lyaW9uTGVmdCIsInBvc3V0aW9uQm90dG9tIiwibGVmdCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBhZ2VYIiwicGFnZVkiLCJtb3ZlWCIsIm1vdmVZIiwidHJhbnNmb3JtIiwicGFycmFsYXhWZXJ0aWNhbCIsIndvcmRCaWciLCJtb3ZlUGhvdG8iLCJtb3ZlQmFja2dyb3VuZCIsIm1vdmUiLCJibG9jayIsInByb2NlbnRNb3ZlIiwic3RyYWZlIiwidHJhbnNmb3JtM0QiLCItd2Via2l0LXRyYW5zZm9ybSIsImluaXQiLCJzY3JvbGwiLCJjb3VudFBlcmNlbnQiLCJ0b3RhbCIsImN1cnJlbnQiLCJwZXJjZW50IiwiTWF0aCIsImNlaWwiLCJ0ZXh0IiwiaW1ncyIsImJhY2tncm91bmQiLCJpbWFnZSIsImlzIiwicGF0aCIsInJlcGxhY2UiLCJwdXNoIiwiYXR0ciIsInJlcGNlbnROb3ciLCJzcmMiLCJsb2FkIiwiZXJyb3IiLCJjbGVhcklucHV0Rm9ybSIsImlucHV0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFRleHQiLCJiYXR0b25TYW5kIiwiY2xlYXJGb3JtIiwiaXNWYWxpZEVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsInBhdHRlcm4iLCJSZWdFeHAiLCJ0ZXN0IiwidmFsaWRJY29uIiwidmFsaWROYW1lIiwidmFsaWRUZXh0IiwiZW1haWwiLCJlbWFpbFRlc3QiLCJuYW1lVGVzdCIsImJhY2tncm91bmQtaW1hZ2UiLCJvcGFjaXR5Iiwic2VuZGVyX25hbWUiLCJzZW5kZXJfZW1haWwiLCJzZW5kZXJfdGV4dCIsImJ1dHRvbkdhbWJ1cmdlciIsImNsb3NlTGluZSIsIndyYXBCbHVlV2FsbCIsImxlZnRTaWRlX3dhbGwiLCJyaWdodFNpZGVfd2FsbCIsIm1lbnVXYWxsIiwiYW5pbWF0ZWRUZXh0IiwiYmxvY2tfdGV4dCIsImFuaW1hdGVfdGV4dCIsInNob3dMZXR0ZXIiLCJjdXJyZW50TGV0dGVyIiwibGV0dGVyIiwiZXEiLCJjb3VudGVyIiwidGltZXIiLCJkdXJhdGlvbiIsImFycmF5X3RleHQiLCJkZWZmIiwicmVzb2x2ZSIsImNsZWFyVGltZW91dCIsImxldHRlckh0bWwiLCJibG9ja19fdGV4dCIsInRyaW1UZXh0IiwidHJpbSIsInNwbGl0Iiwid29yZCIsIkRlZmVycmVkIiwiZm9yRWFjaCIsImZsYWdUZXh0IiwiaHRtbCIsImRvbmUiLCJidXR0b25OZXh0IiwiYnV0dG9uUHJldyIsImNvdW50U2xpZGUiLCJmbGFnIiwiY29udGFpbmVyU2xpZGUiLCJiaWdTbGlkZXMiLCJhcnJvd1NsaWRlIiwic3Ryb2tlTmFtZVNpdGUiLCJzdHJva2VXb3JrRmxvdyIsInN0cm9rZUxpbmtGb3JTaXRlIiwidGhpc0ltYWdlIiwidGl0bGVTaXRlIiwid29ya2Zsb3dTaXRlIiwibGlua3NTaXRlIiwic21hbGxTbGlkZSIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsInByZXYyU2xpZGUiLCJhbmltYXRlIiwiYW5vdGhlclNtYWxsU2xpZGUiLCJzaWJsaW5ncyIsIm5leHQyU2xpZGUiLCJ0YWIiLCJuYXZfdGFicyIsIm1haW5XcmFwcGVyIiwiYWN0aXZlVGFiIiwiY2lyY2xlQmxvY2sxIiwiY2lyY2xlQmxvY2syIiwiY2lyY2xlQmxvY2szIiwibHMi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RUFBQSxnQkFFQUEsR0FBQXNDLFVBQUEzQixHQUFBLFNBQUEsV0FDQSxHQUFBc0MsR0FBQWpELEVBQUF3QixRQUFBK0IsV0FDQU4sSUFBQTJKLElBQ0E1QixFQUFBbEssSUFBQSxvQkFBQWtLLEVBQUE3SixLQUFBLFVBQ0FMLEVBQUFBLElBQUEsb0JBQUFBLEVBQUFLLEtBQUEsVUFDQTRMLEVBQUFqTSxJQUFBLG9CQUFBaU0sRUFBQTVMLEtBQUEsV0FFQThCLEdBQUE0SixJQUNBRyxFQUFBbE0sSUFBQSxvQkFBQWtNLEVBQUE3TCxLQUFBLFVBQ0E4TCxFQUFBbk0sSUFBQSxvQkFBQW1NLEVBQUE5TCxLQUFBLFVBQ0ErTCxFQUFBcE0sSUFBQSxvQkFBQW9NLEVBQUEvTCxLQUFBLFdBRUE4QixHQUFBNkosSUFDQUssRUFBQXJNLElBQUEsb0JBQUFxTSxFQUFBaE0sS0FBQSxVQUNBaU0sRUFBQXRNLElBQUEsb0JBQUFzTSxFQUFBak0sS0FBQSxVQUNBa00sRUFBQXZNLElBQUEsb0JBQUF1TSxFQUFBbE0sS0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZygnZHNzZGQnKTtcclxuICAgIHZhciBhdXRoTG9naW49JCgnLmpzX2xvZ2luJyksLy/Qv9C+0LvQtSDQu9C+0LPQuNC90LBcclxuICAgICAgICBhdXRoUGFzc3dvcmQ9JCgnLmpzX3Bhc3N3b3JkJyksLy/Qv9C+0LvQtSDQv9Cw0YDQvtC70Y9cclxuICAgICAgICBjaGVja0JveD0kKCcuanNfY2hlY2tSb2JvdCcpLC8v0YfQtdC6INCx0L7QutGBINC/0YDQvtCy0LXRgNC60LAg0L3QsCDRgNCw0LHQvtGC0LBcclxuICAgICAgICBidXR0b25FbnRlcj0kKCcuanNfZW50ZXJCdXR0b24nKSwvL9C60L3QvtC/0LrQsCDQstGF0L7QtNCwXHJcbiAgICAgICAgaW1nQ2hlY2tib3g9JCgnLmltYWdlQ2hlY2tib3hSb2JvdCcpLC8v0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRh9C10LrQsdC+0LrRgdCwXHJcbiAgICAgICAgbG9naW50ZXN0PTAsXHJcbiAgICAgICAgY2hlY2tUZXN0PTAsXHJcbiAgICAgICAgcGFzc3dvcmR0ZXN0PTA7XHJcbiAgICBidXR0b25FbnRlci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGF1dGhMb2dpbi52YWwoKS5sZW5ndGg+MClsb2dpbnRlc3Q9MTtcclxuICAgICAgICBpZihhdXRoUGFzc3dvcmQudmFsKCkubGVuZ3RoPjApcGFzc3dvcmR0ZXN0PTE7XHJcbiAgICAgICAgaWYoY2hlY2tCb3gucHJvcCgnY2hlY2tlZCcpPT10cnVlKXtcclxuICAgICAgICAgICAgY2hlY2tUZXN0PTE7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpbWdDaGVja2JveC5jc3MoJ2JvcmRlcicsJzJweCBzb2xpZCByZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2ltZ0NoZWNrYm94LmNzcygnYm9yZGVyJywnbm9uZScpO30sMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBpZihsb2dpbnRlc3Q9PTEgJiYgcGFzc3dvcmR0ZXN0PT0xICYmIGNoZWNrVGVzdD09MSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgdC+0LLQv9Cw0LvQvicpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2NoZWNrTG9naW4ucGhwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW46YXV0aExvZ2luLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOmF1dGhQYXNzd29yZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG1zZz09J2xvY2F0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3BhZ2UvYXV0aG9yaXphdGlvbi5waHAnO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbn0oKSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIHZhciBibHVyPShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBibHVyPSQoJy5ibG9ja19ibHVyJyksXHJcbiAgICAgICAgICAgIHNlY3Rpb25CbHVyPSQoJy5qc19zZWN0aW9uV2l0aEJsdXInKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgdmFyICB3aWR0aEJhY2tncj1zZWN0aW9uQmx1ci53aWR0aCgpLC8v0YjQuNGA0LjQvdCwINGB0LXQutGG0LjQuCDRgSDQsdGN0LrQs9GA0LDRg9C90LTQvtC8XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2h0QmFja2dyPXNlY3Rpb25CbHVyLmhlaWdodCgpLC8v0YjQuNGA0LjQvdCwINGB0LXQutGG0LjQuCDRgSDQsdGN0LrQs9GA0LDRg9C90LTQvtC8XHJcbiAgICAgICAgICAgICAgICAgIC8vIHBvc1RvcD1zZWN0aW9uQmx1ci5vZmZzZXQoKS50b3AtYmx1ci5vZmZzZXQoKS50b3AsLy/Qv9C+0LvQvtC20LXQvdC40LUg0L7RgiDQstC10YDRhdCwXHJcbiAgICAgICAgICAgICAgICAgIC8vIHBvc0xlZnQ9c2VjdGlvbkJsdXIub2Zmc2V0KCkubGVmdC1ibHVyLm9mZnNldCgpLmxlZnQ7IC8v0L/QvtC70L7QttC10L3QuNC1INCx0LvQvtC60LAg0L7RgiDQu9C10LLQvtCz0L4g0LrRgNCw0Y9cclxuICAgICAgICAgICAgICAgICAgICBsZWZ0QmFja2dyb3VuZD0tKHNlY3Rpb25CbHVyLndpZHRoKCktYmx1ci53aWR0aCgpKS8yLC8v0L/QvtC70L7QttC10L3QuNC1INC+0YIg0LLQtdGA0YXQsFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcEJhY2tncm91bmQ9LShzZWN0aW9uQmx1ci5oZWlnaHQoKS1ibHVyLmhlaWdodCgpKS8yOyAvL9C/0L7Qu9C+0LbQtdC90LjQtSDQsdC70L7QutCwINC+0YIg0LvQtdCy0L7Qs9C+INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBibHVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6d2lkdGhCYWNrZ3IrJ3B4JysnICcrIGhpZ2h0QmFja2dyKydweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBsZWZ0QmFja2dyb3VuZCArJ3B4JysnICcrdG9wQmFja2dyb3VuZCsncHgnXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBibHVyLnNldCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmx1ci5zZXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3U2Nyb2xsPSQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgbWVudWxlZnQ9JCgnLmNvbHVtbl9fMV9ibG9nIC5qc191bF9tZW51JyksXHJcbiAgICAgICAgICAgIG1lbnVDbG9uZT1tZW51bGVmdC5jbG9uZSgpLFxyXG4gICAgICAgICAgICBmaXhlZE1lbnU9JCgnLmZpeGVkX21lbnUnKSxcclxuICAgICAgICAgICAgbWVudVN0YXRpYz0kKCcuanNfc3RhdGljJyk7XHJcbiAgICAgICAgICAgIHRvcFN0YXRpYz1tZW51U3RhdGljLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBpZih0b3BTdGF0aWM8PXdTY3JvbGwpe1xyXG4gICAgICAgICAgICBpZighZml4ZWRNZW51LmZpbmQoJy5qc191bF9tZW51JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGZpeGVkTWVudS5hcHBlbmQobWVudUNsb25lKTtcclxuICAgICAgICAgICAgICAgIG1lbnVsZWZ0LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmaXhlZE1lbnUuZmluZCgnLmpzX3VsX21lbnUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbWVudWxlZnQuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBmdW5jdGlvbiBjaGVja1NlY3Rpb24oKXtcclxuICAgICAgICAgICAkKCcuYmxvY2tfX2NvbHVtbl9fMl9ibG9nJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgIHRvcEVkZ2U9JHRoaXMub2Zmc2V0KCkudG9wLTIwMCxcclxuICAgICAgICAgICAgICAgICAgIGJvdHRvbT10b3BFZGdlKyR0aGlzLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICBpZih0b3BFZGdlPHdTY3JvbGwgJiYgYm90dG9tPndTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgdmFyIGxpc3RJZD0kdGhpcy5kYXRhKCdzZWN0aW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdD0kKCcuZml4ZWRfbWVudSAuanNfdWxfbWVudScpOy8v0L3QsNGF0L7QtNC40Lwg0LzQtdC90Y4g0YHQu9C10LLQsFxyXG5cclxuICAgICAgICAgICAgICAgICAgIGJsb2NrTWVudWxlZnQuZmluZCgnLmNvbHVtbl9fMV9ibG9nX19saW5lJykuZmluZCgnLmFjdGl2ZVN0cm9rZV9ibG9nVGhlbWEnKS5yZW1vdmVDbGFzcygnYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpO1xyXG4gICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdC5maW5kKCdbZGF0YS1pZD0nK2xpc3RJZCsnXScpLmZpbmQoJy5qc19saW5rQWN0aXYnKS5hZGRDbGFzcygnYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgICAgICBjaGVja1NlY3Rpb24oKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0oKSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiB2YXIgYnV0dG9uQXV0aG9yaXRoYXRpb249JCgnLmpzX2J1dHRvbkF1dGhvcml0aGF0aW9uJyksLy/QutC90L7Qv9C60LAg0JDQstGC0L7RgNC40LfQsNGG0LjRj1xyXG4gICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzPSQoJy5qc19idXR0b25NYWluQmFja1JldmVycycpLC8v0LrQvdC+0L/QutCwINCd0LAg0LPQu9Cw0LLQvdGD0Y4sINGH0YLQvtCxINC/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0L7QsdGA0LDRgtC90L4g0LHQu9C+0LpcclxuICAgIGZsaXBwZXJfd3JhcD0kKCcuZmxpcHBlcl93cmFwJyksLy/QvtCx0LXRgNGC0LrQsCDQsdC70L7QutC+0LIg0LDQstGC0L7RgNC40LfQsNGG0LjRjy/Qv9GA0LjQstC10YLRgdGC0LLQuNC1XHJcbiAgICBmcm9udEJsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2Zyb250JyksLy/Qv9C10YDQtdC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcbiAgICBiYWNrQmxvY2s9JCgnLmJsb2NrV2VsbGNvbWVfYmFjaycpOy8v0LfQsNC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcblxyXG4gICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICBidXR0b25BdXRob3JpdGhhdGlvbi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiYWNrQmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgYnV0dG9uQXV0aG9yaXRoYXRpb24uZmFkZU91dCg1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuICAgIH0pO1xyXG4gICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCd0LAg0LPQu9Cw0LLQvdGD0LEg0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICBidXR0b25NYWluQmFja1JldmVycy5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgICBmbGlwcGVyX3dyYXAudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQsdC70L7QulxyXG4gICAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVJbig1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiIsIiQoZnVuY3Rpb24oKXtcclxudmFyIHBhcnJhbGF4TGF5ZXI9JCgnLnBhcnJhbGF4X2xheWVyJyk7Ly/RgdC70L7QuSDQv9Cw0YDQsNC70LDQutGB0LBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHc9KHdpbmRvdy5pbm5lcldpZHRoLzIpLFxyXG4gICAgICAgICAgICBoPSh3aW5kb3cuaW5uZXJIZWlnaHQvMik7XHJcbiAgICAgICAgcGFycmFsYXhMYXllci5tYXAoZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3NpcmlvbkxlZnQ9dyooa2V5LzEwMCksXHJcbiAgICAgICAgICAgICAgICBwb3N1dGlvbkJvdHRvbT1oKihrZXkvMTAwKTtcclxuICAgICAgICAgICAgJCh2YWx1ZSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdsZWZ0JzonLScrcG9zaXJpb25MZWZ0KydweCcsXHJcbiAgICAgICAgICAgICAgICAnYm90dG9tJzonLScrcG9zdXRpb25Cb3R0b20rJ3B4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZScsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIHc9KHdpbmRvdy5pbm5lcldpZHRoLzIpLWUucGFnZVgsXHJcbiAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKS1lLnBhZ2VZO1xyXG4gICAgICAgIHBhcnJhbGF4TGF5ZXIubWFwKGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgbW92ZVg9dyooKGtleSkvMTAwKSxcclxuICAgICAgICAgICAgICAgIG1vdmVZPWgqKChrZXkpLzEwMCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW92ZVgsbW92ZVkpO1xyXG4gICAgICAgICAgICAgICAgJCh2YWx1ZSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2xhdGUzZCgnK21vdmVYKydweCwnK21vdmVZKydweCwwKScsXHJcbiAgICAgICAgICAgICAgICAgJ2xlZnQnOi0xMCooa2V5KSsncHgnLFxyXG4gICAgICAgICAgICAgICAgICdib3R0b20nOi01KihrZXkpKydweCcsXHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAvL2NvbnNvbGUubG9nKCdwYXJyYWxheCDQvdCwINGB0YLRgNCw0L3QuNGG0LDRhScpO1xyXG4vL9Ck0KPQndCa0KbQmNCvINCf0JDQoNCQ0JvQkNCa0KHQkCDQlNCb0K8g0KLQldCa0KHQotCQICzQpNCe0KLQniDQmCDQk9Ce0KAg0JLQldCg0KLQmNCa0JDQm9Cs0J3QnlxyXG4gICAgdmFyIHBhcnJhbGF4VmVydGljYWw9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3b3JkQmlnPSQoJy5zdmdfcG9ydGZvbGlvJyksLy/QsdC+0LvRjNGI0LDRjyDQvdCw0LvQv9C40YHRjCDQutC+0YLQvtGA0YPRjiDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgICAgIG1vdmVQaG90bz0kKCcuYmxvY2tQcmVzZW50JyksLy/QsdC70L7QuiDRgSDRhNC+0YLQviDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgICAgIG1vdmVCYWNrZ3JvdW5kPSQoJy52ZXJ0aWNhbFBhcnJhbGxheFdwYXAnKTsvL9C60LDRgNGC0LjQvdC60LAgINC60L7RgtC+0YDRg9GOINCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgbW92ZSA6IGZ1bmN0aW9uKHdTY3JvbGwsYmxvY2sscHJvY2VudE1vdmUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmFmZT13U2Nyb2xsLy1wcm9jZW50TW92ZSsnJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0zRD0ndHJhbnNsYXRlM2QoMCwnK3N0cmFmZSsnLDApJztcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6dHJhbnNmb3JtM0QsXHJcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzp0cmFuc2Zvcm0zRFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24od1Njcm9sbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCxtb3ZlUGhvdG8sMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCx3b3JkQmlnLDIwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLG1vdmVCYWNrZ3JvdW5kLDYwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgIHZhciB3U2Nyb2xsPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgIHBhcnJhbGF4VmVydGljYWwuaW5pdCh3U2Nyb2xsKTtcclxuICAgfSlcclxuXHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaW1ncz1bXTtcclxuICAgICQuZWFjaCgkKCcqJyksZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZD0kdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICAgICAgaW1hZ2U9JHRoaXMuaXMoJ2ltZycpO1xyXG4gICAgICAgIGlmKGJhY2tncm91bmQhPSdub25lJyl7XHJcbiAgICAgICAgICAgdmFyIHBhdGg9YmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCcnKS5yZXBsYWNlKCdcIiknLCcnKTtcclxuICAgICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbWFnZSl7XHJcbiAgICAgICAgICAgIHZhciBwYXRoPSR0aGlzLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICBpZihwYXRoKXtcclxuICAgICAgICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIHJlcGNlbnROb3c9MTtcclxuICAgIGZvcihpPTE7aTxpbWdzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHZhciBpbWFnZT0kKCc8aW1nPicse1xyXG4gICAgICAgICAgICBhdHRyOntcclxuICAgICAgICAgICAgICAgIHNyYzppbWdzW2ldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWFnZS5vbih7XHJcbiAgICAgICAgICAgIGxvYWQ6ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFBlcmNlbnQoaW1ncy5sZW5ndGgsIHJlcGNlbnROb3cpO1xyXG4gICAgICAgICAgICAgICAgcmVwY2VudE5vdysrO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJlcGNlbnROb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY291bnRQZXJjZW50KHRvdGFsLGN1cnJlbnQpe1xyXG4gICAgICAgIHZhciBwZXJjZW50PU1hdGguY2VpbCgoY3VycmVudC90b3RhbCkqMTAwKTtcclxuICAgICAgICBpZiggcGVyY2VudD49MCkgJCgnLndyYXBMb2FkZXInKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgJCgnLnBlcmNlbnRDdXJlbnQnKS50ZXh0KHBlcmNlbnQrJyAlJyk7XHJcbiAgICB9XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAvL2NvbnNvbGUubG9nKCdzYW5kIG1haWwnKTtcclxuICAgIHZhciBiYXR0b25TYW5kPSQoJy5qc19zYW5kTWFpbCcpLC8v0LrQvdC+0L/QutCwINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgY2xlYXJGb3JtPSQoJy5qc19jbGVhckZvcm0nKSwvL9C60L3QvtC/0LrQsCDQvtGH0LjRgdGC0LrQuCDRhNC+0YDQvNGLINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgaW5wdXROYW1lPSQoJy5qc19pbnB1dE5hbWUnKSwvL9C/0L7Qu9C1INC40LzRjyDQsNCy0YLQvtGA0LAg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgaW5wdXRFbWFpbD0kKCcuanNfaW5wdXRFbWFpbCcpLC8v0L/QvtC70LUg0Y3Quy7Qv9C+0YfRgtGLXHJcbiAgICAgICAgaW5wdXRUZXh0PSQoJy5qc19pbnB1dFRleHQnKTsvL9C/0L7Qu9C1INGC0LXQutGB0YLQsCDQv9C40YHRjNC80LBcclxuLy/RhNGD0L3QutGG0LjRjyDQvtGH0LjRgdGC0LrQuCDRhNC+0YDQvNGLXHJcbiAgICBmdW5jdGlvbiBjbGVhcklucHV0Rm9ybSgpe1xyXG4gICAgICAgIGlucHV0TmFtZS52YWwoJycpO1xyXG4gICAgICAgIGlucHV0RW1haWwudmFsKCcnKTtcclxuICAgICAgICBpbnB1dFRleHQudmFsKCcnKTtcclxuICAgIH1cclxuICAgIGNsZWFyRm9ybS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2xlYXJJbnB1dEZvcm0oKTtcclxuICAgIH0pO1xyXG4gICAgYmF0dG9uU2FuZC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/QktCw0LvQuNC00L3QvtGB0YLRjCDQv9C+0LvRjyBlbWFpbFxyXG4gICAgICAgIHZhciB2YWxpZEljb249JCgnLnZhbGlkYXRlSWNvbicpLFxyXG4gICAgICAgICAgICB2YWxpZE5hbWU9JCgnLnZhbGlkTmFtZScpLFxyXG4gICAgICAgICAgICB2YWxpZFRleHQ9JCgnLnZhbGlkVGV4dCcpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBpbnB1dEVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgZW1haWxUZXN0PTAsXHJcbiAgICAgICAgICAgICAgICBuYW1lVGVzdD0wLFxyXG4gICAgICAgICAgICAgICAgdGV4dFRlc3Q9MDtcclxuICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcykge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKFwiW1xcdy1cXHNdK1wiKXwoW1xcdy1dKyg/OlxcLltcXHctXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3LV0rKD86XFwuW1xcdy1dKykqKSkoQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQpfChAXFxbPygoMjVbMC01XVxcLnwyWzAtNF1bMC05XVxcLnwxWzAtOV17Mn1cXC58WzAtOV17MSwyfVxcLikpKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXF0/JCkvaSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVtYWlsICE9IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEljb24uY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy4uL2ltYWdlL3ZhbGlkeWVzLnBuZycpXCIsXCJvcGFjaXR5XCI6MSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxUZXN0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ZhbGlkSWNvbi5jc3MoJ29wYWNpdHknLDApO30sMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgdmFsaWRJY29uLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcuLi9pbWFnZS92YWxpZG5vLnBuZycpXCIsXCJvcGFjaXR5XCI6MX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZEljb24uY3NzKCdvcGFjaXR5JywwKTt9LDE1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge3ZhbGlkSWNvbi5jc3MoeyBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJub25lXCIgIH0pOyAgfVxyXG4gICAgICAgIC8v0LrQvtC90LXRhiDQktCw0LvQuNC00L3QvtGB0YLRjCDQv9C+0LvRjyBlbWFpbC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDQuNC80LXQvdC4XHJcbiAgICAgICAgY29uc29sZS5sb2coJyBuYW1lICcraW5wdXROYW1lLnZhbCgpLmxlbmd0aCk7XHJcbiAgICAgICAgaWYoaW5wdXROYW1lLnZhbCgpLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgbmFtZVRlc3Q9MTtcclxuICAgICAgICB9ZWxzZXsgdmFsaWROYW1lLmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZE5hbWUuY3NzKCdvcGFjaXR5JywwKTt9LDE1MDApO31cclxuICAgICAgICAvL9C60L7QvdC10YYg0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDQuNC80LXQvdC4XHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQutCwINC30LDQv9C+0LvQvdC10L3QuNGPINC/0L7Qu9GPINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGlmKGlucHV0VGV4dC52YWwoKS5sZW5ndGg8MSl7XHJcbiAgICAgICAgICAgIHZhbGlkVGV4dC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFsaWRUZXh0LmNzcygnb3BhY2l0eScsMCk7fSwxNTAwKTtcclxuICAgICAgICB9ZWxzZXt2YWxpZFRleHQ9MTt9XHJcbiAgICAgICAgLy/QutC+0L3QtdGGINC/0YDQvtCy0LXRgNC60LAg0LfQsNC/0L7Qu9C90LXQvdC40Y8g0L/QvtC70Y8g0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgaWYodmFsaWRUZXh0PT0xICYmIG5hbWVUZXN0PT0xICYmIGVtYWlsVGVzdD09MSApe1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL3NhbmRNYWlsLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcl9uYW1lOmlucHV0TmFtZS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJfZW1haWw6aW5wdXRFbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJfdGV4dDppbnB1dFRleHQudmFsKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSgpKTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0LHQvtC70YzRiNC+0LUg0LzQtdC90Y4nKTsgXHJcbiAgICB2YXIgYnV0dG9uR2FtYnVyZ2VyPSQoJy5oZWFkZXJfX2Jsb2NrQ2xvc2UnKSwvL9C60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPINC80LXQvdGOINC90LAg0LLQtdGB0Ywg0Y3QutGA0LDQvVxyXG4gICAgICAgIGNsb3NlTGluZT0kKCcuYmxvY2tDbG9zZV9saW5lJyksLy/RhtC10L3RgtGA0LDQu9GM0L3QsNGPINC/0L7Qu9C+0YHQsCDQuNC3INC60L3QvtC/0LrQuCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICAgICAgICB3cmFwQmx1ZVdhbGw9JCgnLndyYXBwZXJCbHVlV2FsbCcpLC8v0L7QsdC10YDRgtC60LAg0LTQu9GPINGB0YLQtdC90Ysg0LzQtdC90Y5cclxuICAgICAgICBsZWZ0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fbGVmdFNpZGUnKSwvL9C70LXQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICByaWdodFNpZGVfd2FsbD0kKCcuYmx1ZVdhbGxfX3JpZ2h0U2lkZScpLC8v0L/RgNCw0LLQsNGPINGB0YLQvtGA0L7QvdCwINC80LXQvdGOINC60L7RgtC+0YDQsNGPINC/0L7Rj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgbWVudVdhbGw9JCgnLmJsdWVXYWxsX21lbnVMaW5rJyk7Ly/QsdC70L7QuiDRgSDQvdCw0LfQstCw0L3QuNGP0LzQuCDQvNC10L3RjlxyXG5cclxuICAgICAgICBidXR0b25HYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZWZ0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdsZWZ0MCcpO1xyXG4gICAgICAgICAgICByaWdodFNpZGVfd2FsbC50b2dnbGVDbGFzcygncmlnaHQwJyk7XHJcbiAgICAgICAgICAgIGNsb3NlTGluZS50b2dnbGVDbGFzcygnYmxvY2tDbG9zZV9saW5lX2FjdGl2ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQv9C+0LvQvtGB0LrQuCDQutC90L7Qv9C60LhcclxuICAgICAgICAgICAgd3JhcEJsdWVXYWxsLnRvZ2dsZUNsYXNzKCd3cmFwcGVyQmx1ZVdhbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnVXYWxsLnRvZ2dsZUNsYXNzKCdibHVlV2FsbF9tZW51TGlua19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIHZhciBidXR0b25OZXh0PSQoJy5qc19hcnJvd19fc2xpZGVOZXh0JyksLy/QutC90L7Qv9C60LAg0YHQu9C10LQg0YHQu9Cw0LnQtFxyXG4gICAgICAgYnV0dG9uUHJldz0kKCcuanNfYXJyb3dfX3NsaWRlUHJldycpLC8v0LrQvdC+0L/QutCwINC/0YDQtdC00YvQtNGG0YnQuNC5INGB0LvQsNC00LlcclxuICAgICAgIGNvdW50U2xpZGU9MSwvL9GB0YfQtdGC0YfQuNC60LAg0LDQutGC0LjQstC90L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgZmxhZz10cnVlLC8v0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuCDQuCDRh9GC0LEg0LTRgNGD0LPQsNGPINC90LUg0L3QsNGH0LDQu9Cw0YHRjCDQv9C+INC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNGC0YzRgdGPINC/0YDQtdC00YvQtNGD0YnQsNGPXHJcbiAgICAgICBjb250YWluZXJTbGlkZT0kKCcuanNfYmxvY2tTbGlkZScpLC8v0LHQu9C+0Log0YEg0LHQvtC70YzRidC40LzQuCDRhNC+0YLQutCw0LzQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICBiaWdTbGlkZXM9Y29udGFpbmVyU2xpZGUuZmluZCgnLmxpX19zbGlkZXInKSxcclxuICAgICAgIGR1cmF0aW9uPTUwMDtcclxuLy8tLS0tLdCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGZsYWdUZXh0PXRydWUsXHJcbiAgICAgICAgYXJyb3dTbGlkZT0kKCcuanNfYXJyb3dfX3NsaWRlJyk7Ly/RgdGC0YDQtdC70L7Rh9C60LAg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCDQstCy0LXRgNGFINC4INCy0L3QuNC3XHJcblxyXG4gICBmdW5jdGlvbiBhbmltYXRlZFRleHQoYmxvY2tfdGV4dCxhbmltYXRlX3RleHQpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9GB0YLQsNGA0YIg0LDQvdC40LzQsNGG0Lgg0YLQtdC60YHRgtCwJyk7XHJcbiAgICAgICAgdmFyIGJsb2NrX190ZXh0PWJsb2NrX3RleHQsXHJcbiAgICAgICAgICAgIHRyaW1UZXh0PWJsb2NrX190ZXh0LnRyaW0oKSxcclxuICAgICAgICAgICAgYXJyYXlfdGV4dD10cmltVGV4dC5zcGxpdCgnJyksXHJcbiAgICAgICAgICAgIHdvcmQ9JycsXHJcbiAgICAgICAgICAgIGxldHRlckh0bWwsXHJcbiAgICAgICAgICAgIGRlZmY9JC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGFycmF5X3RleHQuZm9yRWFjaChmdW5jdGlvbihsZXR0ZXIpe1xyXG4gICAgICAgICAgICBpZihsZXR0ZXIhPScgJyl7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3BhblwiPicrbGV0dGVyKyc8L3NwYW4+JztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3Bhbl9fc3BhY2VcIj4nK2xldHRlcisnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd29yZCs9bGV0dGVySHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihmbGFnVGV4dCl7XHJcbiAgICAgICAgICAgIGZsYWdUZXh0PWZhbHNlO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0ZV90ZXh0Lmh0bWwod29yZCk7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXI9YW5pbWF0ZV90ZXh0LmZpbmQoJy5sZXR0ZXJfc3BhbicpLFxyXG4gICAgICAgICAgICAgICAgY291bnRlcj0wLFxyXG4gICAgICAgICAgICAgICAgdGltZXIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0yMDAwL2FycmF5X3RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0LrQvtC7LdCy0L4g0LHRg9C60LIgJytsZXR0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0xldHRlcigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRMZXR0ZXI9bGV0dGVyLmVxKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXR0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZV93b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnRlcjw9bGV0dGVyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI9c2V0VGltZW91dChzaG93TGV0dGVyKCksZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlfdGV4dC5sZW5ndGg9PWNvdW50ZXIpIGRlZmYucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRpbWVyIT0ndW5kZWZpbmVkJykgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93TGV0dGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmYuZG9uZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbGFnVGV4dD10cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzb2x2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0cm9rZU5hbWVTaXRlPSQoJy5qc19uYW1lU2l0ZScpLC8v0YHRgtGA0L7QutCwINC60YPQtNCwINCx0YPQtNC10YIg0L/QuNGB0LDRgtGM0YHRjyDQvdCw0LfQstCw0L3QuNC1INGB0LDQudGC0LAg0LjQtyDRgdC70LDQudC00LBcclxuICAgICAgICBzdHJva2VXb3JrRmxvdz0kKCcuanNfd29ya2Zsb3cnKSwvL9GB0YLRgNC+0LrQsCDQutGD0LTQsCDQsdGD0LTQtdGCINC/0LjRgdCw0YLRjNGB0Y8g0YLQtdC30L3QvtC70L7Qs9C40LjQuCDRgdCw0LnRgtCwINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGU9JCgnLmpzX2xpbmtGb3JTaXRlJyk7Ly/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGB0YHRi9C70LrQsCDQvdCwINGB0LDQudGCINC40Lcg0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgYXJyb3dTbGlkZS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICB0aGlzSW1hZ2U9JHRoaXMuZmluZCgnLmxpX3NsaWRlU21hbGxfYWN0aXZlJykuZmluZCgnLmFycm93X19zbGlkZUltYWdlJyksXHJcbiAgICAgICAgICAgIHRpdGxlU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbmFtZScpLFxyXG4gICAgICAgICAgICB3b3JrZmxvd1NpdGU9dGhpc0ltYWdlLmRhdGEoJ3dvcmtmbG93JyksXHJcbiAgICAgICAgICAgIGxpbmtzU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbGluaycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcrKysrKysrKysrKysrKysrKysrICcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lICcrdGl0bGVTaXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd29yayAnK3dvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsgJytsaW5rc1NpdGUpO1xyXG5cclxuICAgICAgICAgYW5pbWF0ZWRUZXh0KHRpdGxlU2l0ZSxzdHJva2VOYW1lU2l0ZSk7XHJcbiAgICAgICAgIGFuaW1hdGVkVGV4dCh3b3JrZmxvd1NpdGUsc3Ryb2tlV29ya0Zsb3cpO1xyXG4gICAgICAgIHN0cm9rZU5hbWVTaXRlLnRleHQodGl0bGVTaXRlKTtcclxuICAgICAgICBzdHJva2VXb3JrRmxvdy50ZXh0KHdvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGUuYXR0cignaHJlZicsbGlua3NTaXRlKTtcclxuICAgIH0pO1xyXG5cclxuLy8tLS0tLdCa0J7QndCV0KYgINCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICBidXR0b25OZXh0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICArK2NvdW50U2xpZGU7XHJcbiAgICAgICAgIGlmKGNvdW50U2xpZGU+PWJpZ1NsaWRlcy5sZW5ndGgpIGNvdW50U2xpZGU9MDtcclxuICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICBzbWFsbFNsaWRlPSR0aGlzLmZpbmQoJy5saV9zbGlkZVNtYWxsJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLINC80LDQu9C10L3RjNC60LjQtVxyXG4gICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgcHJldlNsaWRlPWNvdW50U2xpZGUtMSxcclxuICAgICAgICAgICAgIHByZXYyU2xpZGU9Y291bnRTbGlkZS0yO1xyXG5cclxuICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgaWYocHJldjJTbGlkZT09LTEpe3ByZXYyU2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGlmKHByZXYyU2xpZGU9PS0yKXtwcmV2MlNsaWRlPXNtYWxsU2xpZGUubGVuZ3RoLTI7fS8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEoY291bnRTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAndG9wJzonLTE1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEobmV4dFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8g0JDQndCY0JzQkNCm0JjQryDQodCe0KHQldCU0J3QldCT0J4g0JzQkNCb0JXQndCs0JrQntCT0J4g0KHQm9CQ0JnQlNCQXHJcbiAgICAgICAgIHZhciBhbm90aGVyU21hbGxTbGlkZT0kdGhpcy5zaWJsaW5ncygnLmFycm93Rm9yU2xpZGVyX3NpZGUnKS5maW5kKCcubGlfc2xpZGVTbWFsbCcpOy8v0YHQvtGB0LXQtNC90LjQuSDQvNCw0LvQtdC90YzQutC40Lkg0YHQu9Cw0LnQtFxyXG4gICAgICAgICBhbm90aGVyU21hbGxTbGlkZS5lcShwcmV2MlNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICd0b3AnOicxMDAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsJy0xNTAlJyk7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINCx0L7Qu9GM0YjQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGJpZ1NsaWRlcy5lcShwcmV2U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTAwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYmlnU2xpZGVzLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgfSk7XHJcblxyXG4gICAgYnV0dG9uUHJldy5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAtLWNvdW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmKGNvdW50U2xpZGU8MCkgY291bnRTbGlkZT1iaWdTbGlkZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgc21hbGxTbGlkZT0kdGhpcy5maW5kKCcubGlfc2xpZGVTbWFsbCcpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRiyDQvNCw0LvQtdC90YzQutC40LVcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgICAgbmV4dDJTbGlkZT1jb3VudFNsaWRlKzI7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgaWYobmV4dDJTbGlkZT09c21hbGxTbGlkZS5sZW5ndGgpe25leHQyU2xpZGU9MDt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGlmKG5leHQyU2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKzEpe25leHQyU2xpZGU9MTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTAwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTE1MCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbWFsbFNsaWRlLmVxKHByZXZTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQkNCd0JjQnNCQ0KbQmNCvINCh0J7QodCV0JTQndCV0JPQniDQnNCQ0JvQldCd0KzQmtCe0JPQniDQodCb0JDQmdCU0JBcclxuICAgICAgICAgICAgdmFyIGFub3RoZXJTbWFsbFNsaWRlPSR0aGlzLnNpYmxpbmdzKCcuYXJyb3dGb3JTbGlkZXJfc2lkZScpLmZpbmQoJy5saV9zbGlkZVNtYWxsJyk7Ly/RgdC+0YHQtdC00L3QuNC5INC80LDQu9C10L3RjNC60LjQuSDRgdC70LDQudC0XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHQyU2xpZGUpLmFuaW1hdGUoey8v0LzQtdC90Y/QtdC8INC80LXRgdGC0L7QvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0YLQsNC8INCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgICAgICd0b3AnOictMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LHQvtC70YzRiNC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgYmlnU2xpZGVzLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTEwMCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX19zbGlkZXJfYWN0aXYnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJpZ1NsaWRlcy5lcShjb3VudFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOic1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRhYj0kKCcudGl0bGVfX3RhYnMnKSxcclxuICAgICAgICBuYXZfdGFicz0kKCcubWFpbl9hZG1pbmthX3RhYnNfbmF2Jyk7Ly/QsdC70L7QuiDRj9GA0LvRi9C60L7QsiDRgtCw0LHQvtCyXHJcbiAgICAgICAgbWFpbldyYXBwZXI9JCgnLm1haW5fYWRtaW5rYScpOy8v0LHQu9C+0Log0LPQtNC1INC70LXQttCw0YIg0LLRgdC1INGC0LDQsdGLXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiPSR0aGlzLmRhdGEoJ3RhYicpO1xyXG4gICAgICAgIG5hdl90YWJzLmZpbmQoJy5hY3RpdmVUYWJzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZVRhYnMnKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlVGFicycpO1xyXG4gICAgICAgIG1haW5XcmFwcGVyLmZpbmQoJy5tYWluX3RhYkFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtYWluX3RhYkFjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGDINGC0LDQsdGLXHJcbiAgICAgICAgbWFpbldyYXBwZXIuZmluZCgnLicrYWN0aXZlVGFiKS5hZGRDbGFzcygnbWFpbl90YWJBY3RpdmUnKTsvL9C00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0L3Rg9C20L3QvtC80YMg0YLQsNCx0YNcclxuICAgIH0pXHJcbn0oKSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhclxyXG4gICAgICAgIGNpcmNsZUJsb2NrMT0kKCcuanNfbGluZUNpcmNsZTEnKS5vZmZzZXQoKS50b3AtNTAwLC8v0LHQu9C+0LoxINCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBjaXJjbGVCbG9jazI9JCgnLmpzX2xpbmVDaXJjbGUyJykub2Zmc2V0KCkudG9wLTUwMCwvL9Cx0LvQvtC6INCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBjaXJjbGVCbG9jazM9JCgnLmpzX2xpbmVDaXJjbGUzJykub2Zmc2V0KCkudG9wLTUwMCwvL9Cx0LvQvtC6INCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBodG1sPSQoJy5jcmljbGVfaHRtbCcpLFxyXG4gICAgICAgIGNzcz0kKCcuY3JpY2xlX2NzcycpLFxyXG4gICAgICAgIGxzPSQoJy5jcmljbGVfanMnKSxcclxuICAgICAgICBwaHA9JCgnLmNyaWNsZV9waHAnKSxcclxuICAgICAgICBteXNxbD0kKCcuY3JpY2xlX215c3FsJyksXHJcbiAgICAgICAgbm9kZWpzPSQoJy5jcmljbGVfbm9kZWpzJyksXHJcbiAgICAgICAgZ2l0PSQoJy5jcmljbGVfZ2l0JyksXHJcbiAgICAgICAgZ3VscD0kKCcuY3JpY2xlX2d1bHAnKSxcclxuICAgICAgICBib3dlcj0kKCcuY3JpY2xlX2Jvd2VyJyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuICAgICAgIHZhciB3U2Nyb2xsPSQod2luZG93KS5zY3JvbGxUb3AoKTsvL9Cy0YvRgdC+0YLQsCDQv9GA0L7QutGA0YPRgtC60LhcclxuICAgICAgICBpZih3U2Nyb2xsPj1jaXJjbGVCbG9jazEpe1xyXG4gICAgICAgICAgICBodG1sLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLGh0bWwuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgICAgIGNzcy5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0Jyxjc3MuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgICAgIGxzLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLGxzLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3U2Nyb2xsPj1jaXJjbGVCbG9jazIpe1xyXG4gICAgICAgICAgICBwaHAuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcscGhwLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBteXNxbC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxteXNxbC5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICAgICAgbm9kZWpzLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLG5vZGVqcy5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod1Njcm9sbD49Y2lyY2xlQmxvY2szKXtcclxuICAgICAgICAgICAgZ2l0LmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLGdpdC5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICAgICAgZ3VscC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxndWxwLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBib3dlci5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0Jyxib3dlci5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KCkpOyJdfQ==
