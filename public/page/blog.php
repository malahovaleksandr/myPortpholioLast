<?php require_once "../php/returnBlog.php"?><!DOCTYPE HTML>
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
			<div class="blueWall_menuLink"><a href="mywork.php" class="blueWall_link BERNIERRegular">Мои Работы</a><a href="blog.php" class="blueWall_link BERNIERRegular doubleDash">Блог</a><a href="about.php" class="blueWall_link BERNIERRegular">Обо мне</a><a href="authorization.php" class="blueWall_link BERNIERRegular">Авторизация</a></div>
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
				<div class="triangleDouble fillWihte">
					<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 85" preserveaspectratio="none" class="svg_triangleDouble">
						<polygon points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
						<polygon points="1000,0   1000,86   500,86   500,75.5"></polygon>
					</svg>
				</div>
			</section>
			<div class="wrap__titleName flexCenterContext background_white1 height100px">
				<div class="blockHalfWidth__titleText"></div>
			</div>
			<section class="pageBlog__Desctop">
				<aside class="column__1_blog js_static">
					<div class="invisible_menu"></div>
					<ul class="ul_column__1_blog js_ul_menu"><?php foreach($stmt as $key=>$value){
    if($value['id']==1){
    echo "<li data-id=".$value['dataID']." class=\"column__1_blog__line\">
     <a href=#".$value['dataID']." class=\"column__1_blog__line js_linkActiv activeStroke_blogThema\">".$value['title']."</a></li>";
    }else{
    echo "<li data-id=".$value['dataID']." class=\"column__1_blog__line\">
    <a href=#".$value['dataID']." class=\"column__1_blog__line js_linkActiv\">".$value['title']."</a></li>";
    }

}?>
						<!--li(data-id="thema1").column__1_blog__line.activeStroke_blogThema-->
						<!--    a(href="#thema1").column__1_blog__line Интересное в SASS-->
						<!--li(data-id="thema2").column__1_blog__line-->
						<!--    a(href="#thema2").column__1_blog__line Прыжки в Небо-->
						<!--li(data-id="thema3").column__1_blog__line-->
						<!--    a(href="#thema3").column__1_blog__line  Есть мечта - верь!-->
					</ul>
				</aside>
				<div class="column__2_blog"><?php foreach($stmt as $key=>$value){
    echo "<div data-section=".$value['dataID']." id=".$value['dataID']." class=\"block__column__2_blog\">
    		<div class=\"column__2__title BERNIERRegular\">".$value['title']."</div>
    		<div class=\"column__2__date robotoLight\">".$value['dataText']."</div>
    		<div class=\"column__2__text robotoRegular\">".$value['textBlog']."</div>
    	</div>";
}
?>
					<!--.block__column__2_blog(data-section="thema1")#thema1-->
					<!--    .column__2__title.BERNIERRegular Интересное в SASS-->
					<!--    .column__2__date.robotoLight 20 июля 2016-->
					<!--    .column__2__text.robotoRegular.-->
					<!--        Таким образом начало повседневной работы по формированию-->
					<!--        позиции позволяет выполнять важные задания по разработке-->
					<!--        направлений прогрессивного развития. Разнообразный и богатый-->
					<!--        опыт новая модель организационной деятельности играет важную-->
					<!--        роль в формировании новых предложений. Товарищи! новая модель-->
					<!--         организационной деятельности играет важную роль в формировании-->
					<!--          систем массового участия. Не следует, однако забывать,-->
					<!--          что укрепление и развитие структуры обеспечивает широкому-->
					<!--           кругу (специалистов) участие в формировании систем-->
					<!--           массового участия. Идейные соображения высшего порядка,-->
					<!--           а также рамки и место обучения кадров обеспечивает-->
					<!--            широкому кругу (специалистов) участие в формировании-->
					<!--            позиций, занимаемых участниками в отношении поставленных-->
					<!--             задач. Товарищи! постоянный количественный рост и сфера-->
					<!--              нашей активности способствует подготовки и реализации-->
					<!--              модели развития. С другой стороны рамки и место обучения-->
					<!--              кадров влечет за собой процесс внедрения и модернизации-->
					<!--              системтемы обучения кадров, соответствует насущным-->
					<!--              потребностям.-->
					<!--.block__column__2_blog(data-section="thema2")#thema2-->
					<!--    .column__2__title.BERNIERRegular Прыжки в Небо-->
					<!--    .column__2__date.robotoLight 23 июля 2015-->
					<!--    .column__2__text.robotoRegular.-->
					<!--        Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.-->
					<!--.block__column__2_blog(data-section="thema3")#thema3-->
					<!--    .column__2__title.BERNIERRegular Есть мечта - верь!-->
					<!--    .column__2__date.robotoLight 20 августа 2015-->
					<!--    .column__2__text.robotoRegular.-->
					<!--        Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.-->
				</div>
				<div class="fixed_menu"></div>
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
	</body>
</html>