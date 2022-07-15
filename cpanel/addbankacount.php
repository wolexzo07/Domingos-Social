<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey") && x_validatepost("bankname") && x_validatepost("acctnumber")){

			$bankname = xp("bankname");$acctno = xp("acctnumber");
			$owner = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
			$time = x_curtime("0","0");$rtime = x_curtime("0","1");
			$os = xos();$br = xbr();$ip = xip();
			
			$create = x_dbtab("addbankaccount","
			recipient_code VARCHAR(255) NOT NULL,
			owner_id VARCHAR(20) NOT NULL,
			bankname VARCHAR(200) NOT NULL,
			acct_name VARCHAR(255) NOT NULL,
			acct_numb VARCHAR(15) NOT NULL,
			acct_bvn VARCHAR(15) NOT NULL,
			added_on VARCHAR(150) NOT NULL,
			time_stamp DATETIME NOT NULL,
			os VARCHAR(100) NOT NULL,
			ip VARCHAR(100) NOT NULL,
			br VARCHAR(100) NOT NULL,
			status ENUM('0','1') NOT NULL
			","MYISAM");
			
			if($create){
				if(x_count("addbankaccount","owner_id='$owner' LIMIT 1") > 0){
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Bank account was attached.</div>";
					exit();
				}
				if(x_count("addbankaccount","acct_numb='$acctno' AND bankname='$bankname' LIMIT 1") > 0){
						echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Account Number <b>$acctno ($bankname)</b> is already taken.</div>";
				}else{
					$secretkey = x_getsingle("SELECT secretkey FROM paymentkeys WHERE status='1' LIMIT 1","paymentkeys WHERE status='1'","secretkey");

					$bankcode = x_getsingle("SELECT bankcode FROM nigeriabanklisting WHERE status='1' AND banks='$bankname' LIMIT 1","nigeriabanklisting WHERE status='1' AND banks='$bankname'","bankcode");
					if($bankcode == ""){
						?>
						<div class="alert alert-warning"><i class="fa fa-minus-circle"></i> Bank code error</div>
						<?php
						exit();
					}

			  $curl = curl_init();
			  curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.paystack.co/bank/resolve?account_number=$acctno&bank_code=$bankcode",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_CUSTOMREQUEST => "GET",
			  CURLOPT_HTTPHEADER => [
				"authorization: Bearer $secretkey",
				"content-type: application/json",
				"cache-control: no-cache"
			  ],
			));

			$response = curl_exec($curl);
			$err = curl_error($curl);
			$tranx = json_decode($response, true);
	if ($err){
		include("failed_created_recipient.php");
			
	  ?>
	  <!--<div class="alert alert-warning"><i class="fa fa-minus-circle"></i> Account Name Error</div>-->
	  <?php
	} else {
	
			if(isset($tranx["data"])){
			$account_name = $tranx["data"]["account_name"];
			$account_number = $tranx["data"]["account_number"];

			include("success_created_recipient.php");
			
			// echo "<div class='alert alert-success'><i class='fa fa-check-circle'></i> $account_name ($account_number)</div>";
			
			}else{
				// echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Account Name Error</div>";
				
				include("failed_created_recipient.php");
			}

}
					
				}
				
			}else{
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to create table. </div>";
			}
			
}else{
echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter is Missing!. </div>";
}