<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php"); // Just for domingos
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("user_id")){
	
	$current_user_id = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	$current_user_name = x_clean(x_session("XELOW_DOMINGOS_FULL_NAME"));
	
	$account_owner_id = xp("user_id"); // person to follow id
	$account_owner_name = xp("user_name"); // name of the person to follow
	
	$os = xos(); $ip = xip(); $br = xbr(); $timer = x_curtime("0","1");
	$tstamp =x_curtime("0","0");
	$token = sha1($current_user_id.$account_owner_id.uniqid());
	
	// Creating table
	$createtab = x_dbtab("networkingdata","
					user_followed_id VARCHAR(200) NOT NULL,
					user_following_id VARCHAR(200) NOT NULL,
					os VARCHAR(100) NOT NULL,
					br VARCHAR(100) NOT NULL,
					ip VARCHAR(100) NOT NULL,
					token TEXT NOT NULL,
					captured_on VARCHAR(200) NOT NULL,
					timestamped DATETIME NOT NULL
					","MYISAM");
		if(!$createtab){
			echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to create table</div>";
			exit();
		}
		
		if(x_count("networkingdata","user_followed_id='$account_owner_id' AND user_following_id='$current_user_id' LIMIT 1") > 0){
			
			//echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Following already</div>";
			
			// Updating UnFollowing count
			
			$get_count = x_getsingle("SELECT followed_count FROM userdatabank WHERE id='$current_user_id' LIMIT 1","userdatabank WHERE id='$current_user_id' LIMIT 1","followed_count");
			$new_count = $get_count - 1;
			
			x_update("userdatabank","id='$current_user_id'","followed_count='$new_count'","&nbsp;","Failed to update followed count");
			
			// Updating UnFollower count
			
			$get_count = x_getsingle("SELECT follower_count FROM userdatabank WHERE id='$account_owner_id' LIMIT 1","userdatabank WHERE id='$account_owner_id' LIMIT 1","follower_count");
			$new_count = $get_count - 1;
			
			x_insert("type,title,sender_id,owner_id,message,status,rtime,stime","notifyme","'p','Someone unfollowed you','$current_user_id','$account_owner_id','Sorry! <b>$current_user_name</b> Just unfollowed you.','0','$timer','$tstamp'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
			
			x_del("networkingdata","user_followed_id='$account_owner_id' AND user_following_id='$current_user_id'","unfollowed","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to unfollow!</div>");
		}else{
			// Limiting the number of persons to follow
			
			$limit = x_getsingle("SELECT following_count FROM followercontrol WHERE status='1' LIMIT 1","followercontrol WHERE status='1' LIMIT 1","following_count");
			
			// Updating Following count
			
			$get_count = x_getsingle("SELECT followed_count FROM userdatabank WHERE id='$current_user_id' LIMIT 1","userdatabank WHERE id='$current_user_id' LIMIT 1","followed_count");
			$new_count = $get_count + 1;
			
			// validating limit of following started
			if($new_count > $limit){
				//echo "<div class='alert alert-success'><i class='fa fa-minus-circle'></i> You cannot follow more than $limit persons!</div>";
				finish("0","You cannot follow more than $limit persons");
				exit();
			}
			// validating limit of following ended
			
			x_update("userdatabank","id='$current_user_id'","followed_count='$new_count'","&nbsp;","Failed to update followed count");
			
			// Updating Follower count
			
			$get_count = x_getsingle("SELECT follower_count FROM userdatabank WHERE id='$account_owner_id' LIMIT 1","userdatabank WHERE id='$account_owner_id' LIMIT 1","follower_count");
			$new_count = $get_count + 1;
			
			x_update("userdatabank","id='$account_owner_id'","follower_count='$new_count'","&nbsp;","Failed to update follower count");
			
			// sending notifications
			x_insert("type,title,sender_id,owner_id,message,status,rtime,stime","notifyme","'p','Someone followed you','$current_user_id','$account_owner_id','Congratulations <b>$current_user_name</b> Just followed you.','0','$timer','$tstamp'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
			
			x_insert("user_followed_id,user_following_id,os,br,ip,token,captured_on,timestamped","networkingdata","'$account_owner_id','$current_user_id','$os','$br','$ip','$token','$timer','$tstamp'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Following already</div>");
		}


}else{
	?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Parameter missing!</div><?php
}