<?php
session_start();
include_once("finishit.php");
if(x_validatepost("processkey") && x_validatepost("_token") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER")){
	
	/***$secret = "6LcDo1sUAAAAAOF0Nwyg-jvChfPqH_w7s7YVNnn0"; 
	$gpost = xp("g-recaptcha-response");
	$params = array(
			   "secret" => $secret,
			   "response" => $gpost
				);
				
	$result = x_google("https://www.google.com/recaptcha/api/siteverify",$params);
		
	 if($result['success']){**/
		 
		$fullname = xp("fullname");$email = xpmail("email");
		$mobile = xp("mobile");$username = xp("username");
		
		// validate nigerian number format started
		if(x_checkmobile($mobile) != $mobile){
			x_print("<div class='alert alert-warning alert-dismissible'>Invalid Mobile Number!</div>");
			exit();
		}
		// validate nigerian number format ended
		
		$pass = xp("pass");$pass1 = xp("passconfirm");
		$salt = "IloVEgOdFoRhIsMeRcY562371437890aNDhISkINd?@#";
		$hashpass = md5(sha1($salt.$pass)).md5(sha1($pass));
		$code = xrands(10);
		$hashcode = md5(sha1($salt.$code)).md5(sha1($code));
		 
		 if($pass != $pass1){
			 x_print("<div class='alert alert-warning alert-dismissible'>Password does not match!</div>");
			exit();
		 }
		 
		 $create = x_dbtab("userdatabank","
		is_admin ENUM('0','1') NOT NULL,
		account_type ENUM('normal','clergy','business') NOT NULL,
		status ENUM('0','1') NOT NULL,
		contact_status ENUM('0','1') NOT NULL,
		fullname VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		username VARCHAR(100) NOT NULL,
		nickname VARCHAR(100) NOT NULL,
		mobile VARCHAR(150) NOT NULL,
		password TEXT NOT NULL,
		pincode TEXT NOT NULL,
		dob VARCHAR(200) NOT NULL,
		country VARCHAR(200) NOT NULL,
		state VARCHAR(200) NOT NULL,
		tellus TEXT NOT NULL,
		photo_upload TEXT NOT NULL,
		cover_photo TEXT NOT NULL,
		os VARCHAR(100) NOT NULL,
		br VARCHAR(100) NOT NULL,
		ip VARCHAR(100) NOT NULL,
		token TEXT NOT NULL,
		reg_on VARCHAR(200) NOT NULL,
		time_stamp DATETIME NOT NULL
		 ","MYISAM");
		 
		 $os = xos();$ip = xip();$br = xbr();
		 $token = sha1(uniqid());$timer = x_curtime("0","1");
		 $stamp = x_curtime("0","0");
		  
		 
		 if($create){
			 if(x_count("userdatabank","email='$email' LIMIT 1") > 0){
			
			x_print("<div class='alert alert-warning alert-dismissible'>Email <b>$email</b> was already taken!</div>");
			
				}else{
					
					 if(x_count("userdatabank","mobile='$mobile' LIMIT 1") > 0){
			
					x_print("<div class='alert alert-warning alert-dismissible'>Phone Number <b>$mobile</b> was already taken!</div>");
					
					}else{
						 if(x_count("userdatabank","username='$username' LIMIT 1") > 0){
			
							x_print("<div class='alert alert-warning alert-dismissible'>Username <b>$username</b> was already taken!</div>");
							
								}else{
				
			$_SESSION["DOMINGOS_FIRST_STEP"] = sha1(uniqid()).md5(uniqid());
			$_SESSION["DOMINGOS_USER_NAME"] = $username;
									
									// start sending code using sms
									/***
									$msg = urlencode("Your domingos account verification code is $code");
									$api = "dc653ff9";
									$sender = "Domingos";
									$route = 3;
									$url = "http://pmcsms.com/api/v1/http.php";
									$result = "234".substr($mobile,1,14);
									
									$params = array(
									   "api_key" => $api,
									   "recipient" => $result,
									   "message" => $msg,
										"sender" => $sender,
										 "route" => $route
										);
										
									
									echo xpost($url,$params);
									****/
									// start sending code using sms
									
									//email sending started now
									/***
									$to = $email;
		
									$subject = "DOMINGOS SOCIAL NETWORK - ACCOUNT VERIFICATION CODE";
									$message = "Hi $fullname,<br/>
									Your domingos account verification code is $code <br/>";
									$tr = x_mailer("0",$to,$subject,$message);
									
									if($tr == 0){
										x_print("<div class='alert alert-danger alert-dismissible'>Failed to send verification code through mail</div>");
									}***/
									//email sending ended now
									
x_insert("account_type,fullname,mobile,password,email,username,nickname,os,br,ip,token,reg_on,time_stamp,pincode","userdatabank","'normal','$fullname','$mobile','$hashpass','$email','$username','@$username','$os','$br','$ip','$token','$timer','$stamp','$hashcode'"," <script>window.location='confirmtransaction?code=$code';</script>","<div class='alert alert-warning alert-dismissible'>Failed to save data!</div>");
									
								}
						
					}
					
				}
		 }else{
			  x_print("<div class='alert alert-warning alert-dismissible'>Failed to create table in the database!</div>");
			exit();
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