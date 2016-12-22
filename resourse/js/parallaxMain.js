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