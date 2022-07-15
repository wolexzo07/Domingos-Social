<div style="margin-bottom:0pt;" id="ocontentlink<?php echo $postid;?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
			$("#ocontentlink<?php echo $postid;?>").show("slow");
			$("#ocontentlink<?php echo $postid;?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:purple;'>Loading links....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "other_content_link?post_id=<?php echo $postid;?>&get_count=<?php echo $olink_count;?>&get_links=<?php echo $c_other_link;?>",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#ocontentlink<?php echo $postid;?>").html(result);
						   }
					  });
			});
			</script>
			