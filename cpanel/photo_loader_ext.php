<div class="col-md-12 optio">
<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("media_count") || !x_validateget("video_count")){
	//x_print("Invalid Parameter parsed!");
	exit();
}

$postid = xg("post_id");
$media_count = xg("media_count");
$photo_count = xg("video_count");

if($media_count > 0){
	if($photo_count > 0){
						
						// Getting photo content started
						if(x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='photo' LIMIT 1") > 0){
						$counter = x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='photo' LIMIT 1");
						$count = 0;
						
					
						?>
						<div id="gallery<?php echo $postid;?>"></div>

    <script>
				$(function() {
                $("#gallery<?php echo $postid;?>").imagesGrid({
                    images: [
							<?php 
							foreach(x_select("id,file_type,file_path","uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='photo'","25","post_id") as $key){
							$count++;
							$images = "'"."../".$key["file_path"]."'";
							
							if($count == $counter){
								$imgload = $images;
							}else{
								$imgload = $images.',';
							}
							echo $imgload;
						}
							?>
							],
                    align: true,
                    getViewAllText: function(imgsCount) {
					var	subcount = imgsCount-5;
					return "+ "+subcount; 					
				}
                });

            });
</script>
     
						<?php
					}else{
						//x_print("<p> No photo content</p>");
					}
					// Getting photo content ended
				}/***elseif($photo_count == 1){
					
					// Handling single photo
					
					if(x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='photo' LIMIT 1") > 0){
						foreach(x_select("id,file_type,file_path","uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='photo'","1","post_id") as $key){
							$images = "../".$key["file_path"];
						}
						?>
						<img src="<?php echo $images;?>" style="height:200px;" class="img-responsive"/><?php
					}else{
						//x_print("<p> No single photo content</p>");
					}
				}***/else{
					//x_print("<p> No photo was attached to the post</p>");
				}
				}else{
					//x_print("<p> No media was attached to the post</p>");
				}
				?>
				</div>