<?php
$db_username = 'xxxx';
$db_password = 'xxxx';
$db_name = 'demo';
$db_host = 'localhost';
$item_per_page = 5;

$connecDB = mysqli_connect($db_host, $db_username, $db_password,$db_name)or die('could not connect to database');
?>