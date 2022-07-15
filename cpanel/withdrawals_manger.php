<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>


<div class="col-lg-8 col-md-8 pb-5">

<h4 class="followbadge"><i class="fa fa-bank"></i>&nbsp;&nbsp;&nbsp;ACCOUNT <font class="colorg"> WITHDRAWAL</font></h4>

<hr/>
<!--<p class="colorg"><font class="boldit">NOTE</font> : Make sure Bank account name matches profile name</p>--->
<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">
	
	<div id="withdrawal_now"></div>

	<form class="form" id="withdrawal_form">
	
	<p class="txt">Your Bank Account:</p>
	<select class="form-control input-lar" required name="acct_numb" id="acct_numb">
	<?php
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	if(x_count("addbankaccount","owner_id='$userid' LIMIT 1") > 0){
		foreach(x_select("currency,bankname,acct_numb,acct_name","addbankaccount","owner_id='$userid'","1","bankname") as $key){
			$bank = $key["bankname"];
			$acname = $key["acct_name"];
			$acnum = $key["acct_numb"];
			$cur = $key["currency"];

			echo "<option value='$acnum'>$bank ($acnum) ===> $cur</option>";
			
		}
	}else{
		echo "<option value=''>No bank account</option>";
	}
	?>
	</select>
	<p class="txt">Withdrawal type:</p>
	<div class="spacer_type">
	<input type="radio" value="normal" checked required name="type"/>&nbsp;&nbsp; Normal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<input type="radio" value="instant" required name="type"/>&nbsp;&nbsp; Instant &nbsp;&nbsp;&nbsp;(N/A to USD )
	</div>
	
		<p class="txt">Choose wallet:</p>
	<select class="form-control input-lar" required name="wallet" id="wallet">
	<?php
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	$naira_balance = x_getsingle("SELECT naira_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' lIMIT 1","naira_wallet");
	$dollar_balance = x_getsingle("SELECT dollar_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' lIMIT 1","dollar_wallet");
	$ngn = "NGN ".number_format($naira_balance,2);
	$usd = "USD ".number_format($dollar_balance,2);
	?>
		<?php
	if(x_count("currency","status='1' AND operation_type='currency' LIMIT 4") > 0){
		foreach(x_select("0","currency","status='1' AND operation_type='currency'","4","currency") as $key){
			$currency = $key["currency"];
			$des = $key["des"];
			$min = $key["min_amount"];
			$max = $key["max_amount"];

			if($currency == "NGN"){
				echo "<option value='$currency' selected>$ngn</option>";
			}else{
				echo "<option value='$currency'>$usd</option>";
			}
		}
	}else{
		echo "<option value=''>No option</option>";
	}
	?>
	
	</select>
	<?php
	$max_amt =  x_getsingle("SELECT max_amount FROM currency WHERE operation_type='withdrawal' AND status='1' LIMIT 1","currency WHERE operation_type='withdrawal' AND status='1' LIMIT 1","max_amount");
	
	$min_amt =  x_getsingle("SELECT min_amount FROM currency WHERE operation_type='withdrawal' AND status='1' LIMIT 1","currency WHERE operation_type='withdrawal' AND status='1' LIMIT 1","min_amount");
	if(($min_amt=="") || ($max_amt =="")){
		
	}else{
		?>
	<p class="txt">Enter Amount:</p>
	<input type="number" max="<?php echo $max_amt;?>" required min="<?php echo $min_amt;?>" id="amounttoremove" placeholder="Enter amount" name="amount" class="form-control input-lar"/><?php
	}
	?>
	
	
	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1"><i class="fa fa-send"></i> &nbsp;&nbsp;&nbsp;PROCESS WITHDRAWAL</button>

	</form>


</div>




<h4 class="followbadge mt-3" ><i class="fa fa-signal"></i>&nbsp;&nbsp;&nbsp;WITHDRAWALS <font class="colorg"> DETAILED RECORDS </font></h4>
<hr/>
<div id="appendWHistory"></div>
	<input type="hidden" id="pagenoW" value="1"/>
	<img id="loaderW" src="loadingimg/loader4.gif"/>


</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>

</div>
