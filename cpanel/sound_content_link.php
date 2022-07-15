<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("get_count") || !x_validateget("get_links")){
	//x_print("Invalid Parameter parsed!");
	exit();
}		
$postid = xg("post_id");
$get_count = xg("get_count");
$get_links = xg("get_links");

$c_sound_link = $get_links;
$slink_count = $get_count;
$surl = explode(" ",$c_sound_link);
					?><div class="row"><?php
					foreach($surl as $key){
						if($slink_count > 1){
								?>
								<div class="col-md-6">
	<iframe width="100%" height="170" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=<?php echo $key;?>&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe></div>
	<?php
						}else{
								?>
								<div class="col-md-12">
	<iframe width="100%" height="170" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=<?php echo $key;?>&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe></div>
	<?php
						}
					}
					?></div>