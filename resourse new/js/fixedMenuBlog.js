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