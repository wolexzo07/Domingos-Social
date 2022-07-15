<?php 
session_start();
include_once("finishit.php");
//xstart("0");
if(!isset($_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'])){
	$_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'] = sha1(rand(23,9000000)).sha1(md5(DATE("YmdHis")));
}

?>