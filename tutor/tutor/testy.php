<?php
include("../finishit.php");
$youtube_link = "
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
	https://w.soundcloud.com/discover/sets/charts-trending:classical
";
$len = strlen(x_getyoutubeid($youtube_link));
//echo x_getyoutubeid($youtube_link)." ==== $len"."<br/>";
echo "Original Link ==== $youtube_link<br/>";
echo "Youtube Regener Link ==== ".x_extract_media_urls($youtube_link,"y")."<br/>";
echo "Vimeo Regener Link ==== ".x_extract_media_urls($youtube_link,"v")."<br/>";
echo "Sound Regener Link ==== ".x_extract_media_urls($youtube_link,"s")."<br/>";
?>