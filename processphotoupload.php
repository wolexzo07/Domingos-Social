<?php
session_start();
include_once("finishit.php");
if(x_validatepost("processkey") && x_validatepost("_token") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_FIRST_STEP") && x_validatesession("DOMINGOS_SECOND_STEP") && x_validatesession("DOMINGOS_USER_NAME")){
	
	$username = x_clean(x_session("DOMINGOS_USER_NAME"));
	
			 if(x_count("userdatabank","username='$username' LIMIT 1") > 0){
				
				if(x_ischeckupload("uploadprofile")){
					
				// Handling file upload started
					
				xcload("uploadprofile"); // checking upload status
				$size1 = x_size("uploadprofile"); // get file size
				xcsize("uploadprofile",4194304); // 4mb max file size
				xtex("png,gif,jpg,jpeg","uploadprofile");	// checking file extension
				$token1 = sha1(uniqid().xrands(10).Date("His").$username)."_";
				$path1 = x_path("uploadprofile","userphotodb/hashedcontent/$token1");
				
				xmload("uploadprofile",$path1,"");
					
				x_updated("userdatabank","username='$username'","photo_upload='$path1'","<div class='alert alert-warning'><i class='fa fa-check-circle'></i> Profile Photo uploaded!</div>","<div class='alert alert-warning'><i class='fa fa-minus-circle'></i> Error: Failed to upload photo!</div>");
				
				// Trying to log user into dashboard
				
				foreach(x_select("id,fullname,mobile,dob,nickname,username,email,account_type","userdatabank","username='$username'","1","id") as $key){
						$id = $key["id"];
						$full = $key["fullname"];
						$nick = $key["nickname"];
						$mobile = $key["mobile"];
						$dob = $key["dob"];
						$user = $key["username"];
						$mail = $key["email"];
						$type = $key["account_type"];
				}
					$_SESSION["XELOW_DOMINGOS_USER_ID"] = $id;
					$_SESSION["XELOW_DOMINGOS_USER_NAME"] = $user;
					$_SESSION["XELOW_DOMINGOS_NICK_NAME"] = $nick;
					$_SESSION["XELOW_DOMINGOS_FULL_NAME"] = $full;
					$_SESSION["XELOW_DOMINGOS_MOBILE"] = $mobile;
					$_SESSION["XELOW_DOMINGOS_EMAIL_BASE"] = $mail;
					$_SESSION["XELOW_DOMINGOS_DOB"] = $dob;
					$_SESSION["XELOW_DOMINGOS_ACCOUNT_TYPE"] = $type;
					
					// unsetting registration session
					
					unset($_SESSION["DOMINGOS_FIRST_STEP"]);
					unset($_SESSION["DOMINGOS_SECOND_STEP"]);
					unset($_SESSION["DOMINGOS_USER_NAME"]);
					
					//finish("cpanel/dashboard","Profile photo uploaded");
					
	// page session started
	$_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'] = sha1(rand(23,9826381788)).sha1(md5(DATE("YmdHis")));
	
	$_SESSION['DOMINGOS_POST_ID'] = sha1($_SESSION['XELOW_DOMINGOS_USER_ID'].rand(23,98268390).DATE("YmdHis"));
	
	$current_token = x_session('DOMIGOS_DATACENTER_AUTH_SERVER');
	$current_post_id = x_session('DOMINGOS_POST_ID');
	finish("cpanel/dashboard?hashkey=$current_token&pid=$current_post_id","Profile photo uploaded");
				
					
				// Handling file upload ended
					
				}else{
					?><div class="alert alert-warning"><i class="fa fa-minus-circle"></i> Error: No photo was uploaded!</div><?php
				}
			
				
				

			
			 }else{
				x_print("<div class='alert alert-warning alert-dismissible'>Invalid user account detected!</div>");
				finish("registerdetails","0");
			 }
		 
	
}else{
	x_print("<div class='alert alert-warning alert-dismissible'> Missing parameters</div>");
	finish("registerdetails","0");
}

?>
