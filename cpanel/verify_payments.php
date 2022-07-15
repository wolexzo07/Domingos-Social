<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validateget("reference") && x_validateget("currency") && x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

if(x_count("paymentkeys","status='1' LIMIT 1") > 0){
	$py = xg("reference");
	$currency = xg("currency");
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	require 'Paystack.php';
	foreach(x_select("secretkey,publickey","paymentkeys","status='1'","1","id") as $key){
		$sk = $key["secretkey"];
		$pk = $key["publickey"];

		$paystack = new Paystack($sk);
		$trx = $paystack->transaction->verify(
			[
			 'reference'=>$_GET['reference']
			]
		);
		if(!$trx->status){
			exit($trx->message);
		}

		if('success' == $trx->data->status){

			if(x_count("wallet_funding","payment_id='$py' AND paid_by='$userid' AND status='1' LIMIT 1") > 0){
				?>
					<div class="alert alert-warning alert-dismissible" role="alert">
					  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					  <strong>Ops!</strong> Transaction completed already.
					</div>

				<?php
			}else{
				if($currency == "NGN"){
					$getbalance = x_getsingle("SELECT naira_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","naira_wallet");
					$getamount = x_getsingle("SELECT amount_paid FROM wallet_funding WHERE payment_id='$py' AND paid_by='$userid' AND status='0' LIMIT 1","wallet_funding WHERE payment_id='$py' AND paid_by='$userid' AND status='0' LIMIT 1","amount_paid");
					$new_balance = $getbalance + $getamount;
					
					x_update("userdatabank","id='$userid'","naira_wallet='$new_balance'","updated account balance","<p>Failed to update user NGN balance</p>");
					
					x_updated("wallet_funding","payment_id='$py' AND paid_by='$userid' AND status='0'","status='1'","<div class='alert alert-success'><i class='fa fa-check_circle'></i> <b>Success:</b> NGN Wallet has been credited successfully. </div>","<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Error:</b> Failed to update data!. </div>");
				}elseif($currency == "USD"){
					$getbalance = x_getsingle("SELECT dollar_wallet FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid' LIMIT 1","dollar_wallet");
					$getamount = x_getsingle("SELECT amount_paid FROM wallet_funding WHERE payment_id='$py' AND paid_by='$userid' AND status='0' LIMIT 1","wallet_funding WHERE payment_id='$py' AND paid_by='$userid' AND status='0' LIMIT 1","amount_paid");
					
					$new_balance = $getbalance + $getamount;
					
					x_update("userdatabank","id='$userid'","dollar_wallet='$new_balance'","updated account balance","<p>Failed to update user USD balance</p>");
					
					x_updated("wallet_funding","payment_id='$py' AND paid_by='$userid' AND status='0'","status='1'","<div class='alert alert-success'><i class='fa fa-check_circle'></i> <b>Success:</b> USD Wallet has been credited successfully. </div>","<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Error:</b> Failed to update data!. </div>");
				}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Error:</b> Invalid currency was detected!. </div>";
				}
				
					unset($_SESSION["DOMI_PAY_PUBLICKEY"]);
					unset($_SESSION["DOMI_PAY_CURRENCY"]);
					unset($_SESSION["DOMI_PAY_PAYID"]);
					unset($_SESSION["DOMI_PAY_AMOUNT"]);	

			}

			}

		}

	}else{
			?>
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Error!</strong> Payment key deactivated!.
</div>
				<?php
		}
}else{
		?>
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Error!</strong> Invalid parameter detected.
</div>
<center><button style="margin-top:20pt;margin-bottom:50pt;" class="btn btn-success btn-lg" onclick="parent.location='donation'"><i class='fa fa-arrow-left'></i> Go Back</button></center>
				<?php
}
?>
