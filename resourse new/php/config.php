<?php
session_start();

error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
define ('DB','localhost');
//настройки для проверки на локальный сервер
define('DBlocal','portfolio');
define('DBLoginLocal','root');
define('DBPassLocal','');

?>