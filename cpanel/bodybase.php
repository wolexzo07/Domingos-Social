
		<div id="content">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">
						<?php 
						use Jenssegers\Agent\Agent;
						$agent = new Agent();
						$desktop = $agent->isDesktop();
						if($desktop){
							?>
							  <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="navbar-btn pull-left">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
							
							<ul class="nav navbar-nav navbar-left">
 
                          <li class="mainlog"><a href="#"> D<font class="cob">S</font></a></li>
								
                            </ul>
							
                        </div>
							<?php
						}else{
							?>
							<ul class="nav navbar-nav navbar-left">
 
                          <li class="mainlog boldit"><a href="#"><img src="../image/logo.png" class="m-logo"/> Domingos <font class="cob"> Social</font></a></li>
								
                            </ul>
							<?php
						}
				
					?>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                          <li><a href="logout"><i class="fa fa-credit"></i> &nbsp; NGN: <font class="boldit ft-15" id="nairabossonly">
	<?php 
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	$getbalance_NGN = x_getsingle("SELECT naira_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","naira_wallet");echo number_format($getbalance_NGN,2);?></font>&nbsp;&nbsp; 
	
	USD: <font class="boldit ft-15" id="dollarbossonly"><?php
	$getbalance_USD = x_getsingle("SELECT dollar_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","dollar_wallet");

	echo number_format($getbalance_USD,2);
	?></font></a></li>
								
                                <li><a href="logout"><i class="fa fa-sign-out"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
				
				<div class="container-fluid">
<?php 
// Handling Cover photo
$agent = new Agent();
$desktop = $agent->isDesktop();
$getphoto = x_getsingle("SELECT photo_upload FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","photo_upload");
$getcover = x_getsingle("SELECT cover_photo FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","cover_photo");
						if($desktop){
							?>
				<div id="hidecfluid" class="row">
				<div class="col-md-12 coverphoto">
				<?php 
				if(($getcover != "") && ($getphoto != "")){
					if(file_exists("../".$getphoto) && file_exists($getcover)){
						?>
						<img src="<?php echo $getcover;?>" style="width:100%;height:auto;"/>
						<!--<center><img src="<?php echo "../".$getphoto;?>" class="img-circle" id="imgr"/></center>-->
						<?php
					}	
				}
				?>
				
				</div>
				</div>
							<?php
						}else{
							?>
				<div class="row">
				<div class="col-md-12 coverphoto">
				<?php 
				if(($getcover != "") && ($getphoto != "")){
					if(file_exists("../".$getphoto) && file_exists($getcover)){
						?>
						<img src="<?php echo $getcover;?>" style="width:100%;height:auto;"/>
						
						<center><img src="<?php echo "../".$getphoto;?>" class="img-circle" id="imgr"/></center>
						
						<?php
					}
					
				}
				?>
				</div>
				</div>
							<?php
						}
						?>
				
				
				
                <!---content goes here--->
				<!--<div class="container-fluid">-->
				
				<div id="contentgo" class="row">
				<div class="col-md-8">
				<?php
				$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
				if(x_count("userdatabank","is_admin='1' AND id='$userid' LIMIT 1") > 0){
				include_once("admininterface.php");
				}else{
				include_once("normalinterface.php");	
				}
				?>
				</div>
				<div class="col-md-4">
				<!--<h4 class="followbadge"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">ADVERTS</font></h4>

				<hr/>---->
				
				<div id="showwhotofollow"></div>
				
				</div>
				
				</div>
				
				
				
				<!--</div>-->
				<!------content goes here------------>
				
            </div>
        
	
	</div>
