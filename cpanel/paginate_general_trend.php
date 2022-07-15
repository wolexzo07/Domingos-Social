<?php
include("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatepost("pageno") && x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));

$pageno = xp("pageno");
$no_of_records_per_page = 10;
$offset = ($pageno-1) * $no_of_records_per_page;

$sqlcmdcount = "postcontent AS p,networkingdata AS n WHERE p.uploaded_by = n.user_followed_id AND n.user_following_id='$userid'";
$sqlcmd = "SELECT p.like_counter AS like_counter,p.dislike_counter AS dislike_counter,p.comment_counter AS comment_counter,p.id AS id,p.post_type AS post_type,p.uploaded_by AS uploaded_by,p.post_id AS post_id,p.post_content AS post_content,p.is_poll AS is_poll,p.poll_option_a AS poll_option_a,p.poll_option_b AS poll_option_b,p.poll_option_c AS poll_option_c,p.poll_option_d AS poll_option_d,p.is_media_linked AS is_media_linked,p.total_media_count AS total_media_count,p.video_count AS video_count,p.photo_count AS photo_count,p.audio_count AS audio_count,p.document_count AS document_count,p.is_postcontent_linked AS is_postcontent_linked,
p.all_content_link AS all_content_link,p.content_youtube_links AS content_youtube_links,
p.content_vidmeo_links AS content_vidmeo_links,p.content_soundcloud_links AS content_soundcloud_links,p.content_other_links AS content_other_links,p.all_content_link_count AS all_content_link_count,
p.content_youtube_link_count AS content_youtube_link_count,p.content_vidmeo_link_count AS content_vidmeo_link_count,p.content_soundcloud_link_count AS content_soundcloud_link_count,
p.content_other_link_count AS content_other_link_count FROM postcontent AS p,networkingdata AS n WHERE p.uploaded_by = n.user_followed_id AND n.user_following_id='$userid' ORDER BY p.id DESC LIMIT $offset, $no_of_records_per_page";


if($read = x_querycmd($sqlcmd)){
	
			//$count = x_querycount($sqlcountcmd);
			$count = mysqli_num_rows($read);
			if($count > 0){
				
			require 'Lib/Embera/Autoload.php'; // youtube library
			$config = array(
			'allow' => array('Youtube')
				);
			$embera = new Embera\Embera($config);
			require("autoembed.php"); // vimeo library
			$autoembed = new AutoEmbed();
				
			foreach(x_fetchQuery($sqlcmd) as $key){
			include("lead_content_based.php");
			}
			}else{
				//echo "No record found";
			}
	}else{
		
		?>
		<div class="alert alert-warning"><i class="fa fa-minus-circle"></i> DB Error: Failed to query db!</div>
		<?php
	}
}


?>