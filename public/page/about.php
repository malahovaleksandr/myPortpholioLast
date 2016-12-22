<?php require_once "../php/returnSkills.php"?><!DOCTYPE HTML>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Портфолио веб-разработчика Малахова Александра">
		<meta name="keywords" content="Сайт, написать сайт, заказать сайт">
		<!--link(el="shorcut icon" href="../favicon.ico" type="image/x-icon")-->
		<!--link(rel="icon" href="../favicon.ico" type="image/x-icon")-->
		<title>Портфолио- Обо мне</title>
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
			<div class="blueWall_menuLink"><a href="mywork.php" class="blueWall_link BERNIERRegular">Мои Работы</a><a href="blog.php" class="blueWall_link BERNIERRegular">Блог</a><a href="about.php" class="blueWall_link BERNIERRegular doubleDash">Обо мне</a><a href="authorization.php" class="blueWall_link BERNIERRegular">Авторизация</a></div>
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
				<div class="triangleDouble">
					<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 85" preserveaspectratio="none" class="svg_triangleDouble">
						<polygon points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
						<polygon points="1000,0   1000,86   500,86   500,75.5"></polygon>
					</svg>
				</div>
			</section>
			<section class="pageAbout__Desctop pageAbout__Desctop2">
				<div class="blockHalfWidth__adaptive">
					<div class="image_text_svg">
						<svg class="svg_about">
							<use xlink:href="../image/sprite.svg#icon--about_header" class="svg_about"></use>
						</svg>
					</div>
					<div class="blockHalfWidth__titleText BERNIERRegular doubleDash">ОБО МНЕ</div>
					<div class="blockPhoto"><img src="../image/my_photo.jpg" alt="фото автора" class="blockPhoto__image"></div>
					<div class="blockHalfWidth__titleText2 BERNIERRegular doubleDash">КТО Я</div>
					<div class="blockHalfWidth__text">
						На этой земле бегаю уже 29 лет.
						 Чем я только не занимался?! Первый источник доходов
						 это игра в футбол! Кто то платит чтоб смотреть футбол,
						  я же получал деньги за то ,что играл! Потом продажа
						  телефонов (когда еще были черно-белые даже).
						  Потом занесло на пол года в США красить дома и
						  есть фастфуд. Следующий шаг в работе - это промышленный
						  альпинизм!!! Работал долго и интересно на высоте,
						   где летают только птицы и большинство людей боиться
						   смотреть вниз. Пришлось сменить эту работу и начал
						    заниматься шитьем кожаных изделий: ремни, кошельки, сумки и т.д.
					</div>
					<div class="blockHalfWidth__text">
						А вот следующая и пока последняя сфера деятельности - это уже веб разработка!И тут я стараюсь развиваться как могу! Этот сайт - моя визитная карточка.
						
						
					</div>
				</div>
				<div class="blockHalfWidth__adaptive">
					<div class="blockHalfWidth__titleText2 BERNIERRegular doubleDash">ЧЕМ Я МОГУ БЫТЬ ВАМ ПОЛЕЗЕН</div>
					<div class="blockHalfWidth__text">Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.</div>
					<div class="column robotoMedium HalfWidth__circleTitle">Frontend</div>
					<div class="column circle__block js_lineCircle1">
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[0]['circle']); ?>" class="circle_2 cricle_html"></circle>
							</svg>
							<div class="circle__text robotoMedium">HTML 5</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[1]['circle']); ?>" class="circle_2 cricle_css"></circle>
							</svg>
							<div class="circle__text robotoMedium">CSS 3</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[2]['circle']); ?>" class="circle_2 cricle_js"></circle>
							</svg>
							<div class="circle__text robotoMedium">JS & Jquery</div>
						</div>
					</div>
					<div class="column robotoMedium HalfWidth__circleTitle">Backend</div>
					<div class="column circle__block js_lineCircle2">
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[3]['circle']); ?>" class="circle_2 cricle_php"></circle>
							</svg>
							<div class="circle__text robotoMedium">PHP</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[4]['circle']); ?>" class="circle_2 cricle_mysql"></circle>
							</svg>
							<div class="circle__text robotoMedium">mySQL</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[5]['circle']); ?>" class="circle_2 cricle_nodejs"></circle>
							</svg>
							<div class="circle__text robotoMedium">NodeJS & npm</div>
						</div>
					</div>
					<div class="column robotoMedium HalfWidth__circleTitle">Workflow</div>
					<div class="column circle__block js_lineCircle3">
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[6]['circle']); ?>" class="circle_2 cricle_git"></circle>
							</svg>
							<div class="circle__text robotoMedium">GIT</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[7]['circle']); ?>" class="circle_2 cricle_gulp"></circle>
							</svg>
							<div class="circle__text robotoMedium">GULP</div>
						</div>
						<div class="wrap_circle_svg">
							<svg class="circle__svg">
								<circle class="circle_1"></circle>
								<circle data-score="<?php show($stmt[8]['circle']); ?>" class="circle_2 cricle_bower"></circle>
							</svg>
							<div class="circle__text robotoMedium">Bower</div>
						</div>
					</div>
				</div>
			</section>
			<section class="pageAbout__Desctop pageAbout__Desctop3">
				<div id="js_connectMap" class="block__map"></div>
				<div class="block_withInfo">
					<div class="blockHalfWidth__titleText2 BERNIERRegular doubleDash alignCenter"> КОНТАКТЫ</div>
					<div class="columnFlex">
						<div class="rowSvg">
							<svg class="svg_block_withInfo svg_iconSocial">
								<use xlink:href="../image/sprite.svg#icon--skype" class="svg_block_withInfo"></use>
							</svg>
						</div>
						<div class="rowText robotoMedium"> pro100_boy</div>
					</div><a href="mailto:pro100boy@gmail.com" target="_blank" class="columnFlex">
						<div class="rowSvg">
							<svg class="svg_block_withInfo svg_iconSocial">
								<use xlink:href="../image/sprite.svg#icon--envelope2" class="svg_block_withInfo"></use>
							</svg>
						</div>
						<div class="rowText robotoMedium"> pro100boy@gmail.com</div></a><a href="tel:+380631275355" class="columnFlex">
						<div class="rowSvg">
							<svg class="svg_block_withInfo svg_iconSocial">
								<use xlink:href="../image/sprite.svg#icon--phone2" class="svg_block_withInfo"></use>
							</svg>
						</div>
						<div class="rowText robotoMedium"> +38(063) 12 75 355</div></a>
					<div class="columnFlex">
						<div class="rowSvg">
							<svg class="svg_block_withInfo svg_iconSocial">
								<use xlink:href="../image/sprite.svg#icon--map_marker" class="svg_block_withInfo"></use>
							</svg>
						</div>
						<div class="rowText robotoMedium"> Украина, г.Киев</div>
					</div>
				</div>
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
				<script src="../js/main-min.js" type="text/javascript"></script>
				<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDPS7Xoznf9yJs6khW0ODkFuRGMKznCpI0"></script>
			</section>
		</main>
		<script src="../js/mainWork-min.js" type="text/javascript"></script>
	</body>
</html>