$(function(){
    var tab=$('.title__tabs'),
        nav_tabs=$('.main_adminka_tabs_nav');//блок ярлыков табов
        mainWrapper=$('.main_adminka');//блок где лежат все табы

    tab.on('click',function(){
        var $this=$(this),
            activeTab=$this.data('tab');
        nav_tabs.find('.activeTabs').removeClass('activeTabs');
        $this.addClass('activeTabs');
        mainWrapper.find('.main_tabActive').removeClass('main_tabActive');//удаляем активный класс у табы
        mainWrapper.find('.'+activeTab).addClass('main_tabActive');//добавляем активный класс нужному табу
    })
}());
