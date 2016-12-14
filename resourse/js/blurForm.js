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
