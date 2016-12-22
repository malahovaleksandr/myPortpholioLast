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

function updateSkills($nameSkill,$pdo){
    $stmt = $pdo->prepare ("UPDATE skills SET circle = :score, procent= :procent   WHERE id = :ID");
    $scoreCircle=220-$_POST[$nameSkill]['score']*2.2;//общий круг длина 220рх. минусуем от 220 значение ,которое ввели, так как будем задавать этим значение круг который показывает процент не знания материала
    $stmt -> bindParam(':score', $scoreCircle);
    $stmt -> bindParam(':procent', $_POST[$nameSkill]['score']);
    $stmt -> bindParam(':ID', $_POST[$nameSkill]['id']);
    $stmt -> execute();
   // echo $nameSkill.' круг '.$scoreCircle.' процент '.$_POST[$nameSkill]['procent'];
}
if($_POST['html']>1){
    updateSkills('html',$pdo);
};
if($_POST['css']>1){
    updateSkills('css',$pdo);
};
if($_POST['js']>1){
    updateSkills('js',$pdo);
};
if($_POST['php']>1){
    updateSkills('php',$pdo);
};
if($_POST['nodejs']>1){
    updateSkills('nodejs',$pdo);
};
if($_POST['mysql']>1){
    updateSkills('mysql',$pdo);
};
if($_POST['gulp']>1){
    updateSkills('gulp',$pdo);
};
if($_POST['git']>1){
    updateSkills('git',$pdo);
};
if($_POST['bower']>1){
    updateSkills('bower',$pdo);
};


echo 'prost';

