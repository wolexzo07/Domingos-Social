<div style="margin-bottom:0pt;" id="loadphotoboss<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#loadphotoboss<?php echo $postid;?>").show("slow");
			$("#loadphotoboss<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:green;'>Loading Photo....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "photo_loader_ext?post_id=<?php echo $postid;?>&media_count=<?php echo $media_count;?>&video_count=<?php echo $photo_count;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#loadphotoboss<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			