<div style="margin-bottom:0pt;" id="soundcloudcontentlink<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#soundcloudcontentlink<?php echo $postid;?>").show("slow");
			$("#soundcloudcontentlink<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:maroon;'>Loading soundcloud....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "sound_content_link?post_id=<?php echo $postid;?>&get_count=<?php echo $slink_count;?>&get_links=<?php echo $c_sound_link;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#soundcloudcontentlink<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			