<?php
session_start();
include_once("finishit.php");
if(x_validatepost("processkey") && x_validatepost("_token") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER")){
	
	$email = xp("userinfo");
	$pass = xp("passkey");
	$salt = "IloVEgOdFoRhIsMeRcY562371437890aNDhISkINd?@#";
	//$hashpin = md5(sha1($salt.$pin)).md5(sha1($pin));
	$hashpass = md5(sha1($salt.$pass)).md5(sha1($pass));
	
	
	/***$secret = "6LcDo1sUAAAAAOF0Nwyg-jvChfPqH_w7s7YVNnn0"; 
	$gpost = xp("g-recaptcha-response");
	$params = array(
			   "secret" => $secret,
			   "response" => $gpost
				);
				
	$result = x_google("https://www.google.com/recaptcha/api/siteverify",$params);
		
 if($result['success']){***/
	 	if(x_count("userdatabank","email='$email' AND password='$hashpass' OR username='$email' AND password='$hashpass' OR nickname='$email' AND password='$hashpass' OR mobile='$email' AND password='$hashpass' LIMIT 1") > 0){
		
	foreach(x_select("id,fullname,mobile,dob,nickname,username,email,account_type","userdatabank","email='$email' AND password='$hashpass' OR username='$email' AND password='$hashpass' OR nickname='$email' AND password='$hashpass' OR mobile='$email' AND password='$hashpass'","1","id") as $key){
		$id = $key["id"];
		$full = $key["fullname"];
		$nick = $key["nickname"];
		$mob = $key["mobile"];
		$dob = $key["dob"];
		$user = $key["username"];
		$mail = $key["email"];
		$type = $key["account_type"];
	}
	$_SESSION["XELOW_DOMINGOS_USER_ID"] = $id;
	$_SESSION["XELOW_DOMINGOS_USER_NAME"] = $user;
	$_SESSION["XELOW_DOMINGOS_NICK_NAME"] = $nick;
	$_SESSION["XELOW_DOMINGOS_FULL_NAME"] = $full;
	$_SESSION["XELOW_DOMINGOS_MOBILE"] = $mob;
	$_SESSION["XELOW_DOMINGOS_EMAIL_BASE"] = $mail;
	$_SESSION["XELOW_DOMINGOS_DOB"] = $dob;
	$_SESSION["XELOW_DOMINGOS_ACCOUNT_TYPE"] = $type;
	
	// page session started
	$_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'] = sha1(rand(23,9000000)).sha1(md5(DATE("YmdHis")));
	
	$_SESSION['DOMINGOS_POST_ID'] = sha1($_SESSION['XELOW_DOMINGOS_USER_ID'].rand(23,9900000).DATE("YmdHis"));
	
	$current_token = x_session('DOMIGOS_DATACENTER_AUTH_SERVER');
	$current_post_id = x_session('DOMINGOS_POST_ID');
	finish("cpanel/dashboard?hashkey=$current_token&pid=$current_post_id","0");
	
	}else{
		x_print("<div class='alert alert-warning alert-dismissible'>Invalid user id <b>$email</b></div>");
		//finish("./","Invalid user id $email");
	}
		
	
 /**}else{
	 finish("./","Invalid captcha! try again");
 }***/

	
}else{
	x_print("<div class='alert alert-warning alert-dismissible'>Invalid Request detected</div>");
	//finish("./","Invalid captcha! try again");
}

?>
