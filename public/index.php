<!DOCTYPE HTML>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Портфолио веб-разработчика Малахова Александра">
		<meta name="keywords" content="Сайт, написать сайт, заказать сайт">
		<title>Портфолио</title>
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<div class="wrap_parralax">
			<div class="parralax_layer parralax_layer1"></div>
			<div class="parralax_layer parralax_layer2"></div>
			<div class="parralax_layer parralax_layer3"></div>
			<div class="parralax_layer parralax_layer4"></div>
			<div class="parralax_layer parralax_layer5"></div>
			<div class="parralax_layer parralax_layer6"></div>
			<div class="parralax_layer parralax_layer7"></div>
			<div class="parralax_layer parralax_layer8"></div>
			<div class="parralax_layer parralax_layer9"></div>
			<div class="parralax_layer parralax_layer10"></div>
		</div>
		<div class="wrapper_index">
			<header class="header_index">
				<div class="authorithation js_buttonAuthorithation">Авторизация</div>
			</header>
			<div class="wrapContentIndex">
				<div class="flipper_wrap">
					<div class="blockWellcome_front">
						<div class="wellcome__wrapPhoto"><img src="image/my_photo.jpg" alt=" аватарка" class="wellcomePhoto"></div>
						<div class="wellcome__name">Александр Малахов</div>
						<div class="wellcome__description">Личный сайт веб-разработчика</div>
						<div class="wellcome__icons"><a href="https://www.facebook.com/sanek.maloff" target="_blank" class="wellcome__linkForSvg">
								<svg class="wellcome__svg">
									<use xlink:href="image/sprite.svg#icon--Facebook" target="_blank"></use>
								</svg></a><a href="https://github.com/malahovaleksandr" class="wellcome__linkForSvg">
								<svg class="wellcome__svg">
									<use xlink:href="image/sprite.svg#icon--github"></use>
								</svg></a><a href="https://vk.com/id6734152" target="_blank" class="wellcome__linkForSvg">
								<svg class="wellcome__svg">
									<use xlink:href="image/sprite.svg#icon--vk"></use>
								</svg></a></div>
						<div class="wrapper__wellcome_linkToPage"><a href="page/mywork.php" class="wellcome_linkToPage">Мои работы</a><a href="page/about.php" class="wellcome_linkToPage">Обо мне</a><a href="page/blog.php" class="wellcome_linkToPage">Блог</a></div>
					</div>
					<div class="blockWellcome_back display_none">
						<div class="wellcome_back__title">Авторизуйтесь</div>
						<form class="blockWellcome__formAuthorithation">
							<label for="authorName" class="formAuthorithation__label">
								<input type="name" name="login" placeholder="Логин" id="authorName" class="formAuthorithation__input">
								<div class="iconForAuthorithation">
									<svg class="svgForAuthor">
										<use xlink:href="image/sprite.svg#icon--login"></use>
									</svg>
								</div>
							</label>
							<label for="authorPass" class="formAuthorithation__label">
								<input type="password" name="pass" placeholder="Пароль" id="authorPass" class="formAuthorithation__input">
								<div class="iconForAuthorithation">
									<svg class="svgForAuthor">
										<use xlink:href="image/sprite.svg#icon--password"></use>
									</svg>
								</div>
							</label>
							<label for="youRobot" class="formAuthorithation__label checkbox__youRobot">
								<input type="checkbox" name="robot" id="youRobot" class="formAuthorithation__checkbox">
								<div class="imageCheckboxRobot"></div>
								<div class="formAuthorithation_textRobot">Я человек</div>
							</label>
						</form>
						<div class="wrapper__wellcome_linkToPage"><a href="" class="wellcomeBack_linkToPage js_buttonMainBackRevers">На главную</a><a href="#" class="wellcomeBack_linkToPage">Войти</a></div>
					</div>
				</div>
			</div>
			<footer class="footer_index">© Александр Малахов | Созданно при помощи LoftSchool | 2016</footer>
			<script src="../js/jquery.js"></script>
			<script src="../js/main.js"></script>
		</div>
	</body>
</html>