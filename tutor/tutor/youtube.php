<?php

	// Handling youtube Video ID 
	
	$youtube_links = x_extract_media_urls($content,"y");
	$y_arrays = explode(" ",$youtube_links);
	$counter = 0;
	foreach($y_arrays as $key){
		$counter++;
		$ylink = x_getyoutubeid($key);
		if(@trim($ylink) == ""){
		}else{
			if(strlen($ylink) == 11){
				?>
<iframe width="50%" height="240px" style="float:left;" src="https://www.youtube.com/embed/<?php echo @trim($ylink);?>" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>
		<?php
			}
			
		}}
	
	// Handling Vimeo Video ID 
	
	$vimeo_links = x_extract_media_urls($content,"v");
	$v_arrays = explode(" ",$vimeo_links);
	foreach($v_arrays as $key){
		$vlink = x_getvimeoid($key);
		if(@trim($vlink) == ""){
		}else{
			?>
		<iframe src="https://player.vimeo.com/video/<?php echo $vlink;?>" width="50%" height="240px" style="float:left;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title=""></iframe>
		<?php
		}}

	exit();
	
?>