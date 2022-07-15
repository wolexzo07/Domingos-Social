<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>


<div class="col-lg-8 col-md-8 pb-5">

<h4 class="followbadge"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;CREATE<font class="colorg"> ADS</font></h4>

<hr/>
<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">

	<div id="formAds"></div>

	<form method="" class="form" id="ads_create">
	<p class="txt">Choose Payment partner:</p>
	<select class="form-control input-lar" required name="partner" id="wallet_partner">

	</select>

	<p class="txt">Choose Currency:</p>

	<select class="form-control input-lar" onchange="loadamount(this.value)" required name="currency" id="wallet_currency">
	
	</select>

	<p class="txt">Enter Amount:</p>
	<input type="number" value="" min="" max="" id="amountbase" placeholder="Enter amount" name="amountTopay" class="form-control input-lar"/>
	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1"><i class="fa fa-send"></i> FUND WALLET</button>

	</form>


</div>



</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>

</div>
