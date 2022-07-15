<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID") && x_validatepost("_token") && x_validatepost("processkey")){
			
			if(isset($_post["transfer_type"])){
				$transfer_type = xp("transfer_type");
			}else{
				$transfer_type = "normal";
			}
			
			$amount = xp("amountTopay");$wallet = xp("wallet");
			$reciever = xp("reciever_id");
			$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
			$token = sha1($userid.uniqid());
			$os = xos();$br = xbr();$ip = xip();$time = x_curtime(0,0);$timer = x_curtime(0,1);
			$tid = "Tr-".$userid.str_shuffle(uniqid().DATE("YHis"));
			
			if(!is_numeric($amount)){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Amount. </div>";
				exit();
			}
			
			$create = x_dbtab("transfer_transactions","
			status ENUM('0','1') NOT NULL,
			transfer_id VARCHAR(255) NOT NULL,
			transfer_type ENUM('','normal','instant') NOT NULL,
			sender_id VARCHAR(200) NOT NULL,
			reciever_id VARCHAR(200) NOT NULL,
			currency ENUM('','NGN','USD') NOT NULL,
			amount DOUBLE NOT NULL,
			total_deducted DOUBLE NOT NULL,
			sender_balance DOUBLE NOT NULL,
			reciever_balance DOUBLE NOT NULL,
			charge DOUBLE NOT NULL,
			time_stamp DATETIME NOT NULL,
			realtime  VARCHAR(200) NOT NULL,
			os VARCHAR(50) NOT NULL,
			br VARCHAR(50) NOT NULL,
			ip VARCHAR(50) NOT NULL,
			token TEXT NOT NULL
			","MYISAM");
			
			if(!$create){
				echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to create table. </div>";
				exit();
			}
		
		
			if(x_count("userdatabank","dsid='$reciever' OR username='$reciever' OR nickname='$reciever' LIMIT 1") > 0){
				// Getting Reciever's details
				foreach(x_select("naira_wallet,dollar_wallet,fullname,email,id","userdatabank","dsid='$reciever' OR username='$reciever' OR nickname='$reciever'","1","id") as $key){
					$r_id = $key["id"];$r_ngn = $key["naira_wallet"];$r_usd = $key["dollar_wallet"];$r_name = $key["fullname"];$r_email = $key["email"];
				}
				
				// Getting sender's details
				
				if(x_count("userdatabank","id='$userid' LIMIT 1") > 0){
					foreach(x_select("naira_wallet,dollar_wallet,fullname,email,id","userdatabank","id='$userid'","1","id") as $key){
					$s_id = $key["id"];$s_ngn = $key["naira_wallet"];$s_usd = $key["dollar_wallet"];$s_name = $key["fullname"];$s_email = $key["email"];
					}
					
					// Getting charges
					
					$transfer_charge = x_getsingle("SELECT transfer_charge FROM charges_control WHERE id='1' LIMIT 1","charges_control WHERE id='1'","transfer_charge");
					
					// Validating wallet type
					
						if($wallet == "NGN"){
							
							$sender_wallet = $s_ngn;
							$reciever_wallet = $r_ngn;
							$what_to_update = "naira_wallet";
							
						}elseif($wallet == "USD"){
							
							$sender_wallet = $s_usd;
							$reciever_wallet = $r_usd;
							$what_to_update = "dollar_wallet";
							
						}else{
							echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Wallet selected. </div>";
							exit();
						}
					
					$money_to_deduct = $amount + $transfer_charge;
					
					if($money_to_deduct > $sender_wallet){
						echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> You have Insufficient Balance. </div>";
					}else{
						$s_new_amount = $sender_wallet - $money_to_deduct;
						$r_new_amount = $reciever_wallet + $amount; // removing charge
						
						$amount_converted = number_format($amount,2);
						
					
						
			// Inserting transfer record
						
			x_insert("status,transfer_id,total_deducted,sender_balance,reciever_balance,currency,transfer_type,sender_id,reciever_id,amount,charge,time_stamp,realtime,os,br,ip,token","transfer_transactions","'1','$tid','$money_to_deduct','$s_new_amount','$r_new_amount','$wallet','$transfer_type','$s_id','$r_id','$amount','$transfer_charge','$time','$timer','$os','$br','$ip','$token'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to insert transfer data. </div>");
						
			// sending notifications to reciever
			
			x_insert("type,title,sender_id,owner_id,message,status,rtime,stime","notifyme","'p','<b>$wallet $amount_converted</b> was Transferred to you','$s_id','$r_id','Hi <b>$r_name</b> ,<br/> <b>$s_name</b> just transferred <b>$wallet $amount_converted</b> to you and it has been credited to your wallet.','0','$timer','$time'","&nbsp;","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Notification Failed!</div>");
						
						if($wallet == "NGN"){
							
						// Updating sender balance
							
						x_update("userdatabank","id='$s_id'","naira_wallet='$s_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> Sender balance updated. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update sender balance. </div>");
						
						// Updating Reciever balance
						
						x_updated("userdatabank","id='$r_id'","naira_wallet='$r_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> NGN $amount_converted was transferred to <b>$r_name</b>. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update reciever balance. </div>");
						
						}elseif($wallet == "USD"){
							
						// Updating sender balance
							
						x_update("userdatabank","id='$s_id'","dollar_wallet='$s_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> Sender balance updated. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update sender balance. </div>");
						
						// Updating Reciever balance
						
						x_updated("userdatabank","id='$r_id'","dollar_wallet='$r_new_amount'","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Success:</b> USD $amount_converted was transferred to <b>$r_name</b>. </div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Failed to update reciever balance. </div>");
							
						}else{
							
						}
						
						
						
					}
					
				}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Sender account. </div>";
				}
				
			}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Invalid Reciever account. </div>";
			}
			
			}else{
			echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter is Missing!. </div>";
			}