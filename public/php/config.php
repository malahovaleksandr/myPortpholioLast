<?php
session_start();

error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
define ('DB','localhost');
//настройки для проверки на локальный сервер
define('DBlocal','portfolio');
define('DBLoginLocal','root');
define('DBPassLocal','');
//настройки для внешнего сервер
define('DBhosting','u879712820_order');
define('DBLogin','u879712820_chik');
define('DBPass','111111');


?>