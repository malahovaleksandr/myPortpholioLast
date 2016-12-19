$(function(){
  //console.log('sand mail');
    var battonSand=$('.js_sandMail'),//кнопка отправки письма
        clearForm=$('.js_clearForm'),//кнопка очистки формы отправки письма
        inputName=$('.js_inputName'),//поле имя автора письма
        inputEmail=$('.js_inputEmail'),//поле эл.почты
        inputText=$('.js_inputText');//поле текста письма
//функция очистки формы
    function clearInputForm(){
        inputName.val('');
        inputEmail.val('');
        inputText.val('');
    }
    clearForm.on('click',function(){
        clearInputForm();
    });
    battonSand.on('click',function(){
        //Валидность поля email
        var validIcon=$('.validateIcon'),
            validName=$('.validName'),
            validText=$('.validText');
            var email = inputEmail.val(),
                emailTest=0,
                nameTest=0,
                textTest=0;
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }
            if(email != 0){
                if(isValidEmailAddress(email)){
                        validIcon.css({"background-image": "url('../image/validyes.png')","opacity":1 });
                        emailTest=1;
                    setTimeout(function(){validIcon.css('opacity',0);},1500);
                    } else { validIcon.css({"background-image": "url('../image/validno.png')","opacity":1});
                    setTimeout(function(){validIcon.css('opacity',0);},1500);
                }
            } else {validIcon.css({ "background-image": "none"  });  }
        //конец Валидность поля email------------------------------------
        //проверка заполнения поля имени
        console.log(' name '+inputName.val().length);
        if(inputName.val().length>0){
            nameTest=1;
        }else{ validName.css('opacity',1);
            setTimeout(function(){validName.css('opacity',0);},1500);}
        //конец проверка заполнения поля имени
        //проверка заполнения поля сообщения
        if(inputText.val().length<1){
            validText.css('opacity',1);
            setTimeout(function(){validText.css('opacity',0);},1500);
        }else{validText=1;}
        //конец проверка заполнения поля сообщения
        if(validText==1 && nameTest==1 && emailTest==1 ){
            $.ajax({
                type: "POST",
                url: "../php/sandMail.php",
                data: {
                    sender_name:inputName.val(),
                    sender_email:inputEmail.val(),
                    sender_text:inputText.val()
                },
                success: function(msg){
                    //console.log(msg);
                    clearInputForm();
                }
            });
        }
    });






}());