$(function(){
    console.log('addPhoto');
    var buttonSave3=$('.js_buttonSaveTab3'),//кнопка сохранить данные первого блока
        js_NameSite=$('.js_NameSite'),//название сайта
        js_workflow=$('.js_workflowSite'),//название прогррам для создания
        js_addImage_forSite=$('.js_addImage_forSite'),//инпут загрузки картинки
        js_linkSite=$('.js_linkSite');//id статьи


    buttonSave3.on('click',function(e){
        e.preventDefault();
        console.log('33');
        function showMessage(){
            js_massegeSave.css('left','50%');
            js_massegeSave.animate({'opacity':1},1000);
            setTimeout(function(){
                js_massegeSave.animate({'opacity':0},500);
            },1500,function(){
                js_massegeSave.css('left','-100%');
            });
        }
        console.log(js_addImage_forSite.val());
        $.ajax({
            type: "POST",
            url: "../php/addSiteMywork.php",
            data: {
                nameSite:js_NameSite.val(),
                workflow:js_workflow.val(),
                linkSite:js_linkSite.val()
                
            },
            success: function(){
                // js_NameSite.val(' ');
                // js_workflow.val(' ');
                // js_linkSite.val(' ');
                //
                // showMessage();
            }
        });

    });

}());
