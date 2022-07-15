	<div class="panel panel-default">
			<div class="panel-heading phead" style="background-color:white;">
			<font class="standalone"><i class="fa fa-board"></i> <b><?php echo $name;?></b> <font class="nicker"><?php echo $nick;?></font></font>
			</div>
			<div class="panel-body">
			<div class="row">
			
			<!---<div class="col-md-12 optio"></div>--->
			<div class="col-md-12 optio">
			<?php echo $content;?>
			</div>
			
			<div class="col-md-12 optio">
			<?php
			if(($is_p_linked > 0) && ($all_link_count > 0)){
				
				// Getting youtube linked content
				
				if($ylink_count > 0){
					require("yc_link.php");
					
				}
				
				// Getting vimeo linked content
				
				if($vlink_count > 0){
					require("vc_link.php");
				}
				
				// Getting soundcloud linked content
				
				if($slink_count > 0){
					require("sc_link.php");
				}
				
				// Handling other linked content
				
				if($olink_count > 0){
					require("oc_link.php");
				}
			}
			?>
			</div>
			
			<?php 
			if($audio_count > 0){
			require("audio_boss_loader.php");	
			}
			
			if($photo_count > 0){
				
				require("photo_loader.php");
			}
			if($video_count > 0){
			
				require("video_loader_boss.php");
			}
			if($document_count > 0){
				//require("photo_loader.php")
			}
			?>
			
			<?php
			if($is_poll == "1"){
				?>
			<form id="poll<?php echo $id;?>">
			<div class="col-md-6 optio">
			A.&nbsp;<input type="radio" value="a" name="poll"/> &nbsp;&nbsp;<?php echo $a_opt;?>
			</div>
			<div class="col-md-6 optio">
			B.&nbsp;<input type="radio" value="b" name="poll"/> &nbsp;&nbsp;
			<?php echo $b_opt;?>
			</div>
			<?php
			if($c_opt != ""){
				?>
				<div class="col-md-6 optio">
			C.&nbsp;<input type="radio" value="c" name="poll"/> &nbsp;&nbsp;
			<?php echo $c_opt;?>
			</div>
				<?php
			}
			
			if($d_opt != ""){
				?>
				<div class="col-md-6 optio">
			D.&nbsp;<input type="radio" value="d" name="poll"/> &nbsp;&nbsp;
			<?php echo $d_opt;?>
			</div>
				<?php
			}
			?>
			</form>
			
				<?php
			}
			?>
			
			</div>
			
			<!--<hr class="mt-2"/>-->
			<?php include("post_stats_rightnow.php");?>
			
			</div>
			
			</div>
			