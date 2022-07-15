<script>
function testUrlForMedia(pastedData) {
var success = false;
var media   = {};
if (pastedData.match('http://(www.)?youtube|youtu\.be')) {
    if (pastedData.match('embed')) { youtube_id = pastedData.split(/embed\//)[1].split('"')[0]; }
    else { youtube_id = pastedData.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; }
    media.type  = "youtube";
    media.id    = youtube_id;
    success = true;
}
else if (pastedData.match('http://(player.)?vimeo\.com')) {
    vimeo_id = pastedData.split(/video\/|http:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
    media.type  = "vimeo";
    media.id    = vimeo_id;
    success = true;
}
else if (pastedData.match('http://player\.soundcloud\.com')) {
    soundcloud_url = unescape(pastedData.split(/value="/)[1].split(/["]/)[0]);
    soundcloud_id = soundcloud_url.split(/tracks\//)[1].split(/[&"]/)[0];
    media.type  = "soundcloud";
    media.id    = soundcloud_id;
    success = true;
}
if (success) { return media; }
else { alert("No valid media id detected"); }
return false;
}
</script>


<?php
$content = "http://www.youtube.be/watch?v=IZlGH3Zmw5k";

?>
<script>
testUrlForMedia("<?php echo $content?>")
</script>
<?php
?>