<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>


<div class="col-lg-8 col-md-8 pb-5">

<h4 class="followbadge"><i class="fa fa-bank"></i>&nbsp;&nbsp;&nbsp;ADD A <font class="colorg">BANK ACCOUNT</font></h4>

<hr/>
<p class="colorg"><font class="boldit">NOTE</font> : </p>
<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">
	
	<div id="process_transfer"></div>

	<form method="" class="form" id="make_instant_transfer">
	<p class="txt">Choose wallet:</p>
	<select class="form-control input-lar" required name="wallet" id="bank_name">
	<?php
	if(x_count("currency","status='1' AND operation_type='currency' LIMIT 4") > 0){
		foreach(x_select("0","currency","status='1' AND operation_type='currency'","4","currency") as $key){
			$currency = $key["currency"];
			$des = $key["des"];
			

			if($currency == "NGN"){
				echo "<option value='$currency' selected>$currency Wallet</option>";
			}else{
				echo "<option value='$currency'>$currency Wallet</option>";
			}
		}
	}else{
		echo "<option value=''>No option</option>";
	}
	?>
	</select>

	<p class="txt">Enter Reciever's DSID | username:</p>
	<input type="text" maxlength="50" onkeyup="lookup_accountname(this.value)" id="account_number" placeholder="Enter reciever's DSID | username" name="reciever_id" class="form-control input-lar"/>
		<div id="resolveaccount_name" class="mt-1"></div>

	<p class="txt">Enter Amount:</p>
	<input type="number" maxlength="10" id="amountTotransfer" placeholder="Enter Amount to Transfer" name="amountTopay" class="form-control input-lar"/>
	<div id="account_name" class="mt-1"></div>
	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1"><i class="fa fa-send"></i> TRANSFER MONEY</button>

	</form>


</div>




<h4 class="followbadge mt-3" ><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;MONEY TRANSFERRED <font class="colorg">HISTORY </font></h4>
<hr/>

	<div id="appendTransferHistory"></div>
	<input type="hidden" id="pagenoTransfer" value="1"/>
	<img id="loaderTransfer" src="loadingimg/loader4.gif"/>


</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>


</div>
