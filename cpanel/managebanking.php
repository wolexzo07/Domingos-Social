<?php
session_start();
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
include_once("validatelogin.php"); // validating login
include_once("pagevalidator.php");
?>


<div class="col-lg-8 col-md-8 pb-5">

<h4 class="followbadge"><i class="fa fa-bank"></i>&nbsp;&nbsp;&nbsp;ADD A <font class="colorg">BANK ACCOUNT</font></h4>

<hr/>
<p class="colorg"><font class="boldit">NOTE</font> : Make sure Bank account name matches profile name</p>
<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/jquery.inview.js"></script>
<script src="workerboss.js"></script>
<div id="showpageless" class="w-100">
	<script>
	function check_account(str){
			$("#account_name").show("slow");
			$("#account_name").fadeIn(400).html("<img class='img-circle' src='../img/ajax-loader.gif'/> Please wait...");
			 var bankname = $("#bank_name").val();
				 if(str.length == 10){
		
					 var dataString = "";
						 $.ajax({
							   type: "POST",
							   url: "resolve_account_number?bankname="+bankname+"&account_number="+str,
							   data: dataString,
							   cache: false,
							   success: function(result){
								$("#account_name").html(result);
							   }
						  }); 
				 }else{
					$("#account_name").html("<p class='colorg'>Enter valid account number</p>");
				 }
			}
	</script>
	<div id="add_account_now"></div>

	<form method="" class="form" id="add_bank_account">
	<p class="txt">Choose Bank Name:</p>
	<select class="form-control input-lar" required name="bankname" id="bank_name">
	<?php
	if(x_count("nigeriabanklisting","status='1' LIMIT 25") > 0){
		foreach(x_select("banks","nigeriabanklisting","status='1'","25","banks") as $key){
			$bank = $key["banks"];

			echo "<option value='$bank'>$bank</option>";
			
		}
	}else{
		echo "<option value=''>No option</option>";
	}
	?>
	</select>

	<p class="txt">Enter Account Number:</p>
	<input type="text" maxlength="10" onkeyup="check_account(this.value)" id="account_number" placeholder="Enter Account Number" name="acctnumber" class="form-control input-lar"/>
	<div id="account_name" class="mt-1"></div>
	<hr/>

	<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
	<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />

	<button class="btn btn-success w-100 pt-1 pb-1"><i class="fa fa-plus-circle"></i> ADD ACCOUNT</button>

	</form>


</div>




<h4 class="followbadge mt-3" ><i class="fa fa-plus-circle"></i>&nbsp;&nbsp;&nbsp;ADDED <font class="colorg">BANK ACCOUNT </font></h4>
<hr/>
<div id="getbankaccount"></div>


</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">POST </font></h4>
<hr/>

</div>
