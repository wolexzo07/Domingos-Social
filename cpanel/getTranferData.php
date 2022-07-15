<?php
include("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatepost("pageno") && x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));

$pageno = xp("pageno");
$no_of_records_per_page = 10;
$offset = ($pageno-1) * $no_of_records_per_page;


$sqlcmdcount = "transfer_transactions WHERE sender_id='$userid'";
$sqlcmd = "SELECT * FROM transfer_transactions WHERE sender_id='$userid' ORDER BY id DESC LIMIT $offset, $no_of_records_per_page";

if($read = x_querycmd($sqlcmd)){
			//$count = x_querycount($sqlcountcmd);
			$count = mysqli_num_rows($read);
			if($count > 0){
			
				foreach(x_fetchQuery($sqlcmd) as $Key){
					
					    $id = $Key["id"];
						$status = $Key["status"];
						$currency = $Key["currency"];
						$amount = $Key["amount"];
						$trx = $Key["transfer_id"];
						$date = $Key["time_stamp"];
						$datelocal = $Key["realtime"];
						$rid = $Key["reciever_id"];
						$sid = $Key["sender_id"];
						
						$getreciever = x_getsingle("SELECT fullname FROM userdatabank WHERE id='$rid' LIMIT 1","userdatabank WHERE id='$rid'","fullname");
						$getrecievernick = x_getsingle("SELECT nickname FROM userdatabank WHERE id='$rid' LIMIT 1","userdatabank WHERE id='$rid'","nickname");
						
						if($status == 1){
              ?>
             <div class="panel panel-primary">
                  <div class="panel-heading"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;<?php echo $trx;?>
                      <button class="btn btn-sm btn-default pull-right"><i class="fa fa-check-circle"></i> Completed</button>
                  </div>
                  <div class="panel-body">
                    <p style="display:none;" class="pull-right"><i class="fa fa-bank"></i>  <?php //echo $partner;?></p>

                      <h4><i class="fa fa-money" style="font-size:15pt;color:purple;margin-top:;margin-bottom:;"></i> <font style="color:purple;"><?php echo $currency." ".number_format($amount,2);?></font> </h4>
                      <p style="letter-spacing:2px;color:black;" class="writer  ft-15">Transfer was successful <br/><b><?php echo $getreciever." ($getrecievernick)";?></b></p>
					  
                      <p class="pull-right"><i class="fa fa-calendar"></i> &nbsp;<?php echo $datelocal;?></p>
                  </div>
            
              </div>
              <?php
            }else{
              ?>
              <div class="panel panel-warning" style="background-color:white">
                  <div class="panel-heading"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;<?php echo $trx;?>
                      <button class="btn btn-sm btn-danger pull-right"><i class="fa fa-credit-card"></i> Incomplete</button>
                  </div>
                  <div class="panel-body">
                      <p class="pull-right" style="display:none;"><i class="fa fa-bank"></i>  <?php //echo $partner;?></p>

                      <h4 style="font-size:15pt;"><i class="fa fa-money" style="color:black;margin-top:;margin-bottom:;"></i> <font style="color:black;"><?php echo $currency." ".number_format($amount,2);?></font> </h4>
                       <p style="letter-spacing:2px;color:green;" class="writer  ft-15">Transfer Failed <br/><b><?php echo $getreciever." ($getrecievernick)";?></b></p>
                        <p class="pull-right"><i class="fa fa-calendar"></i> &nbsp;<?php echo $datelocal;?></p>
                  </div>
            
              </div>
              <?php
            }

					
				}
			}else{
				//echo "No record found";
			}
	}else{
		
		?>
		<div class="alert alert-warning"><i class="fa fa-minus-circle"></i> DB Error: Failed to query db!</div>
		<?php
	}
}


?>