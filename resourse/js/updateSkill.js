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