<?php include("start_security.php");?>
<html>
<head>
<title>Domingos Social Network - User Profile Photo Uploading</title>
<?php include_once("headextra.php");?>
</head>
<body class="renew">
<?php
//validating that first registration occurred
/***if(!x_validatesession("DOMINGOS_FIRST_STEP") || !x_validatesession("DOMINGOS_USER_NAME") || !x_validatesession("DOMINGOS_SECOND_STEP")){
	finish("registerdetails","0");
	exit();
}***/
?>
<?php include_once("libloader.php");?>
<div class="boxsh">
	<div class="modal-dialog modal-signup" style="width:90%;">
	    <div class="modal-content">
			<div class="card card-signup card-plain">
				<div class="modal-header">
				<img src="image/logo.png" class="img-responsive" id="retouch"/>
				<hr/>
		        	<center>
					
	<h4 class="modal-title card-title text-center" id="rcop"><font class="furbish">&raquo; Upload </font> Profile Photo &laquo;</h4>				
					</center>
		      	</div>
		      	<div class="modal-body">
					<div class="row">
						<div class="col-md-4">
						
						<!---<img src="image/gernik.png" class="img-responsive react"/>--->
						</div>
						<div class="col-md-4">
					
					<form class="form" id="uploadphoto" autocomplete="off">
								<div class="card-content">
									
									
									<div class="row">
									<div class="col-md-12 text-center">
									<i class="fa fa-user fa-3x" id="tipup"></i>
									</div>
									<div class="col-md-12">
									
	<input type="file" class="uploader" id="photop" name="uploadprofile"/>
									
<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />
									</div>
									
									
						
									</div>
									
								
									
								</div>
								<div class="modal-footer text-center">
									<button type="submit" class="btn btn-success  block"><i class="fa fa-cloud-upload"></i> &nbsp;Upload Profile Photo</button>
								</div>
								
							</form>
							
							<div class="row">
							<div class="col-md-12">
							<div id="loadloss"></div>
							</div>
							</div>
						
						</div>
						
						<div class="col-md-4"></div>
						
						
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