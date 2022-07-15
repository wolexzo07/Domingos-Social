<?php
if(x_count("mediacontrol","file_type='video' AND status='1'") > 0){
	foreach(x_select("allowed_format","mediacontrol","file_type='video' AND status='1'","1","id") as $key){
		$allowed = $key["allowed_format"];
	}
	?>
	<form method="POST" id="videopostonly">
<input type="file" id="fileuploader_video" name="videofile" id="videofile" accept="<?php echo $allowed;?>" onchange="return mediapusher('videopostonly')"/>
<input type="hidden" name="_token" value="<?php echo sha1(uniqid());?>"/>
</form>
	<?php
}else{
	
}

// 	controlling audio data

if(x_count("mediacontrol","file_type='audio' AND status='1'") > 0){
	foreach(x_select("allowed_format","mediacontrol","file_type='audio' AND status='1'","1","id") as $key){
		$allowed = $key["allowed_format"];
	}
	?>
	
<form method="POST" id="audiopostonly">
<input type="file" id="fileuploader_audio" name="audiofile" id="audiofile" accept="<?php echo $allowed;?>" onchange="return mediapusher('audiopostonly')"/>
<input type="hidden" name="_token" value="<?php echo sha1(uniqid());?>"/>
</form>
	<?php
}else{
	
}

// Controlling image data

if(x_count("mediacontrol","file_type='photo' AND status='1'") > 0){
	foreach(x_select("allowed_format","mediacontrol","file_type='photo' AND status='1'","1","id") as $key){
		$allowed = $key["allowed_format"];
	}
	?>
	<form method="POST" id="imagepostonly">
	<input type="file" id="fileuploader_photo" name="photofile" id="photofile" accept="<?php echo $allowed;?>" onchange="return mediapusher('imagepostonly')"/>
	<input type="hidden" name="_token" value="<?php echo sha1(uniqid());?>"/>
	</form>
	<?php
}else{
	
}

//controlling documents data

if(x_count("mediacontrol","file_type='document' AND status='1'") > 0){
	foreach(x_select("allowed_format","mediacontrol","file_type='document' AND status='1'","1","id") as $key){
		$allowed = $key["allowed_format"];
	}
	?>
<form method="POST" id="docpostonly">
<input type="file" id="fileuploader_document" name="docfile" id="docfile" accept="<?php echo $allowed;?>" onchange="return mediapusher('docpostonly')"/>
<input type="hidden" name="_token" value="<?php echo sha1(uniqid());?>"/>
</form>
	<?php
}else{
	
}
?>
