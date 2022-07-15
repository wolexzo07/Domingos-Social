<?php
include_Once("../finishit.php");
$createtable = x_dbtab("mediaControl","
file_type ENUM('','video','photo','document','audio') NOT NULL,
allowed_upload_count INT NOT NULL,
allowed_format TEXT NOT NULL,
status ENUM('0','1') NOT NULL

","MYISAM");
if($createtable){
	x_insert("file_type,allowed_upload_count,allowed_format,status","mediaControl","'video','4','.mp4,.avi,.3gp,.mov','1'","<p>Video db setup completed</p>","<p>Failed to setup Video db</p>");
	x_insert("file_type,allowed_upload_count,allowed_format,status","mediaControl","'audio','4','.mp3,.wav','1'","<p>Audio db setup completed</p>","<p>Failed to setup Audio db</p>");
	x_insert("file_type,allowed_upload_count,allowed_format,status","mediaControl","'audio','20','.png,.jpg,.jpeg,.gif','1'","<p>Photo db setup completed</p>","<p>Failed to setup Photo db</p>");
	x_insert("file_type,allowed_upload_count,allowed_format,status","mediaControl","'document','10','.doc,.docx,.pdf,.ppt,.pptx,.xls,.xlsx','1'","<p>Document db setup completed</p>","<p>Failed to setup Document db</p>");
	echo "<p>Table media control was created successfully</p>";
}

$createTab = x_dbtab("PostContent","
		uploaded_by VARCHAR(255) NOT NULL,
		is_poll ENUM('0','1') NOT NULL,
		post_id VARCHAR(255) NOT NULL,
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
		poll_option_a VARCHAR(10) NOT NULL,
		poll_option_b VARCHAR(10) NOT NULL,
		poll_option_c VARCHAR(10) NOT NULL,
		poll_option_d VARCHAR(10) NOT NULL,
		posted_on VARCHAR(50) NOT NULL,
		post_timestamp TIMESTAMP NOT NULL,
		os VARCHAR(100) NOT NULL,
		ip VARCHAR(100) NOT NULL,
		br VARCHAR(100) NOT NULL,
		token TEXT NOT NULL
		
		","MYISAM");
	
		if(!$createTab){
			echo "<p>Table Post control was created successfully</p>";
		}
?>