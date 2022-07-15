<?php
//session_start();
//include_once("../finishit.php");
include_once("validatelogin.php"); // validatin login
//include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>
		
		<?php include_once("postcreator_boss.php");?>
		
		<div class="col-md-12">
		
			<div class="panel panel-default">
			<div id="headstyle" class="panel-heading"><i class="fa fa-lock"></i> Account Token</div>
			<div class="panel-body">
			
			<button class="btn btn-success "><i class="fa fa-lock"></i> DSID : 
				<?php 
				$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
				if(x_count("userdatabank","id='$userid' AND dsid='' LIMIT 1") > 0){
					function generate(){
							$email = $_SESSION["XELOW_DOMINGOS_USER_ID"];
							$dater = DATE("mdHis"); 
							$hash = substr(strtoupper(sha1($email)),0,4);
							$add = strtoupper(xrands(10));
							return $dater."-".$hash."-".$add;
						}
						$oid = generate();
				x_update("userdatabank","id='$userid' AND dsid=''","dsid='$oid'","success","Failed to update");
				}else{
					
					foreach(x_select("dsid","userdatabank","id='$userid'","1","dsid") as $key){
						$oid = $key["dsid"];
					}
				}
				echo $oid;
				
				?></button>

	<?php
	$filer = "qrcoder/".sha1($oid).md5($oid).sha1($oid).".png";
	if(file_exists($filer)){
		echo "<br/><br/><img src='$filer' src='img-responsive pull-right'/>";
	}else{
	x_qrcode($oid,$filer,"1");
	echo "<br/><br/><img src='$filer' src='img-responsive pull-right'/>";
	}
	?>
								
								</div>
								
								</div>
							
							</div>
							
						<?php 
						// Loading user statistics
						require("actstats_loader.php");?>
							
							<!-----
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle1">
								<h2 class="amountstyle">Yes</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-laptop"></i> API access</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle">
								<h2 class="amountstyle">3</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Subscription Count</div>
								</div>
							
							</div>
							
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div id="headstyle" class="panel-heading"><i class="fa fa-shopping-cart"></i> Incoming Orders</div>
								<div class="panel-body">
								
								</div>
								
								</div>
							
							</div>
							
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div id="headstyle" class="panel-heading"><i class="fa fa-check-circle"></i> Processed Orders</div>
								<div class="panel-body">
								
								</div>
								
								</div>
							
							</div>
							
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div id="headstyle" class="panel-heading"><i class="fa fa-credit-card"></i> Incoming Payments</div>
								<div class="panel-body">
								
								</div>
								
								</div>
							
							</div>
							
							<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div class="panel panel-default">
									<div id="headstyle" class="panel-heading"><i class="fa fa-comment"></i> Customers Messages</div>
									<div class="panel-body">
									</div>
								</div>
							</div>
							
							<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div class="panel panel-default">
									<div id="headstyle" class="panel-heading"><i class="fa fa-bank"></i> Customers Refund</div>
									<div class="panel-body">
									</div>
								</div>
							</div>
							
					------>
				