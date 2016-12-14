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