<?php
include("finishit.php");
if(x_count("uploadedcontent","posted_status='0'") > 0){
	foreach(x_select("id,file_path","uploadedcontent","posted_status='0'","100","id") as $key){
		$fileid = $key["id"];
		$file = $key["file_path"];
		if(file_exists($file)){
			$unlink[] = 1;
			x_del("uploadedcontent","id='$fileid'","<p>File deleted file $fileid</p>","<p>Failed to delete file $fileid</p>");
			unlink($file);
		}else{
			x_del("uploadedcontent","id='$fileid'","<p>File deleted file $fileid</p>","<p>Failed to delete file $fileid</p>");
			$link[] = 1;
		}
		
	}
	?>
	<p>Files Deleted = <?php 
	if(isset($unlink)){
		echo count($unlink);
	}else{echo 0;}
	?></p>
	<p>Broken linked Files = <?php 
	if(isset($link)){
		echo count($link);
	}else{echo 0;}
	?></p>
	<?php
}else{
	echo "No content found in the database ";
}

?>