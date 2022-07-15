<?php
include("finishit.php");
xstart(0);
$userid = x_session("XELOW_DOMINGOS_USER_ID");
$payment_id = "DS-".$userid.str_shuffle(DATE("YmdHis")).strtoupper(xrands(5));
echo $payment_id;
?>
