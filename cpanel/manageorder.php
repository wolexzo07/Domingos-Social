<?php
session_start();
include_once("../../finishit.php");
include_once("validatelogin.php"); // validatin login
//include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>

<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

<div class="panel panel-default formloader">
<div class="panel-heading"><i class="fa fa-plus-circle"></i> UPLOAD CREDENTIALS <button class="btn btn-primary pull-right" onclick="fetchrequestnow('manageorder')"><i class="fa fa-cog"></i> Refresh</button></div>
<div class="panel-body">

<form>
	<div class="slab">
	<p>Choose certificate type:</p>
	<select class="form-control input-lg slect" required name="state">
	<option value="">Choose certificate....</option>
	<?php
	if(x_count("certdata","01") > 0){
		foreach(x_select("name","certdata","0","500","name") as $key){
			$name = $key["name"];
			?>
			<option value="<?php x_print($name);?>"><?php x_print($name);?></option>
			<?php
		}
	}else{
		
	}
	?>

	</select>
	</div>
	
	<div class="slab">
	<p>Upload Certificate:</p>
	<input type="file" class="uploader form-control input-lg" name="upload" required="" />
	</div>
	
	<div class="slab">
	<p>Credential Number:</p>
	<input type="number" class="form-control input-lg" name="no" placeholder="Enter Credential Number" required="" />
	</div>
	
	<div class="slab">
	<p>Date of issue:</p>
	<input type="date" class="form-control input-lg" name="date" required="" />
	</div>
	
	<div class="slab">
	<button class="btn btn-success btn-lg btn-block"><i class="fa fa-upload"></i> UPLOAD DATA</button>
	</div>

</form>
<style>
.uploader{
	padding-bottom:40pt;
}
.slab{
	margin-top:20pt;
	margin-bottom:20pt;
}
</style>

</div>
</div>

</div>
<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>