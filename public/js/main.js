(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
    var buttonSave2=$('.js_buttonSaveTab2'),//кнопка сохранить данные первого блока
        js_NameArticle=$('.js_NameArticle'),//название статьи
        js_dataArticle=$('.js_dataArticle'),//дата статьи
        js_idArticle=$('.js_idArticle'),//id статьи
        js_textArticle=$('.js_textArticle');//содержание статьи

    buttonSave2.on('click',function(){
        function showMessage(){
            js_massegeSave.css('left','50%');
            js_massegeSave.animate({'opacity':1},1000);
            setTimeout(function(){
                js_massegeSave.animate({'opacity':0},500);
            },1500,function(){
                js_massegeSave.css('left','-100%');
            });
        }
        $.ajax({
            type: "POST",
            url: "../php/addBlogThema.php",
            data: {
                title:js_NameArticle.val(),
                dataArcticle:js_dataArticle.val(),
                idArticle:js_idArticle.val(),
                textArcticle:js_textArticle.val()
            },
            success: function(){
                js_NameArticle.val(' ');
                js_dataArticle.val(' ');
                js_idArticle.val(' ');
                js_textArticle.val(' ');
                showMessage();
            }
        });
       
    });

}());

$(function(){
    console.log('addPhoto');
    var buttonSave3=$('.js_buttonSaveTab3'),//кнопка сохранить данные первого блока
        js_NameSite=$('.js_NameSite'),//название сайта
        js_workflow=$('.js_workflowSite'),//название прогррам для создания
        js_addImage_forSite=$('.js_addImage_forSite'),//инпут загрузки картинки
        js_linkSite=$('.js_linkSite');//id статьи


    buttonSave3.on('click',function(e){
        e.preventDefault();
        console.log('33');
        function showMessage(){
            js_massegeSave.css('left','50%');
            js_massegeSave.animate({'opacity':1},1000);
            setTimeout(function(){
                js_massegeSave.animate({'opacity':0},500);
            },1500,function(){
                js_massegeSave.css('left','-100%');
            });
        }
        console.log(js_addImage_forSite.val());
        $.ajax({
            type: "POST",
            url: "../php/addSiteMywork.php",
            data: {
                nameSite:js_NameSite.val(),
                workflow:js_workflow.val(),
                linkSite:js_linkSite.val()
                
            },
            success: function(){
                // js_NameSite.val(' ');
                // js_workflow.val(' ');
                // js_linkSite.val(' ');
                //
                // showMessage();
            }
        });

    });

}());

$(function(){
   
    var buttonSave1=$('.js_buttonSaveTab1'),//кнопка сохранить данные первого блока
        js_massegeSave=$('.js_massegeSave'),
        htmlProcent=$('.input_html'),//проценты скила
        cssProcent=$('.input_css'),
        jsProcent=$('.input_js'),
        phpProcent=$('.input_php'),
        nodejsProcent=$('.input_nodejs'),
        musqlProcent=$('.input_mysql'),
        gulpProcent=$('.input_gulp'),
        gitProcent=$('.input_git'),
        bowerProcent=$('.input_bower');

    buttonSave1.on('click',function(){
        function showMessage(){
            js_massegeSave.css('left','50%');
            js_massegeSave.animate({'opacity':1},1000);
            setTimeout(function(){
                js_massegeSave.animate({'opacity':0},500);
            },1500,function(){
                js_massegeSave.css('left','-100%');
            });
        }
        $.ajax({
            type: "POST",
            url: "../php/addSkills.php",
            data: {
                html:{score:htmlProcent.val(),id:1},
                css:{score:cssProcent.val(),id:2},
                js:{score:jsProcent.val(),id:3},
                php:{score:phpProcent.val(),id:4},
                nodejs:{score:nodejsProcent.val(),id:5},
                mysql:{score:musqlProcent.val(),id:6},
                git:{score:gitProcent.val(),id:7},
                gulp:{score:gulpProcent.val(),id:8},
                bower:{score:bowerProcent.val(),id:9}
            },
            success: function(){
                htmlProcent.val(' ');
                cssProcent.val(' ');
                jsProcent.val(' ');
                phpProcent.val(' ');
                nodejsProcent.val(' ');
                musqlProcent.val(' ');
                gulpProcent.val(' ');
                gitProcent.val(' ');
                bowerProcent.val(' ');
                showMessage();
            }
        });
    });
}());

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
    console.log('vert parraaa');
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
       console.log('parr');
       var winScroll=$(window).scrollTop();
       parralaxVertical.init(winScroll);
   })


});
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
        if(window.innerWidth>767){
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
        }

    });
    $(window).on('mousemove',function(e){
        if(window.innerWidth>767){
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
        }


    });
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

        $('.percentCurent').text(percent+' %');
        if( percent>=0) setTimeout(function(){$('.wrapLoader').fadeOut()},1000);
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
       var windowScroll=$(window).scrollTop();//высота прокрутки
        if(windowScroll>=circleBlock1){
            html.css('stroke-dashoffset',html.data('score'));
            css.css('stroke-dashoffset',css.data('score'));
            ls.css('stroke-dashoffset',ls.data('score'));
        }
        if(windowScroll>=circleBlock2){
            php.css('stroke-dashoffset',php.data('score'));
            mysql.css('stroke-dashoffset',mysql.data('score'));
            nodejs.css('stroke-dashoffset',nodejs.data('score'));
        }
        if(windowScroll>=circleBlock3){
            git.css('stroke-dashoffset',git.data('score'));
            gulp.css('stroke-dashoffset',gulp.data('score'));
            bower.css('stroke-dashoffset',bower.data('score'));
        }
    })
}());
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEJsb2dUaGVtYS5qcyIsImFkZFNpdGVNeXdvcmsuanMiLCJhZGRTa2lsbHMuanMiLCJhdXRob3JpemF0aW9uLmpzIiwiYV9wYXJyYWxheFZlcnRpY2FsLmpzIiwiYmx1ckZvcm0uanMiLCJmaXhlZE1lbnVCbG9nLmpzIiwiaW5kZXhQYWdlX3JldmVyc0Jsb2NrLmpzIiwicGFyYWxsYXhNYWluLmpzIiwicHJlbG9hZGVyLmpzIiwic2FuZE1haWwuanMiLCJzaG93Qmx1ZVdhbGxNZW51LmpzIiwic2xpZGVyLmpzIiwic3dpdGNoVGFicy5qcyIsInVwZGF0ZVNraWxsLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJFcnJvciIsImYiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCIkIiwiYnV0dG9uU2F2ZTIiLCJqc19OYW1lQXJ0aWNsZSIsImpzX2RhdGFBcnRpY2xlIiwianNfaWRBcnRpY2xlIiwianNfdGV4dEFydGljbGUiLCJvbiIsInNob3dNZXNzYWdlIiwianNfbWFzc2VnZVNhdmUiLCJjc3MiLCJhbmltYXRlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJ0aXRsZSIsInZhbCIsImRhdGFBcmN0aWNsZSIsImlkQXJ0aWNsZSIsInRleHRBcmN0aWNsZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uU2F2ZTMiLCJqc19OYW1lU2l0ZSIsImpzX3dvcmtmbG93IiwianNfYWRkSW1hZ2VfZm9yU2l0ZSIsImpzX2xpbmtTaXRlIiwicHJldmVudERlZmF1bHQiLCJuYW1lU2l0ZSIsIndvcmtmbG93IiwibGlua1NpdGUiLCJidXR0b25TYXZlMSIsImh0bWxQcm9jZW50IiwiY3NzUHJvY2VudCIsImpzUHJvY2VudCIsInBocFByb2NlbnQiLCJub2RlanNQcm9jZW50IiwibXVzcWxQcm9jZW50IiwiZ3VscFByb2NlbnQiLCJnaXRQcm9jZW50IiwiYm93ZXJQcm9jZW50IiwiaHRtbCIsInNjb3JlIiwiaWQiLCJqcyIsInBocCIsIm5vZGVqcyIsIm15c3FsIiwiZ2l0IiwiZ3VscCIsImJvd2VyIiwiYXV0aExvZ2luIiwiYXV0aFBhc3N3b3JkIiwiY2hlY2tCb3giLCJidXR0b25FbnRlciIsImltZ0NoZWNrYm94IiwibG9naW50ZXN0IiwiY2hlY2tUZXN0IiwicGFzc3dvcmR0ZXN0IiwicHJvcCIsImxvZ2luIiwicGFzc3dvcmQiLCJtc2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJyYWxheFZlcnRpY2FsIiwid29yZEJpZyIsIm1vdmVQaG90byIsIm1vdmVCYWNrZ3JvdW5kIiwibW92ZSIsIndTY3JvbGwiLCJibG9jayIsInByb2NlbnRNb3ZlIiwic3RyYWZlIiwidHJhbnNmb3JtM0QiLCJ0cmFuc2Zvcm0iLCItd2Via2l0LXRyYW5zZm9ybSIsImluaXQiLCJ0aGlzIiwic2Nyb2xsIiwid2luU2Nyb2xsIiwic2Nyb2xsVG9wIiwiYmx1ciIsInNlY3Rpb25CbHVyIiwic2V0Iiwid2lkdGhCYWNrZ3IiLCJ3aWR0aCIsImhpZ2h0QmFja2dyIiwiaGVpZ2h0IiwibGVmdEJhY2tncm91bmQiLCJ0b3BCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZC1zaXplIiwiYmFja2dyb3VuZC1wb3NpdGlvbiIsImRvY3VtZW50IiwicmVhZHkiLCJyZXNpemUiLCJjaGVja1NlY3Rpb24iLCJlYWNoIiwiJHRoaXMiLCJ0b3BFZGdlIiwib2Zmc2V0IiwidG9wIiwiYm90dG9tIiwibGlzdElkIiwiYmxvY2tNZW51bGVmdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibWVudWxlZnQiLCJtZW51Q2xvbmUiLCJjbG9uZSIsImZpeGVkTWVudSIsIm1lbnVTdGF0aWMiLCJ0b3BTdGF0aWMiLCJhcHBlbmQiLCJoaWRlIiwicmVtb3ZlIiwic2hvdyIsImJ1dHRvbkF1dGhvcml0aGF0aW9uIiwiYnV0dG9uTWFpbkJhY2tSZXZlcnMiLCJmbGlwcGVyX3dyYXAiLCJmcm9udEJsb2NrIiwiYmFja0Jsb2NrIiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0IiwiZmFkZUluIiwicGFycmFsYXhMYXllciIsImlubmVyV2lkdGgiLCJ3IiwiaCIsImlubmVySGVpZ2h0IiwibWFwIiwia2V5IiwidmFsdWUiLCJwb3NpcmlvbkxlZnQiLCJwb3N1dGlvbkJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwYWdlWCIsInBhZ2VZIiwibW92ZVgiLCJtb3ZlWSIsImNvdW50UGVyY2VudCIsInRvdGFsIiwiY3VycmVudCIsInBlcmNlbnQiLCJNYXRoIiwiY2VpbCIsInRleHQiLCJpbWdzIiwiYmFja2dyb3VuZCIsImltYWdlIiwiaXMiLCJwYXRoIiwicmVwbGFjZSIsInB1c2giLCJhdHRyIiwicmVwY2VudE5vdyIsInNyYyIsImxvYWQiLCJlcnJvciIsImNsZWFySW5wdXRGb3JtIiwiaW5wdXROYW1lIiwiaW5wdXRFbWFpbCIsImlucHV0VGV4dCIsImJhdHRvblNhbmQiLCJjbGVhckZvcm0iLCJpc1ZhbGlkRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCJ2YWxpZEljb24iLCJ2YWxpZE5hbWUiLCJ2YWxpZFRleHQiLCJlbWFpbCIsImVtYWlsVGVzdCIsIm5hbWVUZXN0IiwiYmFja2dyb3VuZC1pbWFnZSIsInNlbmRlcl9uYW1lIiwic2VuZGVyX2VtYWlsIiwic2VuZGVyX3RleHQiLCJidXR0b25HYW1idXJnZXIiLCJjbG9zZUxpbmUiLCJ3cmFwQmx1ZVdhbGwiLCJsZWZ0U2lkZV93YWxsIiwicmlnaHRTaWRlX3dhbGwiLCJtZW51V2FsbCIsImFuaW1hdGVkVGV4dCIsImJsb2NrX3RleHQiLCJhbmltYXRlX3RleHQiLCJzaG93TGV0dGVyIiwiY3VycmVudExldHRlciIsImxldHRlciIsImVxIiwiY291bnRlciIsInRpbWVyIiwiZHVyYXRpb24iLCJhcnJheV90ZXh0IiwiZGVmZiIsInJlc29sdmUiLCJjbGVhclRpbWVvdXQiLCJsZXR0ZXJIdG1sIiwiYmxvY2tfX3RleHQiLCJ0cmltVGV4dCIsInRyaW0iLCJzcGxpdCIsIndvcmQiLCJEZWZlcnJlZCIsImZvckVhY2giLCJmbGFnVGV4dCIsImRvbmUiLCJidXR0b25OZXh0IiwiYnV0dG9uUHJldyIsImNvdW50U2xpZGUiLCJmbGFnIiwiY29udGFpbmVyU2xpZGUiLCJiaWdTbGlkZXMiLCJhcnJvd1NsaWRlIiwic3Ryb2tlTmFtZVNpdGUiLCJzdHJva2VXb3JrRmxvdyIsInN0cm9rZUxpbmtGb3JTaXRlIiwidGhpc0ltYWdlIiwidGl0bGVTaXRlIiwid29ya2Zsb3dTaXRlIiwibGlua3NTaXRlIiwic21hbGxTbGlkZSIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsInByZXYyU2xpZGUiLCJhbm90aGVyU21hbGxTbGlkZSIsInNpYmxpbmdzIiwibmV4dDJTbGlkZSIsInRhYiIsIm5hdl90YWJzIiwibWFpbldyYXBwZXIiLCJhY3RpdmVUYWIiLCJjaXJjbGVCbG9jazEiLCJjaXJjbGVCbG9jazIiLCJjaXJjbGVCbG9jazMiLCJscyIsIndpbmRvd1Njcm9sbCJdLCJtYXBwaW5ncyI6IkNBQUEsUUFBQUEsR0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxRQUFBQyxHQUFBQyxFQUFBQyxHQUFBLElBQUFKLEVBQUFHLEdBQUEsQ0FBQSxJQUFBSixFQUFBSSxHQUFBLENBQUEsR0FBQUUsR0FBQSxrQkFBQUMsVUFBQUEsT0FBQSxLQUFBRixHQUFBQyxFQUFBLE1BQUFBLEdBQUFGLEdBQUEsRUFBQSxJQUFBSSxFQUFBLE1BQUFBLEdBQUFKLEdBQUEsRUFBQSxNQUFBLElBQUFLLE9BQUEsdUJBQUFMLEVBQUEsS0FBQSxHQUFBTSxHQUFBVCxFQUFBRyxJQUFBTyxXQUFBWCxHQUFBSSxHQUFBLEdBQUFRLEtBQUFGLEVBQUFDLFFBQUEsU0FBQVosR0FBQSxHQUFBRSxHQUFBRCxFQUFBSSxHQUFBLEdBQUFMLEVBQUEsT0FBQUksR0FBQUYsRUFBQUEsRUFBQUYsSUFBQVcsRUFBQUEsRUFBQUMsUUFBQVosRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxNQUFBRCxHQUFBRyxHQUFBTyxRQUFBLElBQUEsR0FBQUgsR0FBQSxrQkFBQUQsVUFBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBVyxPQUFBVCxJQUFBRCxFQUFBRCxFQUFBRSxHQUFBLE9BQUFELEtBQUFXLEdBQUEsU0FBQVAsRUFBQVEsRUFBQUosR0FDQUssRUFBQSxXQUNBLEdBQUFDLEdBQUFELEVBQUEsc0JBQ0FFLEVBQUFGLEVBQUEsbUJBQ0FHLEVBQUFILEVBQUEsbUJBQ0FJLEVBQUFKLEVBQUEsaUJBQ0FLLEVBQUFMLEVBQUEsa0JBRUFDLEdBQUFLLEdBQUEsUUFBQSxXQUNBLFFBQUFDLEtBQ0FDLGVBQUFDLElBQUEsT0FBQSxPQUNBRCxlQUFBRSxTQUFBQyxRQUFBLEdBQUEsS0FDQUMsV0FBQSxXQUNBSixlQUFBRSxTQUFBQyxRQUFBLEdBQUEsTUFDQSxLQUFBLFdBQ0FILGVBQUFDLElBQUEsT0FBQSxXQUdBVCxFQUFBYSxNQUNBQyxLQUFBLE9BQ0FDLElBQUEsMEJBQ0FDLE1BQ0FDLE1BQUFmLEVBQUFnQixNQUNBQyxhQUFBaEIsRUFBQWUsTUFDQUUsVUFBQWhCLEVBQUFjLE1BQ0FHLGFBQUFoQixFQUFBYSxPQUVBSSxRQUFBLFdBQ0FwQixFQUFBZ0IsSUFBQSxLQUNBZixFQUFBZSxJQUFBLEtBQ0FkLEVBQUFjLElBQUEsS0FDQWIsRUFBQWEsSUFBQSxLQUNBWCxhQy9CQVAsRUFBQSxXQUNBdUIsUUFBQUMsSUFBQSxXQUNBLElBQUFDLEdBQUF6QixFQUFBLHNCQUNBMEIsRUFBQTFCLEVBQUEsZ0JBQ0EyQixFQUFBM0IsRUFBQSxvQkFDQTRCLEVBQUE1QixFQUFBLHdCQUNBNkIsRUFBQTdCLEVBQUEsZUFHQXlCLEdBQUFuQixHQUFBLFFBQUEsU0FBQXZCLEdBQ0FBLEVBQUErQyxpQkFDQVAsUUFBQUMsSUFBQSxNQVVBRCxRQUFBQyxJQUFBSSxFQUFBVixPQUNBbEIsRUFBQWEsTUFDQUMsS0FBQSxPQUNBQyxJQUFBLDJCQUNBQyxNQUNBZSxTQUFBTCxFQUFBUixNQUNBYyxTQUFBTCxFQUFBVCxNQUNBZSxTQUFBSixFQUFBWCxPQUdBSSxRQUFBLHFCQy9CQXRCLEVBQUEsV0FFQSxHQUFBa0MsR0FBQWxDLEVBQUEsc0JBQ0FRLEVBQUFSLEVBQUEsbUJBQ0FtQyxFQUFBbkMsRUFBQSxlQUNBb0MsRUFBQXBDLEVBQUEsY0FDQXFDLEVBQUFyQyxFQUFBLGFBQ0FzQyxFQUFBdEMsRUFBQSxjQUNBdUMsRUFBQXZDLEVBQUEsaUJBQ0F3QyxFQUFBeEMsRUFBQSxnQkFDQXlDLEVBQUF6QyxFQUFBLGVBQ0EwQyxFQUFBMUMsRUFBQSxjQUNBMkMsRUFBQTNDLEVBQUEsZUFFQWtDLEdBQUE1QixHQUFBLFFBQUEsV0FDQSxRQUFBQyxLQUNBQyxFQUFBQyxJQUFBLE9BQUEsT0FDQUQsRUFBQUUsU0FBQUMsUUFBQSxHQUFBLEtBQ0FDLFdBQUEsV0FDQUosRUFBQUUsU0FBQUMsUUFBQSxHQUFBLE1BQ0EsS0FBQSxXQUNBSCxFQUFBQyxJQUFBLE9BQUEsV0FHQVQsRUFBQWEsTUFDQUMsS0FBQSxPQUNBQyxJQUFBLHVCQUNBQyxNQUNBNEIsTUFBQUMsTUFBQVYsRUFBQWpCLE1BQUE0QixHQUFBLEdBQ0FyQyxLQUFBb0MsTUFBQVQsRUFBQWxCLE1BQUE0QixHQUFBLEdBQ0FDLElBQUFGLE1BQUFSLEVBQUFuQixNQUFBNEIsR0FBQSxHQUNBRSxLQUFBSCxNQUFBUCxFQUFBcEIsTUFBQTRCLEdBQUEsR0FDQUcsUUFBQUosTUFBQU4sRUFBQXJCLE1BQUE0QixHQUFBLEdBQ0FJLE9BQUFMLE1BQUFMLEVBQUF0QixNQUFBNEIsR0FBQSxHQUNBSyxLQUFBTixNQUFBSCxFQUFBeEIsTUFBQTRCLEdBQUEsR0FDQU0sTUFBQVAsTUFBQUosRUFBQXZCLE1BQUE0QixHQUFBLEdBQ0FPLE9BQUFSLE1BQUFGLEVBQUF6QixNQUFBNEIsR0FBQSxJQUVBeEIsUUFBQSxXQUNBYSxFQUFBakIsSUFBQSxLQUNBa0IsRUFBQWxCLElBQUEsS0FDQW1CLEVBQUFuQixJQUFBLEtBQ0FvQixFQUFBcEIsSUFBQSxLQUNBcUIsRUFBQXJCLElBQUEsS0FDQXNCLEVBQUF0QixJQUFBLEtBQ0F1QixFQUFBdkIsSUFBQSxLQUNBd0IsRUFBQXhCLElBQUEsS0FDQXlCLEVBQUF6QixJQUFBLEtBQ0FYLGFDaERBUCxFQUFBLFdBQ0F1QixRQUFBQyxJQUFBLFFBQ0EsSUFBQThCLEdBQUF0RCxFQUFBLGFBQ0F1RCxFQUFBdkQsRUFBQSxnQkFDQXdELEVBQUF4RCxFQUFBLGtCQUNBeUQsRUFBQXpELEVBQUEsbUJBQ0EwRCxFQUFBMUQsRUFBQSx1QkFDQTJELEVBQUEsRUFDQUMsRUFBQSxFQUNBQyxFQUFBLENBQ0FKLEdBQUFuRCxHQUFBLFFBQUEsV0FFQWdELEVBQUFwQyxNQUFBckIsT0FBQSxJQUFBOEQsRUFBQSxHQUNBSixFQUFBckMsTUFBQXJCLE9BQUEsSUFBQWdFLEVBQUEsR0FDQSxHQUFBTCxFQUFBTSxLQUFBLFdBQ0FGLEVBQUEsR0FFQUYsRUFBQWpELElBQUEsU0FBQSxpQkFDQUcsV0FBQSxXQUFBOEMsRUFBQWpELElBQUEsU0FBQSxTQUFBLE9BR0EsR0FBQWtELEdBQUEsR0FBQUUsR0FBQSxHQUFBRCxJQUNBckMsUUFBQUMsSUFBQSxXQUNBeEIsRUFBQWEsTUFDQUMsS0FBQSxPQUNBQyxJQUFBLHdCQUNBQyxNQUNBK0MsTUFBQVQsRUFBQXBDLE1BQ0E4QyxTQUFBVCxFQUFBckMsT0FFQUksUUFBQSxTQUFBMkMsR0FDQTFDLFFBQUFDLElBQUF5QyxHQUNBLFlBQUFBLElBRUFDLE9BQUFDLFNBQUFDLEtBQUEsb0NDbENBcEUsRUFBQSxXQUNBdUIsUUFBQUMsSUFBQSxlQUVBLElBQUE2QyxHQUFBLFdBQ0EsR0FBQUMsR0FBQXRFLEVBQUEsa0JBQ0F1RSxFQUFBdkUsRUFBQSxpQkFDQXdFLEVBQUF4RSxFQUFBLHlCQUNBLFFBQ0F5RSxLQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQ0EsR0FBQUMsR0FBQUgsR0FBQUUsRUFBQSxJQUNBRSxFQUFBLGlCQUFBRCxFQUFBLEtBQ0FGLEdBQUFsRSxLQUNBc0UsVUFBQUQsRUFDQUUsb0JBQUFGLEtBR0FHLEtBQUEsU0FBQVAsR0FDQVEsS0FBQVQsS0FBQUMsRUFBQUgsRUFBQSxHQUNBVyxLQUFBVCxLQUFBQyxFQUFBSixFQUFBLElBQ0FZLEtBQUFULEtBQUFDLEVBQUFGLEVBQUEsUUFJQXhFLEdBQUFrRSxRQUFBaUIsT0FBQSxXQUNBNUQsUUFBQUMsSUFBQSxPQUNBLElBQUE0RCxHQUFBcEYsRUFBQWtFLFFBQUFtQixXQUNBaEIsR0FBQVksS0FBQUcsT0MxQkFwRixFQUFBLFdBRUEsR0FBQXNGLEdBQUEsV0FDQSxHQUFBQSxHQUFBdEYsRUFBQSxlQUNBdUYsRUFBQXZGLEVBQUEsc0JBQ0EsUUFDQXdGLElBQUEsV0FDQSxHQUFBQyxHQUFBRixFQUFBRyxRQUNBQyxFQUFBSixFQUFBSyxTQUdBQyxJQUFBTixFQUFBRyxRQUFBSixFQUFBSSxTQUFBLEVBQ0FJLElBQUFQLEVBQUFLLFNBQUFOLEVBQUFNLFVBQUEsQ0FDQU4sR0FBQTdFLEtBQ0FzRixrQkFBQU4sRUFBQSxNQUFBRSxFQUFBLEtBQ0FLLHNCQUFBSCxFQUFBLE1BQUFDLEVBQUEsV0FNQTlGLEdBQUFpRyxVQUFBQyxNQUFBLFdBQ0FaLEVBQUFFLFFBRUF4RixFQUFBa0UsUUFBQWlDLE9BQUEsV0FDQWIsRUFBQUUsVUN6QkF4RixFQUFBLFdBRUFBLEVBQUFrRSxRQUFBNUQsR0FBQSxTQUFBLFdBaUJBLFFBQUE4RixLQUNBcEcsRUFBQSwwQkFBQXFHLEtBQUEsV0FDQSxHQUFBQyxHQUFBdEcsRUFBQWtGLE1BQ0FxQixFQUFBRCxFQUFBRSxTQUFBQyxJQUFBLElBQ0FDLEVBQUFILEVBQUFELEVBQUFWLFFBQ0EsSUFBQVcsRUFBQTdCLEdBQUFnQyxFQUFBaEMsRUFBQSxDQUNBLEdBQUFpQyxHQUFBTCxFQUFBdEYsS0FBQSxXQUNBNEYsRUFBQTVHLEVBQUEsMEJBRUE0RyxHQUFBQyxLQUFBLHlCQUFBQSxLQUFBLDJCQUFBQyxZQUFBLDBCQUNBRixFQUFBQyxLQUFBLFlBQUFGLEVBQUEsS0FBQUUsS0FBQSxpQkFBQUUsU0FBQSw2QkExQkEsR0FBQXJDLEdBQUExRSxFQUFBa0UsUUFBQW1CLFlBQ0EyQixFQUFBaEgsRUFBQSwrQkFDQWlILEVBQUFELEVBQUFFLFFBQ0FDLEVBQUFuSCxFQUFBLGVBQ0FvSCxFQUFBcEgsRUFBQSxhQUNBcUgsV0FBQUQsRUFBQVosU0FBQUMsSUFDQVksV0FBQTNDLEVBQ0F5QyxFQUFBTixLQUFBLGVBQUFoSCxTQUNBc0gsRUFBQUcsT0FBQUwsR0FDQUQsRUFBQU8sU0FHQUosRUFBQU4sS0FBQSxlQUFBVyxTQUNBUixFQUFBUyxRQWlCQXJCLFVDakNBcEcsRUFBQWlHLFVBQUFDLE1BQUEsV0FFQSxHQUFBd0IsR0FBQTFILEVBQUEsNEJBQ0EySCxFQUFBM0gsRUFBQSw0QkFDQTRILEVBQUE1SCxFQUFBLGlCQUNBNkgsRUFBQTdILEVBQUEsd0JBQ0E4SCxFQUFBOUgsRUFBQSxzQkFHQTBILEdBQUFwSCxHQUFBLFFBQUEsV0FDQU0sV0FBQSxXQUFBaUgsRUFBQUUsWUFBQSxpQkFBQSxLQUNBbkgsV0FBQSxXQUFBa0gsRUFBQUMsWUFBQSxpQkFBQSxLQUNBSCxFQUFBRyxZQUFBLFVBQ0FMLEVBQUFNLFFBQUEsT0FHQUwsRUFBQXJILEdBQUEsUUFBQSxTQUFBdkIsR0FDQUEsRUFBQStDLGlCQUNBbEIsV0FBQSxXQUFBa0gsRUFBQUMsWUFBQSxpQkFBQSxLQUNBbkgsV0FBQSxXQUFBaUgsRUFBQUUsWUFBQSxpQkFBQSxLQUNBSCxFQUFBRyxZQUFBLFVBQ0FMLEVBQUFPLE9BQUEsU0NyQkFqSSxFQUFBLFdBQ0EsR0FBQWtJLEdBQUFsSSxFQUFBLGtCQUNBQSxHQUFBaUcsVUFBQUMsTUFBQSxXQUNBLEdBQUFoQyxPQUFBaUUsV0FBQSxJQUFBLENBQ0EsR0FBQUMsR0FBQWxFLE9BQUFpRSxXQUFBLEVBQ0FFLEVBQUFuRSxPQUFBb0UsWUFBQSxDQUNBSixHQUFBSyxJQUFBLFNBQUFDLEVBQUFDLEdBQ0EsR0FBQUMsR0FBQU4sR0FBQUksRUFBQSxLQUNBRyxFQUFBTixHQUFBRyxFQUFBLElBQ0F4SSxHQUFBeUksR0FBQWhJLEtBQ0FtSSxLQUFBLElBQUFGLEVBQUEsS0FDQWhDLE9BQUEsSUFBQWlDLEVBQUEsS0FDQUUsaUJBQUEsWUFDQUMsbUJBQUEsU0FDQUMsZUFBQSxlQU1BL0ksRUFBQWtFLFFBQUE1RCxHQUFBLFlBQUEsU0FBQXZCLEdBQ0EsR0FBQW1GLE9BQUFpRSxXQUFBLElBQUEsQ0FDQSxHQUFBQyxHQUFBbEUsT0FBQWlFLFdBQUEsRUFBQXBKLEVBQUFpSyxNQUNBWCxFQUFBbkUsT0FBQW9FLFlBQUEsRUFBQXZKLEVBQUFrSyxLQUNBZixHQUFBSyxJQUFBLFNBQUFDLEVBQUFDLEdBQ0EsR0FBQVMsR0FBQWQsR0FBQSxFQUFBLEtBQ0FlLEVBQUFkLEdBQUEsRUFBQSxJQUVBckksR0FBQXlJLEdBQUFoSSxLQUNBc0UsVUFBQSxlQUFBbUUsRUFBQSxNQUFBQyxFQUFBLFFBQ0FQLE1BQUEsR0FBQSxFQUFBLEtBQ0FsQyxRQUFBLEVBQUEsRUFBQSxLQUNBbUMsaUJBQUEsWUFDQUMsbUJBQUEsU0FDQUMsZUFBQSxpQkNsQ0EvSSxFQUFBLFdBa0NBLFFBQUFvSixHQUFBQyxFQUFBQyxHQUNBLEdBQUFDLEdBQUFDLEtBQUFDLEtBQUFILEVBQUFELEVBQUEsSUFFQXJKLEdBQUEsa0JBQUEwSixLQUFBSCxFQUFBLE1BQ0FBLEdBQUEsR0FBQTNJLFdBQUEsV0FBQVosRUFBQSxlQUFBZ0ksV0FBQSxLQXJDQSxHQUFBMkIsS0FDQTNKLEdBQUFxRyxLQUFBckcsRUFBQSxLQUFBLFdBQ0EsR0FBQXNHLEdBQUF0RyxFQUFBa0YsTUFDQTBFLEVBQUF0RCxFQUFBN0YsSUFBQSxvQkFDQW9KLEVBQUF2RCxFQUFBd0QsR0FBQSxNQUNBLElBQUEsUUFBQUYsRUFBQSxDQUNBLEdBQUFHLEdBQUFILEVBQUFJLFFBQUEsUUFBQSxJQUFBQSxRQUFBLEtBQUEsR0FDQUwsR0FBQU0sS0FBQUYsR0FFQSxHQUFBRixFQUFBLENBQ0EsR0FBQUUsR0FBQXpELEVBQUE0RCxLQUFBLE1BQ0FILElBQ0FKLEVBQUFNLEtBQUFGLEtBSUEsSUFBQUksR0FBQSxDQUNBLEtBQUEzSyxFQUFBLEVBQUFBLEVBQUFtSyxFQUFBOUosT0FBQUwsSUFBQSxDQUNBLEdBQUFxSyxHQUFBN0osRUFBQSxTQUNBa0ssTUFDQUUsSUFBQVQsRUFBQW5LLEtBR0FxSyxHQUFBdkosSUFDQStKLEtBQUEsV0FDQWpCLEVBQUFPLEVBQUE5SixPQUFBc0ssR0FDQUEsS0FFQUcsTUFBQSxXQUNBSCxVQzlCQW5LLEVBQUEsV0FRQSxRQUFBdUssS0FDQUMsRUFBQXRKLElBQUEsSUFDQXVKLEVBQUF2SixJQUFBLElBQ0F3SixFQUFBeEosSUFBQSxJQVRBLEdBQUF5SixHQUFBM0ssRUFBQSxnQkFDQTRLLEVBQUE1SyxFQUFBLGlCQUNBd0ssRUFBQXhLLEVBQUEsaUJBQ0F5SyxFQUFBekssRUFBQSxrQkFDQTBLLEVBQUExSyxFQUFBLGdCQU9BNEssR0FBQXRLLEdBQUEsUUFBQSxXQUNBaUssTUFFQUksRUFBQXJLLEdBQUEsUUFBQSxXQVNBLFFBQUF1SyxHQUFBQyxHQUNBLEdBQUFDLEdBQUEsR0FBQUMsUUFBQSxrU0FDQSxPQUFBRCxHQUFBRSxLQUFBSCxHQVRBLEdBQUFJLEdBQUFsTCxFQUFBLGlCQUNBbUwsRUFBQW5MLEVBQUEsY0FDQW9MLEVBQUFwTCxFQUFBLGNBQ0FxTCxFQUFBWixFQUFBdkosTUFDQW9LLEVBQUEsRUFDQUMsRUFBQSxDQU1BLElBQUFGLEVBQ0FSLEVBQUFRLElBQ0FILEVBQUF6SyxLQUFBK0ssbUJBQUEsK0JBQUE3SyxRQUFBLElBQ0EySyxFQUFBLEVBQ0ExSyxXQUFBLFdBQUFzSyxFQUFBekssSUFBQSxVQUFBLElBQUEsUUFDQXlLLEVBQUF6SyxLQUFBK0ssbUJBQUEsOEJBQUE3SyxRQUFBLElBQ0FDLFdBQUEsV0FBQXNLLEVBQUF6SyxJQUFBLFVBQUEsSUFBQSxPQUVBeUssRUFBQXpLLEtBQUErSyxtQkFBQSxTQUdBakssUUFBQUMsSUFBQSxTQUFBZ0osRUFBQXRKLE1BQUFyQixRQUNBMkssRUFBQXRKLE1BQUFyQixPQUFBLEVBQ0EwTCxFQUFBLEdBQ0FKLEVBQUExSyxJQUFBLFVBQUEsR0FDQUcsV0FBQSxXQUFBdUssRUFBQTFLLElBQUEsVUFBQSxJQUFBLE9BR0FpSyxFQUFBeEosTUFBQXJCLE9BQUEsR0FDQXVMLEVBQUEzSyxJQUFBLFVBQUEsR0FDQUcsV0FBQSxXQUFBd0ssRUFBQTNLLElBQUEsVUFBQSxJQUFBLE9BQ0EySyxFQUFBLEVBRUEsR0FBQUEsR0FBQSxHQUFBRyxHQUFBLEdBQUFELEdBQ0F0TCxFQUFBYSxNQUNBQyxLQUFBLE9BQ0FDLElBQUEsc0JBQ0FDLE1BQ0F5SyxZQUFBakIsRUFBQXRKLE1BQ0F3SyxhQUFBakIsRUFBQXZKLE1BQ0F5SyxZQUFBakIsRUFBQXhKLE9BRUFJLFFBQUEsU0FBQTJDLEdBRUFzRyxhQy9EQXZLLEVBQUEsV0FDQXVCLFFBQUFDLElBQUEsZUFDQSxJQUFBb0ssR0FBQTVMLEVBQUEsdUJBQ0E2TCxFQUFBN0wsRUFBQSxvQkFDQThMLEVBQUE5TCxFQUFBLG9CQUNBK0wsRUFBQS9MLEVBQUEsdUJBQ0FnTSxFQUFBaE0sRUFBQSx3QkFDQWlNLEVBQUFqTSxFQUFBLHFCQUVBNEwsR0FBQXRMLEdBQUEsUUFBQSxXQUNBeUwsRUFBQWhFLFlBQUEsU0FDQWlFLEVBQUFqRSxZQUFBLFVBQ0E4RCxFQUFBOUQsWUFBQSwwQkFDQStELEVBQUEvRCxZQUFBLDBCQUNBa0UsRUFBQWxFLFlBQUEsZ0NDZEEvSCxFQUFBLFdBWUEsUUFBQWtNLEdBQUFDLEVBQUFDLEdBeUJBLFFBQUFDLEtBQ0EsR0FBQUMsR0FBQUMsRUFBQUMsR0FBQUMsRUFDQUgsR0FBQXZGLFNBQUEsZUFDQTBGLElBQ0FBLEdBQUFGLEVBQUExTSxTQUNBNk0sRUFBQTlMLFdBQUF5TCxJQUFBTSxJQUVBQyxFQUFBL00sUUFBQTRNLEdBQUFJLEVBQUFDLFVBQ0EsbUJBQUFKLElBQUFLLGFBQUFMLEdBL0JBLEdBSUFNLEdBSkFDLEVBQUFkLEVBQ0FlLEVBQUFELEVBQUFFLE9BQ0FQLEVBQUFNLEVBQUFFLE1BQUEsSUFDQUMsRUFBQSxHQUVBUixFQUFBN00sRUFBQXNOLFVBU0EsSUFSQVYsRUFBQVcsUUFBQSxTQUFBaEIsR0FFQVMsRUFEQSxLQUFBVCxFQUNBLDZCQUFBQSxFQUFBLFVBRUEsb0NBQUFBLEVBQUEsVUFFQWMsR0FBQUwsSUFFQVEsRUFBQSxDQUNBQSxHQUFBLEVBRUFwQixFQUFBeEosS0FBQXlLLEVBQ0EsSUFFQVgsR0FGQUgsRUFBQUgsRUFBQXZGLEtBQUEsZ0JBQ0E0RixFQUFBLEVBRUFFLEVBQUEsSUFBQUMsRUFBQS9NLE1BQ0EwQixTQUFBQyxJQUFBLGVBQUErSyxFQUFBMU0sUUFXQXdNLElBRUFRLEVBQUFZLEtBQUEsV0FDQUQsR0FBQSxFQUNBak0sUUFBQUMsSUFBQSxhQWxEQSxHQUFBa00sR0FBQTFOLEVBQUEsd0JBQ0EyTixFQUFBM04sRUFBQSx3QkFDQTROLEVBQUEsRUFDQUMsR0FBQSxFQUNBQyxFQUFBOU4sRUFBQSxrQkFDQStOLEVBQUFELEVBQUFqSCxLQUFBLGVBQ0E4RixFQUFBLElBRUFhLEdBQUEsRUFDQVEsRUFBQWhPLEVBQUEsb0JBNkNBaU8sRUFBQWpPLEVBQUEsZ0JBQ0FrTyxFQUFBbE8sRUFBQSxnQkFDQW1PLEVBQUFuTyxFQUFBLGtCQUVBZ08sR0FBQTFOLEdBQUEsUUFBQSxXQUVBLEdBQUFnRyxHQUFBdEcsRUFBQWtGLE1BQ0FrSixFQUFBOUgsRUFBQU8sS0FBQSx5QkFBQUEsS0FBQSxzQkFDQXdILEVBQUFELEVBQUFwTixLQUFBLFFBQ0FzTixFQUFBRixFQUFBcE4sS0FBQSxZQUNBdU4sRUFBQUgsRUFBQXBOLEtBQUEsT0FNQWtMLEdBQUFtQyxFQUFBSixHQUNBL0IsRUFBQW9DLEVBQUFKLEdBQ0FELEVBQUF2RSxLQUFBMkUsR0FDQUgsRUFBQXhFLEtBQUE0RSxHQUNBSCxFQUFBakUsS0FBQSxPQUFBcUUsS0FJQWIsRUFBQXBOLEdBQUEsUUFBQSxXQUVBLEdBQUF1TixFQUFBLENBQ0FBLEdBQUEsSUFDQUQsRUFDQUEsR0FBQUcsRUFBQWxPLFNBQUErTixFQUFBLEVBQ0EsSUFBQXRILEdBQUF0RyxFQUFBa0YsTUFDQXNKLEVBQUFsSSxFQUFBTyxLQUFBLGtCQUNBNEgsRUFBQWIsRUFBQSxFQUNBYyxFQUFBZCxFQUFBLEVBQ0FlLEVBQUFmLEVBQUEsQ0FFQWEsSUFBQUQsRUFBQTNPLFNBQUE0TyxFQUFBLEdBQ0FDLEVBQUEsSUFBQUEsRUFBQUYsRUFBQTNPLE9BQUEsR0FDQThPLElBQUEsSUFBQUEsRUFBQUgsRUFBQTNPLE9BQUEsR0FDQThPLElBQUEsSUFBQUEsRUFBQUgsRUFBQTNPLE9BQUEsR0FHQTJPLEVBQUFoQyxHQUFBb0IsR0FBQWxOLFNBQ0ErRixJQUFBLFNBQUFrRyxFQUFBLFdBQ0EzTSxFQUFBa0YsTUFBQXpFLElBQUEsTUFBQSxRQUNBVCxFQUFBa0YsTUFBQTRCLFlBQUEsMEJBRUEwSCxFQUFBaEMsR0FBQWlDLEdBQUEvTixTQUNBK0YsSUFBQSxHQUFBa0csRUFBQSxXQUNBM00sRUFBQWtGLE1BQUE2QixTQUFBLHlCQUlBLElBQUE2SCxHQUFBdEksRUFBQXVJLFNBQUEsd0JBQUFoSSxLQUFBLGlCQUNBK0gsR0FBQXBDLEdBQUFtQyxHQUFBak8sU0FDQStGLElBQUEsUUFBQWtHLEVBQUEsV0FDQTNNLEVBQUFrRixNQUFBekUsSUFBQSxNQUFBLFNBQ0FULEVBQUFrRixNQUFBNEIsWUFBQSwwQkFFQThILEVBQUFwQyxHQUFBa0MsR0FBQWhPLFNBQ0ErRixJQUFBLEdBQUFrRyxFQUFBLFdBQ0EzTSxFQUFBa0YsTUFBQTZCLFNBQUEsMEJBSUFnSCxFQUFBdkIsR0FBQWtDLEdBQUFoTyxTQUNBK0YsSUFBQSxRQUFBa0csRUFBQSxXQUNBM00sRUFBQWtGLE1BQUF6RSxJQUFBLE1BQUEsU0FDQVQsRUFBQWtGLE1BQUE0QixZQUFBLHNCQUVBaUgsRUFBQXZCLEdBQUFvQixHQUFBbE4sU0FDQStGLElBQUEsT0FBQWtHLEVBQUEsV0FDQWtCLEdBQUEsRUFDQTdOLEVBQUFrRixNQUFBNkIsU0FBQSx5QkFNQTRHLEVBQUFyTixHQUFBLFFBQUEsV0FFQSxHQUFBdU4sRUFBQSxDQUNBQSxHQUFBLElBQ0FELEVBQ0FBLEVBQUEsSUFBQUEsRUFBQUcsRUFBQWxPLE9BQUEsRUFDQSxJQUFBeUcsR0FBQXRHLEVBQUFrRixNQUNBc0osRUFBQWxJLEVBQUFPLEtBQUEsa0JBRUE2SCxFQUFBZCxFQUFBLEVBQ0FhLEVBQUFiLEVBQUEsRUFDQWtCLEVBQUFsQixFQUFBLENBR0FhLElBQUFELEVBQUEzTyxTQUFBNE8sRUFBQSxHQUNBQyxFQUFBLElBQUFBLEVBQUFGLEVBQUEzTyxPQUFBLEdBQ0FpUCxHQUFBTixFQUFBM08sU0FBQWlQLEVBQUEsR0FDQUEsR0FBQU4sRUFBQTNPLE9BQUEsSUFBQWlQLEVBQUEsR0FHQU4sRUFBQWhDLEdBQUFvQixHQUFBbE4sU0FDQStGLElBQUEsUUFBQWtHLEVBQUEsV0FDQTNNLEVBQUFrRixNQUFBekUsSUFBQSxNQUFBLFNBQ0FULEVBQUFrRixNQUFBNEIsWUFBQSwwQkFFQTBILEVBQUFoQyxHQUFBa0MsR0FBQWhPLFNBQ0ErRixJQUFBLEdBQUFrRyxFQUFBLFdBQ0EzTSxFQUFBa0YsTUFBQTZCLFNBQUEseUJBSUEsSUFBQTZILEdBQUF0SSxFQUFBdUksU0FBQSx3QkFBQWhJLEtBQUEsaUJBQ0ErSCxHQUFBcEMsR0FBQXNDLEdBQUFwTyxTQUNBK0YsSUFBQSxTQUFBa0csRUFBQSxXQUNBM00sRUFBQWtGLE1BQUF6RSxJQUFBLE1BQUEsUUFDQVQsRUFBQWtGLE1BQUE0QixZQUFBLDBCQUVBOEgsRUFBQXBDLEdBQUFpQyxHQUFBL04sU0FDQStGLElBQUEsR0FBQWtHLEVBQUEsV0FDQTNNLEVBQUFrRixNQUFBNkIsU0FBQSwwQkFJQWdILEVBQUF2QixHQUFBaUMsR0FBQS9OLFNBQ0ErRixJQUFBLFFBQUFrRyxFQUFBLFdBQ0EzTSxFQUFBa0YsTUFBQXpFLElBQUEsTUFBQSxTQUNBVCxFQUFBa0YsTUFBQTRCLFlBQUEsc0JBRUFpSCxFQUFBdkIsR0FBQW9CLEdBQUFsTixTQUNBK0YsSUFBQSxPQUFBa0csRUFBQSxXQUNBa0IsR0FBQSxFQUNBN04sRUFBQWtGLE1BQUE2QixTQUFBLDJCQ3pMQS9HLEVBQUEsV0FDQSxHQUFBK08sR0FBQS9PLEVBQUEsZ0JBQ0FnUCxFQUFBaFAsRUFBQSx5QkFDQWlQLGFBQUFqUCxFQUFBLGlCQUVBK08sRUFBQXpPLEdBQUEsUUFBQSxXQUNBLEdBQUFnRyxHQUFBdEcsRUFBQWtGLE1BQ0FnSyxFQUFBNUksRUFBQXRGLEtBQUEsTUFDQWdPLEdBQUFuSSxLQUFBLGVBQUFDLFlBQUEsY0FDQVIsRUFBQVMsU0FBQSxjQUNBa0ksWUFBQXBJLEtBQUEsbUJBQUFDLFlBQUEsa0JBQ0FtSSxZQUFBcEksS0FBQSxJQUFBcUksR0FBQW5JLFNBQUEsd0JDWEEvRyxFQUFBLFdBQ0EsR0FDQW1QLEdBQUFuUCxFQUFBLG1CQUFBd0csU0FBQUMsSUFBQSxJQUNBMkksRUFBQXBQLEVBQUEsbUJBQUF3RyxTQUFBQyxJQUFBLElBQ0E0SSxFQUFBclAsRUFBQSxtQkFBQXdHLFNBQUFDLElBQUEsSUFDQTdELEVBQUE1QyxFQUFBLGdCQUNBUyxFQUFBVCxFQUFBLGVBQ0FzUCxFQUFBdFAsRUFBQSxjQUNBZ0QsRUFBQWhELEVBQUEsZUFDQWtELEVBQUFsRCxFQUFBLGlCQUNBaUQsRUFBQWpELEVBQUEsa0JBQ0FtRCxFQUFBbkQsRUFBQSxlQUNBb0QsRUFBQXBELEVBQUEsZ0JBQ0FxRCxFQUFBckQsRUFBQSxnQkFFQUEsR0FBQWlHLFVBQUEzRixHQUFBLFNBQUEsV0FDQSxHQUFBaVAsR0FBQXZQLEVBQUFrRSxRQUFBbUIsV0FDQWtLLElBQUFKLElBQ0F2TSxFQUFBbkMsSUFBQSxvQkFBQW1DLEVBQUE1QixLQUFBLFVBQ0FQLEVBQUFBLElBQUEsb0JBQUFBLEVBQUFPLEtBQUEsVUFDQXNPLEVBQUE3TyxJQUFBLG9CQUFBNk8sRUFBQXRPLEtBQUEsV0FFQXVPLEdBQUFILElBQ0FwTSxFQUFBdkMsSUFBQSxvQkFBQXVDLEVBQUFoQyxLQUFBLFVBQ0FrQyxFQUFBekMsSUFBQSxvQkFBQXlDLEVBQUFsQyxLQUFBLFVBQ0FpQyxFQUFBeEMsSUFBQSxvQkFBQXdDLEVBQUFqQyxLQUFBLFdBRUF1TyxHQUFBRixJQUNBbE0sRUFBQTFDLElBQUEsb0JBQUEwQyxFQUFBbkMsS0FBQSxVQUNBb0MsRUFBQTNDLElBQUEsb0JBQUEyQyxFQUFBcEMsS0FBQSxVQUNBcUMsRUFBQTVDLElBQUEsb0JBQUE0QyxFQUFBckMsS0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGJ1dHRvblNhdmUyPSQoJy5qc19idXR0b25TYXZlVGFiMicpLC8v0LrQvdC+0L/QutCwINGB0L7RhdGA0LDQvdC40YLRjCDQtNCw0L3QvdGL0LUg0L/QtdGA0LLQvtCz0L4g0LHQu9C+0LrQsFxyXG4gICAgICAgIGpzX05hbWVBcnRpY2xlPSQoJy5qc19OYW1lQXJ0aWNsZScpLC8v0L3QsNC30LLQsNC90LjQtSDRgdGC0LDRgtGM0LhcclxuICAgICAgICBqc19kYXRhQXJ0aWNsZT0kKCcuanNfZGF0YUFydGljbGUnKSwvL9C00LDRgtCwINGB0YLQsNGC0YzQuFxyXG4gICAgICAgIGpzX2lkQXJ0aWNsZT0kKCcuanNfaWRBcnRpY2xlJyksLy9pZCDRgdGC0LDRgtGM0LhcclxuICAgICAgICBqc190ZXh0QXJ0aWNsZT0kKCcuanNfdGV4dEFydGljbGUnKTsvL9GB0L7QtNC10YDQttCw0L3QuNC1INGB0YLQsNGC0YzQuFxyXG5cclxuICAgIGJ1dHRvblNhdmUyLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICBmdW5jdGlvbiBzaG93TWVzc2FnZSgpe1xyXG4gICAgICAgICAgICBqc19tYXNzZWdlU2F2ZS5jc3MoJ2xlZnQnLCc1MCUnKTtcclxuICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuYW5pbWF0ZSh7J29wYWNpdHknOjF9LDEwMDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBqc19tYXNzZWdlU2F2ZS5hbmltYXRlKHsnb3BhY2l0eSc6MH0sNTAwKTtcclxuICAgICAgICAgICAgfSwxNTAwLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBqc19tYXNzZWdlU2F2ZS5jc3MoJ2xlZnQnLCctMTAwJScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIuLi9waHAvYWRkQmxvZ1RoZW1hLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTpqc19OYW1lQXJ0aWNsZS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGRhdGFBcmN0aWNsZTpqc19kYXRhQXJ0aWNsZS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGlkQXJ0aWNsZTpqc19pZEFydGljbGUudmFsKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0QXJjdGljbGU6anNfdGV4dEFydGljbGUudmFsKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGpzX05hbWVBcnRpY2xlLnZhbCgnICcpO1xyXG4gICAgICAgICAgICAgICAganNfZGF0YUFydGljbGUudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBqc19pZEFydGljbGUudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBqc190ZXh0QXJ0aWNsZS52YWwoJyAnKTtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG59KCkpO1xyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnYWRkUGhvdG8nKTtcclxuICAgIHZhciBidXR0b25TYXZlMz0kKCcuanNfYnV0dG9uU2F2ZVRhYjMnKSwvL9C60L3QvtC/0LrQsCDRgdC+0YXRgNCw0L3QuNGC0Ywg0LTQsNC90L3Ri9C1INC/0LXRgNCy0L7Qs9C+INCx0LvQvtC60LBcclxuICAgICAgICBqc19OYW1lU2l0ZT0kKCcuanNfTmFtZVNpdGUnKSwvL9C90LDQt9Cy0LDQvdC40LUg0YHQsNC50YLQsFxyXG4gICAgICAgIGpzX3dvcmtmbG93PSQoJy5qc193b3JrZmxvd1NpdGUnKSwvL9C90LDQt9Cy0LDQvdC40LUg0L/RgNC+0LPRgNGA0LDQvCDQtNC70Y8g0YHQvtC30LTQsNC90LjRj1xyXG4gICAgICAgIGpzX2FkZEltYWdlX2ZvclNpdGU9JCgnLmpzX2FkZEltYWdlX2ZvclNpdGUnKSwvL9C40L3Qv9GD0YIg0LfQsNCz0YDRg9C30LrQuCDQutCw0YDRgtC40L3QutC4XHJcbiAgICAgICAganNfbGlua1NpdGU9JCgnLmpzX2xpbmtTaXRlJyk7Ly9pZCDRgdGC0LDRgtGM0LhcclxuXHJcblxyXG4gICAgYnV0dG9uU2F2ZTMub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzMzJyk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd01lc3NhZ2UoKXtcclxuICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuY3NzKCdsZWZ0JywnNTAlJyk7XHJcbiAgICAgICAgICAgIGpzX21hc3NlZ2VTYXZlLmFuaW1hdGUoeydvcGFjaXR5JzoxfSwxMDAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuYW5pbWF0ZSh7J29wYWNpdHknOjB9LDUwMCk7XHJcbiAgICAgICAgICAgIH0sMTUwMCxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuY3NzKCdsZWZ0JywnLTEwMCUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzX2FkZEltYWdlX2ZvclNpdGUudmFsKCkpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2FkZFNpdGVNeXdvcmsucGhwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5hbWVTaXRlOmpzX05hbWVTaXRlLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgd29ya2Zsb3c6anNfd29ya2Zsb3cudmFsKCksXHJcbiAgICAgICAgICAgICAgICBsaW5rU2l0ZTpqc19saW5rU2l0ZS52YWwoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvLyBqc19OYW1lU2l0ZS52YWwoJyAnKTtcclxuICAgICAgICAgICAgICAgIC8vIGpzX3dvcmtmbG93LnZhbCgnICcpO1xyXG4gICAgICAgICAgICAgICAgLy8ganNfbGlua1NpdGUudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gc2hvd01lc3NhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSgpKTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG4gICBcclxuICAgIHZhciBidXR0b25TYXZlMT0kKCcuanNfYnV0dG9uU2F2ZVRhYjEnKSwvL9C60L3QvtC/0LrQsCDRgdC+0YXRgNCw0L3QuNGC0Ywg0LTQsNC90L3Ri9C1INC/0LXRgNCy0L7Qs9C+INCx0LvQvtC60LBcclxuICAgICAgICBqc19tYXNzZWdlU2F2ZT0kKCcuanNfbWFzc2VnZVNhdmUnKSxcclxuICAgICAgICBodG1sUHJvY2VudD0kKCcuaW5wdXRfaHRtbCcpLC8v0L/RgNC+0YbQtdC90YLRiyDRgdC60LjQu9CwXHJcbiAgICAgICAgY3NzUHJvY2VudD0kKCcuaW5wdXRfY3NzJyksXHJcbiAgICAgICAganNQcm9jZW50PSQoJy5pbnB1dF9qcycpLFxyXG4gICAgICAgIHBocFByb2NlbnQ9JCgnLmlucHV0X3BocCcpLFxyXG4gICAgICAgIG5vZGVqc1Byb2NlbnQ9JCgnLmlucHV0X25vZGVqcycpLFxyXG4gICAgICAgIG11c3FsUHJvY2VudD0kKCcuaW5wdXRfbXlzcWwnKSxcclxuICAgICAgICBndWxwUHJvY2VudD0kKCcuaW5wdXRfZ3VscCcpLFxyXG4gICAgICAgIGdpdFByb2NlbnQ9JCgnLmlucHV0X2dpdCcpLFxyXG4gICAgICAgIGJvd2VyUHJvY2VudD0kKCcuaW5wdXRfYm93ZXInKTtcclxuXHJcbiAgICBidXR0b25TYXZlMS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd01lc3NhZ2UoKXtcclxuICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuY3NzKCdsZWZ0JywnNTAlJyk7XHJcbiAgICAgICAgICAgIGpzX21hc3NlZ2VTYXZlLmFuaW1hdGUoeydvcGFjaXR5JzoxfSwxMDAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuYW5pbWF0ZSh7J29wYWNpdHknOjB9LDUwMCk7XHJcbiAgICAgICAgICAgIH0sMTUwMCxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAganNfbWFzc2VnZVNhdmUuY3NzKCdsZWZ0JywnLTEwMCUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2FkZFNraWxscy5waHBcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaHRtbDp7c2NvcmU6aHRtbFByb2NlbnQudmFsKCksaWQ6MX0sXHJcbiAgICAgICAgICAgICAgICBjc3M6e3Njb3JlOmNzc1Byb2NlbnQudmFsKCksaWQ6Mn0sXHJcbiAgICAgICAgICAgICAgICBqczp7c2NvcmU6anNQcm9jZW50LnZhbCgpLGlkOjN9LFxyXG4gICAgICAgICAgICAgICAgcGhwOntzY29yZTpwaHBQcm9jZW50LnZhbCgpLGlkOjR9LFxyXG4gICAgICAgICAgICAgICAgbm9kZWpzOntzY29yZTpub2RlanNQcm9jZW50LnZhbCgpLGlkOjV9LFxyXG4gICAgICAgICAgICAgICAgbXlzcWw6e3Njb3JlOm11c3FsUHJvY2VudC52YWwoKSxpZDo2fSxcclxuICAgICAgICAgICAgICAgIGdpdDp7c2NvcmU6Z2l0UHJvY2VudC52YWwoKSxpZDo3fSxcclxuICAgICAgICAgICAgICAgIGd1bHA6e3Njb3JlOmd1bHBQcm9jZW50LnZhbCgpLGlkOjh9LFxyXG4gICAgICAgICAgICAgICAgYm93ZXI6e3Njb3JlOmJvd2VyUHJvY2VudC52YWwoKSxpZDo5fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaHRtbFByb2NlbnQudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBjc3NQcm9jZW50LnZhbCgnICcpO1xyXG4gICAgICAgICAgICAgICAganNQcm9jZW50LnZhbCgnICcpO1xyXG4gICAgICAgICAgICAgICAgcGhwUHJvY2VudC52YWwoJyAnKTtcclxuICAgICAgICAgICAgICAgIG5vZGVqc1Byb2NlbnQudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBtdXNxbFByb2NlbnQudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBndWxwUHJvY2VudC52YWwoJyAnKTtcclxuICAgICAgICAgICAgICAgIGdpdFByb2NlbnQudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBib3dlclByb2NlbnQudmFsKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSgpKTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZygnZHNzZGQnKTtcclxuICAgIHZhciBhdXRoTG9naW49JCgnLmpzX2xvZ2luJyksLy/Qv9C+0LvQtSDQu9C+0LPQuNC90LBcclxuICAgICAgICBhdXRoUGFzc3dvcmQ9JCgnLmpzX3Bhc3N3b3JkJyksLy/Qv9C+0LvQtSDQv9Cw0YDQvtC70Y9cclxuICAgICAgICBjaGVja0JveD0kKCcuanNfY2hlY2tSb2JvdCcpLC8v0YfQtdC6INCx0L7QutGBINC/0YDQvtCy0LXRgNC60LAg0L3QsCDRgNCw0LHQvtGC0LBcclxuICAgICAgICBidXR0b25FbnRlcj0kKCcuanNfZW50ZXJCdXR0b24nKSwvL9C60L3QvtC/0LrQsCDQstGF0L7QtNCwXHJcbiAgICAgICAgaW1nQ2hlY2tib3g9JCgnLmltYWdlQ2hlY2tib3hSb2JvdCcpLC8v0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRh9C10LrQsdC+0LrRgdCwXHJcbiAgICAgICAgbG9naW50ZXN0PTAsXHJcbiAgICAgICAgY2hlY2tUZXN0PTAsXHJcbiAgICAgICAgcGFzc3dvcmR0ZXN0PTA7XHJcbiAgICBidXR0b25FbnRlci5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGF1dGhMb2dpbi52YWwoKS5sZW5ndGg+MClsb2dpbnRlc3Q9MTtcclxuICAgICAgICBpZihhdXRoUGFzc3dvcmQudmFsKCkubGVuZ3RoPjApcGFzc3dvcmR0ZXN0PTE7XHJcbiAgICAgICAgaWYoY2hlY2tCb3gucHJvcCgnY2hlY2tlZCcpPT10cnVlKXtcclxuICAgICAgICAgICAgY2hlY2tUZXN0PTE7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpbWdDaGVja2JveC5jc3MoJ2JvcmRlcicsJzJweCBzb2xpZCByZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2ltZ0NoZWNrYm94LmNzcygnYm9yZGVyJywnbm9uZScpO30sMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBpZihsb2dpbnRlc3Q9PTEgJiYgcGFzc3dvcmR0ZXN0PT0xICYmIGNoZWNrVGVzdD09MSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgdC+0LLQv9Cw0LvQvicpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL2NoZWNrTG9naW4ucGhwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW46YXV0aExvZ2luLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOmF1dGhQYXNzd29yZC52YWwoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG1zZz09J2xvY2F0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3BhZ2UvYXV0aG9yaXphdGlvbi5waHAnO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbn0oKSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ3ZlcnQgcGFycmFhYScpO1xyXG4vL9Ck0KPQndCa0KbQmNCvINCf0JDQoNCQ0JvQkNCa0KHQkCDQlNCb0K8g0KLQldCa0KHQotCQICzQpNCe0KLQniDQmCDQk9Ce0KAg0JLQldCg0KLQmNCa0JDQm9Cs0J3QnlxyXG4gICAgdmFyIHBhcnJhbGF4VmVydGljYWw9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB3b3JkQmlnPSQoJy5zdmdfcG9ydGZvbGlvJyksLy/QsdC+0LvRjNGI0LDRjyDQvdCw0LvQv9C40YHRjCDQutC+0YLQvtGA0YPRjiDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgICAgIG1vdmVQaG90bz0kKCcuYmxvY2tQcmVzZW50JyksLy/QsdC70L7QuiDRgSDRhNC+0YLQviDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdC8INC00LLQuNCz0LDRgtGMXHJcbiAgICAgICAgICAgIG1vdmVCYWNrZ3JvdW5kPSQoJy52ZXJ0aWNhbFBhcnJhbGxheFdwYXAnKTsvL9C60LDRgNGC0LjQvdC60LAgINC60L7RgtC+0YDRg9GOINCx0YPQtNC10Lwg0LTQstC40LPQsNGC0YxcclxuICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgbW92ZSA6IGZ1bmN0aW9uKHdTY3JvbGwsYmxvY2sscHJvY2VudE1vdmUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmFmZT13U2Nyb2xsLy1wcm9jZW50TW92ZSsnJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0zRD0ndHJhbnNsYXRlM2QoMCwnK3N0cmFmZSsnLDApJztcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6dHJhbnNmb3JtM0QsXHJcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzp0cmFuc2Zvcm0zRFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24od1Njcm9sbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCxtb3ZlUGhvdG8sMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUod1Njcm9sbCx3b3JkQmlnLDIwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZSh3U2Nyb2xsLG1vdmVCYWNrZ3JvdW5kLDYwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgIGNvbnNvbGUubG9nKCdwYXJyJyk7XHJcbiAgICAgICB2YXIgd2luU2Nyb2xsPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgIHBhcnJhbGF4VmVydGljYWwuaW5pdCh3aW5TY3JvbGwpO1xyXG4gICB9KVxyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgXHJcbiAgICB2YXIgYmx1cj0oZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgYmx1cj0kKCcuYmxvY2tfYmx1cicpLFxyXG4gICAgICAgICAgICBzZWN0aW9uQmx1cj0kKCcuanNfc2VjdGlvbldpdGhCbHVyJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgIHZhciAgd2lkdGhCYWNrZ3I9c2VjdGlvbkJsdXIud2lkdGgoKSwvL9GI0LjRgNC40L3QsCDRgdC10LrRhtC40Lgg0YEg0LHRjdC60LPRgNCw0YPQvdC00L7QvFxyXG4gICAgICAgICAgICAgICAgICBoaWdodEJhY2tncj1zZWN0aW9uQmx1ci5oZWlnaHQoKSwvL9GI0LjRgNC40L3QsCDRgdC10LrRhtC40Lgg0YEg0LHRjdC60LPRgNCw0YPQvdC00L7QvFxyXG4gICAgICAgICAgICAgICAgICAvLyBwb3NUb3A9c2VjdGlvbkJsdXIub2Zmc2V0KCkudG9wLWJsdXIub2Zmc2V0KCkudG9wLC8v0L/QvtC70L7QttC10L3QuNC1INC+0YIg0LLQtdGA0YXQsFxyXG4gICAgICAgICAgICAgICAgICAvLyBwb3NMZWZ0PXNlY3Rpb25CbHVyLm9mZnNldCgpLmxlZnQtYmx1ci5vZmZzZXQoKS5sZWZ0OyAvL9C/0L7Qu9C+0LbQtdC90LjQtSDQsdC70L7QutCwINC+0YIg0LvQtdCy0L7Qs9C+INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJhY2tncm91bmQ9LShzZWN0aW9uQmx1ci53aWR0aCgpLWJsdXIud2lkdGgoKSkvMiwvL9C/0L7Qu9C+0LbQtdC90LjQtSDQvtGCINCy0LXRgNGF0LBcclxuICAgICAgICAgICAgICAgICAgICB0b3BCYWNrZ3JvdW5kPS0oc2VjdGlvbkJsdXIuaGVpZ2h0KCktYmx1ci5oZWlnaHQoKSkvMjsgLy/Qv9C+0LvQvtC20LXQvdC40LUg0LHQu9C+0LrQsCDQvtGCINC70LXQstC+0LPQviDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgYmx1ci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOndpZHRoQmFja2dyKydweCcrJyAnKyBoaWdodEJhY2tncisncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogbGVmdEJhY2tncm91bmQgKydweCcrJyAnK3RvcEJhY2tncm91bmQrJ3B4J1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmx1ci5zZXQoKTtcclxuICAgIH0pO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIGJsdXIuc2V0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgd1Njcm9sbD0kKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgIG1lbnVsZWZ0PSQoJy5jb2x1bW5fXzFfYmxvZyAuanNfdWxfbWVudScpLFxyXG4gICAgICAgICAgICBtZW51Q2xvbmU9bWVudWxlZnQuY2xvbmUoKSxcclxuICAgICAgICAgICAgZml4ZWRNZW51PSQoJy5maXhlZF9tZW51JyksXHJcbiAgICAgICAgICAgIG1lbnVTdGF0aWM9JCgnLmpzX3N0YXRpYycpO1xyXG4gICAgICAgICAgICB0b3BTdGF0aWM9bWVudVN0YXRpYy5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgaWYodG9wU3RhdGljPD13U2Nyb2xsKXtcclxuICAgICAgICAgICAgaWYoIWZpeGVkTWVudS5maW5kKCcuanNfdWxfbWVudScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBmaXhlZE1lbnUuYXBwZW5kKG1lbnVDbG9uZSk7XHJcbiAgICAgICAgICAgICAgICBtZW51bGVmdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZml4ZWRNZW51LmZpbmQoJy5qc191bF9tZW51JykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG1lbnVsZWZ0LnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgZnVuY3Rpb24gY2hlY2tTZWN0aW9uKCl7XHJcbiAgICAgICAgICAgJCgnLmJsb2NrX19jb2x1bW5fXzJfYmxvZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICB0b3BFZGdlPSR0aGlzLm9mZnNldCgpLnRvcC0yMDAsXHJcbiAgICAgICAgICAgICAgICAgICBib3R0b209dG9wRWRnZSskdGhpcy5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgaWYodG9wRWRnZTx3U2Nyb2xsICYmIGJvdHRvbT53U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SWQ9JHRoaXMuZGF0YSgnc2VjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTWVudWxlZnQ9JCgnLmZpeGVkX21lbnUgLmpzX3VsX21lbnUnKTsvL9C90LDRhdC+0LTQuNC8INC80LXQvdGOINGB0LvQtdCy0LBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBibG9ja01lbnVsZWZ0LmZpbmQoJy5jb2x1bW5fXzFfYmxvZ19fbGluZScpLmZpbmQoJy5hY3RpdmVTdHJva2VfYmxvZ1RoZW1hJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZVN0cm9rZV9ibG9nVGhlbWEnKTtcclxuICAgICAgICAgICAgICAgICAgIGJsb2NrTWVudWxlZnQuZmluZCgnW2RhdGEtaWQ9JytsaXN0SWQrJ10nKS5maW5kKCcuanNfbGlua0FjdGl2JykuYWRkQ2xhc3MoJ2FjdGl2ZVN0cm9rZV9ibG9nVGhlbWEnKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICAgICAgY2hlY2tTZWN0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KCkpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gdmFyIGJ1dHRvbkF1dGhvcml0aGF0aW9uPSQoJy5qc19idXR0b25BdXRob3JpdGhhdGlvbicpLC8v0LrQvdC+0L/QutCwINCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cclxuICAgICBidXR0b25NYWluQmFja1JldmVycz0kKCcuanNfYnV0dG9uTWFpbkJhY2tSZXZlcnMnKSwvL9C60L3QvtC/0LrQsCDQndCwINCz0LvQsNCy0L3Rg9GOLCDRh9GC0L7QsSDQv9C10YDQtdCy0LXRgNC90YPRgtGMINC+0LHRgNCw0YLQvdC+INCx0LvQvtC6XHJcbiAgICBmbGlwcGVyX3dyYXA9JCgnLmZsaXBwZXJfd3JhcCcpLC8v0L7QsdC10YDRgtC60LAg0LHQu9C+0LrQvtCyINCw0LLRgtC+0YDQuNC30LDRhtC40Y8v0L/RgNC40LLQtdGC0YHRgtCy0LjQtVxyXG4gICAgZnJvbnRCbG9jaz0kKCcuYmxvY2tXZWxsY29tZV9mcm9udCcpLC8v0L/QtdGA0LXQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG4gICAgYmFja0Jsb2NrPSQoJy5ibG9ja1dlbGxjb21lX2JhY2snKTsvL9C30LDQtNC90Y/RjyDRh9Cw0YHRgtGMINCx0LvQvtC60LAg0L/RgNC40LLQtdGC0YHRgtCy0LjRj1xyXG5cclxuICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgYnV0dG9uQXV0aG9yaXRoYXRpb24ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZnJvbnRCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YmFja0Jsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgIGZsaXBwZXJfd3JhcC50b2dnbGVDbGFzcygncm90YXRlJyk7Ly/QvNC10L3Rj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCINCx0LvQvtC6XHJcbiAgICAgIGJ1dHRvbkF1dGhvcml0aGF0aW9uLmZhZGVPdXQoNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcbiAgICB9KTtcclxuICAgIC8v0L3QsNC20LjQvNCw0LXQvCDQvdCwINC60L3QvtC/0LrRgyDQndCwINCz0LvQsNCy0L3Rg9CxINC4INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YLRgdGPINCx0LvQvtC6INGBINC/0L7Qu9GP0LzQuCDQtNC70Y8g0LLRhdC+0LTQsFxyXG4gICAgYnV0dG9uTWFpbkJhY2tSZXZlcnMub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2JhY2tCbG9jay50b2dnbGVDbGFzcygnZGlzcGxheV9ub25lJyl9LCAyMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmcm9udEJsb2NrLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X25vbmUnKX0sIDIwMCk7XHJcbiAgICAgICAgZmxpcHBlcl93cmFwLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTsvL9C80LXQvdGP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIg0LHQu9C+0LpcclxuICAgICAgICBidXR0b25BdXRob3JpdGhhdGlvbi5mYWRlSW4oNTAwKTsvLyDQutC90L7Qv9C60LUg0JDQstGC0L7RgNC40LfQsNGG0LjRjyDQtNC10LvQsNC10Lwg0L3QtdCy0LjQtNC40LzQvtC5XHJcbiAgICB9KVxyXG59KTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbnZhciBwYXJyYWxheExheWVyPSQoJy5wYXJyYWxheF9sYXllcicpOy8v0YHQu9C+0Lkg0L/QsNGA0LDQu9Cw0LrRgdCwXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoPjc2Nyl7XHJcbiAgICAgICAgICAgIHZhciB3PSh3aW5kb3cuaW5uZXJXaWR0aC8yKSxcclxuICAgICAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKTtcclxuICAgICAgICAgICAgcGFycmFsYXhMYXllci5tYXAoZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXJpb25MZWZ0PXcqKGtleS8xMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3V0aW9uQm90dG9tPWgqKGtleS8xMDApO1xyXG4gICAgICAgICAgICAgICAgJCh2YWx1ZSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6Jy0nK3Bvc2lyaW9uTGVmdCsncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3R0b20nOictJytwb3N1dGlvbkJvdHRvbSsncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aD43Njcpe1xyXG4gICAgICAgICAgICB2YXIgdz0od2luZG93LmlubmVyV2lkdGgvMiktZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgIGg9KHdpbmRvdy5pbm5lckhlaWdodC8yKS1lLnBhZ2VZO1xyXG4gICAgICAgICAgICBwYXJyYWxheExheWVyLm1hcChmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHZhciBtb3ZlWD13Kigoa2V5KS8xMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVZPWgqKChrZXkpLzEwMCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1vdmVYLG1vdmVZKTtcclxuICAgICAgICAgICAgICAgICQodmFsdWUpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3RyYW5zbGF0ZTNkKCcrbW92ZVgrJ3B4LCcrbW92ZVkrJ3B4LDApJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6LTEwKihrZXkpKydweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6LTUqKGtleSkrJ3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaW1ncz1bXTtcclxuICAgICQuZWFjaCgkKCcqJyksZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZD0kdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICAgICAgaW1hZ2U9JHRoaXMuaXMoJ2ltZycpO1xyXG4gICAgICAgIGlmKGJhY2tncm91bmQhPSdub25lJyl7XHJcbiAgICAgICAgICAgdmFyIHBhdGg9YmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCcnKS5yZXBsYWNlKCdcIiknLCcnKTtcclxuICAgICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbWFnZSl7XHJcbiAgICAgICAgICAgIHZhciBwYXRoPSR0aGlzLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICBpZihwYXRoKXtcclxuICAgICAgICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIHJlcGNlbnROb3c9MTtcclxuICAgIGZvcihpPTE7aTxpbWdzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHZhciBpbWFnZT0kKCc8aW1nPicse1xyXG4gICAgICAgICAgICBhdHRyOntcclxuICAgICAgICAgICAgICAgIHNyYzppbWdzW2ldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWFnZS5vbih7XHJcbiAgICAgICAgICAgIGxvYWQ6ZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFBlcmNlbnQoaW1ncy5sZW5ndGgsIHJlcGNlbnROb3cpO1xyXG4gICAgICAgICAgICAgICAgcmVwY2VudE5vdysrO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJlcGNlbnROb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY291bnRQZXJjZW50KHRvdGFsLGN1cnJlbnQpe1xyXG4gICAgICAgIHZhciBwZXJjZW50PU1hdGguY2VpbCgoY3VycmVudC90b3RhbCkqMTAwKTtcclxuXHJcbiAgICAgICAgJCgnLnBlcmNlbnRDdXJlbnQnKS50ZXh0KHBlcmNlbnQrJyAlJyk7XHJcbiAgICAgICAgaWYoIHBlcmNlbnQ+PTApIHNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcud3JhcExvYWRlcicpLmZhZGVPdXQoKX0sMTAwMCk7XHJcbiAgICB9XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAvL2NvbnNvbGUubG9nKCdzYW5kIG1haWwnKTtcclxuICAgIHZhciBiYXR0b25TYW5kPSQoJy5qc19zYW5kTWFpbCcpLC8v0LrQvdC+0L/QutCwINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgY2xlYXJGb3JtPSQoJy5qc19jbGVhckZvcm0nKSwvL9C60L3QvtC/0LrQsCDQvtGH0LjRgdGC0LrQuCDRhNC+0YDQvNGLINC+0YLQv9GA0LDQstC60Lgg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgaW5wdXROYW1lPSQoJy5qc19pbnB1dE5hbWUnKSwvL9C/0L7Qu9C1INC40LzRjyDQsNCy0YLQvtGA0LAg0L/QuNGB0YzQvNCwXHJcbiAgICAgICAgaW5wdXRFbWFpbD0kKCcuanNfaW5wdXRFbWFpbCcpLC8v0L/QvtC70LUg0Y3Quy7Qv9C+0YfRgtGLXHJcbiAgICAgICAgaW5wdXRUZXh0PSQoJy5qc19pbnB1dFRleHQnKTsvL9C/0L7Qu9C1INGC0LXQutGB0YLQsCDQv9C40YHRjNC80LBcclxuLy/RhNGD0L3QutGG0LjRjyDQvtGH0LjRgdGC0LrQuCDRhNC+0YDQvNGLXHJcbiAgICBmdW5jdGlvbiBjbGVhcklucHV0Rm9ybSgpe1xyXG4gICAgICAgIGlucHV0TmFtZS52YWwoJycpO1xyXG4gICAgICAgIGlucHV0RW1haWwudmFsKCcnKTtcclxuICAgICAgICBpbnB1dFRleHQudmFsKCcnKTtcclxuICAgIH1cclxuICAgIGNsZWFyRm9ybS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2xlYXJJbnB1dEZvcm0oKTtcclxuICAgIH0pO1xyXG4gICAgYmF0dG9uU2FuZC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/QktCw0LvQuNC00L3QvtGB0YLRjCDQv9C+0LvRjyBlbWFpbFxyXG4gICAgICAgIHZhciB2YWxpZEljb249JCgnLnZhbGlkYXRlSWNvbicpLFxyXG4gICAgICAgICAgICB2YWxpZE5hbWU9JCgnLnZhbGlkTmFtZScpLFxyXG4gICAgICAgICAgICB2YWxpZFRleHQ9JCgnLnZhbGlkVGV4dCcpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBpbnB1dEVtYWlsLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgZW1haWxUZXN0PTAsXHJcbiAgICAgICAgICAgICAgICBuYW1lVGVzdD0wLFxyXG4gICAgICAgICAgICAgICAgdGV4dFRlc3Q9MDtcclxuICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcykge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKFwiW1xcdy1cXHNdK1wiKXwoW1xcdy1dKyg/OlxcLltcXHctXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3LV0rKD86XFwuW1xcdy1dKykqKSkoQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQpfChAXFxbPygoMjVbMC01XVxcLnwyWzAtNF1bMC05XVxcLnwxWzAtOV17Mn1cXC58WzAtOV17MSwyfVxcLikpKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXF0/JCkvaSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVtYWlsICE9IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEljb24uY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy4uL2ltYWdlL3ZhbGlkeWVzLnBuZycpXCIsXCJvcGFjaXR5XCI6MSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxUZXN0PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ZhbGlkSWNvbi5jc3MoJ29wYWNpdHknLDApO30sMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgdmFsaWRJY29uLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcuLi9pbWFnZS92YWxpZG5vLnBuZycpXCIsXCJvcGFjaXR5XCI6MX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZEljb24uY3NzKCdvcGFjaXR5JywwKTt9LDE1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge3ZhbGlkSWNvbi5jc3MoeyBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJub25lXCIgIH0pOyAgfVxyXG4gICAgICAgIC8v0LrQvtC90LXRhiDQktCw0LvQuNC00L3QvtGB0YLRjCDQv9C+0LvRjyBlbWFpbC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDQuNC80LXQvdC4XHJcbiAgICAgICAgY29uc29sZS5sb2coJyBuYW1lICcraW5wdXROYW1lLnZhbCgpLmxlbmd0aCk7XHJcbiAgICAgICAgaWYoaW5wdXROYW1lLnZhbCgpLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgbmFtZVRlc3Q9MTtcclxuICAgICAgICB9ZWxzZXsgdmFsaWROYW1lLmNzcygnb3BhY2l0eScsMSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YWxpZE5hbWUuY3NzKCdvcGFjaXR5JywwKTt9LDE1MDApO31cclxuICAgICAgICAvL9C60L7QvdC10YYg0L/RgNC+0LLQtdGA0LrQsCDQt9Cw0L/QvtC70L3QtdC90LjRjyDQv9C+0LvRjyDQuNC80LXQvdC4XHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQutCwINC30LDQv9C+0LvQvdC10L3QuNGPINC/0L7Qu9GPINGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgIGlmKGlucHV0VGV4dC52YWwoKS5sZW5ndGg8MSl7XHJcbiAgICAgICAgICAgIHZhbGlkVGV4dC5jc3MoJ29wYWNpdHknLDEpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFsaWRUZXh0LmNzcygnb3BhY2l0eScsMCk7fSwxNTAwKTtcclxuICAgICAgICB9ZWxzZXt2YWxpZFRleHQ9MTt9XHJcbiAgICAgICAgLy/QutC+0L3QtdGGINC/0YDQvtCy0LXRgNC60LAg0LfQsNC/0L7Qu9C90LXQvdC40Y8g0L/QvtC70Y8g0YHQvtC+0LHRidC10L3QuNGPXHJcbiAgICAgICAgaWYodmFsaWRUZXh0PT0xICYmIG5hbWVUZXN0PT0xICYmIGVtYWlsVGVzdD09MSApe1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vcGhwL3NhbmRNYWlsLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcl9uYW1lOmlucHV0TmFtZS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJfZW1haWw6aW5wdXRFbWFpbC52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJfdGV4dDppbnB1dFRleHQudmFsKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSgpKTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0LHQvtC70YzRiNC+0LUg0LzQtdC90Y4nKTsgXHJcbiAgICB2YXIgYnV0dG9uR2FtYnVyZ2VyPSQoJy5oZWFkZXJfX2Jsb2NrQ2xvc2UnKSwvL9C60L3QvtC/0LrQsCDQvtGC0LrRgNGL0YLQuNGPINC80LXQvdGOINC90LAg0LLQtdGB0Ywg0Y3QutGA0LDQvVxyXG4gICAgICAgIGNsb3NlTGluZT0kKCcuYmxvY2tDbG9zZV9saW5lJyksLy/RhtC10L3RgtGA0LDQu9GM0L3QsNGPINC/0L7Qu9C+0YHQsCDQuNC3INC60L3QvtC/0LrQuCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICAgICAgICB3cmFwQmx1ZVdhbGw9JCgnLndyYXBwZXJCbHVlV2FsbCcpLC8v0L7QsdC10YDRgtC60LAg0LTQu9GPINGB0YLQtdC90Ysg0LzQtdC90Y5cclxuICAgICAgICBsZWZ0U2lkZV93YWxsPSQoJy5ibHVlV2FsbF9fbGVmdFNpZGUnKSwvL9C70LXQstCw0Y8g0YHRgtC+0YDQvtC90LAg0LzQtdC90Y4g0LrQvtGC0L7RgNCw0Y8g0L/QvtGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICByaWdodFNpZGVfd2FsbD0kKCcuYmx1ZVdhbGxfX3JpZ2h0U2lkZScpLC8v0L/RgNCw0LLQsNGPINGB0YLQvtGA0L7QvdCwINC80LXQvdGOINC60L7RgtC+0YDQsNGPINC/0L7Rj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgbWVudVdhbGw9JCgnLmJsdWVXYWxsX21lbnVMaW5rJyk7Ly/QsdC70L7QuiDRgSDQvdCw0LfQstCw0L3QuNGP0LzQuCDQvNC10L3RjlxyXG5cclxuICAgICAgICBidXR0b25HYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZWZ0U2lkZV93YWxsLnRvZ2dsZUNsYXNzKCdsZWZ0MCcpO1xyXG4gICAgICAgICAgICByaWdodFNpZGVfd2FsbC50b2dnbGVDbGFzcygncmlnaHQwJyk7XHJcbiAgICAgICAgICAgIGNsb3NlTGluZS50b2dnbGVDbGFzcygnYmxvY2tDbG9zZV9saW5lX2FjdGl2ZScpOy8v0LzQtdC90Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiDQv9C+0LvQvtGB0LrQuCDQutC90L7Qv9C60LhcclxuICAgICAgICAgICAgd3JhcEJsdWVXYWxsLnRvZ2dsZUNsYXNzKCd3cmFwcGVyQmx1ZVdhbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnVXYWxsLnRvZ2dsZUNsYXNzKCdibHVlV2FsbF9tZW51TGlua19hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcbiAgIHZhciBidXR0b25OZXh0PSQoJy5qc19hcnJvd19fc2xpZGVOZXh0JyksLy/QutC90L7Qv9C60LAg0YHQu9C10LQg0YHQu9Cw0LnQtFxyXG4gICAgICAgYnV0dG9uUHJldz0kKCcuanNfYXJyb3dfX3NsaWRlUHJldycpLC8v0LrQvdC+0L/QutCwINC/0YDQtdC00YvQtNGG0YnQuNC5INGB0LvQsNC00LlcclxuICAgICAgIGNvdW50U2xpZGU9MSwvL9GB0YfQtdGC0YfQuNC60LAg0LDQutGC0LjQstC90L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgZmxhZz10cnVlLC8v0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuCDQuCDRh9GC0LEg0LTRgNGD0LPQsNGPINC90LUg0L3QsNGH0LDQu9Cw0YHRjCDQv9C+INC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNGC0YzRgdGPINC/0YDQtdC00YvQtNGD0YnQsNGPXHJcbiAgICAgICBjb250YWluZXJTbGlkZT0kKCcuanNfYmxvY2tTbGlkZScpLC8v0LHQu9C+0Log0YEg0LHQvtC70YzRidC40LzQuCDRhNC+0YLQutCw0LzQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICBiaWdTbGlkZXM9Y29udGFpbmVyU2xpZGUuZmluZCgnLmxpX19zbGlkZXInKSxcclxuICAgICAgIGR1cmF0aW9uPTUwMDtcclxuLy8tLS0tLdCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIGZsYWdUZXh0PXRydWUsXHJcbiAgICAgICAgYXJyb3dTbGlkZT0kKCcuanNfYXJyb3dfX3NsaWRlJyk7Ly/RgdGC0YDQtdC70L7Rh9C60LAg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCDQstCy0LXRgNGFINC4INCy0L3QuNC3XHJcblxyXG4gICBmdW5jdGlvbiBhbmltYXRlZFRleHQoYmxvY2tfdGV4dCxhbmltYXRlX3RleHQpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ9GB0YLQsNGA0YIg0LDQvdC40LzQsNGG0Lgg0YLQtdC60YHRgtCwJyk7XHJcbiAgICAgICAgdmFyIGJsb2NrX190ZXh0PWJsb2NrX3RleHQsXHJcbiAgICAgICAgICAgIHRyaW1UZXh0PWJsb2NrX190ZXh0LnRyaW0oKSxcclxuICAgICAgICAgICAgYXJyYXlfdGV4dD10cmltVGV4dC5zcGxpdCgnJyksXHJcbiAgICAgICAgICAgIHdvcmQ9JycsXHJcbiAgICAgICAgICAgIGxldHRlckh0bWwsXHJcbiAgICAgICAgICAgIGRlZmY9JC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGFycmF5X3RleHQuZm9yRWFjaChmdW5jdGlvbihsZXR0ZXIpe1xyXG4gICAgICAgICAgICBpZihsZXR0ZXIhPScgJyl7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3BhblwiPicrbGV0dGVyKyc8L3NwYW4+JztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVySHRtbD0nPHNwYW4gY2xhc3M9XCJsZXR0ZXJfc3Bhbl9fc3BhY2VcIj4nK2xldHRlcisnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd29yZCs9bGV0dGVySHRtbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihmbGFnVGV4dCl7XHJcbiAgICAgICAgICAgIGZsYWdUZXh0PWZhbHNlO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0ZV90ZXh0Lmh0bWwod29yZCk7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXI9YW5pbWF0ZV90ZXh0LmZpbmQoJy5sZXR0ZXJfc3BhbicpLFxyXG4gICAgICAgICAgICAgICAgY291bnRlcj0wLFxyXG4gICAgICAgICAgICAgICAgdGltZXIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0yMDAwL2FycmF5X3RleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0LrQvtC7LdCy0L4g0LHRg9C60LIgJytsZXR0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0xldHRlcigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRMZXR0ZXI9bGV0dGVyLmVxKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXR0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZV93b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnRlcjw9bGV0dGVyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI9c2V0VGltZW91dChzaG93TGV0dGVyKCksZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlfdGV4dC5sZW5ndGg9PWNvdW50ZXIpIGRlZmYucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRpbWVyIT0ndW5kZWZpbmVkJykgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93TGV0dGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmYuZG9uZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbGFnVGV4dD10cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzb2x2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0cm9rZU5hbWVTaXRlPSQoJy5qc19uYW1lU2l0ZScpLC8v0YHRgtGA0L7QutCwINC60YPQtNCwINCx0YPQtNC10YIg0L/QuNGB0LDRgtGM0YHRjyDQvdCw0LfQstCw0L3QuNC1INGB0LDQudGC0LAg0LjQtyDRgdC70LDQudC00LBcclxuICAgICAgICBzdHJva2VXb3JrRmxvdz0kKCcuanNfd29ya2Zsb3cnKSwvL9GB0YLRgNC+0LrQsCDQutGD0LTQsCDQsdGD0LTQtdGCINC/0LjRgdCw0YLRjNGB0Y8g0YLQtdC30L3QvtC70L7Qs9C40LjQuCDRgdCw0LnRgtCwINC40Lcg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGU9JCgnLmpzX2xpbmtGb3JTaXRlJyk7Ly/RgdGC0YDQvtC60LAg0LrRg9C00LAg0LHRg9C00LXRgiDQv9C40YHQsNGC0YzRgdGPINGB0YHRi9C70LrQsCDQvdCwINGB0LDQudGCINC40Lcg0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgYXJyb3dTbGlkZS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICB0aGlzSW1hZ2U9JHRoaXMuZmluZCgnLmxpX3NsaWRlU21hbGxfYWN0aXZlJykuZmluZCgnLmFycm93X19zbGlkZUltYWdlJyksXHJcbiAgICAgICAgICAgIHRpdGxlU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbmFtZScpLFxyXG4gICAgICAgICAgICB3b3JrZmxvd1NpdGU9dGhpc0ltYWdlLmRhdGEoJ3dvcmtmbG93JyksXHJcbiAgICAgICAgICAgIGxpbmtzU2l0ZT10aGlzSW1hZ2UuZGF0YSgnbGluaycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcrKysrKysrKysrKysrKysrKysrICcpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lICcrdGl0bGVTaXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd29yayAnK3dvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsgJytsaW5rc1NpdGUpO1xyXG5cclxuICAgICAgICAgYW5pbWF0ZWRUZXh0KHRpdGxlU2l0ZSxzdHJva2VOYW1lU2l0ZSk7XHJcbiAgICAgICAgIGFuaW1hdGVkVGV4dCh3b3JrZmxvd1NpdGUsc3Ryb2tlV29ya0Zsb3cpO1xyXG4gICAgICAgIHN0cm9rZU5hbWVTaXRlLnRleHQodGl0bGVTaXRlKTtcclxuICAgICAgICBzdHJva2VXb3JrRmxvdy50ZXh0KHdvcmtmbG93U2l0ZSk7XHJcbiAgICAgICAgc3Ryb2tlTGlua0ZvclNpdGUuYXR0cignaHJlZicsbGlua3NTaXRlKTtcclxuICAgIH0pO1xyXG5cclxuLy8tLS0tLdCa0J7QndCV0KYgINCQ0J3QmNCc0JDQptCY0K8g0KLQldCa0KHQotCQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICBidXR0b25OZXh0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICArK2NvdW50U2xpZGU7XHJcbiAgICAgICAgIGlmKGNvdW50U2xpZGU+PWJpZ1NsaWRlcy5sZW5ndGgpIGNvdW50U2xpZGU9MDtcclxuICAgICAgICAgdmFyICR0aGlzPSQodGhpcyksXHJcbiAgICAgICAgICAgICBzbWFsbFNsaWRlPSR0aGlzLmZpbmQoJy5saV9zbGlkZVNtYWxsJyksLy/QvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLINC80LDQu9C10L3RjNC60LjQtVxyXG4gICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgcHJldlNsaWRlPWNvdW50U2xpZGUtMSxcclxuICAgICAgICAgICAgIHByZXYyU2xpZGU9Y291bnRTbGlkZS0yO1xyXG5cclxuICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgaWYocHJldjJTbGlkZT09LTEpe3ByZXYyU2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGlmKHByZXYyU2xpZGU9PS0yKXtwcmV2MlNsaWRlPXNtYWxsU2xpZGUubGVuZ3RoLTI7fS8v0YHRh9C10YLRh9C40Log0LTQu9GPINC/0LXRgNC10LzQtdC90Ysg0YHQvtGB0LXQtNC90LXQs9C+INC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEoY291bnRTbGlkZSkuYW5pbWF0ZSh7Ly/QvNC10L3Rj9C10Lwg0LzQtdGB0YLQvtC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsCDRgtCw0Lwg0LPQtNC1INC90LDQttCw0LvQuCDRgdGC0YDQtdC70LrRg1xyXG4gICAgICAgICAgICAndG9wJzonLTE1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHNtYWxsU2xpZGUuZXEobmV4dFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8g0JDQndCY0JzQkNCm0JjQryDQodCe0KHQldCU0J3QldCT0J4g0JzQkNCb0JXQndCs0JrQntCT0J4g0KHQm9CQ0JnQlNCQXHJcbiAgICAgICAgIHZhciBhbm90aGVyU21hbGxTbGlkZT0kdGhpcy5zaWJsaW5ncygnLmFycm93Rm9yU2xpZGVyX3NpZGUnKS5maW5kKCcubGlfc2xpZGVTbWFsbCcpOy8v0YHQvtGB0LXQtNC90LjQuSDQvNCw0LvQtdC90YzQutC40Lkg0YHQu9Cw0LnQtFxyXG4gICAgICAgICBhbm90aGVyU21hbGxTbGlkZS5lcShwcmV2MlNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICd0b3AnOicxMDAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsJy0xNTAlJyk7XHJcbiAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsaV9zbGlkZVNtYWxsX2FjdGl2ZScpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYW5vdGhlclNtYWxsU2xpZGUuZXEocHJldlNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3RvcCc6MH0sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy/QsNC90LjQvNCw0YbQuNGPINCx0L7Qu9GM0YjQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgIGJpZ1NsaWRlcy5lcShwcmV2U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCctMTAwJScpO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgYmlnU2xpZGVzLmVxKGNvdW50U2xpZGUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAndG9wJzonNTAlJ30sZHVyYXRpb24sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgfSk7XHJcblxyXG4gICAgYnV0dG9uUHJldy5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAtLWNvdW50U2xpZGU7XHJcbiAgICAgICAgICAgIGlmKGNvdW50U2xpZGU8MCkgY291bnRTbGlkZT1iaWdTbGlkZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcz0kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgc21hbGxTbGlkZT0kdGhpcy5maW5kKCcubGlfc2xpZGVTbWFsbCcpLC8v0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRiyDQvNCw0LvQtdC90YzQutC40LVcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU9Y291bnRTbGlkZS0xLFxyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlPWNvdW50U2xpZGUrMSwvL9GB0LvQtdC0ICDQstC40LTQuNC80YvQuSDRgdC70LDQudC0INC80LDQu9C10L3RjNC60LjQuVxyXG4gICAgICAgICAgICAgICAgbmV4dDJTbGlkZT1jb3VudFNsaWRlKzI7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYobmV4dFNsaWRlPT1zbWFsbFNsaWRlLmxlbmd0aCluZXh0U2xpZGU9MDsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINC80LDQu9C10L3RjNC60L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBpZihwcmV2U2xpZGU8MClwcmV2U2xpZGU9c21hbGxTbGlkZS5sZW5ndGgtMTsvL9GB0YfQtdGC0YfQuNC6INC00LvRjyDQv9C10YDQtdC80LXQvdGLINGB0L7RgdC10LTQvdC10LPQviDQvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgaWYobmV4dDJTbGlkZT09c21hbGxTbGlkZS5sZW5ndGgpe25leHQyU2xpZGU9MDt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGlmKG5leHQyU2xpZGU9PXNtYWxsU2xpZGUubGVuZ3RoKzEpe25leHQyU2xpZGU9MTt9Ly/RgdGH0LXRgtGH0LjQuiDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRgdC+0YHQtdC00L3QtdCz0L4g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgc21hbGxTbGlkZS5lcShjb3VudFNsaWRlKS5hbmltYXRlKHsvL9C80LXQvdGP0LXQvCDQvNC10YHRgtC+0LzQsNC70LXQvdGM0LrQvtCz0L4g0YHQu9Cw0LnQtNCwINGC0LDQvCDQs9C00LUg0L3QsNC20LDQu9C4INGB0YLRgNC10LvQutGDXHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTAwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTE1MCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX3NsaWRlU21hbGxfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzbWFsbFNsaWRlLmVxKHByZXZTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQkNCd0JjQnNCQ0KbQmNCvINCh0J7QodCV0JTQndCV0JPQniDQnNCQ0JvQldCd0KzQmtCe0JPQniDQodCb0JDQmdCU0JBcclxuICAgICAgICAgICAgdmFyIGFub3RoZXJTbWFsbFNsaWRlPSR0aGlzLnNpYmxpbmdzKCcuYXJyb3dGb3JTbGlkZXJfc2lkZScpLmZpbmQoJy5saV9zbGlkZVNtYWxsJyk7Ly/RgdC+0YHQtdC00L3QuNC5INC80LDQu9C10L3RjNC60LjQuSDRgdC70LDQudC0XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHQyU2xpZGUpLmFuaW1hdGUoey8v0LzQtdC90Y/QtdC8INC80LXRgdGC0L7QvNCw0LvQtdC90YzQutC+0LPQviDRgdC70LDQudC00LAg0YLQsNC8INCz0LTQtSDQvdCw0LbQsNC70Lgg0YHRgtGA0LXQu9C60YNcclxuICAgICAgICAgICAgICAgICd0b3AnOictMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnMTUwJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFub3RoZXJTbWFsbFNsaWRlLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzowfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfc2xpZGVTbWFsbF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LDRhtC40Y8g0LHQvtC70YzRiNC+0LPQviDRgdC70LDQudC00LBcclxuICAgICAgICAgICAgYmlnU2xpZGVzLmVxKG5leHRTbGlkZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJzonMTUwJSd9LGR1cmF0aW9uLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywnLTEwMCUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xpX19zbGlkZXJfYWN0aXYnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJpZ1NsaWRlcy5lcShjb3VudFNsaWRlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnOic1MCUnfSxkdXJhdGlvbixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmxhZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbGlfX3NsaWRlcl9hY3RpdicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRhYj0kKCcudGl0bGVfX3RhYnMnKSxcclxuICAgICAgICBuYXZfdGFicz0kKCcubWFpbl9hZG1pbmthX3RhYnNfbmF2Jyk7Ly/QsdC70L7QuiDRj9GA0LvRi9C60L7QsiDRgtCw0LHQvtCyXHJcbiAgICAgICAgbWFpbldyYXBwZXI9JCgnLm1haW5fYWRtaW5rYScpOy8v0LHQu9C+0Log0LPQtNC1INC70LXQttCw0YIg0LLRgdC1INGC0LDQsdGLXHJcblxyXG4gICAgdGFiLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXM9JCh0aGlzKSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiPSR0aGlzLmRhdGEoJ3RhYicpO1xyXG4gICAgICAgIG5hdl90YWJzLmZpbmQoJy5hY3RpdmVUYWJzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZVRhYnMnKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlVGFicycpO1xyXG4gICAgICAgIG1haW5XcmFwcGVyLmZpbmQoJy5tYWluX3RhYkFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtYWluX3RhYkFjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGDINGC0LDQsdGLXHJcbiAgICAgICAgbWFpbldyYXBwZXIuZmluZCgnLicrYWN0aXZlVGFiKS5hZGRDbGFzcygnbWFpbl90YWJBY3RpdmUnKTsvL9C00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0L3Rg9C20L3QvtC80YMg0YLQsNCx0YNcclxuICAgIH0pXHJcbn0oKSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhclxyXG4gICAgICAgIGNpcmNsZUJsb2NrMT0kKCcuanNfbGluZUNpcmNsZTEnKS5vZmZzZXQoKS50b3AtNTAwLC8v0LHQu9C+0LoxINCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBjaXJjbGVCbG9jazI9JCgnLmpzX2xpbmVDaXJjbGUyJykub2Zmc2V0KCkudG9wLTUwMCwvL9Cx0LvQvtC6INCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBjaXJjbGVCbG9jazM9JCgnLmpzX2xpbmVDaXJjbGUzJykub2Zmc2V0KCkudG9wLTUwMCwvL9Cx0LvQvtC6INCz0LTQtSDQu9C10LbQsNGCINC60YDRg9GI0LhcclxuICAgICAgICBodG1sPSQoJy5jcmljbGVfaHRtbCcpLFxyXG4gICAgICAgIGNzcz0kKCcuY3JpY2xlX2NzcycpLFxyXG4gICAgICAgIGxzPSQoJy5jcmljbGVfanMnKSxcclxuICAgICAgICBwaHA9JCgnLmNyaWNsZV9waHAnKSxcclxuICAgICAgICBteXNxbD0kKCcuY3JpY2xlX215c3FsJyksXHJcbiAgICAgICAgbm9kZWpzPSQoJy5jcmljbGVfbm9kZWpzJyksXHJcbiAgICAgICAgZ2l0PSQoJy5jcmljbGVfZ2l0JyksXHJcbiAgICAgICAgZ3VscD0kKCcuY3JpY2xlX2d1bHAnKSxcclxuICAgICAgICBib3dlcj0kKCcuY3JpY2xlX2Jvd2VyJyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuICAgICAgIHZhciB3aW5kb3dTY3JvbGw9JCh3aW5kb3cpLnNjcm9sbFRvcCgpOy8v0LLRi9GB0L7RgtCwINC/0YDQvtC60YDRg9GC0LrQuFxyXG4gICAgICAgIGlmKHdpbmRvd1Njcm9sbD49Y2lyY2xlQmxvY2sxKXtcclxuICAgICAgICAgICAgaHRtbC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxodG1sLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBjc3MuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsY3NzLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBscy5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0Jyxscy5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93U2Nyb2xsPj1jaXJjbGVCbG9jazIpe1xyXG4gICAgICAgICAgICBwaHAuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcscGhwLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBteXNxbC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JyxteXNxbC5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICAgICAgbm9kZWpzLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLG5vZGVqcy5kYXRhKCdzY29yZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93U2Nyb2xsPj1jaXJjbGVCbG9jazMpe1xyXG4gICAgICAgICAgICBnaXQuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsZ2l0LmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgICAgICBndWxwLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLGd1bHAuZGF0YSgnc2NvcmUnKSk7XHJcbiAgICAgICAgICAgIGJvd2VyLmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLGJvd2VyLmRhdGEoJ3Njb3JlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0oKSk7Il19
