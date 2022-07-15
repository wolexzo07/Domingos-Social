<?php
if(isset($_SESSION["XELOW_DOMINGOS_USER_ID"])){
 $userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
	
	if(x_count("userdatabank","is_admin='1' AND id='$userid' LIMIT 1") > 0){
		
	}else{
		?>
			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
<center>
<i class="fa fa-laptop loadfa"></i>
</center><br/>
<div class="alert alert-warning"><i class="fa fa-message"></i> You are not authorized to access this page. Only super user is authorized.</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
		<?php
		exit();
	}	
}
?>
