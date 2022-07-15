<div style="margin-bottom:0pt;" id="loadaudioboss<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#loadaudioboss<?php echo $postid;?>").show("slow");
			$("#loadaudioboss<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:purple;'>Loading Audio....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "audio_boss_loader_ext?post_id=<?php echo $postid;?>&media_count=<?php echo $media_count;?>&video_count=<?php echo $audio_count;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#loadaudioboss<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			