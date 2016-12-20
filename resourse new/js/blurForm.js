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
