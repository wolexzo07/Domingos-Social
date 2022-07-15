     <nav id="sidebar">
                <div class="sidebar-header">
				<h3 style='color:red;font-weight:bold;'>
				<?php x_short($_SESSION["XELOW_DOMINGOS_FULL_NAME"]);?></h3>
				
					<?php
					$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
					if(x_count("userdatabank","is_admin='1' AND id='$userid' LIMIT 1") > 0){
						?>
						<img src="imager/logo.png" class="img-responsive " />
                    <h3>DOMINGOS</h3>
						<?php
					}else{
						
						
						if(x_count("userdatabank","id='$userid' LIMIT 1") > 0){
							foreach(x_select("photo_upload","userdatabank","id='$userid'","1","id") as $key){
								$photo = $key["photo_upload"];
							}
							$mpho = "../".$photo; 
							//echo $mpho;
							echo "<center><img src='$mpho' class='img-responsive loadingimg' /></center>";
							/***if($photo == ""){
								echo '<center><img src="imager/avatar.png" class="img-responsive loadingimg" /></center>';
							}else{
								if(file_exists($mpho)){
									echo '<center><img src="'.$mpho.'" class="img-responsive loadingimg" /></center>';
								}else{
									echo '<center><img src="imager/avatar.png" class="img-responsive loadingimg" /></center>';
								}
								
							}**/
						}else{
							
						}
						?>
						<div class="rshift">
                    <button class="btn btn-warning"><i class="fa fa-user"></i> Hi, <?php echo substr($_SESSION["XELOW_DOMINGOS_FULL_NAME"],0,20);?></button>
					<button class="btn btn-success sup"><b><?php echo strtolower(substr($_SESSION["XELOW_DOMINGOS_NICK_NAME"],0,20));?></b></button></div>
						<?php
					}
						?>
                </div>

                <ul class="list-unstyled components">
				
				
					
		
					<?php
					//$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
					if(x_count("userdatabank","is_admin='1' AND id='$userid' LIMIT 1") > 0){
						include_once("adminbase_account_dmenu.php");
					}else{
							// Account switchin started here
						
							$account_type = $_SESSION["XELOW_DOMINGOS_ACCOUNT_TYPE"];
							
							if($account_type == "normal"){
							
							include_once("normal_account_dmenu.php");
							
							}elseif($account_type == "clergy"){
								
								include_once("clergy_account_dmenu.php");
								
							}elseif($account_type == "business"){
								
								include_once("business_account_dmenu.php");
								
							}
							else{
								finish("logout","Invalid account detected!");
							}
							
							// Account switchin ended here
					
					}
					?>
					
					<li>
                        <a href="../logout"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;&nbsp; Logout</a>
                    </li>
                </ul>

                <ul class="list-unstyled CTAs">
                    <li><a href="#" class="download"><i class="fa fa-cloud-download"></i> &nbsp;&nbsp;&nbsp;Download Manual</a></li>
                    <li><a href="#" class="article"><i class="fa fa-credit-card"></i> &nbsp;&nbsp;&nbsp;Payment Details</a></li>
                </ul>
            </nav>
