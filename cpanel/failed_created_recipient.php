<?php
	$reci_details = x_createRecipient("$secretkey","Account Name $owner","$acctno","$bankcode","User $owner Bank Account"); // Is an array
		if(isset($reci_details["data"])){
				$mstatus = $reci_details["status"];
				$r_code = $reci_details["data"]["recipient_code"];
				$active_status = $reci_details["data"]["active"]; // 1
				
				if(($mstatus == "1") && ($active_status == "1")){
x_insert("currency,recipient_code,owner_id,bankname,acct_name,acct_numb,acct_bvn,added_on,time_stamp,os,ip,br,status","addbankaccount","'NGN','$r_code','$owner','$bankname','','$acctno','','$rtime','$time','$os','$ip','$br','0'","<div class='alert alert-success'><i class='fa fa-check-circle'></i> Bank account Added</div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to insert data 1</div>");
		
				}else{
					echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Recipient Creation Failed!</div>";
				}
		}else{
			echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to Create Recipient!</div>";
		}
?>