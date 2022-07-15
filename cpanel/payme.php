					<script src="https://js.paystack.co/v1/inline.js"></script>
					
					<button type="button" onclick="payWithPaystack()"> Pay </button> 
					
						<?php
						$full = "Biobaku Oluwole";
						$username = "Timboss";
						$email = "wolexzo007@gmail.com";
						$payment_id = Date("YHis");
						$currency = "NGN";
						$final_amount = 700;
						$publickey = "pk_test_0c1df8f5dec4e3e57fe2bd2c69d1b79477485250";
						?>
						<script>
						$("#fund_wallet").hide("slow");
						
						function payWithPaystack(){
							var username = "<?php echo $username;?>";
							var fullname = "<?php echo $full;?>";
							var useremail = "<?php echo $email;?>";
							var paymentid = "<?php echo $payment_id;?>";
							var usercurrency = "<?php echo $currency;?>";
							var camount = <?php echo $final_amount;?>;
							var payamount = <?php echo $final_amount."00";?>;
							var handler = PaystackPop.setup({
								key: "<?php echo $publickey;?>",
								email: useremail,
								amount: payamount,
								currency: usercurrency,
								ref: paymentid,
								metadata: {
									 custom_fields: [
											{
													display_name: fullname,
													variable_name: username,
													value: username
											}
									 ]
								},
								callback: function(response){
							 	var refme = response.reference;
								alert("Transaction completed "+refme);
								//relaymessage("verify_payments?reference="+refme+"&currency="+usercurrency);

								},
								onClose: function(){

								}
							});
							handler.openIframe();
							//return false;
							}
							
						</script>