<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("get_count") || !x_validateget("get_links")){
	//x_print("Invalid Parameter parsed!");
	exit();
}		
$postid = xg("post_id");
$get_count = xg("get_count");
$get_links = xg("get_links");

$c_vimeo_link = $get_links;
$vlink_count = $get_count;

$vurl = explode(" ",$c_vimeo_link);
					?><div class="row"><?php
					foreach($vurl as $key){
						
						if($vlink_count > 1){
							?>
							<div class="col-md-6">
							<iframe src="https://player.vimeo.com/video/<?php echo x_getvimeoid($key);?>?app_id=122963" width="100%" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title=""></iframe>
							<?php 
							//$get_vimeo_video = $autoembed->parse($key);
							//echo $get_vimeo_video;
							?>
							</div>
							<?php
						}else{
							?>
							<div class="col-md-12">
							<iframe src="https://player.vimeo.com/video/<?php echo x_getvimeoid($key);?>?app_id=122963" width="100%" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title=""></iframe>
							<?php 
							//$get_vimeo_video = $autoembed->parse($key);
							//echo $get_vimeo_video;
							?>
							</div>
							<?php
						}
						
					}
					?></div>