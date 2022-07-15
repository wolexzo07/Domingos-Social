<?php
include_once("../finishit.php");include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey")){
	
		$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
		$token = x_clean(sha1($_SESSION["XELOW_DOMINGOS_USER_ID"].xrands(10).DATE("YmdHis")));
		$os = xos(); $ip = xip(); $br = xbr();
		$time = x_clean(x_curtime("0","1"));
		$date_time = x_clean(x_curtime("0","0"));
		$post_id = x_clean($_SESSION["DOMINGOS_POST_ID"]);
		$privacy = xp("privacy");
		
		$createTab = x_dbtab("postcontent","
		post_privacy ENUM('public','onlyme') NOT NULL,
		uploaded_by VARCHAR(255) NOT NULL,
		is_media_linked ENUM('0','1') NOT NULL,
		is_poll ENUM('0','1') NOT NULL,
		post_id TEXT NOT NULL,
		posted_status ENUM('0','1') NOT NULL,
		post_content TEXT NOT NULL,
		total_media_count DOUBLE NOT NULL,
		video_count DOUBLE NOT NULL,
		photo_count DOUBLE NOT NULL,
		audio_count DOUBLE NOT NULL,
		document_count DOUBLE NOT NULL,
		youtube_count DOUBLE NOT NULL,
		vidmeo_count DOUBLE NOT NULL,
		soundcloud_count DOUBLE NOT NULL,
		youtube_link TEXT NOT NULL,
		vidmeo_link TEXT NOT NULL,
		soundcloud_link TEXT NOT NULL,
		content_youtube_links TEXT NOT NULL,
		content_vidmeo_links TEXT NOT NULL,
		content_soundcloud_links TEXT NOT NULL,
		content_other_links TEXT NOT NULL,
		content_youtube_link_count DOUBLE NOT NULL,
		content_vidmeo_link_count DOUBLE NOT NULL,
		content_soundcloud_link_count DOUBLE NOT NULL,
		content_other_link_count DOUBLE NOT NULL,
		poll_option_a VARCHAR(255) NOT NULL,
		poll_option_b VARCHAR(255) NOT NULL,
		poll_option_c VARCHAR(255) NOT NULL,
		poll_option_d VARCHAR(255) NOT NULL,
		posted_on VARCHAR(100) NOT NULL,
		post_timestamp TIMESTAMP NOT NULL,
		os VARCHAR(100) NOT NULL,
		ip VARCHAR(100) NOT NULL,
		br VARCHAR(100) NOT NULL,
		token TEXT NOT NULL
		
		","MYISAM");
	
		if(!$createTab){
			?>
			<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to create db table</div>
			<?php
			exit();
		}
		
		// validating that the user say something
		
		if(x_post("postcontent") == ""){
			echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Content Error:</b> You have to say something!</div>';
			exit();
		}
		
		//$postcontent = x_sanitize(x_post("postcontent"));
		$postcontent = xp("postcontent");
		
		if($postcontent == ""){
			echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Post Error:</b> You have to say something. </div>';
			exit();
		}
		
		// Getting allowed content
		
		$allowed_linkcount_y = get_allowed_content("mediacontrol","youtube","allowed_upload_count"); 
		$allowed_linkcount_v = get_allowed_content("mediacontrol","vimeo","allowed_upload_count"); 
		$allowed_linkcount_s = get_allowed_content("mediacontrol","sound","allowed_upload_count");
		$allowed_linkcount_o = get_allowed_content("mediacontrol","other_link","allowed_upload_count"); 
		$allowed_linkcount = get_allowed_content("mediacontrol","postcontent_link","allowed_upload_count");
		
		$all_links = x_extract_media_urls($postcontent,"all");
		$vimeo_link = x_extract_media_urls($postcontent,"v");
		$youtube_link = x_extract_media_urls($postcontent,"y");
		$soundcloud_link = x_extract_media_urls($postcontent,"s");
		$other_link = x_extract_media_urls($postcontent,"eyvs"); 
		
		$count_all_linky = x_checkmedia_count($youtube_link); // total youtube links
		$count_all_linkv = x_checkmedia_count($vimeo_link); // total vimeo links
		$count_all_links = x_checkmedia_count($soundcloud_link); // soundcloud links
		$count_all_linko = x_checkmedia_count($other_link); // total other links
		$count_all_link = x_checkmedia_count($all_links); // total of all links
		
		// validating allowed link count started
		include("validatinglink_count.php");
		// validating allowed link count ended
		
		if($all_links == ""){	
			$postcontent = $postcontent;
			$postcontent_linked = 0;
		}else{
			//$postcontent = x_stripurl($postcontent); // This extract content from url
			$postcontent = $postcontent;
			$postcontent_linked = 1;
			}
		

		//Ensure that a and b were filled before c and d
		
		if((x_post("option_a") == "" && x_post("option_b") == "") && (x_post("option_c") != "" || x_post("option_d") != "")){
			echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Poll Error:</b> You must fill option a and b first. </div>';
			exit();
		}
		
		if((x_post("option_c") == "" && x_post("option_d") != "")){
			echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> <b>Poll Error:</b> You must fill option a , b , c before option d. </div>';
			exit();
		}
		
		// validating youtube url
		
		if(x_post("youtubeurl") == ""){
		
			$is_link = "0";
			$youtube = "";
		
		}else{
			$is_link = "1";
			$youtube = xp("youtubeurl"); // validate youtube url
		}
		
		// validating vimeo video url
		
		if(x_post("vidmeo") == ""){
			
			$is_link = "0";
			$vimeo = "";

		}else{
			$is_link = "1";
			$vimeo = xp("vidmeo"); // validate vimeo url
		}
		
		// validating soundcloud audio url
		
		if(x_post("sound") == ""){
		$is_link = "0";	
		$sound = "";

		}else{
		$is_link = "1";	
		$sound = xp("sound"); // validate sound audio url
		
		}
		
		//$youtube = xp("youtubeurl");$vimeo = xp("vidmeo");$sound = xp("sound");
		
		//validate poll option a and b that they are not empty
		
		if((x_post("option_a") == "" || x_post("option_b") == "") || (x_post("option_a") == "" && x_post("option_b") == "")){
			
			$is_poll="0";
			$poll_a = "";$poll_b = "";
			$poll_c = "";$poll_d = "";
			
		}else{
			
			$is_poll="1";
			$poll_a = xp("option_a");$poll_b = xp("option_b");
			
				if(x_post("option_c") != ""){
					$poll_c = xp("option_c");
				}else{
					$poll_c = "";
				}
			
				if(x_post("option_d") != ""){
					$poll_d = xp("option_d");
				}else{
					$poll_d = "";
				}
			}
		
$total_media = x_count("uploadedcontent","post_id='$post_id'");
$video_count = x_count("uploadedcontent","post_id='$post_id' AND file_type='video'");
$audio_count = x_count("uploadedcontent","post_id='$post_id' AND file_type='audio'");
$photo_count = x_count("uploadedcontent","post_id='$post_id' AND file_type='photo'");
$doc_count = x_count("uploadedcontent","post_id='$post_id' AND file_type='document'");

		$youtube_count = "0";
		$vidmeo_count = "0";
		$sound_count = "0";
		
		if(x_count("PostContent","post_id='$post_id' LIMIT 1") > 0){
			echo '<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Post was already existing</div>';
		}else{
			// Updating post count
			$get_post_count = x_getsingle("SELECT post_count FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","post_count");
			$new_post_count = $get_post_count + 1;
			
			x_update("userdatabank","id='$userid'","post_count='$new_post_count'","&nbsp;","Failed to update post count");
			//exit();
			
			// Finalizing post commit by updating post attachment status
			
			x_update("uploadedcontent","post_id='$post_id'","posted_status='1'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to update data!</div>");
			x_insert("is_postcontent_linked,all_content_link_count,content_youtube_link_count,content_vidmeo_link_count,content_soundcloud_link_count,content_other_link_count,all_content_link,content_youtube_links,content_vidmeo_links,content_soundcloud_links,content_other_links,post_privacy,is_media_linked,uploaded_by,is_poll,post_id,posted_status,post_content,total_media_count,video_count,photo_count,audio_count,document_count,youtube_count,vidmeo_count,soundcloud_count,youtube_link,vidmeo_link,soundcloud_link,poll_option_a,poll_option_b ,poll_option_c,poll_option_d,posted_on,post_timestamp,os,ip,br,token","postcontent","'$postcontent_linked','$count_all_link','$count_all_linky','$count_all_linkv','$count_all_links','$count_all_linko','$all_links','$youtube_link','$vimeo_link','$soundcloud_link','$other_link','$privacy','$is_link','$userid','$is_poll','$post_id','1','$postcontent','$total_media','$video_count','$photo_count','$audio_count','$doc_count','$youtube_count','$vidmeo_count','$sound_count','$youtube','$vimeo','$sound','$poll_a','$poll_b','$poll_c','$poll_d','$time','$date_time','$os','$ip','$br','$token'","<div class='alert alert-success'><i class='fa fa-check-circle'></i> Post was published successfully!</div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to insert data!</div>");
			$_SESSION['DOMINGOS_POST_ID'] = sha1($_SESSION['XELOW_DOMINGOS_USER_ID'].rand(23,98268390).DATE("YmdHis"));
		}

}else{
		?>
			<div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Invalid parameter detected!</div>
			<?php
			exit();
}
