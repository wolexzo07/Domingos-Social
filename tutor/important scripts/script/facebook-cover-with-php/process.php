<?php
include_once("inc/facebook.php"); //include facebook api library
 
######### edit details ##########
$appId = 'xxxxxxxxxxxxxxx'; //Facebook App ID
$appSecret = 'xxxxxxxxxxxxxxxxxxx'; // Facebook App Secret
$return_url = 'http://www.yoursite.com/script/process.php';  //return url (url to script)
$homeurl = 'http://www.yoursite.com/script/';  //return to home
$fbPermissions = 'publish_stream,user_photos';  //Required facebook permissions
##################################

 
$GetPicId = $_GET["pid"]; // Picture ID from Index page
$PicLocation ='';
 
/*
Users do not need to know original location of image.
I think it's better to get image location from database using ID.
for demo here i'am using PHP switch.
*/
switch($GetPicId)
{
    case 1:
        $PicLocation = 'cover_pics/cover1.jpg';
        break;
    case 2:
        $PicLocation = 'cover_pics/cover2.jpg';
        break;
    case 3:
        $PicLocation = 'cover_pics/cover3.jpg';
        break;
    case 4:
        $PicLocation = 'cover_pics/cover4.jpg';
        break;
    case 5:
        $PicLocation = 'cover_pics/cover5.jpg';
        break;
    case 6:
        $PicLocation = 'cover_pics/cover6.jpg';
        break;
    case 7:
        $PicLocation = 'cover_pics/cover7.jpg';
        break;
    case 8:
        $PicLocation = 'cover_pics/cover8.jpg';
        break;
    case 9:
        $PicLocation = 'cover_pics/cover9.jpg';
        break;
    case 10:
        $PicLocation = 'cover_pics/cover10.jpg';
        break;
    case 11:
        $PicLocation = 'cover_pics/cover11.jpg';
        break;
    default:
        header('Location: ' . $homeurl);
        break;
}
 
//Call Facebook API
$facebook = new Facebook(array(
  'appId'  => $appId,
  'secret' => $appSecret,
  'fileUpload' => true,
  'cookie' => true
));
 
//get user
$fbuser = $facebook->getUser();
$access_token = $facebook->getAccessToken();
 
//variables we are going to post to facebook
$msg_body = array(
'access_token' => $access_token,
'message' => 'I liked this pic from '. $homeurl .' it is perfect for my cover photo.',
'source' => '@'.realpath($PicLocation)
);
 
if ($fbuser){ //user is logged in to facebook, post our image
  try {
    $uploadPhoto = $facebook->api('/me/photos', 'post', $msg_body );
  } catch (FacebookApiException $e) {
    echo $e->getMessage(); //output any error
  }
}else{
 $loginUrl = $facebook->getLoginUrl(array('scope'=>$fbPermissions,'return_url'=>$return_url));
 header('Location: ' . $loginUrl);
}
 
if($uploadPhoto)
{
    /*
    image is posted in user facebook account, but still we need to send user to facebook
    so s/he can set cover or profile picture!
    */
 
    //Get url of the picture just uploaded in user facebook account
    $jsonurl = "https://graph.facebook.com/".$uploadPhoto["id"]."&?access_token=".$access_token;
    $json = file_get_contents($jsonurl,0,null,null);
    $json_output = json_decode($json);
 
    /*
    We can not set facebook cover or profile picture automatically yet,
    So, the trick is to post picture into user facebook account first
    and then redirect them to a facebook profile page where they just have to click a button to set it.
    */
    echo '<html><head><title>Update Image</title>';
    echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
    echo '<link href="style.css" rel="stylesheet" type="text/css" />';
    echo '</head><body>';
    echo '<div align="center" class="fbpicwrapper">';
    echo '<h1>Image is sent to your facebook account!</h1>';
    echo '<div class="fbpic_desc">Click on desired button you want to do with this image!</div>';
    echo '<div class="option_img"><img src="'.$json_output->source.'" /></div>';
 
    /*
    Links (buttons) below will send user to facebook page,
    where they just need to crop or correct propertion of image and hit apply button.
    */
    echo '<a class="button" target="_blank" href="http://www.facebook.com/profile.php?preview_cover='.$uploadPhoto["id"].'">Make Your Profile Cover</a>';
    echo '<a class="button" target="_blank" href="http://www.facebook.com/photo.php?fbid='.$uploadPhoto["id"].'&type=1&makeprofile=1&makeuserprofile=1">Make Your Profile Picture</a>';
    echo '<a class="button" href="'.$homeurl.'">Back to main Page.</a>';
    echo '</div>';
    echo '</body></html>';
}
 
?>
