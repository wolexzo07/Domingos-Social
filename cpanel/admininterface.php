	<?php
//session_start();
//include_once("../finishit.php");
include_once("validatelogin.php"); // validating login
include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>

							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body">
								<?php
								if(isset($_SESSION["XELOW_PAGE_TOKER"])){
								echo $_SESSION["XELOW_PAGE_TOKER"];	
								}
								?>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-signal"></i> Chart of Transactions against Date</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle1">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
								</div>
							
							</div>
							
							
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle1">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
								</div>
							
							</div>
							
							<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							
								<div class="panel panel-default">
								<div class="panel-body panelstyle">
								<h2 class="amountstyle">NGN 999,900,000</h2>
								</div>
								<div class="panel-footer pfoot"><i class="fa fa-money"></i> Income Today</div>
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
							
					