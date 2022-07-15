<?php include("start_security.php");?>
<html>
<head>
<title>Domingos Social Network - User Account Verification</title>
<?php include_once("headextra.php");?>
</head>
<body class="renew">
<?php
//validating that first registration occurred
if(!x_validatesession("DOMINGOS_FIRST_STEP") || !x_validatesession("DOMINGOS_USER_NAME")){
	finish("registerdetails","0");
	exit();
}
?>
<?php include_once("libloader.php");?>
<div class="boxsh">
	<div class="modal-dialog modal-signup" style="width:90%;">
	    <div class="modal-content">
			<div class="card card-signup card-plain">
				<div class="modal-header">
		        	<center>
					<img src="image/dmi.png" class="img-responsive" id="toru"/>
	<h3 class="modal-title card-title text-center" id="myModalLabel"><font class="furbish">&raquo; Enter </font> Verification Code &laquo;</h3>				
					</center>
		      	</div>
		      	<div class="modal-body">
					<div class="row">
						<div class="col-md-3">
						
						<!---<img src="image/gernik.png" class="img-responsive react"/>--->
						</div>
						<div class="col-md-6">
				
					<form class="form" id="coded" autocomplete="off">
								<div class="card-content">
									
									
									<div class="row">
									
									<div class="col-md-12">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-calculator fa-2x"></i>
										</span>
										<input type="text" autocomplete="off" required="required" class="form-control" placeholder="Enter verification code" name="code" id="code"/>
									</div>
									
									</div>
									
									
									<div class="col-md-12">
<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />
									<div class="fr">
<!---<div class="g-recaptcha" data-sitekey="6LcDo1sUAAAAAEPlrWpeHZlvDbV1ydwDuM0lJe9N"></div>-->
									</div>
									
									</div>
						
									</div>
									
								
									
								</div>
								<div class="modal-footer text-center">
									<button type="submit" class="btn btn-success  block"><i class="fa fa-send"></i> &nbsp;Verify code & Continue</button>
								</div>
								
							</form>
							
							<div class="row">
							<div class="col-md-12">
							<div id="loadloss"></div>
							</div>
							</div>
						
						</div>
						
						<div class="col-md-3"></div>
						
						
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