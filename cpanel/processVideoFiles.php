<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php"); // Just for domingos
xstart("0");
if(x_validatepost("_token") && x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validateget("switcher") && x_validatesession("DOMINGOS_POST_ID")){

		$getswitch = array("vi","au","im","dc");
		$switch = xg("switcher");
		
		if(!in_array($switch,$getswitch)){
			?>
			<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Invalid request detected!</div>
			<?php
			exit();
		}
		
		
		$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
		$token = x_clean(sha1($_SESSION["XELOW_DOMINGOS_USER_ID"].xrands(10).DATE("YmdHis")));
		$os = xos(); $ip = xip(); $br = xbr();
		$time = x_clean(x_curtime("0","1"));
		$date_time = x_clean(x_curtime("0","0"));
		$post_id = x_clean($_SESSION["DOMINGOS_POST_ID"]);
		
		$createTab = x_dbtab("uploadedcontent","
		uploaded_by VARCHAR(255) NOT NULL,
		post_id TEXT NOT NULL,
		file_type ENUM('','video','photo','document','audio') NOT NULL,
		file_size VARCHAR(50) NOT NULL,
		file_extension VARCHAR(10) NOT NULL,
		file_path TEXT NOT NULL,
		posted_status ENUM('0','1') NOT NULL,
		posted_on VARCHAR(50) NOT NULL,
		post_timestamp TIMESTAMP NOT NULL,
		os VARCHAR(100) NOT NULL,
		ip VARCHAR(100) NOT NULL,
		br VARCHAR(100) NOT NULL,
		token TEXT NOT NULL
		
		","MYISAM");
	
		if(!$createTab){
				?>
			<div class="alert alert-danger"><i class="fa fa-database"></i> Failed to create table!</div>
			<?php
			exit();
		}
		
		if($switch == "vi"){
			// Handling video processing
			if(x_ischeckupload("videofile")){
					$allowed_size = get_allowed_content("mediacontrol","video","allowed_upload_size");
					$allowed_format = get_allowed_content("mediacontrol","video","allowed_format_second");
					xcload("videofile"); // checking upload status
					$size1 = x_size("videofile"); // get file size
					$ext = x_file("videofile"); // getting extension
					xcsize("videofile",$allowed_size); // 60 mb max file size
					xtex("$allowed_format","videofile");	// checking file extension
					$token1 = sha1(uniqid().$post_id.Date("His"));
					$path1 = x_path("videofile","../contentcreated/hashedcontent/4a34161e448049f5c8ae1e643edd95973548e7c9/$token1");
					$dbpath = x_path("videofile","contentcreated/hashedcontent/4a34161e448049f5c8ae1e643edd95973548e7c9/$token1");
			
			xmload("videofile",$path1,"");
			x_insert("uploaded_by,post_id,file_type,file_size,file_extension,file_path,posted_status,posted_on,post_timestamp,os,ip,br,token","uploadedcontent","'$userid','$post_id','video','$size1','$ext','$dbpath','0','$time','$date_time','$os','$ip','$br','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-trash'></i> Failed to insert data </div>");
			
			echo "<div class='alert alert-success'><i class='fa fa-check-circle'></i> 1 video attached! <a class='btn btn-info'><i class='fa fa-plus-circle'></i></a></div>";
			
		}else{
		?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to upload video data!</div><?php
		}
		}elseif($switch == "au"){
			// Handling audio processing
			if(x_ischeckupload("audiofile")){
			$allowed_size = get_allowed_content("mediacontrol","audio","allowed_upload_size");
			$allowed_format = get_allowed_content("mediacontrol","audio","allowed_format_second");
					xcload("audiofile"); // checking upload status
					$size1 = x_size("audiofile"); // get file size
					$ext = x_file("audiofile"); // getting extension
					xcsize("audiofile",$allowed_size); // 60 mb max file size
					xtex("$allowed_format","audiofile");	// checking file extension
					$token1 = sha1(uniqid().$post_id.Date("His"));
					$path1 = x_path("audiofile","../contentcreated/hashedcontent/6514f718a37a3e7f554747b00c24c4ce6a696317/$token1");
					$dbpath = x_path("audiofile","contentcreated/hashedcontent/6514f718a37a3e7f554747b00c24c4ce6a696317/$token1");
			
			xmload("audiofile",$path1,"");
			x_insert("uploaded_by,post_id,file_type,file_size,file_extension,file_path,posted_status,posted_on,post_timestamp,os,ip,br,token","uploadedcontent","'$userid','$post_id','audio','$size1','$ext','$dbpath','0','$time','$date_time','$os','$ip','$br','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-trash'></i> Failed to insert data </div>");
			
			echo "<div class='alert alert-success'><i class='fa fa-check-circle'></i> 1 Audio attached! <a class='btn btn-info'><i class='fa fa-plus-circle'></i></a></div>";
			
		}else{
		?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to upload audio data!</div><?php
		}
		}elseif($switch == "im"){
			// Handling Image processing
			if(x_ischeckupload("photofile")){
					$allowed_size = get_allowed_content("mediacontrol","photo","allowed_upload_size");
					$allowed_format = get_allowed_content("mediacontrol","photo","allowed_format_second");
					xcload("photofile"); // checking upload status
					$size1 = x_size("photofile"); // get file size
					$ext = x_file("photofile"); // getting extension
					xcsize("photofile",$allowed_size); // 10 mb max file size
					xtex("$allowed_format","photofile");	// checking file extension
					$token1 = sha1(uniqid().$post_id.Date("His"));
					$path1 = x_path("photofile","../contentcreated/hashedcontent/79fe255129a4d215c4b3e89c2eac8b1d8eb29c1c/$token1");
					$dbpath = x_path("photofile","contentcreated/hashedcontent/79fe255129a4d215c4b3e89c2eac8b1d8eb29c1c/$token1");
			
			xmload("photofile",$path1,"");
			
			x_insert("uploaded_by,post_id,file_type,file_size,file_extension,file_path,posted_status,posted_on,post_timestamp,os,ip,br,token","uploadedcontent","'$userid','$post_id','photo','$size1','$ext','$dbpath','0','$time','$date_time','$os','$ip','$br','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-trash'></i> Failed to insert data </div>");
			
			echo "<div class='alert alert-success'><i class='fa fa-check-circle'></i> 1 photo attached! <a class='btn btn-info'><i class='fa fa-plus-circle'></i></a></div>";
			
		}else{
		?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to upload photo data!</div><?php
		}
		}elseif($switch == "dc"){
			// Handling Document processing
			
			if(x_ischeckupload("docfile")){
					$allowed_size = get_allowed_content("mediacontrol","document","allowed_upload_size");
					$allowed_format = get_allowed_content("mediacontrol","document","allowed_format_second");
					xcload("docfile"); // checking upload status
					$size1 = x_size("docfile"); // get file size
					$ext = x_file("docfile"); // getting extension
					xcsize("docfile",$allowed_size); // 20 mb max file size
					xtex("$allowed_format","docfile");	// checking file extension
					$token1 = sha1(uniqid().$post_id.Date("His"));
					$path1 = x_path("docfile","../contentcreated/hashedcontent/da0df0fe230161b94a4e0ff5f55c3806e3d5a532/$token1");
					$dbpath = x_path("docfile","contentcreated/hashedcontent/da0df0fe230161b94a4e0ff5f55c3806e3d5a532/$token1");
			
			xmload("docfile",$path1,"");
			
			x_insert("uploaded_by,post_id,file_type,file_size,file_extension,file_path,posted_status,posted_on,post_timestamp,os,ip,br,token","uploadedcontent","'$userid','$post_id','document','$size1','$ext','$dbpath','0','$time','$date_time','$os','$ip','$br','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-trash'></i> Failed to insert data </div>");
			
			echo "<div class='alert alert-success'><i class='fa fa-check-circle'></i> 1 document attached! <a class='btn btn-info'><i class='fa fa-plus-circle'></i></a></div>";
			
		}else{
		?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to upload document file!</div><?php
		}
		}else{
			?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Unsupported file format!</div><?php
		}

		

}else{
	?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Parameter missing!</div><?php
}
