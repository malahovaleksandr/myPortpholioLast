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
$query='SELECT * FROM skills';

$stmt=$pdo->query($query)->fetchAll();
echo '<pre>';
print_r($stmt);
echo '<pre>';
//foreach($stmt as $row){
//    echo '<pre>';
//    print_r($row['name']);
//    echo ' ';
//    print_r($row['procent']);
//    echo ' ';
//    print_r($row['circle']);
//    echo '<pre>';
//};