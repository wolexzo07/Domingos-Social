<?php 
include_once("../finishit.php");
include_once("../xe-library/domingos_sp_functions.php");
xstart("0");
if(!x_validatesession("XELOW_DOMINGOS_USER_ID")){
	finish("../","Unauthorized access! Please login.");
}
if(!x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER")){
	$_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'] = sha1(rand(23,9826381788)).sha1(md5(DATE("YmdHis")));
}
if(!x_validatesession("DOMINGOS_POST_ID")){
	$_SESSION['DOMINGOS_POST_ID'] = sha1($_SESSION['XELOW_DOMINGOS_USER_ID'].rand(23,98268390).DATE("YmdHis"));
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Domingos Social Network - Account Dashboard </title>
		
		<script src="//connect.soundcloud.com/sdk.js"></script>
		<link rel="apple-touch-icon" sizes="76x76" href="../image/logo.png">
		<link rel="shortcut icon" type="image/x-icon" href="../image/logo.png"/>
         <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <!-- Our Custom CSS -->
                <link rel="stylesheet" href="css/font-awesome.min.css"/>
        <link rel="stylesheet" href="css/style5.css"/>
		<link rel="stylesheet" href="css/custom.css"/>
		<link rel="stylesheet" href="css/mstyler.css"/>
		<link rel="stylesheet" href="css/jqx.base.css"/>
		<link rel="stylesheet" href="css/paginate.css"/>
		<link rel="stylesheet" href="css/nicescroll.css"/>
		
	
		<script type="text/javascript" src="js/loadrequest.js"></script>
		
		     <script src="js/jquery-3.3.1.min.js"></script>
			 <script src="js/jquery.inview.js"></script>
        <!-- Bootstrap Js CDN -->
        <script src="js/bootstrap.min.js"></script>
        <!-- jQuery Custom Scroller CDN -->
		<script src="js/buttons.js"></script>
        <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
		<script src="js/jquery.nicescroll.js"></script>
		<script src="js/jquery.form.min.js"></script>
		<script src="html5lightbox.js"></script>
		<script src="js/jquery.hotkeys.js"></script>
		<script>
            function shortkeys(){
			   var elements = [
				"Ctrl+p","Ctrl+b","Ctrl+c","Ctrl+l"
                ];
					// Binding keys
                   $(document).bind('keydown', elements[3], function assets() {
                       window.location = "logout";
                       return false;
                   });
				    $(document).bind('keydown', elements[0], function assets() {
                       $("#postButton").click();
                       return false;
                   });
            }
            jQuery(document).ready(shortkeys);  
        </script>
		
		
    <script type="text/javascript" src="js/jqxcore.js"></script>
    <script type="text/javascript" src="js/jqxtooltip.js"></script>
	
		 
		<!----------------Photo griding library started------------------->
		<script src="src/images-grid.js"></script>
        <link rel="stylesheet" href="src/images-grid.css"/>
		  <link href="../css/emoji.css" rel="stylesheet"/>
		 <!-------------------Video & Audio----------------------->
	    <!--<link href="Lib/vidlib/video-js.min.css" rel="stylesheet">
		<script src="Lib/vidlib/video.min.js"></script>-->
		
		<script src="Lib/vidlib/video.js"></script>
		<script src="Lib/vidlib/videojs-ie8.min.js"></script>
		<link href="Lib/vidlib/video-js.css" rel="stylesheet"/>
		
		<link rel="stylesheet" href="Lib/extralib/mediaelementplayer.css"/>
		<link rel="stylesheet" href="Lib/extralib/normalize.min.css"/>
		<link rel="stylesheet" href="Lib/extralib/custom.css"/>
    </head>
    <body>
	
	<?php
	// Controlling dynamic background
	if(x_count("control_pagedesign","type='bgimg' AND status='1' LIMIT 1") > 0){
		?>
	<script style="text/javascript">
    (function() {
        var curImgId = 1;
        var numberOfImages = 30; // Change this to the number of background images
        window.setInterval(function() {
            $('body').css('background','url("../bg/'+ curImgId +'.jpg") fixed');// set the image path here
            curImgId = (curImgId + 1) % numberOfImages;
        }, 60 * 1000);
    })();

	</script>
		<?php
	}else{
		// Bg images disabled
	}
	?>

		<script src="https://js.paystack.co/v1/inline.js"></script>
        <div class="wrapper">
            <!-- Sidebar Holder -->
					<?php 
						use Jenssegers\Agent\Agent;
						$agent = new Agent();
						$desktop = $agent->isDesktop();
						if($desktop){
							include_once("navigatorbase.php");
						}else{
							
						}
				
					?>
            <!-- Page Content Holder -->
			<?php include_once("bodybase.php");?>
			
			 
			
			
        </div>
			
			<!-- mobile navigation menu -->
			<?php $current_token = x_session("DOMIGOS_DATACENTER_AUTH_SERVER");?>
			
			<?php
			if($desktop){
			
			}else{
					?>
			<div class="mobilemenu">
			<div class="btn-group">
			<button onclick="fetchrequestnow('general_trends?hashkey=<?php echo $current_token;?>')" class="btn btn-updated"><i class="fa fa-home fa-2x"></i><br/>Home</button>
			<button onclick="fetchrequestnow('personal_trends?hashkey=<?php echo $current_token;?>')" class="btn btn-updated"><i class="fa fa-globe fa-2x"></i><br/>Trends</button>
			<button onclick="fetchrequestnow('fund_wallet_instantly?hashkey=<?php echo $current_token;?>')" class="btn btn-updated"><i class="fa fa-credit-card fa-2x"></i><br/>Wallet</button>
			<button class="btn btn-updated"><i class="fa fa-cog fa-2x"></i><br/>Setting</button>
			<button class="btn btn-updated"><i class="fa fa-refresh fa-2x"></i><br/>Refresh</button>
			</div>
			</div>
			
					<?php
				}
			?>
			
			
			<style>
			.btn-updated{
				background-color:white;
			}
			</style>
			
	<script src="js/jquery.autogrowtextarea.min.js"></script>    
         <script type="text/javascript">
             $(document).ready(function () {
				 $(".expandout").autoGrow();
             });
         </script>		
   <!-- Begin emoji-picker JavaScript -->
    <script src="../js/config.js"></script>
    <script src="../js/util.js"></script>
    <script src="../js/jquery.emojiarea.js"></script>
    <script src="../js/emoji-picker.js"></script>
		
         <script type="text/javascript">
		 $(document).ready(function () {
			 $("#box").niceScroll({ autohidemode: true });
			  $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
		 });
         
		  $(function() {
			// Initializes and creates emoji set from sprite sheet
			window.emojiPicker = new EmojiPicker({
			  emojiable_selector: '[data-emojiable=true]',
			  assetsPath: '../img/',
			  popupButtonClasses: 'fa fa-smile-o'
			});
			
			window.emojiPicker.discover();
		  });
    </script>
	   <script src="Lib/extralib/mediaelement-and-player.js"></script>
    <script src="Lib/extralib/renderers/dailymotion.js"></script>
    <script src="Lib/extralib/renderers/facebook.js"></script>
    <script src="Lib/extralib/renderers/soundcloud.js"></script>
    <script src="Lib/extralib/renderers/twitch.js"></script>
    <script src="Lib/extralib/renderers/vimeo.js"></script>
    <script src="Lib/extralib/lang/cs.js"></script>
    <script src="Lib/extralib/lang/de.js"></script>
    <script src="Lib/extralib/lang/es.js"></script>
    <script src="Lib/extralib/lang/fa.js"></script>
    <script src="Lib/extralib/lang/fr.js"></script>
    <script src="Lib/extralib/lang/hr.js"></script>
    <script src="Lib/extralib/lang/hu.js"></script>
    <script src="Lib/extralib/lang/it.js"></script>
    <script src="Lib/extralib/lang/ja.js"></script>
    <script src="Lib/extralib/lang/ko.js"></script>
    <script src="Lib/extralib/lang/ms.js"></script>
    <script src="Lib/extralib/lang/nl.js"></script>
    <script src="Lib/extralib/lang/pl.js"></script>
    <script src="Lib/extralib/lang/pt.js"></script>
    <script src="Lib/extralib/lang/ro.js"></script>
    <script src="Lib/extralib/lang/ru.js"></script>
    <script src="Lib/extralib/lang/sk.js"></script>
    <script src="Lib/extralib/lang/sv.js"></script>
    <script src="Lib/extralib/lang/uk.js"></script>
    <script src="Lib/extralib/lang/zh-cn.js"></script>
    <script src="Lib/extralib/lang/zh.js"></script>
    <script src="Lib/extralib/demo.js"></script>
    </body>
</html>
