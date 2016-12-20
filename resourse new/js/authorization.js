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