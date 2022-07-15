			<?php
			$curl = curl_init();
			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.paystack.co/transferrecipient",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_CUSTOMREQUEST => "POST",
			   CURLOPT_POSTFIELDS => json_encode([
					   "type"=>"nuban",
					   "name"=>"Oluwole Timothy",
					   "description"=>"Oluwole timo bank account",
					   "account_number"=>"2177929814",
					   "bank_code"=>"057",
					   "currency"=>"NGN"
				  ]),
			  CURLOPT_HTTPHEADER => [
				"authorization: Bearer sk_live_ddbf6c1c9c8f8ecac09c278cd1b76b62516eedba", 
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
				$active_status = $tranx["data"]["active"]; // 1
				//echo $r_code." ===$status";
				print_r($tranx);
				}
				?>
				