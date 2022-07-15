<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>


<div class="col-lg-8 col-md-8 pb-5">

<h4 class="followbadge"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;FUND <font class="colorg">YOUR WALLET</font></h4>

<hr/>
<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">

	<div id="formWallet"></div>

	<form method="" class="form" id="fund_wallet">
	<p class="txt">Choose Payment partner:</p>
	<select class="form-control input-lar" required name="partner" id="wallet_partner">
	<?php
	if(x_count("currency","status='1' AND operation_type='payment_partner' LIMIT 4") > 0){
		foreach(x_select("payment_partner","currency","status='1' AND operation_type='payment_partner'","4","payment_partner") as $key){
			$partner = $key["payment_partner"];

			if($partner == "Paystack"){
				echo "<option value='$partner' selected>$partner (Recommended)</option>";
			}else{
				echo "<option value='$partner'>$partner</option>";
			}
		}
	}else{
		echo "<option value=''>No option</option>";
	}
	?>
	</select>

	<script>
	<?php
	$naira_max = x_zeroless(x_getsingle("SELECT max_amount FROM currency WHERE currency='NGN' LIMIT 1","currency WHERE currency='NGN'","max_amount"));
	$naira_min = x_zeroless(x_getsingle("SELECT min_amount FROM currency WHERE currency='NGN' LIMIT 1","currency WHERE currency='NGN'","min_amount"));
	$dollar_max = x_zeroless(x_getsingle("SELECT max_amount FROM currency WHERE currency='USD' LIMIT 1","currency WHERE currency='USD'","max_amount"));
	$dollar_min = x_zeroless(x_getsingle("SELECT min_amount FROM currency WHERE currency='USD' LIMIT 1","currency WHERE currency='USD'","min_amount"));
	?>
	$(document).ready(function(){
		$("#amountbase").attr("max","<?php echo $naira_max;?>");
		$("#amountbase").attr("min","<?php echo $naira_min;?>");
	})
	function loadamount(str){
		if(str == ""){
			alert("Choose a Currency");
		}else{
			if(str == "NGN"){
				$("#amountbase").attr("max","<?php echo $naira_max;?>");
				$("#amountbase").attr("min","<?php echo $naira_min;?>");
			}else if(str == "USD"){
				$("#amountbase").attr("max","<?php echo $dollar_max;?>");
				$("#amountbase").attr("min","<?php echo $dollar_min;?>");
			}else{
			alert("Choose currency");
			}
		}

	}
	</script>
	<p class="txt">Choose Currency:</p>

	<select class="form-control input-lar" onchange="loadamount(this.value)" required name="currency" id="wallet_currency">
	<?php
	if(x_count("currency","status='1' AND operation_type='currency' LIMIT 4") > 0){
		foreach(x_select("0","currency","status='1' AND operation_type='currency'","4","currency") as $key){
			$currency = $key["currency"];
			$des = $key["des"];
			$min = $key["min_amount"];
			$max = $key["max_amount"];

			if($currency == "NGN"){
				echo "<option value='$currency' selected>$des</option>";
			}else{
				echo "<option value='$currency'>$des</option>";
			}
		}
	}else{
		echo "<option value=''>No option</option>";
	}
	?>
	</select>

	<p class="txt">Enter Amount:</p>
	<input type="number" value="" min="" max="" id="amountbase" placeholder="Enter amount" name="amountTopay" class="form-control input-lar"/>
	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1"><i class="fa fa-send"></i> FUND WALLET</button>

	</form>


</div>




<h4 class="followbadge mt-2" ><i class="fa fa-signal"></i>&nbsp;&nbsp;&nbsp;PAYMENT <font class="colorg">HISTORY </font></h4>
<hr/>
<div id="appendPaymentHistory"></div>
	<input type="hidden" id="pagenoHistory" value="1"/>
	<img id="loaderph" src="loadingimg/loader4.gif"/>

</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>

</div>
