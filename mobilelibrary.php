<?php
require("finishit.php");
use Jenssegers\Agent\Agent;
$agent = new Agent();
$desktop = $agent->isDesktop();
$phone = $agent->isPhone();
$robot = $agent->isRobot();

$browser = $agent->browser();
$version_b = $agent->version($browser);

$platform = $agent->platform();
$version_p = $agent->version($platform);

$device = $agent->device(); // works on mobile
$languages = $agent->languages();

$tablet = $agent->isTablet();
$mobile = $agent->isMobile();

$android = $agent->isAndroidOS();
$nexus = $agent->isNexus();
$safari = $agent->isSafari();

$windows = $agent->is('Windows');
$firefox = $agent->is('Firefox');
$iphone = $agent->is('iPhone');
$appleos = $agent->is('OS X');



if($iphone){
	echo "Is an iphone device";
}else{
	echo "is not an iphone device";
}
echo "<br/>";
if($android){
	echo "Is an android os";
}else{
	echo "is not an android device";
}
echo "<br/>";
if($mobile){
	echo "Is a mobile device";
}else{
	echo "is not a mobile device";
}
echo "<br/>";
if($desktop){
	echo "Is a Desktop";
}else{
	echo "is not a destop";
}
echo "<br/>";
if($tablet){
	echo "Is a tablet";
}else{
	echo "is not a tablet";
}
echo "<br/>";
if($phone){
	echo "Is a phone";
}else{
	echo "is not a phone";
}
echo "<br/>";
print_r($languages)."<br/>";
echo "Device Name : $device <br/>";
echo "Browser version : $browser version ".$version_b."<br/>";
echo "Platform version : $platform version ".$version_p."<br/>";
?>