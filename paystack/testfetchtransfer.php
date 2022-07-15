<?php
// Fetching status
			$tr_code = "TRF_lcqefhufn902gey";
			$curl = curl_init();
			curl_setopt_array($curl, array(
			  CURLOPT_URL => "https://api.paystack.co/transfer/$tr_code",
			  CURLOPT_RETURNTRANSFER => true,
			  CURLOPT_CUSTOMREQUEST => "GET",
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
				$status = $tranx["status"]; // 1 or 0
				$tr_code = $tranx["data"]["status"]; // success or 
				//echo $r_code." ===$status";
				print_r($tranx);
				
				}
				?>
				