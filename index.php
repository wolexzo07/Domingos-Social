<?php include("start_security.php");?>
<html>
<head>
<title>Domingos Social Network - Connecting the flocks to the Sheperd</title>
	
	<meta name="description" content="Online Christians social networking platform"/>
  
   <meta name="keywords" content="Online Christians social networking platform"/>
   
<?php include_once("headextra.php");?>
</head>
<body class="renew">

	<?php
	// Controlling dynamic background
	if(x_count("control_pagedesign","type='bgimg' AND status='1' LIMIT 1") > 0){
		?>
	<script style="text/javascript">
    (function() {
        var curImgId = 1;
        var numberOfImages = 30; // Change this to the number of background images
        window.setInterval(function() {
            $('body').css('background','url("bg/'+ curImgId +'.jpg") fixed');// set the image path here
            curImgId = (curImgId + 1) % numberOfImages;
        }, 60 * 1000);
    })();

</script>
		<?php
	}else{
		// Bg images disabled
	}
	?>
<?php include_once("libloader.php");?>
<div class="boxsh">
	<div class="modal-dialog modal-signup" style="width:97%;">
	    <div class="modal-content">
			<div class="card card-signup card-plain">
				<div class="modal-header">
		        	<img src="image/flogo.png" class="img-responsive" id="retouched"/>
				<hr/>
		      	</div>
		      	<div class="modal-body">
					<div class="row">
						<div class="col-md-7">
						<?php
						use Jenssegers\Agent\Agent;
						$agent = new Agent();
						$desktop = $agent->isDesktop();
						if($desktop){
							?>
						<img src="image/neto.png" class="img-responsive react"/>
							<?php
						}else{
							
						}
						?>
						
						</div>
						<div class="col-md-5">
							
							<div class="panel panel-default" id="panel">
							<div class="panel-heading" id="panel-heading"><h5 class="theadfront"><i class="fa fa-sign-in"></i> Existing Users</h5></div>
							<div class="panel-body" id="panel-body">
							
				<form class="form" autocomplete="off" method="POST" id="loginprocess">
								<div class="card-content">
									
									<div class="row">
									<div class="col-md-12">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-user fa-2x"></i>
										</span>
										<input type="text" autocomplete="off" required="required" class="form-control" placeholder="Enter mobile / email / username" name="userinfo" id="userinfo"/>
									</div>
									
									</div>
									<div class="col-md-12">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-lock fa-2x"></i>
										</span>
										<input type="password" autocomplete="off" required="required" placeholder="Enter Password" class="form-control" name="passkey" id="passkey"/>
									</div>
									
									</div>
									
									<div class="col-md-12">
<input type="hidden" name="processkey" value="<?php echo sha1(rand(340,209399847));?>" />
<input type="hidden" name="_token" value="<?php echo sha1(rand(200,209399847));?>" />
<input type="hidden" name="where" value="<?php echo sha1('shared').md5('shared');?>" />
									</div>
									
									</div>
									

									

									<div class="fr">
									<div class="g-recaptcha" data-sitekey="6LcDo1sUAAAAAEPlrWpeHZlvDbV1ydwDuM0lJe9N"></div>
									</div>
									<!-- If you want to add a checkbox to this form, uncomment this code -->

									
								</div>
								<div class="modal-footer text-center">
									<button type="submit" class="btn btn-primary btn-round"><i class="fa fa-sign-in"></i> &nbsp;Sign In</button>
								</div>
							</form>
							
							<div class="row">
							<div class="col-md-12">
							<div id="loadloss"></div>
							</div>
							</div>
							
							</div>
							</div>
							
							
							<div class="btn-group pull-right">
							<a href="iqreset" class="btn btn-warning"><i class="fa fa-lock"></i> Forgotten Password</a><a href="registerdetails" class="btn btn-success"><i class="fa fa-laptop"></i> Sign-up</a>
							</div>
						</div>
						
						<div class="col-md-12 text-center rup">
						<hr/>
						<p class="copyright">Copyright &copy; <?php echo DATE("Y");?>.All right reserved</p>
						
						<div class="social text-center">
								<button class="btn btn-just-icon btn-round btn-twitter">
									<i class="fa fa-twitter"></i>
								</button>
								<button class="btn btn-just-icon btn-round btn-dribbble">
									<i class="fa fa-dribbble"></i>
								</button>
								<button class="btn btn-just-icon btn-round btn-facebook">
									<i class="fa fa-facebook"> </i>
								</button>
								<!--<h4> or be classical </h4>-->
							</div>
						</div>
						
					</div>
		      	</div>
			</div>
	    </div>
	</div>
</div>
<!--  End Modal -->


<?php include_once("footextra.php");?>
</body>
</html>