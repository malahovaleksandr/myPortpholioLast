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
    //console.log('fixed');
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
                   //console.log(listId);

                   blockMenuleft.find('.js_ul_menu').removeClass('.activeStroke_blogThema');
                   //console.log( blockMenuleft.find('.activeStroke_blogThema').length);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24uanMiLCJibHVyRm9ybS5qcyIsImZpeGVkTWVudUJsb2cuanMiLCJpbmRleFBhZ2VfcmV2ZXJzQmxvY2suanMiLCJwYXJhbGxheE1haW4uanMiLCJwYXJyYWxheFZlcnRpY2FsLmpzIiwicHJlbG9hZGVyLmpzIiwic2FuZE1haWwuanMiLCJzaG93Qmx1ZVdhbGxNZW51LmpzIiwic2xpZGVyLmpzIiwidXBkYXRlU2tpbGwuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIiQiLCJjb25zb2xlIiwibG9nIiwiYXV0aExvZ2luIiwiYXV0aFBhc3N3b3JkIiwiY2hlY2tCb3giLCJidXR0b25FbnRlciIsImltZ0NoZWNrYm94IiwibG9naW50ZXN0IiwiY2hlY2tUZXN0IiwicGFzc3dvcmR0ZXN0Iiwib24iLCJ2YWwiLCJwcm9wIiwiY3NzIiwic2V0VGltZW91dCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImxvZ2luIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwibXNnIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYmx1ciIsInNlY3Rpb25CbHVyIiwic2V0Iiwid2lkdGhCYWNrZ3IiLCJ3aWR0aCIsInBvc1RvcCIsIm9mZnNldCIsInRvcCIsInBvc0xlZnQiLCJsZWZ0IiwiYmFja2dyb3VuZC1zaXplIiwiYmFja2dyb3VuZC1wb3NpdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJyZXNpemUiLCJjaGVja1NldnRpb24iLCJlYWNoIiwiJHRoaXMiLCJ0aGlzIiwidG9wRWRnZSIsImJvdHRvbSIsImhlaWdodCIsIndTY3JvbGwiLCJsaXN0SWQiLCJibG9ja01lbnVsZWZ0IiwiZmluZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzY3JvbGxUb3AiLCJtZW51bGVmdCIsIm1lbnVDbG9uZSIsImNsb25lIiwiZml4ZWRNZW51IiwibWVudVN0YXRpYyIsInRvcFN0YXRpYyIsImFwcGVuZCIsInJlbW92ZSIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0IiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJwYXJyYWxheExheWVyIiwidyIsImlubmVyV2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInBvc2lyaW9uTGVmdCIsInBvc3V0aW9uQm90dG9tIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicGFnZVgiLCJwYWdlWSIsIm1vdmVYIiwibW92ZVkiLCJ0cmFuc2Zvcm0iLCJwYXJyYWxheFZlcnRpY2FsIiwid29yZEJpZyIsIm1vdmVQaG90byIsIm1vdmVCYWNrZ3JvdW5kIiwibW92ZSIsImJsb2NrIiwicHJvY2VudE1vdmUiLCJzdHJhZmUiLCJ0cmFuc2Zvcm0zRCIsIi13ZWJraXQtdHJhbnNmb3JtIiwiaW5pdCIsInNjcm9sbCIsImNvdW50UGVyY2VudCIsInRvdGFsIiwiY3VycmVudCIsInBlcmNlbnQiLCJNYXRoIiwiY2VpbCIsInRleHQiLCJpbWdzIiwiYmFja2dyb3VuZCIsImltYWdlIiwiaXMiLCJwYXRoIiwicmVwbGFjZSIsInB1c2giLCJhdHRyIiwicmVwY2VudE5vdyIsInNyYyIsImxvYWQiLCJlcnJvciIsImNsZWFySW5wdXRGb3JtIiwiaW5wdXROYW1lIiwiaW5wdXRFbWFpbCIsImlucHV0VGV4dCIsImJhdHRvblNhbmQiLCJjbGVhckZvcm0iLCJpc1ZhbGlkRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCJ2YWxpZEljb24iLCJ2YWxpZE5hbWUiLCJ2YWxpZFRleHQiLCJlbWFpbCIsImVtYWlsVGVzdCIsIm5hbWVUZXN0IiwiYmFja2dyb3VuZC1pbWFnZSIsIm9wYWNpdHkiLCJzZW5kZXJfbmFtZSIsInNlbmRlcl9lbWFpbCIsInNlbmRlcl90ZXh0IiwiYnV0dG9uR2FtYnVyZ2VyIiwiY2xvc2VMaW5lIiwid3JhcEJsdWVXYWxsIiwibGVmdFNpZGVfd2FsbCIsInJpZ2h0U2lkZV93YWxsIiwibWVudVdhbGwiLCJhbmltYXRlZFRleHQiLCJibG9ja190ZXh0IiwiYW5pbWF0ZV90ZXh0Iiwic2hvd0xldHRlciIsImN1cnJlbnRMZXR0ZXIiLCJsZXR0ZXIiLCJlcSIsImNvdW50ZXIiLCJ0aW1lciIsImR1cmF0aW9uIiwiYXJyYXlfdGV4dCIsImRlZmYiLCJyZXNvbHZlIiwiY2xlYXJUaW1lb3V0IiwibGV0dGVySHRtbCIsImJsb2NrX190ZXh0IiwidHJpbVRleHQiLCJ0cmltIiwic3BsaXQiLCJ3b3JkIiwiRGVmZXJyZWQiLCJmb3JFYWNoIiwiZmxhZ1RleHQiLCJodG1sIiwiZG9uZSIsImJ1dHRvbk5leHQiLCJidXR0b25QcmV3IiwiY291bnRTbGlkZSIsImZsYWciLCJjb250YWluZXJTbGlkZSIsImJpZ1NsaWRlcyIsImFycm93U2xpZGUiLCJzdHJva2VOYW1lU2l0ZSIsInN0cm9rZVdvcmtGbG93Iiwic3Ryb2tlTGlua0ZvclNpdGUiLCJ0aGlzSW1hZ2UiLCJ0aXRsZVNpdGUiLCJ3b3JrZmxvd1NpdGUiLCJsaW5rc1NpdGUiLCJzbWFsbFNsaWRlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwicHJldjJTbGlkZSIsImFuaW1hdGUiLCJhbm90aGVyU21hbGxTbGlkZSIsInNpYmxpbmdzIiwibmV4dDJTbGlkZSIsImNpcmNsZUJsb2NrMSIsImNpcmNsZUJsb2NrMiIsImNpcmNsZUJsb2NrMyIsImxzIiwicGhwIiwibXlzcWwiLCJub2RlanMiLCJnaXQiLCJndWxwIiwiYm93ZXIiXSwibWFwcGluZ3MiOiJDQUFBLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsUUFBQUMsR0FB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QS9MLElBQUEsb0JBQUErTCxFQUFBMUwsS0FBQSxVQUNBMkwsRUFBQWhNLElBQUEsb0JBQUFnTSxFQUFBM0wsS0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZygnZHNzZGQnKTtcclxuICAgIHZhciBhdXRoTG9naW49JCgnLmpzX2xvZ2luJyksLy/Qv9C+0LvQtSDQu9C+0LPQuNC90LBcclxuICAgICAgICBhdXRoUGFzc3dvcmQ9JCgnLmpzX3Bhc3N3b3JkJyksLy/Qv9C+0LvQtSDQv9Cw0YDQvtC70Y9cclxuICAgICAgICBjaGVja0JveD0kKCcuanNfY2hlY2tSb2JvdCcpLC8v0YfQtdC6INCx0L7QutGBINC/0YDQvtCy0LXRgNC60LAg0L3QsCDRgNCw0LHQvtGC0LBcclxuICAgICAgICBidXR0b25FbnRlcj0kKCcuanNfZW50ZXJCdXR0b24nKSwvL9C60L3QvtC/0LrQsCDQstGF0L7QtNCwXHJcbiAgICAgICAgaW1nQ2hlY2tib3g9JCgnLmltYWdlQ2hlY2tib3hSb2JvdCcpLC8v0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRh9C10LrQsdC+0LrRgdCwXHJcbiAgICAgICAgbG9naW50ZXN0PTAsXHJcbiAgICAgICAgY2hlY2tUZXN0PTAsXHJcbiAgICAgICAgcGFzc3dvcmR0ZXN0PTA7XHJcbiAgICBidXR0b25FbnRlci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGF1dGhMb2dpbi52YWwoKS5sZW5ndGg+MClsb2dpbnRlc3Q9MTtcclxuICAgICAgICBpZihhdXRoUGFzc3dvcmQudmFsKCkubGVuZ3RoPjApcGFzc3dvcmR0ZXN0PTE7XHJcbiAgICAgICAgaWYoY2hlY2tCb3gucHJvcCgnY2hlY2tlZCcpPT10cnVlKXtcclxuICAgICAgICAgICAgY2hlY2tUZXN0PTE7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpbWdDaGVja2JveC5jc3MoJ2JvcmRlcicsJzJweCBzb2xpZCByZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2ltZ0NoZWNrYm94LmNzcygnYm9yZGVyJywnbm9uZScpO30sMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBpZihsb2dpbnRlc3Q9PTEgJiYgcGFzc3dvcmR0ZXN0PT0xICYmIGNoZWNrVGVzdD09MSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgdC+0LLQv9Cw0LvQvicpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2NoZWNrTG9naW4ucGhwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW46YXV0aExvZ2luLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOmF1dGhQYXNzd29yZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG1zZz09J2xvY2F0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3BhZ2UvYXV0aG9yaXphdGlvbi5waHAnO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbn0oKSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIHZhciBibHVyPShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBibHVyPSQoJy5ibG9ja19ibHVyJyksXHJcbiAgICAgICAgICAgIHNlY3Rpb25CbHVyPSQoJy5qc19zZWN0aW9uQmx1cicpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB2YXIgIHdpZHRoQmFja2dyPXNlY3Rpb25CbHVyLndpZHRoKCksLy/RiNC40YDQuNC90LAg0YHQtdC60YbQuNC4INGBINCx0Y3QutCz0YDQsNGD0L3QtNC+0LxcclxuICAgICAgICAgICAgICAgICAgcG9zVG9wPXNlY3Rpb25CbHVyLm9mZnNldCgpLnRvcC1ibHVyLm9mZnNldCgpLnRvcCwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQvtGCINCy0LXRgNGF0LBcclxuICAgICAgICAgICAgICAgICAgcG9zTGVmdD1zZWN0aW9uQmx1ci5vZmZzZXQoKS5sZWZ0LWJsdXIub2Zmc2V0KCkubGVmdDsgLy/Qv9C+0LvQvtC20LXQvdC40LUg0LHQu9C+0LrQsCDQvtGCINC70LXQstC+0LPQviDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlYyB0b3AgdG9wLSAnK3NlY3Rpb25CbHVyLm9mZnNldCgpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmx1ciB0b3AtICcrYmx1ci5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3AtICcrcG9zVG9wKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0LSAnK3Bvc0xlZnQpO1xyXG4gICAgICAgICAgICAgICAgYmx1ci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOndpZHRoQmFja2dyKydweCcrJyAnKyAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBwb3NMZWZ0ICsncHgnKycgJytwb3NUb3ArJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGJsdXIuc2V0KCk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBibHVyLnNldCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdmaXhlZCcpO1xyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHdTY3JvbGw9JCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICBtZW51bGVmdD0kKCcuY29sdW1uX18xX2Jsb2cgLmpzX3VsX21lbnUnKSxcclxuICAgICAgICAgICAgbWVudUNsb25lPW1lbnVsZWZ0LmNsb25lKCksXHJcbiAgICAgICAgICAgIGZpeGVkTWVudT0kKCcuZml4ZWRfbWVudScpLFxyXG4gICAgICAgICAgICBtZW51U3RhdGljPSQoJy5qc19zdGF0aWMnKTtcclxuICAgICAgICAgICAgdG9wU3RhdGljPW1lbnVTdGF0aWMub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIGlmKHRvcFN0YXRpYzw9d1Njcm9sbCl7XHJcbiAgICAgICAgICAgIGlmKCFmaXhlZE1lbnUuZmluZCgnLmpzX3VsX21lbnUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgZml4ZWRNZW51LmFwcGVuZChtZW51Q2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgbWVudVN0YXRpYy5jc3MoJ29wYWNpdHknLDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZpeGVkTWVudS5maW5kKCcuanNfdWxfbWVudScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBtZW51U3RhdGljLmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgZnVuY3Rpb24gY2hlY2tTZXZ0aW9uKCl7XHJcbiAgICAgICAgICAgJCgnLmJsb2NrX19jb2x1bW5fXzJfYmxvZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICB0b3BFZGdlPSR0aGlzLm9mZnNldCgpLnRvcC0yMDAsXHJcbiAgICAgICAgICAgICAgICAgICBib3R0b209dG9wRWRnZSskdGhpcy5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgaWYodG9wRWRnZTx3U2Nyb2xsICYmIGJvdHRvbT53U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SWQ9JHRoaXMuZGF0YSgnc2VjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTWVudWxlZnQ9JCgnLmZpeGVkX21lbnUgLmNvbHVtbl9fMV9ibG9nJyk7Ly/QvdCw0YXQvtC00LjQvCDQvNC10L3RjiDRgdC70LXQstCwXHJcbiAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxpc3RJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgYmxvY2tNZW51bGVmdC5maW5kKCcuanNfdWxfbWVudScpLnJlbW92ZUNsYXNzKCcuYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpO1xyXG4gICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggYmxvY2tNZW51bGVmdC5maW5kKCcuYWN0aXZlU3Ryb2tlX2Jsb2dUaGVtYScpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICBibG9ja01lbnVsZWZ0LmZpbmQoJ1tkYXRhLWlkPScrbGlzdElkKyddJykuYWRkQ2xhc3MoJy5hY3RpdmVTdHJva2VfYmxvZ1RoZW1hJyk7XHJcblxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgICAgICBjaGVja1NldnRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0oKSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiB2YXIgYnV0dG9uQXV0aG9yaXRoYXRpb249JCgnLmpzX2J1dHRvbkF1dGhvcml0aGF0aW9uJyksLy/QutC90L7Qv9C60LAg0JDQstGC0L7RgNC40LfQsNGG0LjRj1xyXG4gICAgIGJ1dHRvbk1haW5CYWNrUmV2ZXJzPSQoJy5qc19idXR0b25NYWluQmFja1JldmVycycpLC8v0LrQvdC+0L/QutCwINCd0LAg0LPQu9Cw0LLQvdGD0Y4sINGH0YLQvtCxINC/0LXRgNC10LLQtdGA0L3Rg9GC0Ywg0L7QsdGA0LDRgtC90L4g0LHQu9C+0LpcclxuICAgIGZsaXBwZXJfd3JhcD0kKCcuZmxpcHBlcl93cmFwJyksLy/QvtCx0LXRgNGC0LrQsCDQsdC70L7QutC+0LIg0LDQstGC0L7RgNC40LfQsNGG0LjRjy/Qv9GA0LjQstC10YLRgdGC0LLQuNC1XHJcbiAgICBmcm9udEJsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2Zyb250JyksLy/Qv9C10YDQtdC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcbiAgICBiYWNrQmxvY2s9JCgnLmJsb2NrV2VsbGNvbWVfYmFjaycpOy8v0LfQsNC00L3Rj9GPINGH0LDRgdGC0Ywg0LHQu9C+0LrQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXHJcblxyXG4gICAgLy/QvdCw0LbQuNC80LDQtdC8INC90LAg0LrQvdC+0L/QutGDINCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgtGB0Y8g0LHQu9C+0Log0YEg0L/QvtC70Y/QvNC4INC00LvRjyDQstGF0L7QtNCwXHJcbiAgICBidXR0b25BdXRob3JpdGhhdGlvbi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygn0L/QvtC60LDQt9Cw0YLRjCDQsdGN0LonKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2Zyb250QmxvY2sudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXlfbm9uZScpfSwgMjAwKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2JhY2tCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG5cclxuICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgYnV0dG9uQXV0aG9yaXRoYXRpb24uZmFkZU91dCg1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuXHJcbiAgICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQndCwINCz0LvQsNCy0L3Rg9CxINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgICBidXR0b25NYWluQmFja1JldmVycy5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygn0L/QvtC60LDQt9Cw0YLRjCDRhNGA0L7QvdGCJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2JhY2tCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG5cclxuICAgICAgICBmbGlwcGVyX3dyYXAudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQsdC70L7QulxyXG4gICAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVJbig1MDApOy8vINC60L3QvtC/0LrQtSDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC00LXQu9Cw0LXQvCDQvdC10LLQuNC00LjQvNC+0LlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiIsIiQoZnVuY3Rpb24oKXtcclxudmFyIHBhcnJhbGF4TGF5ZXI9JCgnLnBhcnJhbGF4X2xheWVyJyk7Ly/RgdC70L7QuSDQv9Cw0YDQsNC70LDQutGB0LBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHc9KHdpbmRvdy5pbm5lcldpZHRoLzIpLFxyXG4gICAgICAgICAgICBoPSh3aW5kb3cuaW5uZXJIZWlnaHQvMik7XHJcbiAgICAgICAgcGFycmFsYXhMYXllci5tYXAoZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHZhciBwb3NpcmlvbkxlZnQ9dyooa2V5LzEwMCksXHJcbiAgICAgICAgICAgICAgICBwb3N1dGlvbkJvdHRvbT1oKihrZXkvMTAwKTtcclxuICAgICAgICAgICAgJCh2YWx1ZSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdsZWZ0JzonLScrcG9zaXJpb25MZWZ0KydweCcsXHJcbiAgICAgICAgICAgICAgICAnYm90dG9tJzonLScrcG9zdXRpb25Cb3R0b20rJ3B4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlJyxmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgdz0od2luZG93LmlubmVyV2lkdGgvMiktZS5wYWdlWCxcclxuICAgICAgICAgICAgaD0od2luZG93LmlubmVySGVpZ2h0LzIpLWUucGFnZVk7XHJcbiAgICAgICAgcGFycmFsYXhMYXllci5tYXAoZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlWD13Kigoa2V5KS8xMDApLFxyXG4gICAgICAgICAgICAgICAgbW92ZVk9aCooKGtleSkvMTAwKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtb3ZlWCxtb3ZlWSk7XHJcbiAgICAgICAgICAgICAgICAkKHZhbHVlKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3RyYW5zbGF0ZTNkKCcrbW92ZVgrJ3B4LCcrbW92ZVkrJ3B4LDApJyxcclxuICAgICAgICAgICAgICAgICAnbGVmdCc6LTEwKihrZXkpKydweCcsXHJcbiAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6LTUqKGtleSkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIC8vY29uc29sZS5sb2coJ3BhcnJhbGF4INC90LAg0YHRgtGA0LDQvdC40YbQsNGFJyk7XHJcbi8v0KTQo9Cd0JrQptCY0K8g0J/QkNCg0JDQm9CQ0JrQodCQINCU0JvQryDQotCV0JrQodCi0JAgLNCk0J7QotCeINCYINCT0J7QoCDQktCV0KDQotCY0JrQkNCb0KzQndCeXHJcbiAgICB2YXIgcGFycmFsYXhWZXJ0aWNhbD0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHdvcmRCaWc9JCgnLnN2Z19wb3J0Zm9saW8nKSwvL9Cx0L7Qu9GM0YjQsNGPINC90LDQu9C/0LjRgdGMINC60L7RgtC+0YDRg9GOINCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICAgICAgbW92ZVBob3RvPSQoJy5ibG9ja1ByZXNlbnQnKSwvL9Cx0LvQvtC6INGBINGE0L7RgtC+INC60L7RgtC+0YDQvtC1INCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICAgICAgbW92ZUJhY2tncm91bmQ9JCgnLnZlcnRpY2FsUGFycmFsbGF4V3BhcCcpOy8v0LrQsNGA0YLQuNC90LrQsCAg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQtNCy0LjQs9Cw0YLRjFxyXG4gICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICBtb3ZlIDogZnVuY3Rpb24od1Njcm9sbCxibG9jayxwcm9jZW50TW92ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyYWZlPXdTY3JvbGwvLXByb2NlbnRNb3ZlKyclJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTNEPSd0cmFuc2xhdGUzZCgwLCcrc3RyYWZlKycsMCknO1xyXG4gICAgICAgICAgICAgICAgYmxvY2suY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzp0cmFuc2Zvcm0zRCxcclxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOnRyYW5zZm9ybTNEXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbih3U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLG1vdmVQaG90bywzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLHdvcmRCaWcsMjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHdTY3JvbGwsbW92ZUJhY2tncm91bmQsNjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgdmFyIHdTY3JvbGw9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgcGFycmFsYXhWZXJ0aWNhbC5pbml0KHdTY3JvbGwpO1xyXG4gICB9KVxyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhciBpbWdzPVtdO1xyXG4gICAgJC5lYWNoKCQoJyonKSxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPSR0aGlzLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG4gICAgICAgICAgICBpbWFnZT0kdGhpcy5pcygnaW1nJyk7XHJcbiAgICAgICAgaWYoYmFja2dyb3VuZCE9J25vbmUnKXtcclxuICAgICAgICAgICB2YXIgcGF0aD1iYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsJycpLnJlcGxhY2UoJ1wiKScsJycpO1xyXG4gICAgICAgICAgICBpbWdzLnB1c2gocGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGltYWdlKXtcclxuICAgICAgICAgICAgdmFyIHBhdGg9JHRoaXMuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgIGlmKHBhdGgpe1xyXG4gICAgICAgICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVwY2VudE5vdz0xO1xyXG4gICAgZm9yKGk9MTtpPGltZ3MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgdmFyIGltYWdlPSQoJzxpbWc+Jyx7XHJcbiAgICAgICAgICAgIGF0dHI6e1xyXG4gICAgICAgICAgICAgICAgc3JjOmltZ3NbaV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltYWdlLm9uKHtcclxuICAgICAgICAgICAgbG9hZDpmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50UGVyY2VudChpbWdzLmxlbmd0aCwgcmVwY2VudE5vdyk7XHJcbiAgICAgICAgICAgICAgICByZXBjZW50Tm93Kys7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmVwY2VudE5vdysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb3VudFBlcmNlbnQodG90YWwsY3VycmVudCl7XHJcbiAgICAgICAgdmFyIHBlcmNlbnQ9TWF0aC5jZWlsKChjdXJyZW50L3RvdGFsKSoxMDApO1xyXG4gICAgICAgIGlmKCBwZXJjZW50Pj0wKSAkKCcud3JhcExvYWRlcicpLmZhZGVPdXQoKTtcclxuICAgICAgICAkKCcucGVyY2VudEN1cmVudCcpLnRleHQocGVyY2VudCsnICUnKTtcclxuICAgIH1cclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gIC8vY29uc29sZS5sb2coJ3NhbmQgbWFpbCcpO1xyXG4gICAgdmFyIGJhdHRvblNhbmQ9JCgnLmpzX3NhbmRNYWlsJyksLy/QutC90L7Qv9C60LAg0L7RgtC/0YDQsNCy0LrQuCDQv9C40YHRjNC80LBcclxuICAgICAgICBjbGVhckZvcm09JCgnLmpzX2NsZWFyRm9ybScpLC8v0LrQvdC+0L/QutCwINC+0YfQuNGB0YLQutC4INGE0L7RgNC80Ysg0L7RgtC/0YDQsNCy0LrQuCDQv9C40YHRjNC80LBcclxuICAgICAgICBpbnB1dE5hbWU9JCgnLmpzX2lucHV0TmFtZScpLC8v0L/QvtC70LUg0LjQvNGPINCw0LLRgtC+0YDQsCDQv9C40YHRjNC80LBcclxuICAgICAgICBpbnB1dEVtYWlsPSQoJy5qc19pbnB1dEVtYWlsJyksLy/Qv9C+0LvQtSDRjdC7LtC/0L7Rh9GC0YtcclxuICAgICAgICBpbnB1dFRleHQ9JCgnLmpzX2lucHV0VGV4dCcpOy8v0L/QvtC70LUg0YLQtdC60YHRgtCwINC/0LjRgdGM0LzQsFxyXG4vL9GE0YPQvdC60YbQuNGPINC+0YfQuNGB0YLQutC4INGE0L7RgNC80YtcclxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRGb3JtKCl7XHJcbiAgICAgICAgaW5wdXROYW1lLnZhbCgnJyk7XHJcbiAgICAgICAgaW5wdXRFbWFpbC52YWwoJycpO1xyXG4gICAgICAgIGlucHV0VGV4dC52YWwoJycpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJGb3JtLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgfSk7XHJcbiAgICBiYXR0b25TYW5kLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL9CS0LDQu9C40LTQvdC+0YHRgtGMINC/0L7Qu9GPIGVtYWlsXHJcbiAgICAgICAgdmFyIHZhbGlkSWNvbj0kKCcudmFsaWRhdGVJY29uJyksXHJcbiAgICAgICAgICAgIHZhbGlkTmFtZT0kKCcudmFsaWROYW1lJyksXHJcbiAgICAgICAgICAgIHZhbGlkVGV4dD0kKCcudmFsaWRUZXh0Jyk7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGlucHV0RW1haWwudmFsKCksXHJcbiAgICAgICAgICAgICAgICBlbWFpbFRlc3Q9MCxcclxuICAgICAgICAgICAgICAgIG5hbWVUZXN0PTAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VGVzdD0wO1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWRFbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3LV0rKD86XFwuW1xcdy1dKykqKXwoXCJbXFx3LVxcc10rXCIpKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopKShAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbEFkZHJlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZW1haWwgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBpZihpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkSWNvbi5jc3Moe1wiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybCgnLi4vaW1hZ2UvdmFsaWR5ZXMucG5nJylcIixcIm9wYWNpdHlcIjoxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFRlc3Q9MTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFsaWRJY29uLmNzcygnb3BhY2l0eScsMCk7fSwxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyB2YWxpZEljb24uY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy4uL2ltYWdlL3ZhbGlkbm8ucG5nJylcIixcIm9wYWNpdHlcIjoxfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ZhbGlkSWNvbi5jc3MoJ29wYWNpdHknLDApO30sMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7dmFsaWRJY29uLmNzcyh7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcIm5vbmVcIiAgfSk7ICB9XHJcbiAgICAgICAgLy/QutC+0L3QtdGGINCS0LDQu9C40LTQvdC+0YHRgtGMINC/0L7Qu9GPIGVtYWlsLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQutCwINC30LDQv9C+0LvQvdC10L3QuNGPINC/0L7Qu9GPINC40LzQtdC90LhcclxuICAgICAgICBjb25zb2xlLmxvZygnIG5hbWUgJytpbnB1dE5hbWUudmFsKCkubGVuZ3RoKTtcclxuICAgICAgICBpZihpbnB1dE5hbWUudmFsKCkubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBuYW1lVGVzdD0xO1xyXG4gICAgICAgIH1lbHNleyB2YWxpZE5hbWUuY3NzKCdvcGFjaXR5JywxKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ZhbGlkTmFtZS5jc3MoJ29wYWNpdHknLDApO30sMTUwMCk7fVxyXG4gICAgICAgIC8v0LrQvtC90LXRhiDQv9GA0L7QstC10YDQutCwINC30LDQv9C+0LvQvdC10L3QuNGPINC/0L7Qu9GPINC40LzQtdC90LhcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNC60LAg0LfQsNC/0L7Qu9C90LXQvdC40Y8g0L/QvtC70Y8g0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgaWYoaW5wdXRUZXh0LnZhbCgpLmxlbmd0aDwxKXtcclxuICAgICAgICAgICAgdmFsaWRUZXh0LmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZFRleHQuY3NzKCdvcGFjaXR5JywwKTt9LDE1MDApO1xyXG4gICAgICAgIH1lbHNle3ZhbGlkVGV4dD0xO31cclxuICAgICAgICAvL9C60L7QvdC10YYg0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDRgdC+0L7QsdGJ0LXQvdC40Y9cclxuICAgICAgICBpZih2YWxpZFRleHQ9PTEgJiYgbmFtZVRlc3Q9PTEgJiYgZW1haWxUZXN0PT0xICl7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIuLi9waHAvc2FuZE1haWwucGhwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyX25hbWU6aW5wdXROYW1lLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcl9lbWFpbDppbnB1dEVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcl90ZXh0OmlucHV0VGV4dC52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW5wdXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KCkpOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCfQsdC+0LvRjNGI0L7QtSDQvNC10L3RjicpOyBcclxuICAgIHZhciBidXR0b25HYW1idXJnZXI9JCgnLmhlYWRlcl9fYmxvY2tDbG9zZScpLC8v0LrQvdC+0L/QutCwINC+0YLQutGA0YvRgtC40Y8g0LzQtdC90Y4g0L3QsCDQstC10YHRjCDRjdC60YDQsNC9XHJcbiAgICAgICAgY2xvc2VMaW5lPSQoJy5ibG9ja0Nsb3NlX2xpbmUnKSwvL9GG0LXQvdGC0YDQsNC70YzQvdCw0Y8g0L/QvtC70L7RgdCwINC40Lcg0LrQvdC+0L/QutC4INCz0LDQvNCx0YPRgNCz0LXRgFxyXG4gICAgICAgIHdyYXBCbHVlV2FsbD0kKCcud3JhcHBlckJsdWVXYWxsJyksLy/QvtCx0LXRgNGC0LrQsCDQtNC70Y8g0YHRgtC10L3RiyDQvNC10L3RjlxyXG4gICAgICAgIGxlZnRTaWRlX3dhbGw9JCgnLmJsdWVXYWxsX19sZWZ0U2lkZScpLC8v0LvQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDQvNC10L3RjiDQutC+0YLQvtGA0LDRjyDQv9C+0Y/QstC70Y/QtdGC0YHRj1xyXG4gICAgICAgIHJpZ2h0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fcmlnaHRTaWRlJyksLy/Qv9GA0LDQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICBtZW51V2FsbD0kKCcuYmx1ZVdhbGxfbWVudUxpbmsnKTsvL9Cx0LvQvtC6INGBINC90LDQt9Cy0LDQvdC40Y/QvNC4INC80LXQvdGOXHJcblxyXG4gICAgICAgIGJ1dHRvbkdhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxlZnRTaWRlX3dhbGwudG9nZ2xlQ2xhc3MoJ2xlZnQwJyk7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdyaWdodDAnKTtcclxuICAgICAgICAgICAgY2xvc2VMaW5lLnRvZ2dsZUNsYXNzKCdibG9ja0Nsb3NlX2xpbmVfYWN0aXZlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINC/0L7Qu9C+0YHQutC4INC60L3QvtC/0LrQuFxyXG4gICAgICAgICAgICB3cmFwQmx1ZVdhbGwudG9nZ2xlQ2xhc3MoJ3dyYXBwZXJCbHVlV2FsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgbWVudVdhbGwudG9nZ2xlQ2xhc3MoJ2JsdWVXYWxsX21lbnVMaW5rX2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgdmFyIGJ1dHRvbk5leHQ9JCgnLmpzX2Fycm93X19zbGlkZU5leHQnKSwvL9C60L3QvtC/0LrQsCDRgdC70LXQtCDRgdC70LDQudC0XHJcbiAgICAgICBidXR0b25QcmV3PSQoJy5qc19hcnJvd19fc2xpZGVQcmV3JyksLy/QutC90L7Qv9C60LAg0L/RgNC10LTRi9C00YbRidC40Lkg0YHQu9Cw0LTQuVxyXG4gICAgICAgY291bnRTbGlkZT0xLC8v0YHRh9C10YLRh9C40LrQsCDQsNC60YLQuNCy0L3QvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICBmbGFnPXRydWUsLy/QtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDQstGL0L/QvtC70L3QtdC90LjRjyDQsNC90LjQvNCw0YbQuNC4INC4INGH0YLQsSDQtNGA0YPQs9Cw0Y8g0L3QtSDQvdCw0YfQsNC70LDRgdGMINC/0L4g0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40YLRjNGB0Y8g0L/RgNC10LTRi9C00YPRidCw0Y9cclxuICAgICAgIGNvbnRhaW5lclNsaWRlPSQoJy5qc19ibG9ja1NsaWRlJyksLy/QsdC70L7QuiDRgSDQsdC+0LvRjNGJ0LjQvNC4INGE0L7RgtC60LDQvNC4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgIGJpZ1NsaWRlcz1jb250YWluZXJTbGlkZS5maW5kKCcubGlfX3NsaWRlcicpLFxyXG4gICAgICAgZHVyYXRpb249NTAwO1xyXG4vLy0tLS0t0JDQndCY0JzQkNCm0JjQryDQotCV0JrQodCi0JAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgZmxhZ1RleHQ9dHJ1ZSxcclxuICAgICAgICBhcnJvd1NsaWRlPSQoJy5qc19hcnJvd19fc2xpZGUnKTsvL9GB0YLRgNC10LvQvtGH0LrQsCDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0YHQu9Cw0LnQtNCwINCy0LLQtdGA0YUg0Lgg0LLQvdC40LdcclxuXHJcbiAgIGZ1bmN0aW9uIGFuaW1hdGVkVGV4dChibG9ja190ZXh0LGFuaW1hdGVfdGV4dCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygn0YHRgtCw0YDRgiDQsNC90LjQvNCw0YbQuCDRgtC10LrRgdGC0LAnKTtcclxuICAgICAgICB2YXIgYmxvY2tfX3RleHQ9YmxvY2tfdGV4dCxcclxuICAgICAgICAgICAgdHJpbVRleHQ9YmxvY2tfX3RleHQudHJpbSgpLFxyXG4gICAgICAgICAgICBhcnJheV90ZXh0PXRyaW1UZXh0LnNwbGl0KCcnKSxcclxuICAgICAgICAgICAgd29yZD0nJyxcclxuICAgICAgICAgICAgbGV0dGVySHRtbCxcclxuICAgICAgICAgICAgZGVmZj0kLkRlZmVycmVkKCk7XHJcbiAgICAgICAgYXJyYXlfdGV4dC5mb3JFYWNoKGZ1bmN0aW9uKGxldHRlcil7XHJcbiAgICAgICAgICAgIGlmKGxldHRlciE9JyAnKXtcclxuICAgICAgICAgICAgICAgICBsZXR0ZXJIdG1sPSc8c3BhbiBjbGFzcz1cImxldHRlcl9zcGFuXCI+JytsZXR0ZXIrJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICBsZXR0ZXJIdG1sPSc8c3BhbiBjbGFzcz1cImxldHRlcl9zcGFuX19zcGFjZVwiPicrbGV0dGVyKyc8L3NwYW4+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3b3JkKz1sZXR0ZXJIdG1sO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGZsYWdUZXh0KXtcclxuICAgICAgICAgICAgZmxhZ1RleHQ9ZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRlX3RleHQuaHRtbCh3b3JkKTtcclxuICAgICAgICAgICAgdmFyIGxldHRlcj1hbmltYXRlX3RleHQuZmluZCgnLmxldHRlcl9zcGFuJyksXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyPTAsXHJcbiAgICAgICAgICAgICAgICB0aW1lcixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPTIwMDAvYXJyYXlfdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQutC+0Lst0LLQviDQsdGD0LrQsiAnK2xldHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93TGV0dGVyKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudExldHRlcj1sZXR0ZXIuZXEoY291bnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExldHRlci5hZGRDbGFzcygnYWN0aXZlX3dvcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudGVyPD1sZXR0ZXIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcj1zZXRUaW1lb3V0KHNob3dMZXR0ZXIoKSxkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihhcnJheV90ZXh0Lmxlbmd0aD09Y291bnRlcikgZGVmZi5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgdGltZXIhPSd1bmRlZmluZWQnKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3dMZXR0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmZi5kb25lKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZsYWdUZXh0PXRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3Ryb2tlTmFtZVNpdGU9JCgnLmpzX25hbWVTaXRlJyksLy/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINC90LDQt9Cy0LDQvdC40LUg0YHQsNC50YLQsCDQuNC3INGB0LvQsNC50LTQsFxyXG4gICAgICAgIHN0cm9rZVdvcmtGbG93PSQoJy5qc193b3JrZmxvdycpLC8v0YHRgtGA0L7QutCwINC60YPQtNCwINCx0YPQtNC10YIg0L/QuNGB0LDRgtGM0YHRjyDRgtC10LfQvdC+0LvQvtCz0LjQuNC4INGB0LDQudGC0LAg0LjQtyDRgdC70LDQudC00LBcclxuICAgICAgICBzdHJva2VMaW5rRm9yU2l0ZT0kKCcuanNfbGlua0ZvclNpdGUnKTsvL9GB0YLRgNC+0LrQsCDQutGD0LTQsCDQsdGD0LTQtdGCINC/0LjRgdCw0YLRjNGB0Y8g0YHRgdGL0LvQutCwINC90LAg0YHQsNC50YIg0LjQtyDRgdC70LDQudC00LBcclxuXHJcbiAgICBhcnJvd1NsaWRlLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgIHRoaXNJbWFnZT0kdGhpcy5maW5kKCcubGlfc2xpZGVTbWFsbF9hY3RpdmUnKS5maW5kKCcuYXJyb3dfX3NsaWRlSW1hZ2UnKSxcclxuICAgICAgICAgICAgdGl0bGVTaXRlPXRoaXNJbWFnZS5kYXRhKCduYW1lJyksXHJcbiAgICAgICAgICAgIHdvcmtmbG93U2l0ZT10aGlzSW1hZ2UuZGF0YSgnd29ya2Zsb3cnKSxcclxuICAgICAgICAgICAgbGlua3NTaXRlPXRoaXNJbWFnZS5kYXRhKCdsaW5rJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJysrKysrKysrKysrKysrKysrKysgJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25hbWUgJyt0aXRsZVNpdGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3b3JrICcrd29ya2Zsb3dTaXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbGluayAnK2xpbmtzU2l0ZSk7XHJcblxyXG4gICAgICAgICBhbmltYXRlZFRleHQodGl0bGVTaXRlLHN0cm9rZU5hbWVTaXRlKTtcclxuICAgICAgICAgYW5pbWF0ZWRUZXh0KHdvcmtmbG93U2l0ZSxzdHJva2VXb3JrRmxvdyk7XHJcbiAgICAgICAgc3Ryb2tlTmFtZVNpdGUudGV4dCh0aXRsZVNpdGUpO1xyXG4gICAgICAgIHN0cm9rZVdvcmtGbG93LnRleHQod29ya2Zsb3dTaXRlKTtcclxuICAgICAgICBzdHJva2VMaW5rRm9yU2l0ZS5hdHRyKCdocmVmJyxsaW5rc1NpdGUpO1xyXG4gICAgfSk7XHJcblxyXG4vLy0tLS0t0JrQntCd0JXQpiAg0JDQndCY0JzQkNCm0JjQryDQotCV0JrQodCi0JAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIGJ1dHRvbk5leHQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgIGZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICsrY291bnRTbGlkZTtcclxuICAgICAgICAgaWYoY291bnRTbGlkZT49YmlnU2xpZGVzLmxlbmd0aCkgY291bnRTbGlkZT0wO1xyXG4gICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgIHNtYWxsU2xpZGU9JHRoaXMuZmluZCgnLmxpX3NsaWRlU21hbGwnKSwvL9C90LDRhdC+0LTQuNC8INCy0YHQtSDRgdC70LDQudC00Ysg0LzQsNC70LXQvdGM0LrQuNC1XHJcbiAgICAgICAgICAgICBuZXh0U2xpZGU9Y291bnRTbGlkZSsxLC8v0YHQu9C10LQgINCy0LjQtNC40LzRi9C5INGB0LvQsNC50LQg0LzQsNC70LXQvdGM0LrQuNC5XHJcbiAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgcHJldjJTbGlkZT1jb3VudFNsaWRlLTI7XHJcblxyXG4gICAgICAgICBpZihuZXh0U2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKW5leHRTbGlkZT0wOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGlmKHByZXZTbGlkZTwwKXByZXZTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0xOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICBpZihwcmV2MlNsaWRlPT0tMSl7cHJldjJTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0xO30vL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgaWYocHJldjJTbGlkZT09LTIpe3ByZXYyU2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMjt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICd0b3AnOictMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCcxNTAlJyk7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgc21hbGxTbGlkZS5lcShuZXh0U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyDQkNCd0JjQnNCQ0KbQmNCvINCh0J7QodCV0JTQndCV0JPQniDQnNCQ0JvQldCd0KzQmtCe0JPQniDQodCb0JDQmdCU0JBcclxuICAgICAgICAgdmFyIGFub3RoZXJTbWFsbFNsaWRlPSR0aGlzLnNpYmxpbmdzKCcuYXJyb3dGb3JTbGlkZXJfc2lkZScpLmZpbmQoJy5saV9zbGlkZVNtYWxsJyk7Ly/RgdC+0YHQtdC00L3QuNC5INC80LDQu9C10L3RjNC60LjQuSDRgdC70LDQudC0XHJcbiAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKHByZXYyU2xpZGUpLmFuaW1hdGUoey8v0LzQtdC90Y/QtdC8INC80LXRgdGC0L7QvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0YLQsNC8INCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgJ3RvcCc6JzEwMCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTE1MCUnKTtcclxuICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBhbm90aGVyU21hbGxTbGlkZS5lcShwcmV2U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LHQvtC70YzRiNC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgYmlnU2xpZGVzLmVxKHByZXZTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICd0b3AnOicxNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsJy0xMDAlJyk7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9fc2xpZGVyX2FjdGl2Jyk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBiaWdTbGlkZXMuZXEoY291bnRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICd0b3AnOic1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbGFnPXRydWU7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaV9fc2xpZGVyX2FjdGl2Jyk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICB9KTtcclxuXHJcbiAgICBidXR0b25QcmV3Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgICAgIGZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICAgIC0tY291bnRTbGlkZTtcclxuICAgICAgICAgICAgaWYoY291bnRTbGlkZTwwKSBjb3VudFNsaWRlPWJpZ1NsaWRlcy5sZW5ndGgtMTtcclxuICAgICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBzbWFsbFNsaWRlPSR0aGlzLmZpbmQoJy5saV9zbGlkZVNtYWxsJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLINC80LDQu9C10L3RjNC60LjQtVxyXG5cclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZT1jb3VudFNsaWRlLTEsXHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGU9Y291bnRTbGlkZSsxLC8v0YHQu9C10LQgINCy0LjQtNC40LzRi9C5INGB0LvQsNC50LQg0LzQsNC70LXQvdGM0LrQuNC5XHJcbiAgICAgICAgICAgICAgICBuZXh0MlNsaWRlPWNvdW50U2xpZGUrMjtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihuZXh0U2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKW5leHRTbGlkZT0wOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGlmKHByZXZTbGlkZTwwKXByZXZTbGlkZT1zbWFsbFNsaWRlLmxlbmd0aC0xOy8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBpZihuZXh0MlNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCl7bmV4dDJTbGlkZT0wO30vL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgaWYobmV4dDJTbGlkZT09c21hbGxTbGlkZS5sZW5ndGgrMSl7bmV4dDJTbGlkZT0xO30vL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuXHJcbiAgICAgICAgICAgIC8v0LDQvdC40LzQsNGG0LjRjyDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICBzbWFsbFNsaWRlLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoey8v0LzQtdC90Y/QtdC8INC80LXRgdGC0L7QvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0YLQsNC8INCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgICAgICd0b3AnOicxMDAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTUwJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOjB9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCQ0J3QmNCc0JDQptCY0K8g0KHQntCh0JXQlNCd0JXQk9CeINCc0JDQm9CV0J3QrNCa0J7Qk9CeINCh0JvQkNCZ0JTQkFxyXG4gICAgICAgICAgICB2YXIgYW5vdGhlclNtYWxsU2xpZGU9JHRoaXMuc2libGluZ3MoJy5hcnJvd0ZvclNsaWRlcl9zaWRlJykuZmluZCgnLmxpX3NsaWRlU21hbGwnKTsvL9GB0L7RgdC10LTQvdC40Lkg0LzQsNC70LXQvdGM0LrQuNC5INGB0LvQsNC50LRcclxuICAgICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEobmV4dDJTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6Jy0xNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCcxNTAlJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEobmV4dFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOjB9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8v0LDQvdC40LzQsNGG0LjRjyDQsdC+0LvRjNGI0L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBiaWdTbGlkZXMuZXEobmV4dFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOicxNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTAwJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmlnU2xpZGVzLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6JzUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBmbGFnPXRydWU7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsaV9fc2xpZGVyX2FjdGl2Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXJcclxuICAgICAgICBjaXJjbGVCbG9jazE9JCgnLmpzX2xpbmVDaXJjbGUxJykub2Zmc2V0KCkudG9wLTUwMCwvL9Cx0LvQvtC6MSDQs9C00LUg0LvQtdC20LDRgiDQutGA0YPRiNC4XHJcbiAgICAgICAgY2lyY2xlQmxvY2syPSQoJy5qc19saW5lQ2lyY2xlMicpLm9mZnNldCgpLnRvcC01MDAsLy/QsdC70L7QuiDQs9C00LUg0LvQtdC20LDRgiDQutGA0YPRiNC4XHJcbiAgICAgICAgY2lyY2xlQmxvY2szPSQoJy5qc19saW5lQ2lyY2xlMycpLm9mZnNldCgpLnRvcC01MDAsLy/QsdC70L7QuiDQs9C00LUg0LvQtdC20LDRgiDQutGA0YPRiNC4XHJcbiAgICAgICAgaHRtbD0kKCcuY3JpY2xlX2h0bWwnKSxcclxuICAgICAgICBjc3M9JCgnLmNyaWNsZV9jc3MnKSxcclxuICAgICAgICBscz0kKCcuY3JpY2xlX2pzJyksXHJcbiAgICAgICAgcGhwPSQoJy5jcmljbGVfcGhwJyksXHJcbiAgICAgICAgbXlzcWw9JCgnLmNyaWNsZV9teXNxbCcpLFxyXG4gICAgICAgIG5vZGVqcz0kKCcuY3JpY2xlX25vZGVqcycpLFxyXG4gICAgICAgIGdpdD0kKCcuY3JpY2xlX2dpdCcpLFxyXG4gICAgICAgIGd1bHA9JCgnLmNyaWNsZV9ndWxwJyksXHJcbiAgICAgICAgYm93ZXI9JCgnLmNyaWNsZV9ib3dlcicpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7Ly/QstGL0YHQvtGC0LAg0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAgICAgICAgaWYod1Njcm9sbD49Y2lyY2xlQmxvY2sxKXtcclxuICAgICAgICAgICAgaHRtbC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxodG1sLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBjc3MuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsY3NzLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBscy5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0Jyxscy5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod1Njcm9sbD49Y2lyY2xlQmxvY2syKXtcclxuICAgICAgICAgICAgcGhwLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLHBocC5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICAgICAgbXlzcWwuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsbXlzcWwuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgICAgIG5vZGVqcy5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0Jyxub2RlanMuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdTY3JvbGw+PWNpcmNsZUJsb2NrMyl7XHJcbiAgICAgICAgICAgIGdpdC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxnaXQuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgICAgIGd1bHAuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsZ3VscC5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICAgICAgYm93ZXIuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsYm93ZXIuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSgpKTsiXX0=
