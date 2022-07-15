<script>
$(document).ready(function(){

		$("#likeapost<?php echo $postid;?>").on('submit',(function(e) {
			$("#getResultOfengagement<?php echo $postid;?>").show("slow");
			$("#getResultOfengagement<?php echo $postid;?>").html("<img class='img-circle' src='../img/loaded.gif'/> wait....");
			e.preventDefault();
			$.ajax({
	        	url: "like_dislike_postnow",
				type: "POST",
				data:  new FormData(this),
				contentType: false,
	    	    cache: false,
				processData:false,
				success: function(data){
				$("#getResultOfengagement<?php echo $postid;?>").html(data);
				},
			  	error: function(){ alert("Error: Failed to process form");}
		   });
		}));
		
		$("#dislikeapost<?php echo $postid;?>").on('submit',(function(e) {
			$("#getResultOfengagement<?php echo $postid;?>").show("slow");
			$("#getResultOfengagement<?php echo $postid;?>").html("<img class='img-circle' src='../img/loaded.gif'/> wait....");
			e.preventDefault();
			$.ajax({
	        	url: "like_dislike_postnow",
				type: "POST",
				data:  new FormData(this),
				contentType: false,
	    	    cache: false,
				processData:false,
				success: function(data){
				$("#getResultOfengagement<?php echo $postid;?>").html(data);
				},
			  	error: function(){ alert("Error: Failed to process form");}
		   });
		}));
});
	
</script>

<hr/>

<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
<form id="likeapost<?php echo $postid;?>">
<input type="hidden" value="like" name="status"/>
<input type="hidden" value="<?php echo $by;?>" name="post_owner"/>
<input type="hidden" value="<?php echo $postid;?>" name="post_id"/>
<input type="hidden" value="<?php echo sha1($postid);?>" name="_token"/>
<button class="btn btn-sm btn-primary"><i class="fa fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;
		<span class="badge like_counter_boss"><?php echo x_convert_figure($like_counter);?></span>
</button>
</form>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
<form id="dislikeapost<?php echo $postid;?>">
<input type="hidden" value="dislike" name="status"/>
<input type="hidden" value="<?php echo $by;?>" name="post_owner"/>
<input type="hidden" value="<?php echo $postid;?>" name="post_id"/>
<input type="hidden" value="<?php echo sha1($postid);?>" name="_token"/>
<button class="btn btn-sm btn-danger"><i class="fa fa-thumbs-down "></i> &nbsp;&nbsp;&nbsp;&nbsp;
<span class="badge dislike_counter_boss"><?php echo x_convert_figure($dislike_counter);?></span>
</button>
</form>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
<button class="btn btn-sm btn-success"><i class="fa fa-comment "></i> 
&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge comment_counter_boss"><?php echo x_convert_figure($comment_counter);?></span>
</button>
</div>
<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 "></div>


<div class="col-md-12" id="getResultOfengagement<?php echo $postid?>"></div>