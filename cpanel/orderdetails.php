<?php
session_start();
include_once("../finishit.php");
include_once("validatelogin.php"); // validatin login
//include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>

<div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">

<div class="panel panel-default formloader">
<div class="panel-heading"><i class="fa fa-plus-circle"></i> ORDER DETAILS <button class="btn btn-primary pull-right" onclick="fetchrequestnow('manageorder')"><i class="fa fa-cog"></i> Go Back</button></div>
<div class="panel-body">

<?php
if(x_validateget("oid") && x_validateget("ohash")){
	$oid=xg("oid"); $ohash=xg("ohash");
	
	if(x_count("final_checkout","order_id='$oid' AND product_token='$ohash' LIMIT 1") > 0){
		
		foreach(x_select("0","final_checkout","order_id='$oid' AND product_token='$ohash'","1","id") as $key){
		$id = $key["id"];
		$oid = $key["order_id"];$cat = $key["total_incart"];
		$pay = $key["payment_status"];$pid = $key["payment_id"];
		$pmed = $key["payment_medium"];$totalamt = $key["total_amount"];
		$order_date = $key["order_date"];$token = $key["product_token"];
		$add = $key["address"];
		
		$ship_status = $key["shipping_status"];$ship_date = $key["shipping_date"];
		$cc = $key["courier_company"];$trackno = $key["tracking_no"];
		
		$d_status = $key["delivery_status"];$d_date = $key["delivery_date"];
		//$cc = $key["courier_company"];$trackno = $key["tracking_no"];
		}
		
		?>
		<button class="btn btn-success "><i class="fa fa-shopping-cart"></i> Order No : <?php echo $oid;?></button>

	<?php
	$filer = "qrcoder/".sha1($oid).".png";
	if(file_exists($filer)){
		echo "<br/><br/><img src='$filer' src='img-responsive pull-right'/>";
	}else{
	x_qrcode($oid,$filer,"1");
	echo "<br/><br/><img src='$filer' src='img-responsive pull-right'/>";
	}
	?>
		
		<div class="panel panel-default mt-4">
		<div class="panel-heading"><i class="fa fa-shopping-cart"></i> Items Ordered Details</div>
		<div class="panel-body">
		
		<table class="table table-striped table-hover">

<tr>
<th>Payment Status</th><td><?php if($pay =="1"){echo "<font style='color:green;'><i class='fa fa-check-circle'></i> Paid</font>";}else{ echo "<i class='fa fa-minus'></i> Not Paid";}?></td>
</tr>

<tr style="color:purple;">
<th>Amount Paid</th><td><?php echo "NGN ".number_format($totalamt,2);?></td>
</tr>

<tr>
<th>Total Items</th><td><?php echo $cat;?></td>
</tr>

<tr>
<th>Ordered On</th><td><?php echo $order_date;?></td>
</tr>

</table>

		<button onclick="alert('Inactive')" class="btn btn-success"><i class="fa fa-comment"></i> comment</button>
		<button onclick="alert('Inactive')" class="btn btn-primary"><i class="fa fa-credit-card"></i> Refund</button>
		</div>
		</div>
		
	
		<div class="panel panel-default">
		<div class="panel-heading"><i class="fa fa-plane"></i> Shipping Details</div>
		<div class="panel-body">
		
		<table class="table table-striped table-hover">

<tr>
<th>Shipping Status</th><td><?php if($ship_status =="1"){echo "<font style='color:green;'><i class='fa fa-check-circle'></i> Shipping in progress</font>";}else{ echo "<i class='fa fa-minus-circle'></i> Not Shipped";}?></td>
</tr>

<tr style="color:purple;">
<th>Courier name</th><td><?php if($cc == ""){echo "Not available";}else{echo $cc;}?></td>
</tr>

<tr>
<th>Tracking No</th><td><?php if($trackno == ""){echo "Not available";}else{echo $trackno;}?></td>
</tr>

<tr>
<th>Shipping Date</th><td><?php if($ship_date == ""){echo "Not available";}else{echo $ship_date;}?></td>
</tr>

</table>
		
		</div>
		</div>
		
				<div class="panel panel-default">
		<div class="panel-heading"><i class="fa fa-bus"></i> Delivery Details</div>
		<div class="panel-body">
		
		<table class="table table-striped table-hover">

<tr>
<th>Delivery Status</th><td><?php if($d_status =="1"){echo "<font style='color:green;'><i class='fa fa-check-circle'></i> Item Delivered</font>";}else{ echo "<i class='fa fa-minus-circle'></i> Waiting for delivery";}?></td>
</tr>

<tr style="color:purple;">
<th>Delivery date</th><td><?php if($d_date == ""){echo "Not available";}else{echo $d_date;}?></td>
</tr>


</table>
		
		</div>
		</div>
		
	
		
		<div class="panel panel-default">
		<div class="panel-heading"><i class="fa fa-calculator"></i> Items ordered listing</div>
		<div class="panel-body">
		
		<script type="text/javascript">
$(document).ready(function(){
changePagination('0');    
});
function changePagination(pageId){
     $(".flash").show();
     $(".flash").fadeIn(400).html
                ('Loading <img src="loadingimg/loader4.gif" />');
     var dataString = 'pageId='+ pageId;
     $.ajax({
           type: "POST",
           url: "detailitall?oid=<?php if(isset($_GET['oid']) && !empty($_GET['oid'])){echo $_GET['oid'];}else{} ?>&ohash=<?php if(isset($_GET['ohash']) && !empty($_GET['ohash'])){echo $_GET['ohash'];}else{} ?>&call=<?php if(isset($_GET['call']) && !empty($_GET['call'])){echo $_GET['call'];}else{} ?>&sm=<?php echo md5(rand(123,8929203867));?>",
           data: dataString,
           cache: false,
           success: function(result){
           $(".flash").hide();
                 $("#pageData").html(result);
           }
      });
}
</script>

<div id="pageData"></div>
<span class="flash"></span>

		
		</div>
		</div>
		
		
		<?php
		
	}else{
		?>
	<center>
	<p><i class="fa fa-minus-circle roadme"></i></p>
	<div class="alert alert-warning" role="alert">order details was not found in the database!</div>
	
	</center>
		<?php
	}
	
	//exit();
}else{
	?>
	<center>
	<p><i class="fa fa-minus-circle roadme"></i></p>
	<div class="alert alert-warning" role="alert">Invalid order details detected!</div>
	
	</center>
		<?php
}
?>

<!---<div id="gallery"><img src="loadingimg/loader4.gif" class="img-responsive"/></div>--->

</div>
</div>

</div>
<div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>