!function e(t,o,n){function i(a,l){if(!o[a]){if(!t[a]){var c="function"==typeof require&&require;if(!l&&c)return c(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var r=o[a]={exports:{}};t[a][0].call(r.exports,function(e){var o=t[a][1][e];return i(o?o:e)},r,r.exports,e,t,o,n)}return o[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,o){$(function(){console.log("dssdd");var e=$(".js_login"),t=$(".js_password"),o=$(".js_checkRobot"),n=$(".js_enterButton"),i=$(".imageCheckboxRobot"),s=0,a=0,l=0;n.on("click",function(){e.val().length>0&&(s=1),t.val().length>0&&(l=1),1==o.prop("checked")?a=1:(i.css("border","2px solid red"),setTimeout(function(){i.css("border","none")},1500)),1==s&&1==l&&1==a&&(console.log("совпало"),$.ajax({type:"POST",url:"../php/checkLogin.php",data:{login:e.val(),password:t.val()},success:function(e){console.log(e),"location"==e&&(window.location.href="page/authorization.php")}}))})}()),$(function(){var e=function(){var e=$(".block_blur"),t=$(".js_sectionBlur");return{set:function(){var o=t.width(),n=t.offset().top-e.offset().top,i=t.offset().left-e.offset().left;e.css({"background-size":o+"px auto","background-position":i+"px "+n+"px"})}}}();$(document).ready(function(){e.set()}),$(window).resize(function(){e.set()})}),$(function(){$(window).on("scroll",function(){function e(){$(".block__column__2_blog").each(function(){var e=$(this),o=e.offset().top-200,n=o+e.height();if(o<t&&n>t){var i=e.data("section"),s=$(".fixed_menu .column__1_blog");s.find(".js_ul_menu").removeClass(".activeStroke_blogThema"),s.find("[data-id="+i+"]").addClass(".activeStroke_blogThema")}})}var t=$(window).scrollTop(),o=$(".column__1_blog .js_ul_menu"),n=o.clone(),i=$(".fixed_menu"),s=$(".js_static");topStatic=s.offset().top,topStatic<=t?i.find(".js_ul_menu").length||(i.append(n),s.css("opacity",0)):(i.find(".js_ul_menu").remove(),s.css("opacity",1)),e()})}()),$(document).ready(function(){var e=$(".js_buttonAuthorithation"),t=$(".js_buttonMainBackRevers"),o=$(".flipper_wrap"),n=$(".blockWellcome_front"),i=$(".blockWellcome_back");e.on("click",function(){setTimeout(function(){n.toggleClass("display_none")},200),setTimeout(function(){i.toggleClass("display_none")},200),o.toggleClass("rotate"),e.fadeOut(500),t.on("click",function(t){t.preventDefault(),setTimeout(function(){n.toggleClass("display_none")},200),setTimeout(function(){i.toggleClass("display_none")},200),o.toggleClass("rotate"),e.fadeIn(500)})})}),$(function(){var e=$(".parralax_layer");$(document).ready(function(){var t=window.innerWidth/2,o=window.innerHeight/2;e.map(function(e,n){var i=t*(e/100),s=o*(e/100);$(n).css({left:"-"+i+"px",bottom:"-"+s+"px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"})})}),$(window).on("mousemove",function(t){var o=window.innerWidth/2-t.pageX,n=window.innerHeight/2-t.pageY;e.map(function(e,t){var i=o*(e/100),s=n*(e/100);$(t).css({transform:"translate3d("+i+"px,"+s+"px,0)",left:-10*e+"px",bottom:-5*e+"px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"})})})}),$(function(){var e=function(){var e=$(".svg_portfolio"),t=$(".blockPresent"),o=$(".verticalParrallaxWpap");return{move:function(e,t,o){var n=e/-o+"%",i="translate3d(0,"+n+",0)";t.css({transform:i,"-webkit-transform":i})},init:function(n){this.move(n,t,3),this.move(n,e,20),this.move(n,o,60)}}}();$(window).scroll(function(){var t=$(window).scrollTop();e.init(t)})}),$(function(){function e(e,t){var o=Math.ceil(t/e*100);o>=0&&$(".wrapLoader").fadeOut(),$(".percentCurent").text(o+" %")}var t=[];$.each($("*"),function(){var e=$(this),o=e.css("background-image"),n=e.is("img");if("none"!=o){var i=o.replace('url("',"").replace('")',"");t.push(i)}if(n){var i=e.attr("src");i&&t.push(i)}});var o=1;for(i=1;i<t.length;i++){var n=$("<img>",{attr:{src:t[i]}});n.on({load:function(){e(t.length,o),o++},error:function(){o++}})}}),$(function(){function e(){n.val(""),i.val(""),s.val("")}var t=$(".js_sandMail"),o=$(".js_clearForm"),n=$(".js_inputName"),i=$(".js_inputEmail"),s=$(".js_inputText");o.on("click",function(){e()}),t.on("click",function(){function t(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return t.test(e)}var o=$(".validateIcon"),a=$(".validName"),l=$(".validText"),c=i.val(),r=0,f=0;0!=c?t(c)?(o.css({"background-image":"url('../image/validyes.png')",opacity:1}),r=1,setTimeout(function(){o.css("opacity",0)},1500)):(o.css({"background-image":"url('../image/validno.png')",opacity:1}),setTimeout(function(){o.css("opacity",0)},1500)):o.css({"background-image":"none"}),console.log(" name "+n.val().length),n.val().length>0?f=1:(a.css("opacity",1),setTimeout(function(){a.css("opacity",0)},1500)),s.val().length<1?(l.css("opacity",1),setTimeout(function(){l.css("opacity",0)},1500)):l=1,1==l&&1==f&&1==r&&$.ajax({type:"POST",url:"../php/sandMail.php",data:{sender_name:n.val(),sender_email:i.val(),sender_text:s.val()},success:function(t){e()}})})}()),$(function(){console.log("большое меню");var e=$(".header__blockClose"),t=$(".blockClose_line"),o=$(".wrapperBlueWall"),n=$(".blueWall__leftSide"),i=$(".blueWall__rightSide"),s=$(".blueWall_menuLink");e.on("click",function(){n.toggleClass("left0"),i.toggleClass("right0"),t.toggleClass("blockClose_line_active"),o.toggleClass("wrapperBlueWall_active"),s.toggleClass("blueWall_menuLink_active")})}),$(function(){function e(e,t){function o(){var e=u.eq(d);e.addClass("active_word"),d++,d<=u.length&&(f=setTimeout(o(),_)),a.length==d&&r.resolve(),"undefined"!=typeof f&&clearTimeout(f)}var n,i=e,s=i.trim(),a=s.split(""),l="",r=$.Deferred();if(a.forEach(function(e){n=" "!=e?'<span class="letter_span">'+e+"</span>":'<span class="letter_span__space">'+e+"</span>",l+=n}),c){c=!1,t.html(l);var f,u=t.find(".letter_span"),d=0,_=2e3/a.length;console.log("кол-во букв "+u.length),o()}r.done(function(){c=!0,console.log("resolve")})}var t=$(".js_arrow__slideNext"),o=$(".js_arrow__slidePrew"),n=1,i=!0,s=$(".js_blockSlide"),a=s.find(".li__slider"),l=500,c=!0,r=$(".js_arrow__slide"),f=$(".js_nameSite"),u=$(".js_workflow"),d=$(".js_linkForSite");r.on("click",function(){var t=$(this),o=t.find(".li_slideSmall_active").find(".arrow__slideImage"),n=o.data("name"),i=o.data("workflow"),s=o.data("link");e(n,f),e(i,u),f.text(n),u.text(i),d.attr("href",s)}),t.on("click",function(){if(i){i=!1,++n,n>=a.length&&(n=0);var e=$(this),t=e.find(".li_slideSmall"),o=n+1,s=n-1,c=n-2;o==t.length&&(o=0),s<0&&(s=t.length-1),c==-1&&(c=t.length-1),c==-2&&(c=t.length-2),t.eq(n).animate({top:"-150%"},l,function(){$(this).css("top","150%"),$(this).removeClass("li_slideSmall_active")}),t.eq(o).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")});var r=e.siblings(".arrowForSlider_side").find(".li_slideSmall");r.eq(c).animate({top:"100%"},l,function(){$(this).css("top","-150%"),$(this).removeClass("li_slideSmall_active")}),r.eq(s).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")}),a.eq(s).animate({top:"150%"},l,function(){$(this).css("top","-100%"),$(this).removeClass("li__slider_activ")}),a.eq(n).animate({top:"50%"},l,function(){i=!0,$(this).addClass("li__slider_activ")})}}),o.on("click",function(){if(i){i=!1,--n,n<0&&(n=a.length-1);var e=$(this),t=e.find(".li_slideSmall"),o=n-1,s=n+1,c=n+2;s==t.length&&(s=0),o<0&&(o=t.length-1),c==t.length&&(c=0),c==t.length+1&&(c=1),t.eq(n).animate({top:"100%"},l,function(){$(this).css("top","-150%"),$(this).removeClass("li_slideSmall_active")}),t.eq(o).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")});var r=e.siblings(".arrowForSlider_side").find(".li_slideSmall");r.eq(c).animate({top:"-150%"},l,function(){$(this).css("top","150%"),$(this).removeClass("li_slideSmall_active")}),r.eq(s).animate({top:0},l,function(){$(this).addClass("li_slideSmall_active")}),a.eq(s).animate({top:"150%"},l,function(){$(this).css("top","-100%"),$(this).removeClass("li__slider_activ")}),a.eq(n).animate({top:"50%"},l,function(){i=!0,$(this).addClass("li__slider_activ")})}})}),$(function(){var e=$(".js_lineCircle1").offset().top-500,t=$(".js_lineCircle2").offset().top-500,o=$(".js_lineCircle3").offset().top-500,n=$(".cricle_html"),i=$(".cricle_css"),s=$(".cricle_js"),a=$(".cricle_php"),l=$(".cricle_mysql"),c=$(".cricle_nodejs"),r=$(".cricle_git"),f=$(".cricle_gulp"),u=$(".cricle_bower");$(document).on("scroll",function(){var d=$(window).scrollTop();d>=e&&(n.css("stroke-dashoffset",n.data("score")),i.css("stroke-dashoffset",i.data("score")),s.css("stroke-dashoffset",s.data("score"))),d>=t&&(a.css("stroke-dashoffset",a.data("score")),l.css("stroke-dashoffset",l.data("score")),c.css("stroke-dashoffset",c.data("score"))),d>=o&&(r.css("stroke-dashoffset",r.data("score")),f.css("stroke-dashoffset",f.data("score")),u.css("stroke-dashoffset",u.data("score")))})}())},{}]},{},[1]);