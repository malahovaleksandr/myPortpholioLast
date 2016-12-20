<?php

include_once "config.php";
$user=DBLoginLocal;
$pass=DBPassLocal;
$host=DB;
$DBname=DBlocal;

$dsn='mysql:host='.$host.';dbname='.$DBname.';charset=utf8';
$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);
$pdo = new PDO($dsn, $user, $pass,$opt);

$login=$_POST['login'];
$password=$_POST['password'];
//
//$login='admin';
//$password='pro100boy';

$query='SELECT * FROM user WHERE login= :login and password= :password';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':login', $login, PDO::PARAM_STR);
$stmt->bindParam(':password', $password, PDO::PARAM_STR);
$stmt->execute();
$res=$stmt->fetchAll();
if($res){
    echo 'location';
}else{echo 'false';}
