<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){
		$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
		if(x_count("addbankaccount","owner_id='$userid' LIMIT 1") > 0){
			foreach(x_select("id,owner_id,bankname,acct_name,acct_numb,added_on","addbankaccount","owner_id='$userid'","1","id") as $key){
				$id = $key["id"];
				$ownerid = $key["owner_id"];
				$bankname = $key["bankname"];
				$acct_name = $key["acct_name"];
				$acct_numb = $key["acct_numb"];
				$dated = $key["added_on"];
				?>
				<div class="panel panel-default">
				<div class="panel-heading bg-w" style="background-color:white;"><i class="fa fa-bank"></i> Bank Account Details</div>
				<div class="panel-body">
				<table class="table">
				<tr>
				<td>Bank Name</td><td><?php echo strtoupper($bankname);?></td>
				</tr>
				<tr>
				<td>Account Name</td><td><?php echo strtoupper($acct_name);?></td>
				</tr>
				<tr>
				<td>Account Number</td><td><?php echo strtoupper($acct_numb);?></td>
				</tr>
				</table>
				</div>
				</div>
				<?php
			}
		}else{
			 echo "<div class='alert text-center'><i class='fa fa-credit-card msgloading'></i> No Bank account</div>";
		}
}else{
 echo "<div class='alert alert-success'><i class='fa fa-check-circle msgloading'></i> Parameter is Missing</div>";
}