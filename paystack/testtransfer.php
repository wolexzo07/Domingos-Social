			<?php
			$curl = curl_init();
			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.paystack.co/transfer",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_CUSTOMREQUEST => "POST",
			   CURLOPT_POSTFIELDS => json_encode([
					   "source"=>"balance",
					   "reason"=>"Normal Transfer",
					   "amount"=>5000,
					   "recipient"=>"RCP_xuhruxrac8fdxvk"
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
				$tr_code = $tranx["data"]["transfer_code"];
				//echo $r_code." ===$status";
				print_r($tranx);
				
				}
				?>
				