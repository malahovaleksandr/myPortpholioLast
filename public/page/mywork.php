<?php require_once "../php/returnSliderInfo.php"?><!DOCTYPE HTML>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Портфолио веб-разработчика Малахова Александра">
		<meta name="keywords" content="Сайт, написать сайт, заказать сайт">
		<!--link(el="shorcut icon" href="../favicon.ico" type="image/x-icon")-->
		<!--link(rel="icon" href="../favicon.ico" type="image/x-icon")-->
		<title>Портфолио- Мои работы</title>
		<link rel="stylesheet" href="../css/main.css">
	</head>
	<body>
		<div class="wrapLoader">
			<div class="blockPercent"></div>
			<div class="percentCurent">01</div>
		</div>
		<div class="wrapperBlueWall">
			<div class="blueWall__leftSide"></div>
			<div class="blueWall__rightSide"></div>
			<div class="blueWall_menuLink"><a href="mywork.php" class="blueWall_link BERNIERRegular doubleDash">Мои Работы</a><a href="blog.php" class="blueWall_link BERNIERRegular">Блог</a><a href="about.php" class="blueWall_link BERNIERRegular">Обо мне</a><a href="authorithation.php" class="blueWall_link BERNIERRegular">Авторизация</a></div>
		</div>
		<main class="wrapperAboutPage">
			<section class="pageAbout__Desctop">
				<div class="verticalParrallaxWpap">
					<div class="vertParralax_layer parralax_Allimage"></div>
				</div>
				<header class="header__page">
					<div class="header__links"><a href="https://www.facebook.com/sanek.maloff" target="_blank" class="wellcome__linkForSvg">
							<svg class="wellcome__svg">
								<use xlink:href="../image/sprite.svg#icon--Facebook"></use>
							</svg></a><a href="https://github.com/malahovaleksandr" target="_blank" class="wellcome__linkForSvg">
							<svg class="wellcome__svg">
								<use xlink:href="../image/sprite.svg#icon--github"></use>
							</svg></a><a href="https://vk.com/id6734152" target="_blank" class="wellcome__linkForSvg">
							<svg class="wellcome__svg">
								<use xlink:href="../image/sprite.svg#icon--vk"></use>
							</svg></a></div>
					<div class="header__blockClose">
						<div class="blockClose_line"></div>
					</div>
				</header>
				<div class="imagePortfolio">
					<svg class="svg_portfolio">
						<use xlink:href="../image/sprite.svg#icon--portfolio_header" class="svg_portfolio"></use>
					</svg>
				</div>
				<div class="blockPresent">
					<div class="blockPresent__photo"><img src="../image/my_photo.jpg" alt="фото автора" class="img__photoAvtar"></div>
					<div class="blockPresent__name robotoMedium">Александр Малахов</div>
					<div class="blockPresent__text robotoLight">Личный сайт веб-разработчика</div>
				</div>
				<div class="triangleDouble fillLightGrey">
					<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 85" preserveaspectratio="none" class="svg_triangleDouble">
						<polygon points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
						<polygon points="1000,0   1000,86   500,86   500,75.5"></polygon>
					</svg>
				</div>
			</section>
			<div class="wrap__titleName flexCenterContext">
				<div class="blockHalfWidth__titleText BERNIERRegular doubleDash">МОИ РАБОТЫ</div>
				<svg class="svg_work absoluteCenter">
					<use xlink:href="../image/sprite.svg#icon--works_header" class="svg_work"></use>
				</svg>
			</div>
			<section class="pageAbout__Desctop gray_desctop adaptiveClass">
				<div class="blockHalfWidth__adaptive flexCenterContext">
					<div class="wrapSlideshow flexCenterContext js_blockSlide">
						<ul class="ul_slider"><?php foreach($stmt as $key=>$value){
if($value['id']==2){
echo "<li class=\"li__slider flexCenterContext li__slider_activ\"><img src=".$value['photoSrc']." name=\"1\" class=\"li__slider__image\"></li>";
}else{
echo "<li class=\"li__slider flexCenterContext\"><img src=".$value['photoSrc']." name=\"1\" class=\"li__slider__image\"></li>";
}

}?>
							<!--li.li__slider.flexCenterContext-->
							<!--    img(src="../image/sliderSite/0.jpg", name="1").li__slider__image-->
							<!--li.li__slider.flexCenterContext.li__slider_activ-->
							<!--    img(src="../image/sliderSite/1.jpg",name="2").li__slider__image-->
							<!--li.li__slider.flexCenterContext-->
							<!--    img(src="../image/sliderSite/2.jpg",name="3").li__slider__image-->
							<!--li.li__slider.flexCenterContext-->
							<!--    img(src="../image/sliderSite/3.jpg",name="4").li__slider__image-->
						</ul>
					</div>
					<div class="wrapBlock_60procent flexCenterContext flexColumn">
						<div class="blockHalfWidth__titleText2 BERNIERRegular doubleDash width100 js_nameSite">
							<?php echo show($stmt[1]['nameSite']); ?></div>
						<div class="line_workflow robotoMedium js_workflow">
							<?php echo show($stmt[1]['workflow']); ?></div><a href="<?php echo show($stmt[1]['link']); ?>" target="_blank" class="buttobLookSite flexCenterContext js_linkForSite">
							<svg class="svg_link">
								<use xlink:href="../image/sprite.svg#icon--link" class="svg_link"></use>
							</svg>
							<div class="buttobLookSite__text robotoMedium">Посмотреть сайт</div></a>
					</div>
				</div>
				<div class="blockHalfWidth__adaptive flexJustEnd padding0">
					<div class="arrowForSlider">
						<div class="arrowForSlider_side flexCenterContext js_arrow__slideNext js_arrow__slide">
							<div class="wall_for_arrowForSlider"></div>
							<svg class="svg_arrow_slider">
								<use xlink:href="../image/sprite.svg#icon--portf_arrow_up" class="svg_arrow_slider"></use>
							</svg>
							<ul class="ul_slideshowSmall js_slideWrap_Small_next"><?php foreach($stmt as $key=>$value){
    if($value['id']==3){
    echo "<li class=\"li_slideSmall li_slideSmall__prew li_slideSmall_active\"><img src=".$value['photoSrc']." alt=\"фото сайта для слайда\" data-name=\"".$value['nameSite']."\" data-workflow=\"".$value['workflow']."\" data-link=".$value['link']." data-number=\"1\" class=\"arrow__slideImage\"></li>";
    }else{
        echo "<li class=\"li_slideSmall li_slideSmall__prew\"><img src=".$value['photoSrc']." alt=\"фото сайта для слайда\" data-name=\"".$value['nameSite']."\" data-workflow=\"".$value['workflow']."\" data-link=\"".$value['link']."\" data-number=\"1\" class=\"arrow__slideImage\"></li>";
    }

}?>
								<!--li.li_slideSmall.li_slideSmall__prew-->
								<!--    img(src="../image/sliderSite/0.jpg",alt="фото сайта для слайда",data-name="Итальяно00000 сайт",data-workflow="CSS,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="1").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__prew-->
								<!--    img(src="../image/sliderSite/1.jpg",alt="фото сайта для слайда",data-name="Итальяно1111 сайт",data-workflow="Mysql,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="2").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__prew.li_slideSmall_active-->
								<!--    img(src="../image/sliderSite/2.jpg",alt="фото сайта для слайда",data-name="Итальяно2222 сайт",data-workflow="JavaScript,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="3").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__prew-->
								<!--    img(src="../image/sliderSite/3.jpg",alt="фото сайта для слайда",data-name="Итальяно3333 сайт",data-workflow="NodeJS,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="4").arrow__slideImage-->
							</ul>
						</div>
						<div class="arrowForSlider_side flexCenterContext js_arrow__slidePrew js_arrow__slide">
							<div class="wall_for_arrowForSlider"></div>
							<svg class="svg_arrow_slider">
								<use xlink:href="../image/sprite.svg#icon--portf_arrow_down" class="svg_arrow_slider"></use>
							</svg>
							<ul class="ul_slideshowSmall js_slideWrap_Small_prew"><?php foreach($stmt as $key=>$value){
    if($value['id']==1){
        echo "<li class=\"li_slideSmall li_slideSmall__next li_slideSmall_active\"><img src=".$value['photoSrc']." alt=\"фото сайта для слайда\" data-name=\"".$value['nameSite']."\" data-workflow=\"".$value['workflow']."\" data-link=\"".$value['link']."\" data-number=\"1\" class=\"arrow__slideImage\"></li>";
    }else{
        echo "<li class=\"li_slideSmall li_slideSmall__next \"><img src=".$value['photoSrc']." alt=\"фото сайта для слайда\" data-name=\"".$value['nameSite']."\" data-workflow=\"".$value['workflow']."\" data-link=\"".$value['link']."\" data-number=\"1\" class=\"arrow__slideImage\"></li>";
    }
}?>
								<!--li.li_slideSmall.li_slideSmall__next.li_slideSmall_active-->
								<!--    img(src="../image/sliderSite/0.jpg",alt="фото сайта для слайда",data-name="Итальяно0 сайт",data-workflow="CSS,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="1").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__next-->
								<!--    img(src="../image/sliderSite/1.jpg",alt="фото сайта для слайда",data-name="Миално1 сайт",data-workflow="Gulp,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="2").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__next-->
								<!--    img(src="../image/sliderSite/2.jpg",alt="фото сайта для слайда",data-name="Сабвей2 сайт",data-workflow="Git,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="3").arrow__slideImage-->
								<!--li.li_slideSmall.li_slideSmall__next-->
								<!--    img(src="../image/sliderSite/3.jpg",alt="фото сайта для слайда",data-name="Курка3 сайт",data-workflow="SmartJs,HTML,PHP",data-link="https://italiano-pizza.ru",-->
								<!--    data-number="4").arrow__slideImage-->
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div class="wrap__titleName flexCenterContext background_white">
				<div class="blockHalfWidth__titleText BERNIERRegular doubleDash">ЧТО ОБО МНЕ ГОВОРЯТ</div>
				<svg class="svg_work absoluteCenter">
					<use xlink:href="../image/sprite.svg#icon--about_header" class="svg_work"></use>
				</svg>
			</div>
			<section class="pageMyWork_lastDesktop js_sectionWithBlur">
				<div class="wrapblocFeedBack">
					<div class="blockFeedback"><img src="../image/kov.png" alt="ковычки" class="image__kovichki">
						<div class="textFeedback robotoRegular">
							Этот парень проходил обучение веб-разработке не где-то,
							а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
						</div>
						<div class="avtor__feedback">
							<div class="avtor_imageWrapper"><img src="../image/dmit.jpg" alt="фото Ковальчука Д." class="photo_avtor_feedback"></div>
							<div class="flexColumn">
								<div class="avtor__feedback__text robotoBold">Ковальчук Дмитрий</div>
								<div class="avtor__feedback__text robotoRegular">Основатель LoftSchool</div>
							</div>
						</div>
					</div>
					<div class="blockFeedback"><img src="../image/kov.png" alt="ковычки" class="image__kovichki">
						<div class="textFeedback robotoRegular">
							Этот код выдержет любые испытания. Только пожалуйста,
							не загружается сайт на слишком старых браузерах!
						</div>
						<div class="avtor__feedback">
							<div class="avtor_imageWrapper"><img src="../image/zar.jpg" alt="фото Захаров З." class="photo_avtor_feedback"></div>
							<div class="flexColumn">
								<div class="avtor__feedback__text robotoBold">Зар Захаров</div>
								<div class="avtor__feedback__text robotoRegular">Преподаватель</div>
							</div>
						</div>
					</div>
				</div>
				<div class="wrapper__blockSandMail flexCenterContext flexColumn">
					<div class="blockSandMail__lineTitle BERNIERRegular doubleDash">СВЯЗАТЬСЯ СО МНОЙ</div>
					<form method="POST" action="" class="form__sandMail flexColumn flexStart robotoRegular">
						<input type="text" name="nameMailer" placeholder="Имя" class="inputForm js_inputName">
						<div class="validName robotoLight">Напишите своё имя</div>
						<input type="text" name="emailMailer" placeholder="Email" class="inputForm js_inputEmail">
						<div class="validateIcon"></div>
						<textarea rows="10" name="textMailer" placeholder="Ваше сообщение" class="inputForm inputTextarea js_inputText"></textarea>
						<div class="validText robotoLight">Напишите свое сообщение</div>
						<div class="wrap_form__buttons">
							<div class="form__button robotoMedium js_sandMail">Отправить</div>
							<div class="form__button robotoMedium js_clearForm">Очистить</div>
						</div>
					</form>
				</div>
				<div class="wrapper__blockSandMail absoluteCenter wrapper__blur">
					<div class="block_blur"></div>
				</div>
				<!--.backk-->
				
				
				
				
				
				
				
				
				
				
				<footer class="footer">
					<div class="footer_column">
						<div class="footer_block_forLink"><a href="../page/mywork.php" class="footer__row robotoMedium">Мои работы</a><a href="../page/about.php" class="footer__row robotoMedium">Обо мне</a><a href="../page/blog.php" class="footer__row robotoMedium">Блог</a><a href="../page/authorization.php" class="footer__row robotoMedium">Авторизация</a></div>
						<div class="footer__row marginLeftAutoPhone"><a href="https://www.facebook.com/sanek.maloff" target="_blank" class="block__linkForSvg">
								<svg class="footer__svg">
									<use xlink:href="../image/sprite.svg#icon--Facebook"></use>
								</svg></a><a href="https://github.com/malahovaleksandr" target="_blank" class="block__linkForSvg">
								<svg class="footer__svg">
									<use xlink:href="../image/sprite.svg#icon--github"></use>
								</svg></a><a href="https://vk.com/id6734152" target="_blank" class="block__linkForSvg">
								<svg class="footer__svg">
									<use xlink:href="../image/sprite.svg#icon--vk"></use>
								</svg></a></div>
					</div>
					<div class="footer_column">
						<div class="footer__text">© Александр Малахов | 2016</div>
					</div>
				</footer>
				<!--script(src="https://code.jquery.com/jquery-2.2.4.js",integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=",crossorigin="anonymous")-->
				<script src="../js/jquery.js" type="text/javascript"></script>
				<script src="../js/main.js" type="text/javascript"></script>
				<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDPS7Xoznf9yJs6khW0ODkFuRGMKznCpI0"></script>
			</section>
		</main>
	</body>
</html>