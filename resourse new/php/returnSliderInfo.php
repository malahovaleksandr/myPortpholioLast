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
$query='SELECT * FROM site';

$stmt=$pdo->query($query)->fetchAll();
foreach($stmt as $key=>$value){


}
function show($res){
    echo $res;
}
//echo $stmt[2]['nameSite'];
