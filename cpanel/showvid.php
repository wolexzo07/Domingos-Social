<div class="col-md-12 optio">
<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("media_count") || !x_validateget("video_count")){
	//x_print("Invalid Parameter parsed!");
	exit();
}

$postid = xg("post_id");
$media_count = xg("media_count");
$video_count = xg("video_count");

if($media_count > 0){
	
	if($video_count > 0){
		
						
						// Getting video content started
						$videoQuote = x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='video' LIMIT 10");
						if(x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='video' LIMIT 1") > 0){
							
						foreach(x_select("id,file_type,file_path,file_extension","uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='video'","25","post_id") as $key){
							
							$videoData = $key["file_path"];
							$type = $key["file_type"];
							$fext = $key["file_extension"];
							
							$format = $type."/".$fext;
							
							if($videoQuote == 1){
								?>
			
						<!---<div class="">
						<video style="width:100%;height:200px;box-shadow:1px 1px 1px 1px black;" controls>
						<source src="../<?php echo $videoData;?>" type="video/mp4"/>
						Your browser does not support html5 video
						</video>-->
<video style="width:100%;height:210px;box-shadow:1px 1px 1px 1px black;" id="videoContent<?php echo $postid;?>" class="video-js vjs-default-skin" controls preload="none" width="" height="" poster="imager/video.png" data-setup="{}">
<source src="../<?php echo $videoData;?>" type="<?php echo $format;?>">

<p class="vjs-no-js">Enable JavaScript for video.</p>
</video>
						</div>
							<?php
							}else{
								?>
					
						<!---<div class="">
						<video style="width:50%;height:auto;float:left;box-shadow:1px 1px 1px 1px black;" controls>
						<source src="../<?php echo $videoData;?>" type="video/mp4"/>
						Your browser does not support html5 video
						</video>
						</div>--->
<video style="width:50%;height:201px;float:left;box-shadow:1px 1px 1px 1px black;" id="videoContent<?php echo $postid;?>" class="video-js vjs-default-skin" controls preload="none" width="" height="" poster="imager/video.png" data-setup="{}">
<source src="../<?php echo $videoData;?>" type="<?php echo $format;?>">

<p class="vjs-no-js">Enable JavaScript for video.</p>
</video>
							<?php
							}
							
						}
						
					}else{
						//x_print("<p> No Video content</p>");
					}
					// Getting video content ended
				}else{
					//x_print("<p> No video was attached to the post</p>");
					
				}
				}else{
					//x_print("<p> No media was attached to the post</p>");
					
				}
				?>
				</div>