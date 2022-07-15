<div style="margin-bottom:0pt;" id="loadvideoboss<?php echo $postid;?>"></div>
			
			<script type="text/javascript">
			$(document).ready(function(){
			$("#loadvideoboss<?php echo $postid;?>").show("slow");
			$("#loadvideoboss<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:;'>Loading Video....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "showvid?post_id=<?php echo $postid;?>&media_count=<?php echo $media_count;?>&video_count=<?php echo $video_count;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#loadvideoboss<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			