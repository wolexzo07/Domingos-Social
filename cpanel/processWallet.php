<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey")){

			$amount = xp("amountTopay");$currency = xp("currency");$partner = xp("partner");
			$amount_rounded = number_format($amount,2);

			if($currency == "NGN"){
				$naira_max = x_zeroless(x_getsingle("SELECT max_amount FROM currency WHERE currency='NGN' LIMIT 1","currency WHERE currency='NGN'","max_amount"));
				$naira_min = x_zeroless(x_getsingle("SELECT min_amount FROM currency WHERE currency='NGN' LIMIT 1","currency WHERE currency='NGN'","min_amount"));
				$min_amount = number_format($naira_min,2);
				$max_amount = number_format($naira_max,2);
				if($amount < $naira_min){
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Amount can not be lesser than <b>NGN $min_amount</b>!. </div>";
					exit();
				}
				if($amount > $naira_max){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Amount can not be greater than <b>NGN $max_amount</b>!. </div>";
					exit();
				}
			}elseif($currency == "USD"){
				$dollar_max = x_zeroless(x_getsingle("SELECT max_amount FROM currency WHERE currency='USD' LIMIT 1","currency WHERE currency='USD'","max_amount"));
				$dollar_min = x_zeroless(x_getsingle("SELECT min_amount FROM currency WHERE currency='USD' LIMIT 1","currency WHERE currency='USD'","min_amount"));
				$min_amount = number_format($dollar_min);
				$max_amount = number_format($dollar_max);
				if($amount < $dollar_min){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Amount can not be lesser than <b>USD $min_amount</b>!. </div>";
					exit();
				}
				if($amount > $dollar_max){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Amount can not be greater than <b>USD $max_amount</b>!. </div>";
					exit();
				}
			}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid currency was selected!. </div>";
			}

			$create = x_dbtab("wallet_funding","
			currency VARCHAR(10) NOT NULL,
			payment_id VARCHAR(255) NOT NULL,
			paid_by VARCHAR(255) NOT NULL,
			status ENUM('0','1') NOT NULL,
			payment_partner VARCHAR(255) NOT NULL,
			amount_paid DOUBLE NOT NULL,
			amount_charge DOUBLE NOT NULL,
			total_paid DOUBLE NOT NULL,
			paid_on DATETIME NOT NULL,
			paid_on_local VARCHAR(255) NOT NULL,
			os VARCHAR(100) NOT NULL,
			br VARCHAR(100) NOT NULL,
			ip VARCHAR(50) NOT NULL,
			token TEXT NOT NULL
			","MYISAM");
			$os = xos();$br = xbr();$ip = xip();$time = x_curtime(0,0);$timel = x_curtime(0,1);
			$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
			$token = sha1($userid.DATE("YHis"));
			$payment_id = "DS-".$userid.str_shuffle(DATE("YmdHis")).strtoupper(xrands(5));
			if($partner == "Paystack"){
				if($currency=="NGN"){
					if($amount < 2500){
						$charge = (1.6/100)*$amount;
						}else{
							$charge = ((1.6/100)*$amount) + 100;
									if($charge > 2000){
											$charge = 2200;
									}else{
											$charge = ((1.6/100)*$amount) + 100;
									}
							}
				}elseif($currency=="USD"){
						$charge = ((5/100)*$amount) + 100;  // 5 /3.9 percent
				}else{
    				$charge = 0;
				}
				$calc = $charge + $amount;
				$final_amount = $calc;
				$secretkey = x_getsingle("SELECT secretkey FROM paymentkeys WHERE status='1' LIMIT 1","paymentkeys WHERE status='1'","secretkey");
				$publickey = x_getsingle("SELECT publickey FROM paymentkeys WHERE status='1' LIMIT 1","paymentkeys WHERE status='1'","publickey");
			}
			if($create){
				x_insert("payment_id,total_paid,amount_charge,currency,paid_by,payment_partner,amount_paid,os,br,ip,token,paid_on,paid_on_local","wallet_funding","'$payment_id','$final_amount','$charge','$currency','$userid','$partner','$amount','$os','$br','$ip','$token','$time','$timel'","<div class='alert alert-success'><i class='fa fa-money'></i> <b>ALERT:</b> CLICK THE BUTTON BELOW TO MAKE PAYMENT!. </div>","<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Error:</b> Failed to insert data!. </div>");

				if($publickey != ""){
					$email = x_clean($_SESSION["XELOW_DOMINGOS_EMAIL_BASE"]);
					$full = x_clean($_SESSION["XELOW_DOMINGOS_FULL_NAME"]);
					$username = x_clean($_SESSION["XELOW_DOMINGOS_USER_NAME"]);
					
					//$_SESSION["DOMI_PAY_PUBLICKEY"] = $publickey;
					//$_SESSION["DOMI_PAY_CURRENCY"] = $currency;
					//$_SESSION["DOMI_PAY_PAYID"] = $payment_id;
					//$_SESSION["DOMI_PAY_AMOUNT"] = $final_amount;
					
					?>
					
	<button class="btn btn-success" onclick="payWithPaystack()">
	<i class="fa fa-credit-card"></i> Click to Make Payment </button> 
						<script>
						$("#fund_wallet").hide("slow");
						function payWithPaystack(){
							var username = "<?php echo $username;?>";
							var fullname = "<?php echo $full;?>";
							var useremail = "<?php echo $email;?>";
							var paymentid = "<?php echo $payment_id;?>";
							var usercurrency = "<?php echo $currency;?>";
							var camount = <?php echo $final_amount;?>;
							var payamount = <?php echo $final_amount*100;?>;
							var handler = PaystackPop.setup({
								key: "<?php echo $publickey;?>",
								email: useremail,
								amount: payamount,
								currency: usercurrency,
								ref: paymentid,
								metadata: {
									 custom_fields: [
											{
													display_name: fullname,
													variable_name: username,
													value: username
											}
									 ]
								},
								callback: function(response){
							 	var refme = response.reference;
								relaymessage("verify_payments?reference="+refme+"&currency="+usercurrency);

								},
								onClose: function(){

								}
							});
							handler.openIframe();
							return false;
							}

						</script>
					<?php
				}else{
						echo "<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Payment Error:</b> Failed to Initiate payment! Contact support. </div>";
				}


			}else{
				echo "<div class='alert alert-danger'><i class='fa fa-minus-trash'></i> <b>Error:</b> Failed to create table!. </div>";
			}

}else{
	echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter is Missing!. </div>";
}
