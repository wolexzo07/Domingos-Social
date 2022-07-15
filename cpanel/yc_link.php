<div style="margin-bottom:0pt;" id="ycontentlink<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#ycontentlink<?php echo $postid;?>").show("slow");
			$("#ycontentlink<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:purple;'>Loading youtube....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "youtube_content_link?post_id=<?php echo $postid;?>&get_count=<?php echo $ylink_count;?>&get_links=<?php echo $c_youtube_link;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#ycontentlink<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			