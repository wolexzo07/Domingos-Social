<div style="margin-bottom:0pt;" id="vimeocontentlink<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#vimeocontentlink<?php echo $postid;?>").show("slow");
			$("#vimeocontentlink<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:purple;'>Loading Vimeo....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "vimeo_content_link?post_id=<?php echo $postid;?>&get_count=<?php echo $vlink_count;?>&get_links=<?php echo $c_vimeo_link;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#vimeocontentlink<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			