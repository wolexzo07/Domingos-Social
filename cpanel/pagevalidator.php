	<div class="row">
<?php
if(!isset($_SESSION["DOMIGOS_DATACENTER_AUTH_SERVER"])){
	?>

<div class="col-lg-4 col-md-4"></div>
<div class="col-lg-4 col-md-4">
<center>
<i class="fa fa-minus-circle loadfa"></i>
</center><br/>
<div class="alert alert-warning"><i class="fa fa-message"></i> Invalid session was detected!</div>
</div>
<div class="col-lg-4 col-md-4 "></div>
	<?php
}
if(x_validateget("hashkey")){
	if(xg("hashkey") != $_SESSION["DOMIGOS_DATACENTER_AUTH_SERVER"]){
			?>
<div class="col-lg-4 col-md-4"></div>
<div class="col-lg-4 col-md-4">
<center>
<i class="fa fa-trash loadfa"></i>
</center><br/>
<div class="alert alert-warning"><i class="fa fa-message"></i> Parameter Tampered!</div>
</div>
<div class="col-lg-4 col-md-4"></div>
	<?php
		exit();
	}
}else{
		?>
<div class="col-lg-4 col-md-4"></div>
<div class="col-lg-4 col-md-4">
<center>
<i class="fa fa-minus-circle loadfa"></i>
</center><br/>
<div class="alert alert-warning"><i class="fa fa-message"></i> Missing Parameter!</div>
</div>
<div class="col-lg-4 col-md-4"></div>
	<?php
	exit();
}
?>
</div>