	<?php
	include("../finishit.php");
	xstart("0");
	if(x_validatesession("XELOW_DOMINGOS_USER_ID")){
				$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
						if(x_count("userdatabank","id='$userid'") > 0){
							foreach(x_select("post_count,follower_count,followed_count,naira_wallet,dollar_wallet","userdatabank","id='$userid'","1","id") as $key){
								$postcount =  $key["post_count"];
								$followercount =  $key["follower_count"];
								$followingcount =  $key["followed_count"];
								$naira =  $key["naira_wallet"];
								$dollar =  $key["dollar_wallet"];
							}
						}else{
							$postcount = 0;
							$followercount =  0;
							$followingcount =  0;
							$naira =  0;
							$dollar =  0;
						}
						?>
								<div class="col-md-6">
		
			<div class="panel panel-default">
			<div class="panel-body panelstyle">
			<h2 class="amountstyle">
				<?php echo x_convert_figure($followercount);?>
			</h2>
			</div>
			<div class="panel-footer pfoot"><i class="fa fa-user"></i>&nbsp;&nbsp; Followers</div>
			</div>
		
		</div>
		
		<div class="col-md-6">
		
			<div class="panel panel-default">
			<div class="panel-body panelstyle1">
			<h2 class="amountstyle">
			<?php echo x_convert_figure($followingcount);?>
			</h2>
			</div>
			<div class="panel-footer pfoot"><i class="fa fa-users"></i>&nbsp;&nbsp; Following</div>
			</div>
		
		</div>
		
		<div class="col-md-6">
		
			<div class="panel panel-default">
			<div class="panel-body panelstyle1">
			<h2 class="amountstyle">
			<?php echo x_convert_figure($postcount);?>
			</h2>
			</div>
			<div class="panel-footer pfoot"><i class="fa fa-pencil"></i>&nbsp;&nbsp; Total Post</div>
			</div>
		
		</div>
		
		
		
		<div class="col-md-6">
		
			<div class="panel panel-default">
			<div class="panel-body panelstyle">
			<h2 class="amountstyle">
			<?php echo "NGN ".number_format($naira,2);?>
			</h2>
			</div>
			<div class="panel-footer pfoot"><i class="fa fa-credit-card"></i>&nbsp;&nbsp; Naira Balance</div>
			</div>
		
		</div>
		
		
		<div class="col-md-12">
		
			<div class="panel panel-default">
			<div class="panel-body panelstyle1">
			<h2 class="amountstyle">
			<?php echo "USD ".number_format($dollar,2);?>
			</h2>
			</div>
			<div class="panel-footer pfoot"><i class="fa fa-dollar"></i>&nbsp;&nbsp; Dollar Balance</div>
			</div>
		
		</div>
							
					
						<?php
					}else{
						 echo "Failed to get statistics";
					}
				?>

			
		
	