$(function(){
   
    var buttonSave1=$('.js_buttonSaveTab1'),//кнопка сохранить данные первого блока
        js_massegeSave=$('.js_massegeSave'),
        htmlProcent=$('.input_html'),//проценты скила
        cssProcent=$('.input_css'),
        jsProcent=$('.input_js'),
        phpProcent=$('.input_php'),
        nodejsProcent=$('.input_nodejs'),
        musqlProcent=$('.input_mysql'),
        gulpProcent=$('.input_gulp'),
        gitProcent=$('.input_git'),
        bowerProcent=$('.input_bower');

    buttonSave1.on('click',function(){
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
            url: "../php/addSkills.php",
            data: {
                html:{score:htmlProcent.val(),id:1},
                css:{score:cssProcent.val(),id:2},
                js:{score:jsProcent.val(),id:3},
                php:{score:phpProcent.val(),id:4},
                nodejs:{score:nodejsProcent.val(),id:5},
                mysql:{score:musqlProcent.val(),id:6},
                git:{score:gitProcent.val(),id:7},
                gulp:{score:gulpProcent.val(),id:8},
                bower:{score:bowerProcent.val(),id:9}
            },
            success: function(){
                htmlProcent.val(' ');
                cssProcent.val(' ');
                jsProcent.val(' ');
                phpProcent.val(' ');
                nodejsProcent.val(' ');
                musqlProcent.val(' ');
                gulpProcent.val(' ');
                gitProcent.val(' ');
                bowerProcent.val(' ');
                showMessage();
            }
        });
    });
}());
