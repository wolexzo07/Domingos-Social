<?php
include_Once("../finishit.php");include_Once("../domingos_sp_functions.php");
xstart("0");
$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
$cmdcount = "postcontent AS p,networkingdata AS n WHERE p.uploaded_by = n.user_followed_id AND n.user_following_id='$userid'";
$cmd = "SELECT p.id AS id,p.post_content AS content,p.uploaded_by AS author FROM postcontent AS p,networkingdata AS n WHERE p.uploaded_by = n.user_followed_id AND n.user_following_id='$userid' ORDER BY p.id DESC LIMIT 50";
if($read = x_querycmd($cmd)){
	$count = x_querycount($cmdcount);
	if($count > 0){
		$owner_name = strtoupper(x_getsingle("SELECT fullname FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid'","fullname"));
		echo "<h3 style='border:1px solid lightgray;margin-bottom:20px;padding:20px;'><font style='color:green;'> $owner_name</font> <big>Trend<small>Line</small></big> =====> <font style='color:purple;'>$count Total Post</font></h3>";
		foreach(x_fetchQuery($cmd) as $row){
			$id = $row["id"];
			$author_id = $row["author"];
			$post = $row["content"];
			$author_name = x_getsingle("SELECT fullname FROM userdatabank WHERE id='$author_id' LIMIT 1","userdatabank WHERE id='$author_id'","fullname");
			?>
			<div style="padding:15px;border:1px solid lightgray;margin:30px;">
			<p><b><?php echo $author_name;?></b></p>
			<hr color="lightgray"/>
			<p><?php echo "$id .".$post;?></p>
			</div>
			<?php
		}
	}else{
		echo "No record found";
	}
}else{
	echo "Query Failed";
}
?>