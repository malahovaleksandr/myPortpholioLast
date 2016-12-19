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