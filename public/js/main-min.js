!function e(t,i,n){function a(s,l){if(!i[s]){if(!t[s]){var c="function"==typeof require&&require;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var r=i[s]={exports:{}};t[s][0].call(r.exports,function(e){var i=t[s][1][e];return a(i?i:e)},r,r.exports,e,t,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,t,n){$(function(){console.log("dssdd");var e=$(".js_login"),t=$(".js_password"),i=$(".js_checkRobot"),n=$(".js_enterButton"),a=$(".imageCheckboxRobot"),o=0,s=0,l=0;n.on("click",function(){e.val().length>0&&(o=1),t.val().length>0&&(l=1),1==i.prop("checked")?s=1:(a.css("border","2px solid red"),setTimeout(function(){a.css("border","none")},1500)),1==o&&1==l&&1==s&&(console.log("совпало"),$.ajax({type:"POST",url:"../php/checkLogin.php",data:{login:e.val(),password:t.val()},success:function(e){console.log(e),"location"==e&&(window.location.href="page/authorization.php")}}))})}()),$(function(){var e=function(){var e=$(".block_blur"),t=$(".js_sectionWithBlur");return{set:function(){var i=t.width(),n=t.height(),a=-(t.width()-e.width())/2,o=-(t.height()-e.height())/2;e.css({"background-size":i+"px "+n+"px","background-position":a+"px "+o+"px"})}}}();$(document).ready(function(){e.set()}),$(window).resize(function(){e.set()})}),$(function(){$(window).on("scroll",function(){function e(){$(".block__column__2_blog").each(function(){var e=$(this),i=e.offset().top-200,n=i+e.height();if(i<t&&n>t){var a=e.data("section"),o=$(".fixed_menu .js_ul_menu");o.find(".column__1_blog__line").find(".activeStroke_blogThema").removeClass("activeStroke_blogThema"),o.find("[data-id="+a+"]").find(".js_linkActiv").addClass("activeStroke_blogThema")}})}var t=$(window).scrollTop(),i=$(".column__1_blog .js_ul_menu"),n=i.clone(),a=$(".fixed_menu"),o=$(".js_static");topStatic=o.offset().top,topStatic<=t?a.find(".js_ul_menu").length||(a.append(n),i.hide()):(a.find(".js_ul_menu").remove(),i.show()),e()})}()),$(document).ready(function(){var e=$(".js_buttonAuthorithation"),t=$(".js_buttonMainBackRevers"),i=$(".flipper_wrap"),n=$(".blockWellcome_front"),a=$(".blockWellcome_back");e.on("click",function(){setTimeout(function(){n.toggleClass("display_none")},200),setTimeout(function(){a.toggleClass("display_none")},200),i.toggleClass("rotate"),e.fadeOut(500)}),t.on("click",function(t){t.preventDefault(),setTimeout(function(){a.toggleClass("display_none")},200),setTimeout(function(){n.toggleClass("display_none")},200),i.toggleClass("rotate"),e.fadeIn(500)})}),$(function(){var e=$(".parralax_layer");$(document).ready(function(){var t=window.innerWidth/2,i=window.innerHeight/2;e.map(function(e,n){var a=t*(e/100),o=i*(e/100);$(n).css({left:"-"+a+"px",bottom:"-"+o+"px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"})})}),$(window).on("mousemove",function(t){var i=window.innerWidth/2-t.pageX,n=window.innerHeight/2-t.pageY;e.map(function(e,t){var a=i*(e/100),o=n*(e/100);$(t).css({transform:"translate3d("+a+"px,"+o+"px,0)",left:-10*e+"px",bottom:-5*e+"px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"})})})}),$(function(){var e=function(){var e=$(".svg_portfolio"),t=$(".blockPresent"),i=$(".verticalParrallaxWpap");return{move:function(e,t,i){var n=e/-i+"%",a="translate3d(0,"+n+",0)";t.css({transform:a,"-webkit-transform":a})},init:function(n){this.move(n,t,3),this.move(n,e,20),this.move(n,i,60)}}}();$(window).scroll(function(){var t=$(window).scrollTop();e.init(t)})}),$(function(){function e(e,t){var i=Math.ceil(t/e*100);i>=0&&$(".wrapLoader").fadeOut(),$(".percentCurent").text(i+" %")}var t=[];$.each($("*"),function(){var e=$(this),i=e.css("background-image"),n=e.is("img");if("none"!=i){var a=i.replace('url("',"").replace('")',"");t.push(a)}if(n){var a=e.attr("src");a&&t.push(a)}});var n=1;for(i=1;i<t.length;i++){var a=$("<img>",{attr:{src:t[i]}});a.on({load:function(){e(t.length,n),n++},error:function(){n++}})}}),$(function(){function e(){n.val(""),a.val(""),o.val("")}var t=$(".js_sandMail"),i=$(".js_clearForm"),n=$(".js_inputName"),a=$(".js_inputEmail"),o=$(".js_inputText");i.on("click",function(){e()}),t.on("click",function(){function t(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return t.test(e)}var i=$(".validateIcon"),s=$(".validName"),l=$(".validText"),c=a.val(),r=0,d=0;0!=c?t(c)?(i.css({"background-image":"url('../image/validyes.png')",opacity:1}),r=1,setTimeout(function(){i.css("opacity",0)},1500)):(i.css({"background-image":"url('../image/validno.png')",opacity:1}),setTimeout(function(){i.css("opacity",0)},1500)):i.css({"background-image":"none"}),console.log(" name "+n.val().length),n.val().length>0?d=1:(s.css("opacity",1),setTimeout(function(){s.css("opacity",0)},1500)),o.val().length<1?(l.css("opacity",1),setTimeout(function(){l.css("opacity",0)},1500)):l=1,1==l&&1==d&&1==r&&$.ajax({type:"POST",url:"../php/sandMail.php",data:{sender_name:n.val(),sender_email:a.val(),sender_text:o.val()},success:function(t){e()}})})}()),$(function(){console.log("большое меню");var e=$(".header__blockClose"),t=$(".blockClose_line"),i=$(".wrapperBlueWall"),n=$(".blueWall__leftSide"),a=$(".blueWall__rightSide"),o=$(".blueWall_menuLink");e.on("click",function(){n.toggleClass("left0"),a.toggleClass("right0"),t.toggleClass("blockClose_line_active"),i.toggleClass("wrapperBlueWall_active"),o.toggleClass("blueWall_menuLink_active")})}),$(function(){function e(e,t){function i(){var e=u.eq(f);e.addClass("active_word"),f++,f<=u.length&&(d=setTimeout(i(),_)),s.length==f&&r.resolve(),"undefined"!=typeof d&&clearTimeout(d)}var n,a=e,o=a.trim(),s=o.split(""),l="",r=$.Deferred();if(s.forEach(function(e){n=" "!=e?'<span class="letter_span">'+e+"</span>":'<span class="letter_span__space">'+e+"</span>",l+=n}),c){c=!1,t.html(l);var d,u=t.find(".letter_span"),f=0,_=2e3/s.length;console.log("кол-во букв "+u.length),i()}r.done(function(){c=!0,console.log("resolve")})}var t=$(".js_arrow__slideNext"),i=$(".js_arrow__slidePrew"),n=1,a=!0,o=$(".js_blockSlide"),s=o.find(".li__slider"),l=500,c=!0,r=$(".js_arrow__slide"),d=$(".js_nameSite"),u=$(".js_workflow"),f=$(".js_linkForSite");r.on("click",function(){var t=$(this),i=t.find(".li_slideSmall_active").find(".arrow__slideImage"),n=i.data("name"),a=i.data("workflow"),o=i.data("link");e(n,d),e(a,u),d.text(n),u.text(a),f.attr("href",o)}),t.on("click",function(){if(a){a=!1,++n,n>=s.length&&(n=0);var e=$(this),t=e.find(".li_slideSmall"),i=n+1,o=n-1,c=n-2;i==t.length&&(i=0),o<0&&(o=t.length-1),c==-1&&(c=t.length-1),c==-2&&(c=t.length-2),t.eq(n).animate({top:"-150%"},l,function(){$(this).css("top","150%"),$(this).removeClass("li_slideSmall_active")}),t.eq(i).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")});var r=e.siblings(".arrowForSlider_side").find(".li_slideSmall");r.eq(c).animate({top:"100%"},l,function(){$(this).css("top","-150%"),$(this).removeClass("li_slideSmall_active")}),r.eq(o).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")}),s.eq(o).animate({top:"150%"},l,function(){$(this).css("top","-100%"),$(this).removeClass("li__slider_activ")}),s.eq(n).animate({top:"50%"},l,function(){a=!0,$(this).addClass("li__slider_activ")})}}),i.on("click",function(){if(a){a=!1,--n,n<0&&(n=s.length-1);var e=$(this),t=e.find(".li_slideSmall"),i=n-1,o=n+1,c=n+2;o==t.length&&(o=0),i<0&&(i=t.length-1),c==t.length&&(c=0),c==t.length+1&&(c=1),t.eq(n).animate({top:"100%"},l,function(){$(this).css("top","-150%"),$(this).removeClass("li_slideSmall_active")}),t.eq(i).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")});var r=e.siblings(".arrowForSlider_side").find(".li_slideSmall");r.eq(c).animate({top:"-150%"},l,function(){$(this).css("top","150%"),$(this).removeClass("li_slideSmall_active")}),r.eq(o).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")}),s.eq(o).animate({top:"150%"},l,function(){$(this).css("top","-100%"),$(this).removeClass("li__slider_activ")}),s.eq(n).animate({top:"50%"},l,function(){a=!0,$(this).addClass("li__slider_activ")})}})}),$(function(){var e=$(".title__tabs"),t=$(".main_adminka_tabs_nav");mainWrapper=$(".main_adminka"),e.on("click",function(){var e=$(this),i=e.data("tab");t.find(".activeTabs").removeClass("activeTabs"),e.addClass("activeTabs"),mainWrapper.find(".main_tabActive").removeClass("main_tabActive"),mainWrapper.find("."+i).addClass("main_tabActive")})}()),$(function(){var e=$(".js_lineCircle1").offset().top-500,t=$(".js_lineCircle2").offset().top-500,i=$(".js_lineCircle3").offset().top-500,n=$(".cricle_html"),a=$(".cricle_css"),o=$(".cricle_js"),s=$(".cricle_php"),l=$(".cricle_mysql"),c=$(".cricle_nodejs"),r=$(".cricle_git"),d=$(".cricle_gulp"),u=$(".cricle_bower");$(document).on("scroll",function(){var f=$(window).scrollTop();f>=e&&(n.css("stroke-dashoffset",n.data("score")),a.css("stroke-dashoffset",a.data("score")),o.css("stroke-dashoffset",o.data("score"))),f>=t&&(s.css("stroke-dashoffset",s.data("score")),l.css("stroke-dashoffset",l.data("score")),c.css("stroke-dashoffset",c.data("score"))),f>=i&&(r.css("stroke-dashoffset",r.data("score")),d.css("stroke-dashoffset",d.data("score")),u.css("stroke-dashoffset",u.data("score")))})}())},{}]},{},[1]);