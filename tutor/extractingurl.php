<!DOCTYPE html>
<html>
    <head>
        <title>AutoEmbed Examples</title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="//connect.soundcloud.com/sdk.js"></script>
    </head>
    <body>
        <h1>AutoEmbed Examples</h1>
<?php
include("../finishit.php");	
	//$content = "https://vimeo.com/338797565 and also https://www.youtube.com/watch?v=9Ob4SeNZNgM";
	
	$content = "
	https://vimeo.com/15687220 and 
	https://vimeo.com/190657786 and
	https://vimeo.com/145629284 and 
	https://vimeo.com/271496822 and 
	https://www.youtube.com/watch?v=rCymbQJxozI and https://www.youtube.com/watch?v=KO0-VrEhllc and also https://www.youtube.com/watch?v=9Ob4SeNZNgM and https://www.youtube.com/watch?v=-me7cg3vgWY and 
	https://soundcloud.com/youngthugworld/hot-feat-gunna-1 and
	https://soundcloud.com/ynwmelly/223s-ft-glokknine and
	https://soundcloud.com/ynwmelly/dangerously-in-love-772-love-pt-2  And
	https://soundcloud.com/electric-flight-crew/sets/efc-volume-12-2017  and
	https://soundcloud.com/goldsgymegypt/sets/dubstep-by-golds-gym-egypt also 
	https://soundcloud.com/discover/sets/charts-trending:classical
	";
	
	//require("../tutor/youtube.php");

	// Reading youtube video content using Embera Library
	require 'Lib/Embera/Autoload.php'; // youtube library
	$config = array(
        'allow' => array('Youtube')
    );
	$ytext = x_extract_media_urls($content,"y"); 
    $embera = new Embera\Embera($config);
	$get_arrays = explode(" ",$ytext);
	foreach($get_arrays as $key){
		echo $embera->autoEmbed($key);
	}
	//echo $embera->autoEmbed($content);
    
	
	// Reading Vimeo Video content using Oembbed library
	require("autoembed.php"); // vimeo library
	$autoembed = new AutoEmbed();
	$vtext = x_extract_media_urls($content,"v");
	$get_array = explode(" ",$vtext);
	foreach($get_array as $key){
	$get_vimeo_video = $autoembed->parse($key);
	echo $get_vimeo_video;
	}
	
	//Reading soundcloud content
	
	$stext = x_extract_media_urls($content,"s");
	$get_array = explode(" ",$stext);
	foreach($get_array as $key){
	?>
	<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=<?php echo $key;?>&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>
	<?php
	}
?>

<!----<iframe src="https://player.vimeo.com/video/338797565?app_id=122963" width="500" height="281" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Chinese classical dance/Kongfu style short video"></iframe>

<iframe width="420" height="315" src="//www.youtube.com/embed/9Ob4SeNZNgM" frameborder="0" allowfullscreen></iframe>

<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/wiskid-1/take-a-little-ride3&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>---->
</body>
</html>
