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
