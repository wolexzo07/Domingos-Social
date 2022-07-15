<div class="col-md-12 optio">
<?php
include("../finishit.php");
if(!x_validateget("post_id") || !x_validateget("media_count") || !x_validateget("video_count")){
	//x_print("Invalid Parameter parsed!");
	exit();
}

$postid = xg("post_id");
$media_count = xg("media_count");
$audio_count = xg("video_count");

if($media_count > 0){
	if($audio_count > 0){
						
						// Getting audio content started
						if(x_count("uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='audio' LIMIT 1") > 0){
							?><div class="row"><?php
						foreach(x_select("id,file_type,file_path","uploadedcontent","posted_status='1' AND post_id='$postid' AND file_type='audio'","25","post_id") as $key){
							
							$videoData = $key["file_path"];
							?>
						
						<div class="<?php
						if($audio_count > 1){
							echo "col-md-6";
						}else{
							echo "col-md-12";
						}
						?>">
						<!---<audio width="100%" style="width:100%;" controls>
						<source src="../<?php echo $videoData;?>" type="audio/mpeg"/>
						Your browser does not support html5 audio
						</audio>--->
		<div class="media-wrapper">
                <audio id="player<?php echo $postid;?>" preload="none" controls style="max-width:100%;width:100%;">
                    <source src="../<?php echo $videoData;?>" type="audio/mp3">
                </audio>
         </div>
						</div>
						
 
						<?php
						}
						?></div><?php
					}else{
						//x_print("<p> No audio content</p>");
					}
					// Getting audio content ended
				}else{
					//x_print("<p> No audio was attached to the post</p>");
				}
				}else{
					//x_print("<p> No media was attached to the post</p>");
				}
				?>
				</div>