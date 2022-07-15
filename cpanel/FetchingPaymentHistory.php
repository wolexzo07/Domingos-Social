<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

      $userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
      if(x_count("wallet_funding","paid_by='$userid' LIMIT 1") > 0){
        foreach(x_select("0","wallet_funding","paid_by='$userid'","5","id desc") as $Key){
            $id = $Key["id"];
            $status = $Key["status"];
            $currency = $Key["currency"];
            $amount = $Key["amount_paid"];
            $trx = $Key["payment_id"];
            $date = $Key["paid_on"];
            $datelocal = $Key["paid_on_local"];
            $partner = $Key["payment_partner"];
            if($status == 1){
              ?>
              <div class="panel panel-success" style="background-color:white">
                  <div class="panel-heading"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;<?php echo $trx;?>
                      <button class="btn btn-sm btn-success pull-right"><i class="fa fa-check-circle"></i> Completed</button>
                  </div>
                  <div class="panel-body">
                    <p class="pull-right"><i class="fa fa-bank"></i>  <?php echo $partner;?></p>

                      <h4><i class="fa fa-money" style="font-size:15pt;color:green;margin-top:;margin-bottom:;"></i> <font style="color:green;"><?php echo $currency." ".number_format($amount,2);?></font> </h4>
                      <p style="letter-spacing:2px;color:black;" class="writer boldit ft-15">Payment was successful</p>
                      <p class="pull-right"><i class="fa fa-calendar"></i> &nbsp;<?php echo $datelocal;?></p>
                  </div>
                  <!--<div class="panel-footer"></div>-->
              </div>
              <?php
            }else{
              ?>
              <div class="panel panel-info" style="background-color:white">
                  <div class="panel-heading"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;<?php echo $trx;?>
                      <button class="btn btn-sm btn-primary pull-right"><i class="fa fa-credit-card"></i> Pay Now</button>
                  </div>
                  <div class="panel-body">
                      <p class="pull-right"><i class="fa fa-bank"></i>  <?php echo $partner;?></p>

                      <h4><i class="fa fa-money" style="font-size:15pt;color:purple;margin-top:;margin-bottom:;"></i> <font style="color:purple;"><?php echo $currency." ".number_format($amount,2);?></font> </h4>
                        <p style="letter-spacing:2px;color:black;" class="writer boldit ft-15">Payment was not successful</p>
                        <p class="pull-right"><i class="fa fa-calendar"></i> &nbsp;<?php echo $datelocal;?></p>
                  </div>
                  
              </div>
              <?php
            }

        }
      }else{
        ?>
      <div class="alert text-center"><i class="fa fa-credit-card msgloading"></i><br/><br/> No Transaction occurred yet</div>
        <?php
      }

}else{
  ?>
<div class="alert text-center"><i class="fa fa-credit-card msgloading"></i><br/><br/> No Transaction occurred yet</div>
  <?php
}
