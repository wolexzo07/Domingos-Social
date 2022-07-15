<?php
session_start();
include_once("../finishit.php");
if(x_validateget("reference") && x_validatesession("MISS_C2R_EMAIL") && x_validatesession("MISS_C2R_NAME") && x_validatesession("MISS_C2R_ORDER_ID")){
	
	//getting parameters ready
	
	$timer = x_curtime("0","1");
				
	//get paystack payment secret key
	$sk = "sk_live_02ccab19561d27c4c37b26dc0fdb359894e8ca0e"; // secret key
	$py = x_clean($_GET['reference']);
	
	require 'Paystack.php'; 

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
			
			$email = x_clean($_SESSION['MISS_C2R_EMAIL']);
			$name = x_clean($_SESSION['MISS_C2R_NAME']);
		
		if(x_count("misscampus","payment_id='$py' LIMIT 1") > 0){
			
			finish("https://c2rgroup.com","Duplicate Transaction $py found");
			
		}else{
			
		//started mailing
		$to = $email;
		$subject = "C2RGROUP - MISS CAMPUS CLOUD PAYMENT NOTIFICATION";
		$message = "Hi $name,<br/>
		Your payment of NGN 3000.00 was recieved.Thank you for your interest in the upcoming miss campus cloud Nigeria hosted by c2rgroup.com";
		$tr = sendmail_local($to,$subject,$message);
		
		if($tr != 1){
			echo "Failed to send email!";
			exit();
		}
		//completing mailing
		
		x_update("misscampus","email='$email'","status='1',amount_paid='3000',payment_id='$py'","&nbsp;","<p>Failed to update transaction</p>");

		unset($_SESSION['MISS_C2R_EMAIL']);
		unset($_SESSION['MISS_C2R_NAME']);
		unset($_SESSION['MISS_C2R_ORDER_ID']);
		
		finish("https://c2rgroup.com","Transaction $py completed successfully");
		
		}
			
		
			}
		
	
}else{
	x_print("Parameter Missing!");
}


	
?>
