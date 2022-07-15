<?php
include("../finishit.php");
$post = "
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
	https://w.soundcloud.com/discover/sets/charts-trending:classical and also 
	https://m.soundcloud.com/discover/sets/charts-trending:classical with 
	https://google.com";

$all_links = x_extract_media_urls($post,"all");
$vimeo_link = x_extract_media_urls($post,"v");
$youtube_link = x_extract_media_urls($post,"y");
$soundcloud_link = x_extract_media_urls($post,"s");
$other_link = x_extract_media_urls($post,"eyvs"); 
$yv = x_extract_media_urls($post,"yv"); 
$yvs = x_extract_media_urls($post,"yvs"); 
		
$count_you = count(explode(" ",$youtube_link)); // total youtube links
$count_all_linkv = count(explode(" ",$vimeo_link)); // total vimeo links
$count_all_links = count(explode(" ",$soundcloud_link)); // soundcloud links
$count_all_linko = count(explode(" ",$other_link)); // total other links
$count_all_link = count(explode(" ",$all_links)); // total of all links
$count_yv = count(explode(" ",$yv)); // total other links
$count_yvs = count(explode(" ",$yvs)); // total of all links

$len = strlen(x_getyoutubeid($youtube_link));
//echo x_getyoutubeid($youtube_link)." ==== $len"."<br/>";
echo "<b>Original Post</b> ==== $post<br/>";
echo "<b>Youtube Regener Link ($count_you)</b> ==== ".x_extract_media_urls($post,"y")."<br/>";
echo "<b>Vimeo Regener Link ($count_all_linkv)</b> ==== ".x_extract_media_urls($post,"v")."<br/>";
echo "<b>Sound Regener Link ($count_all_links)</b> ==== ".x_extract_media_urls($post,"s")."<br/>";
echo "<b>Other Regener Link ($count_all_linko)</b> ==== ".x_extract_media_urls($post,"eyvs")."<br/>";
echo "<b>All available Link ($count_all_link)</b> ==== ".x_extract_media_urls($post,"all")."<br/>";
echo "<b>All yv Link ($count_yv)</b> ==== ".x_extract_media_urls($post,"yv")."<br/>";
echo "<b>All yvs Link ($count_yvs)</b> ==== ".x_extract_media_urls($post,"yvs")."<br/>";

?>

<table>
<></
</table>