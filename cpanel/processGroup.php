<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey")){

	$name = xp("gname");$nick = xp("gnick");$rule = xp("grule");
	$gender = xp("gender");
	$describe = xp("gdescrib");
	$privacy = xp("privacy");
	$os = xos();$br = xbr();$ip = xip();$time = x_curtime(0,0);
	$timel = x_curtime(0,1);
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	$token = sha1($userid.DATE("YmdHis"));
	$group_id = "GID-".$userid.str_shuffle(DATE("YmdHis").strtoupper(xrands(5)));
	
	// Getting Group control settings
	
	$nlen = x_getsingle("SELECT gname_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gname_lenght");
	$gnick = x_getsingle("SELECT gnick_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gnick_lenght");
	$gdes = x_getsingle("SELECT gdes_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gdes_lenght");
	$grule = x_getsingle("SELECT grule_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","grule_lenght");
	
	if(strlen($name) > $nlen){
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Group Name can not be more than $nlen words!</div>";
		exit();
		
		}

	if(strlen($nick) > $gnick){
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Group Nick Name can not be more than $gnick words!</div>";
		exit();
		}
		
		if(strlen($describe) > $gdes){
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Group Description can not be more than $gdes words!</div>";
		exit();
		
		}
		
		if(strlen($rule) > $grule){
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Group rules can not be more than $grule words!</div>";
		exit();
		
		}
	
	$create = x_dbtab("createdgroup","
	logopath TEXT NOT NULL,
	logosize VARCHAR(100) NOT NULL,
	created_by VARCHAR(255) NOT NULL,
	group_id VARCHAR(255) NOT NULL,
	group_name VARCHAR(255) NOT NULL,
	group_nickname VARCHAR(100) NOT NULL,
	group_description TEXT NOT NULL,
	group_rules TEXT NOT NULL,
	group_allowed_gender ENUM('','Male','Female','Both') NOT NULL,
	group_privacy ENUM('','public','closed') NOT NULL,
	created_on DATETIME NOT NULL,
	created_on_r VARCHAR(255) NOT NULL,
	os VARCHAR(100) NOT NULL,
	br VARCHAR(100) NOT NULL,
	ip VARCHAR(50) NOT NULL,
	token TEXT NOT NULL
	","MYISAM");
	
				if($create){
					
				if(x_count("createdgroup","group_id='$group_id' OR group_name='$name' OR group_nickname='$nick' LIMIT 1") > 0){
						
						echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Error:</b> Group Name or Nickname is Taken!</div>';
						
						}else{
							
							if(x_ischeckupload("upload1")){
								
									xcload("upload1"); // checking upload status
									$size1 = x_size("upload1"); // get file size
									xcsize("upload1",4194304); // 4mb max file size
									xtex("png,gif,jpg,jpeg","upload1");	// checking file extension
									$token1 = sha1($userid.uniqid().xrands(10).Date("His"))."_";
									$path1 = x_path("upload1","groupContent/152bbd14e95974ce1ce60310fc67acbab4653da6/$token1");
								
								}else{
									echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Error:</b> You must upload group logo!</div>';
									exit();
									}
									
							xmload("upload1",$path1,"");
							
							x_insert("group_nickname,group_rules,logopath,logosize,created_by,group_id,group_name,group_description,group_allowed_gender,group_privacy,created_on,created_on_r,os,br,ip,token","createdgroup","'$nick','$rule','$path1','$size1','$userid','$group_id','$name','$describe','$gender','$privacy','$time','$timel','$os','$br','$ip','$token'","<div class='alert alert-success'><i class='fa fa-check-circle'></i> <b>Success:</b> Group <b>$name</b> was created successfully!</div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to create group!</div>");
							
							}
				
				}else{
					
				}
	

	}else{
		echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter is Missing!. </div>";
	}
