<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php"); // Just for domingos
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("post_id")){
	
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID")); // Post engager
	$post_owner = xp("post_owner"); // post owner id
	$post_id = xp("post_id"); // post hashed id
	$status = xp("status");
	
	// Validating that the post owner does not engage
	
	if($post_owner == $userid){
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> You cannot like or dislike your post!</div>";
		exit();
	}
	
	$os = xos(); $ip = xip(); $br = xbr(); $timer = x_curtime("0","1");
	$time =x_curtime("0","0");
	$token = sha1($userid.$post_id.uniqid());
	
	$create = x_dbtab("post_engagement","
	user_id VARCHAR(255) NOT NULL,
	status ENUM('','like','dislike') NOT NULL,
	post_owner_id VARCHAR(255) NOT NULL, 
	post_id VARCHAR(255) NOT NULL,
	added_on DATETIME NOT NULL,
	rtime VARCHAR(200) NOT NULL,
	os VARCHAR(50) NOT NULL,
	ip VARCHAR(50) NOT NULL,
	br VARCHAR(50) NOT NULL,
	token TEXT NOT NULL
	","MYISAM");
	
	if($create){
		// Getting post owner details from the owner's id
		
		$post_owner_name = x_getsingle("SELECT fullname FROM userdatabank WHERE id='$post_owner' LIMIT 1","userdatabank WHERE id='$post_owner' LIMIT 1","fullname");
		$post_engager_name = x_getsingle("SELECT fullname FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","fullname");
		$statusd = $status."d";
		
		if(($post_engager_name == "") || ($post_owner_name == "")){
			echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Missing Credential!</div>";
			exit();
		}
		
		// Getting the like and dislike count
		
		$get_like_count = x_getsingle("SELECT like_counter FROM postcontent WHERE post_id='$post_id' AND uploaded_by='$post_owner' LIMIT 1","postcontent WHERE post_id='$post_id' AND uploaded_by='$post_owner'","like_counter");
		
		$get_dislike_count = x_getsingle("SELECT dislike_counter FROM postcontent WHERE post_id='$post_id' AND uploaded_by='$post_owner' LIMIT 1","postcontent WHERE post_id='$post_id' AND uploaded_by='$post_owner'","dislike_counter");
		
		// validating that post engager has a record
		
		if(x_count("post_engagement","user_id='$userid' AND post_id='$post_id' LIMIT 1") > 0){
			foreach(x_select("id,status","post_engagement","user_id='$userid' AND post_id='$post_id'","1","id") as $key){
				$pid = $key["id"];$post_status = $key["status"];
			}
			
				if($post_status == $status){
					
					echo "You have $statusd already";
					
				}else{
	
	// Insert Notification on reupdate of a post status
		
	x_insert("type,title,sender_id,owner_id,post_id,message,status,rtime,stime","notifyme","'p','Someone $statusd your post.','$userid','$post_owner','$post_id','<b>$post_engager_name</b> Just $statusd your post.','0','$timer','$time'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
			
					if(($status == "like") && ($post_status == "dislike")){
						
						// updating like and dislike counter
						
						$newdislikecounter = $get_dislike_count - 1;
						
						$newlikecounter = $get_like_count + 1;
						
						x_update("postcontent","post_id='$post_id' AND uploaded_by='$post_owner'","dislike_counter='$newdislikecounter',like_counter='$newlikecounter'","<p>Updated counter</p>","<p>Failed to update.</p>");

						// re-update post like status
						
						x_update("post_engagement","user_id='$userid' AND post_id='$post_id'","status='$status'","<p>done</p>","<p>failed</p>");
						
						// updating status counter
						
					}else{

					// updating like and dislike counter
						
						$newdislikecounter = $get_dislike_count + 1;
						
						$newlikecounter = $get_like_count - 1;
						
						x_update("postcontent","post_id='$post_id' AND uploaded_by='$post_owner'","dislike_counter='$newdislikecounter',like_counter='$newlikecounter'","<p>Updated counter</p>","<p>Failed to update.</p>");
						
					// re-update post dislike status
					
						x_update("post_engagement","user_id='$userid' AND post_id='$post_id'","status='$status'","<p>done</p>","<p>failed</p>");
					
					}
				}
					
			
		}else{
			
			// Updating status counter
			
			if($status == "like"){
				$new_count = $get_like_count + 1;
				x_update("postcontent","post_id='$post_id' AND uploaded_by='$post_owner'","like_counter='$new_count'","<p>Updated like counter</p>","<p>Failed to update like count.</p>");
			}else{
				$new_count = $get_dislike_count + 1;
				x_update("postcontent","post_id='$post_id' AND uploaded_by='$post_owner'","dislike_counter='$new_count'","<p>Updated dislike counter</p>","<p>Failed to update dislike count.</p>");
			}
			
			// Insert Notification
			
			x_insert("type,title,sender_id,owner_id,post_id,message,status,rtime,stime","notifyme","'p','Someone $statusd your post.','$userid','$post_owner','$post_id','<b>$post_engager_name</b> Just $statusd your post.','0','$timer','$time'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
			
			// Inserting the status data
			
			x_insert("user_id,status,post_owner_id,post_id,added_on,rtime,os,ip,br,token","post_engagement","'$userid','$status','$post_owner','$post_id','$time','$timer','$os','$ip','$br','$token'","&nbsp;","<p>Failed</p>");
		}
	}else{
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to create table!</div>";
	}
	
}else{
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Parameter missing!</div>";
	}