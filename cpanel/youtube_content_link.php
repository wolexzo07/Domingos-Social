<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("get_count") || !x_validateget("get_links")){
	//x_print("Invalid Parameter parsed!");
	exit();
}		
$postid = xg("post_id");
$get_count = xg("get_count");
$get_links = xg("get_links");

$c_youtube_link = $get_links;
$ylink_count = $get_count; 
					$yurl = explode(" ",$c_youtube_link);
					?><div class="row"><?php
					foreach($yurl as $key){
						if($ylink_count > 1){
							?>
							<div class="col-md-6">
							<?php //echo $embera->autoEmbed($key);?>
							<iframe width="100%" height="200" src="//www.youtube.com/embed/<?php echo x_getyoutubeid($key);?>" frameborder="0" allowfullscreen></iframe>
							</div>
							<?php
						}else{
							?>
							<div class="col-md-12">
							<?php //echo $embera->autoEmbed($key);?>
							<iframe width="100%" height="200" src="//www.youtube.com/embed/<?php echo x_getyoutubeid($key);?>" frameborder="0" allowfullscreen></iframe>
							</div>
							<?php
						}
						
					}
					?></div>