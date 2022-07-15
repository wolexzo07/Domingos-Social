<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){
	
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	$getbalance_NGN = x_getsingle("SELECT naira_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","naira_wallet");

	echo number_format($getbalance_NGN,2);
}else{
	echo "0.00";
}