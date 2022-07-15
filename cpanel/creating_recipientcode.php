			<?php
			$curl = curl_init();
			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.paystack.co/transferrecipient",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_CUSTOMREQUEST => "POST",
			   CURLOPT_POSTFIELDS => json_encode([
					   "type"=>"nuban",
					   "name"=>"Account 1029",
					   "description"=>"Customer $owner bank account",
					   "account_number"=>$acctno,
					   "bank_code"=>$bankcode,
					   "currency"=>"NGN"
				  ]),
			  CURLOPT_HTTPHEADER => [
				"authorization: Bearer $secretkey", 
				"content-type: application/json",
				"cache-control: no-cache"
			  ],
			));

			$response = curl_exec($curl);
			$err = curl_error($curl);
			
			if($err)
			{
			 die('Curl returned error: ' . $err);
			}
			else{
				$tranx = json_decode($response, true);
				$status = $tranx["status"];
				$r_code = $tranx["data"]["recipient_code"];
				}
				?>
				