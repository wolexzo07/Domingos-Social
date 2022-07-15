<?php
include("finishit.php");
$tranx = x_paytransfer("sk_live_ddbf6c1c9c8f8ecac09c278cd1b76b62516eedba",45,"RCP_giv97qedug2qyip","8937u292009");
//$tranx = x_createRecipient("sk_live_ddbf6c1c9c8f8ecac09c278cd1b76b62516eedba","Biobaku Oluwole","2177929814","057","My account");
print_r($tranx);
?>