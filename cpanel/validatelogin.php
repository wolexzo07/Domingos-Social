<?php
if(!x_validatesession("XELOW_DOMINGOS_USER_ID")){

	?>
	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
<center>
<i class="fa fa-laptop loadfa"></i>
</center><br/>
<div class="alert alert-warning"><i class="fa fa-message"></i> Unauthorized access! Please login.</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
	<?php
	exit();
}