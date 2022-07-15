<?php
session_start();
include_once("finishit.php");
if(x_validatepost("processkey") && x_validatepost("_token") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_FIRST_STEP") && x_validatesession("DOMINGOS_USER_NAME")){
	
	$username = x_clean(x_session("DOMINGOS_USER_NAME"));
	$salt = "IloVEgOdFoRhIsMeRcY562371437890aNDhISkINd?@#";
	$code = xp("code");
	$hashcode = md5(sha1($salt.$code)).md5(sha1($code));
	
	/***$secret = "6LcDo1sUAAAAAOF0Nwyg-jvChfPqH_w7s7YVNnn0"; 
	$gpost = xp("g-recaptcha-response");
	$params = array(
			   "secret" => $secret,
			   "response" => $gpost
				);
				
	$result = x_google("https://www.google.com/recaptcha/api/siteverify",$params);
		
	 if($result['success']){
		 ****/
			 if(x_count("userdatabank","username='$username' LIMIT 1") > 0){
				
				if(x_count("userdatabank","username='$username' and pincode='$hashcode' LIMIT 1") > 0){
					 x_update("userdatabank","username='$username'","contact_status='1'","<div class='alert alert-success alert-dismissible'>Contact status was verified!</div>","<div class='alert alert-warning alert-dismissible'>Failed to update contact status!</div>");
					 
				$_SESSION["DOMINGOS_FIRST_STEP"] = sha1(uniqid()).md5(uniqid());
				$_SESSION["DOMINGOS_SECOND_STEP"] = sha1(uniqid()).md5(uniqid());
				$_SESSION["DOMINGOS_USER_NAME"] = $username;

				finish("uploadphoto","0");
				
				}else{
				x_print("<div class='alert alert-warning alert-dismissible'>Invalid code was entered!</div>");
				finish("confirmtransaction","0"); 
				 }
			 }else{
				x_print("<div class='alert alert-warning alert-dismissible'>Invalid user account detected!</div>");
				finish("registerdetails","0");
			 }
		 
		/***}else{
		 x_print("<div class='alert alert-warning alert-dismissible'>Invalid Captcha! please try again</div>");
		 finish("registerdetails","0");
		}***/
	
	
}else{
	x_print("<div class='alert alert-warning alert-dismissible'> Missing parameters</div>");
	finish("registerdetails","0");
}

?>
