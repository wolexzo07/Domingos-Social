<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey")){
			
			$amount = xp("amount");$wallet = xp("wallet");
			$type = xp("type"); // withdrawal type
			$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
			
			$token = sha1($userid.uniqid());
			$os = xos();$br = xbr();$ip = xip();
			$time = x_curtime(0,0);
			$timer = x_curtime(0,1);
			$wid = "W-".$userid.str_shuffle(uniqid().DATE("YHis"));
			
			if(!is_numeric($amount)){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Amount. </div>";
				exit();
			}
			
			$create = x_dbtab("withdrawal_transactions","
			status ENUM('0','1') NOT NULL,
			withdrawal_id VARCHAR(255) NOT NULL,
			withdrawal_type ENUM('','normal','instant') NOT NULL,
			owner_id VARCHAR(200) NOT NULL,
			currency ENUM('','NGN','USD') NOT NULL,
			amount DOUBLE NOT NULL,
			charge DOUBLE NOT NULL,
			total_deducted DOUBLE NOT NULL,
			account_balance DOUBLE NOT NULL,
			bankname VARCHAR(100) NOT NULL,
			account_numb VARCHAR(20) NOT NULL,
			account_name VARCHAR(255) NOT NULL,
			time_stamp DATETIME NOT NULL,
			realtime VARCHAR(200) NOT NULL,
			os VARCHAR(50) NOT NULL,
			br VARCHAR(50) NOT NULL,
			ip VARCHAR(50) NOT NULL,
			token TEXT NOT NULL
			","MYISAM");
			
			if(!$create){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to create table. </div>";
				exit();
			}
			
			// Getting Account Details
			
			if(x_count("addbankaccount","owner_id='$userid' AND status='1' AND currency='$wallet' LIMIT 1") > 0){
				foreach(x_select("recipient_code,bankname,acct_numb,acct_name","addbankaccount","owner_id='$userid' AND status='1'","1","bankname") as $key){
				$bankname = $key["bankname"];$acname = $key["acct_name"];
				$acnum = $key["acct_numb"];
				$recip_code = $key["recipient_code"];
				}
				
				}else{
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Please Add Your <b>$wallet</b> Bank Account! </div>";
				exit();	
				}
		
			if(x_count("userdatabank","id='$userid' LIMIT 1") > 0){
				
				// Getting Reciever's details
				
				foreach(x_select("naira_wallet,dollar_wallet,fullname,email,id","userdatabank","id='$userid'","1","id") as $key){
					$r_id = $key["id"];$r_ngn = $key["naira_wallet"];$r_usd = $key["dollar_wallet"];$r_name = $key["fullname"];$r_email = $key["email"];
				}
				
					// Getting charges
					$withdraw_charge = x_getsingle("SELECT withdraw_charge FROM charges_control WHERE currency='$wallet' LIMIT 1","charges_control WHERE id='1'","withdraw_charge");
					
					// Validating wallet type
					
						if($wallet == "NGN"){
							$reciever_wallet = $r_ngn;
							$what_to_update = chop("naira_wallet","");
							
						}elseif($wallet == "USD"){
							$reciever_wallet = $r_usd;
							$what_to_update = chop("dollar_wallet","");
							
						}else{
							echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Wallet selected. </div>";
							exit();
						}
					
					$money_to_deduct = $amount + $withdraw_charge;
					
					if($money_to_deduct > $reciever_wallet){
						echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> You have Insufficient Balance. </div>";
					}else{
						$r_new_amount = $reciever_wallet - $money_to_deduct;
						
						
					$amount_converted = number_format($amount,2);
					
			
			if($wallet == "USD"){
			// Inserting Notification data
			
			x_insert("type,title,sender_id,owner_id,message,status,rtime,stime","notifyme","'p','<b>$wallet $amount_converted</b> will be Transferred soon','$r_id','$r_id','Hi <b>$r_name</b> ,<br/> <b>$wallet $amount_converted</b> will be transferred to your $wallet bank account <b>$bankname ($acnum)</b> soon','0','$timer','$time'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
				
			// Inserting withdrawal record with pending status	
			
			x_insert("bankname,account_numb,account_name,status,withdrawal_id,withdrawal_type,owner_id,currency,amount,charge,total_deducted,account_balance,time_stamp,realtime,os,br,ip,token","withdrawal_transactions","'$bankname','$acnum','$acname','0','$wid','$type','$userid','$wallet','$amount','$withdraw_charge','$money_to_deduct','$r_new_amount','$time','$timer','$os','$br','$ip','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to insert transfer data. </div>");
			
			// Updating Reciever balance
			
			x_updated("userdatabank","id='$r_id'","$what_to_update='$r_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> <b>$wallet $amount_converted</b> will be transfer to your $wallet bank account <b>$bankname ($acnum)</b>. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update reciever balance. </div>");	
			}else{
			
			// calling paystack API to automate transfer started
			
			$skey = x_getsingle("SELECT secretkey FROM paymentkeys WHERE status='1' LIMIT 1","paymentkeys WHERE status='1'","secretkey");
			$tref = $userid.DATE("YmdHis");
			
			$tranx = x_paytransfer("$skey",$amount,"$recip_code","$tref");
		
			if(isset($tranx["data"])){
				$mstatus = $tranx["status"];
				$tr_code = $tranx["data"]["transfer_code"];
				$tr_ref = $tranx["data"]["reference"];
				$tr_status = $tranx["data"]["status"]; 
				
				if(($mstatus == "1") &&  ($tr_status == "pending")){
					
			// Inserting Notification Data
			
			x_insert("type,title,sender_id,owner_id,message,status,rtime,stime","notifyme","'p','<b>$wallet $amount_converted</b> was successfully Transferred','$r_id','$r_id','Hi <b>$r_name</b> ,<br/> <b>$wallet $amount_converted</b> was successfully transferred to your bank account <b>$bankname ($acnum)</b>','0','$timer','$time'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
			
			// Inserting withdrawal record with approved status
						
			x_insert("pstack_transfer_code,pstack_transfer_reference,bankname,account_numb,account_name,status,withdrawal_id,withdrawal_type,owner_id,currency,amount,charge,total_deducted,account_balance,time_stamp,realtime,os,br,ip,token","withdrawal_transactions","'$tr_code','$tr_ref','$bankname','$acnum','$acname','1','$wid','$type','$userid','$wallet','$amount','$withdraw_charge','$money_to_deduct','$r_new_amount','$time','$timer','$os','$br','$ip','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to insert transfer data. </div>");
			
			// Updating Reciever balance
			
			x_updated("userdatabank","id='$r_id'","$what_to_update='$r_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> <b>$wallet $amount_converted</b> was transferred to your bank account <b>$bankname ($acnum)</b>. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update reciever balance. </div>");	
					
				}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Transfer just Failed!</div>";
				}
				
			}else{
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> $recip_code Instant Transfer Failed!</div>";
			}
			
			// calling paystack API to automate transfer Ended
			

			
			}
					
			
			
					}
				
				
			}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid user account. </div>";
			}
			
			}else{
			echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter is Missing!. </div>";
			}