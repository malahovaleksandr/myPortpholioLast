<?php
include_once "config.php";
$user=DBLoginLocal;
$pass=DBPassLocal;
$host=DB;
$DBnme=DBlocal;

$pdo = new PDO('mysql:host='.$host.';dbname='.DBlocal.';charset=utf8', $user, $pass);
$query='SELECT * FROM skills';

$stmt=$pdo->query($query)->fetchAll(PDO::FETCH_OBJ);
foreach($stmt as $row){
    echo '<pre>';
    print_r($row->name);
    echo '<pre>';
};