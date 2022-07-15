<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>

<!---<div class="col-md-12"></div>--->

<!--<div class="col-lg-2 col-md-2"></div>-->

<div class="col-lg-8 col-md-8 pb-5">
	

	<h4 class="followbadge"><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp;CREATE<font class="colorg"> NEW GROUP </font></h4>
	<hr/>

<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">

	<div id="formGroup"></div>

	<?php
	
	// Getting Group control settings
	
	$nlen = x_getsingle("SELECT gname_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gname_lenght");
	$gnick = x_getsingle("SELECT gnick_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gnick_lenght");
	$gdes = x_getsingle("SELECT gdes_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","gdes_lenght");
	$grule = x_getsingle("SELECT grule_lenght FROM group_control WHERE id='1' LIMIT 1","group_control WHERE id='1' LIMIT 1","grule_lenght");
	
	?>

	<form method="" class="form" id="group_create">
	
	<div class="form-group mt-1">
	<div class="input-group">
	<span class="input-group-addon">
	<span class="fa fa-users"></span> Name
	
	</span>
		<input type="text" required="required" maxlength="<?php echo $nlen;?>" class="form-control input-lar" name="gname" placeholder="Enter Group Name"/>
	</div>
	</div>
	
	<div class="form-group mt-1">
	<div class="input-group">
	<span class="input-group-addon">
	Nick Name
	
	</span>
		<input type="text" required="required" maxlength="<?php echo $gnick;?>" class="form-control input-lar" name="gnick" placeholder="Enter Group NickName"/>
	</div>
	</div>
	
	
	<div class="form-group mt-2">
	<div class="input-group">
	<span class="input-group-addon">
	<span class="fa fa-lock"></span> Privacy
	
	</span>
		<select name="privacy" id="gprivacy" required class="form-control input-lar">
		<option value="public"> Public</option>
		<option value="closed"> Closed </option>
		</select>
	</div>
	</div>
	
	<div class="row mt-2">
	
	<div class="col-md-3 mb-1">
	
	<img src="../image/uploadphoto.png" class="img-responsive" style="width:150px;"/>
	
	</div>
	
	<div class="col-md-9">
	
	<div class="form-group ">
	<div class="input-group">
	<span class="input-group-addon">
	</span>
		<a style="text-align:left;" class="btn btn-default pt-1 pb-1 w-100" onclick="$('#glogo').click()">
		<span class="fa fa-upload"></span>&nbsp;&nbsp;
	Click to choose a file</a>
	
		<input type="file" name="upload1" class="dnone" style="display:none;" id="glogo" accept=".jpg,.png,.gif" />
	</div>
	<p class="mt-1 colorg boldit">Logo size: 150px * 150px</p>
	</div>
	
	
	</div>
	
	</div>
	
	
	<p class="ft-12 boxed mt-2">Allowed Gender : &nbsp;&nbsp;&nbsp;
	<font class="colorb">
	<input type="radio" class="" name="gender" value="Male"/>&nbsp;&nbsp; Male
	&nbsp;&nbsp;
	<input type="radio" class="" name="gender" value="Female"/>&nbsp;&nbsp; Female
	&nbsp;&nbsp;
	<input type="radio" class="" name="gender" value="Both"/>&nbsp;&nbsp; Mixed
	</font>
	</p>
	
	<p class="txt ft-12 mt-2">Describe Group (Max: <?php echo $gdes;?>):</p>
	
	<textarea class="form-control input-lar rnone" maxlength="<?php echo $gdes;?>" style="height:100px;padding:10px;" id="dgroup" placeholder="Enter group description" name="gdescrib"></textarea>
	
	<p class="txt ft-12 mt-2">Group Rules (Max: <?php echo $grule;?>):</p>
	
	<textarea class="form-control input-lar rnone" maxlength="<?php echo $grule;?>" style="height:100px;padding:10px;" id="rgroup" placeholder="Write the rules governing this group" name="grule"></textarea>

	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1">
	<i class="fa fa-briefcase"></i> &nbsp;&nbsp;CREATE GROUP</button>

	</form>


</div>




	<div style="margin-top:20pt;margin-bottom:20pt;" id="fetch_group"></div>
	
</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>

</div>
