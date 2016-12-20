<!DOCTYPE HTML>
<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Портфолио веб-разработчика Малахова Александра">
		<meta name="keywords" content="Сайт, написать сайт, заказать сайт">
		<!--link(el="shorcut icon" href="../favicon.ico" type="image/x-icon")-->
		<!--link(rel="icon" href="../favicon.ico" type="image/x-icon")-->
		<title>Портфолио- Админка</title>
		<link rel="stylesheet" href="../css/main.css">
	</head>
	<body>
		<div class="wrapper_adminka">
			<div class="header_adminka">
				<div class="header_adminka__title robotoMedium">Панель администрирования</div><a href="../index.php" class="header_adminka__link robotoMedium">Вернуться на сайт</a>
			</div>
			<main class="main_adminka">
				<div class="main_adminka_background"></div>
				<nav class="main_adminka_tabs_nav">
					<div data-tab="js_main_adminka_tab1" class="title__tabs robotoMedium activeTabs">TAB 1</div>
					<div data-tab="js_main_adminka_tab2" class="title__tabs robotoMedium">TAB 2</div>
					<div data-tab="js_main_adminka_tab3" class="title__tabs robotoMedium">TAB 3</div>
				</nav>
				<div class="main_adminka_tab js_main_adminka_tab1 main_tabActive">
					<div class="tab__title robotoMedium">Страница "Обо мне"</div>
					<div class="wrapper_for_tabs">
						<div class="adminka_blockSkill">
							<div class="blockSkill__title robotoMedium">Frontend</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">HTML</div>
								<input type="text" name="html_score" class="blockSkill_input input_html">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">CSS</div>
								<input type="text" name="css_score" class="blockSkill_input input_css">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">JavaScript</div>
								<input type="text" name="js_score" class="blockSkill_input input_js">
								<div class="blockSkill_row">%</div>
							</div>
						</div>
						<div class="adminka_blockSkill">
							<div class="blockSkill__title robotoMedium">Backend</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">PHP</div>
								<input type="text" name="php_score" class="blockSkill_input input_php">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">NodeJS</div>
								<input type="text" name="nodejs_score" class="blockSkill_input input_nodejs">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">MySQL</div>
								<input type="text" name="mysql_score" class="blockSkill_input input_mysql">
								<div class="blockSkill_row">%</div>
							</div>
						</div>
						<div class="adminka_blockSkill">
							<div class="blockSkill__title robotoMedium">Workflow</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">GULP</div>
								<input type="text" name="gulp_score" class="blockSkill_input input_gulp">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">GIT</div>
								<input type="text" name="git_score" class="blockSkill_input input_git">
								<div class="blockSkill_row">%</div>
							</div>
							<div class="blockSkill_line robotoRegular">
								<div class="blockSkill_row">Bower</div>
								<input type="text" name="bower_score" class="blockSkill_input input_bower">
								<div class="blockSkill_row">%</div>
							</div>
						</div>
					</div>
					<div class="buttonSave robotoMedium js_buttonSaveTab1">Сохранить</div>
				</div>
				<div class="main_adminka_tab js_main_adminka_tab2">
					<div class="tab__title robotoMedium">Страница "Блог"</div>
					<div class="wrapper_inputBlog_tabs">
						<div class="blockSkill__title robotoMedium">Добавить запись</div>
						<input type="text" name="nameArticle" placeholder="Название" class="input_blog_admin js_NameArticle">
						<input type="text" name="dateArticle" placeholder="Дата" class="input_blog_admin js_dataArticle">
						<textarea rows="10" name="textArticle" placeholder="Ваше сообщение" class="inputForm input_blogTextarea js_textArticle"></textarea>
					</div>
					<div class="buttonSave robotoMedium js_buttonSaveTab2">Сохранить</div>
				</div>
				<div class="main_adminka_tab js_main_adminka_tab3">
					<div class="tab__title robotoMedium">Страница "Мои работы"</div>
					<div class="wrapper_inputBlog_tabs">
						<div class="blockSkill__title robotoMedium">Добавить работу</div>
						<input type="text" name="nameArticle" placeholder="Название работы" class="input_blog_admin js_NameSite">
						<input type="text" name="dateArticle" placeholder="Технологии" class="input_blog_admin js_workflowSite">
						<label>
							<input type="file" name="imageSite" class="addImage_forSite js_addImage_forSite">
							<div class="iconAddImage flexRow"><img src="../image/addImage.png" alt="добавить фото" class="imageAddImage">
								<div class="textAddImage robotoRegular">Загрузить картинку</div>
							</div>
						</label>
					</div>
					<div class="buttonSave robotoMedium js_buttonSaveTab2">Сохранить</div>
				</div>
				<div class="massegeSand robotoBold js_massegeSave">Данные сохранились</div>
			</main>
		</div>
		<script src="../js/jquery.js" type="text/javascript"></script>
		<script src="../js/main.js" type="text/javascript"></script>
	</body>
</html>