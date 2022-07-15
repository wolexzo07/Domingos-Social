<?php
error_reporting(0);
include("../finishit.php");
include("../domingos_sp_functions.php");
if(!x_validateget("post_id") || !x_validateget("get_count") || !x_validateget("get_links")){
	//x_print("Invalid Parameter parsed!");
	exit();
}		
$postid = xg("post_id");
$get_count = xg("get_count");
$get_links = xg("get_links");

$c_other_link = $get_links;
$olink_count = $get_count;
$ourl = explode(" ",$c_other_link);

					?><div class="row"><?php
					foreach($ourl as $key){
					//echo "<p><a href='$key' target='_blank'>$key</a></p>";
					$tags = get_meta_tags($key);
					$author = $tags['author'];
					$keyword = $tags['keywords'];
					$des = $tags['description'];
					preg_match("/<title>(.+)<\/title>/siU", file_get_contents($key), $matches);
					$title = $matches[1];
					$captureurl_screenshot = geturlimage($key);
					
					if($captureurl_screenshot == ""){
						?><div class="col-md-12"><?php
						echo "<a href='$key' target='_blank'>$key</a> "."<br/>";
						?></div><?php
					}else{
						?>
					<div class="col-md-4">
					<a href='<?php echo $key;?>' target='_blank'><?php echo $captureurl_screenshot;?></a>
					</div>
					<div class="col-md-8">
					<a href='<?php echo $key;?>' target='_blank'><h4><?php echo $title;?></h4></a>
					<p style="color:gray;"><?php echo $des;?></p>
					</div>
					<?php
					}
					
					
					}
					?></div>