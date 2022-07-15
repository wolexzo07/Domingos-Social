<?php
function convertHashtags($str){
	$regex = "/#+([a-zA-Z0-9_]+)/";
	$str = preg_replace($regex, '<a href="hashtag.php?tag=$1">$0</a>', $str);
	return($str);
}
$string = "I am #UberSilly and #MegaPlayful online";
$string = convertHashtags($string);
echo $string;
?>