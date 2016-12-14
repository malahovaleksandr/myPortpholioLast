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