<?php
include_once "config.php";
$host=DB;
//настройки для локального сервера
$user=DBLoginLocal;
$pass=DBPassLocal;
$DBname=DBlocal;
//настройки для внешнего сервера
//$user=DBLogin;
//$pass=DBPass;
//$DBname=DBhosting;

$dsn='mysql:host='.$host.';dbname='.$DBname.';charset=utf8';
$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);
$pdo = new PDO($dsn, $user, $pass,$opt);

$stmt = $pdo->prepare ("INSERT INTO site (nameSite,workflow,link, photoSrc) VALUES (:nameSite, :workflow, :link,:photoSrc)");
$stmt -> bindParam(':nameSite', $_POST['nameSite']);
$stmt -> bindParam(':workflow', $_POST['workflow']);
$stmt -> bindParam(':link', $_POST['linkSite']);
$stmt -> bindParam(':photoSrc', $_POST['textArcticle']);
$stmt -> execute();
echo 'ok'.$_POST['textArcticle'];



