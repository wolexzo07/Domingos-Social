<?php include("start_security.php");?>
<html>
<head>
<title>Domingos Social Network - Connecting the flocks to the Sheperd</title>
<?php include_once("headextra.php");?>
</head>
<body class="renew">
<?php include_once("libloader.php");?>
    
<div class="boxsh">
	<div class="modal-dialog modal-signup" style="width:90%;">
	    <div class="modal-content">
			<div class="card card-signup card-plain">
				<div class="modal-header">
		        	<center>
					<img src="image/dmi.png" class="img-responsive" id="toru"/>
	<h3 class="modal-title card-title text-center" id="myModalLabel"><font class="furbish">&raquo; New Account </font> Registration &laquo;</h3>				
					</center>
		      	</div>
		      	<div class="modal-body">
					<div class="row">
						<div class="col-md-2">
					
						</div>
						<div class="col-md-8">
							
					<form class="form" id="contactme" autocomplete="off">
								<div class="card-content">
									
									
									<div class="row">
									
									<div class="col-md-12">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-user fa-2x"></i>
										</span>
										<!--<p class="">Enter fullname : </p>--->
										<input type="text" autocomplete="off" required="required" class="form-control" placeholder="Enter fullname..." name="fullname"/>
									</div>
									
									</div>
									
									<div class="col-md-6">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-inbox fa-2x"></i>
										</span>
										<input type="text" autocomplete="off" required="required" class="form-control" placeholder="Enter valid email" name="email"/>
									</div>
									
									</div>
									<div class="col-md-6">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-phone fa-2x"></i>
										</span>
										<input type="number" autocomplete="off" required="required" class="form-control" placeholder="Enter mobile number" name="mobile"/>
									</div>
									
									</div>
									
									<div class="col-md-12">
									
									<div class="input-group">
										<span class="input-group-addon">
										<i class="fa fa-at fa-2x"></i>
										</span>
										<input type="text" autocomplete="off" required="required" placeholder="Enter username" class="form-control" name="username" />
									</div>
									
									</div>
									
									<div class="col-md-6">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-lock fa-2x"></i>
										</span>
										<input type="password" autocomplete="off" required="required" placeholder="Enter Password" class="form-control" name="pass" />
									</div>
									
									</div>
									<div class="col-md-6">
									
									<div class="input-group">
										<span class="input-group-addon">
											<i class="fa fa-lock fa-2x"></i>
										</span>
										<input type="password" autocomplete="off" required="required" placeholder="Confirm Password" class="form-control" name="passconfirm" />
									</div>
									
									</div>
									
									<div class="col-md-12">
									
									<div class="fr">
<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />
	<!---<div class="g-recaptcha" data-sitekey="6LcDo1sUAAAAAEPlrWpeHZlvDbV1ydwDuM0lJe9N"></div>--->
									</div>
									
									</div>
									

						
									</div>
									
								
									
								</div>
								<div class="modal-footer text-center">
									<button type="submit" class="btn btn-primary block"><i class="fa fa-sign-in"></i> &nbsp;Save & Proceed</button>
								</div>
							</form>
							
							<div class="row">
							<div class="col-md-12">
							<div id="loadloss"></div>
							</div>
							</div>
							
							
						
							
						</div>
						
						<div class="col-md-2"></div>
						
						
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