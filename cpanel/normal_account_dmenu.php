	<?php
	if(!x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER")){
		// echo "Invalid session detected!";
		exit();
	}
	$current_token = x_session("DOMIGOS_DATACENTER_AUTH_SERVER");
	?>
	<li class="active">
                        <a href="dashboard?hashkey=<?php echo $current_token;?>"><i class="fa fa-dashboard"></i>&nbsp;&nbsp;&nbsp; Dashboard</a>
                    </li>

					
					<li>
                        <a href="#trends" data-toggle="collapse" aria-expanded="false"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp; Trends Manager</a>
                        <ul class="collapse list-unstyled" id="trends">
							<li><a href="#" onclick="fetchrequestnow('personal_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp; Personal Trends</a></li>
                            <li><a href="#" onclick="fetchrequestnow('general_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-globe"></i>&nbsp;&nbsp;&nbsp; General Trends</a></li>
							
							 <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp; Group Trends</a></li>
							
							<li><a href="#" onclick="fetchrequestnow('general_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-bullhorn"></i>&nbsp;&nbsp;&nbsp; Promoted Post</a></li>
                           
                        </ul>
                    </li>
					
					<li>
                        <a href="#wallet" data-toggle="collapse" aria-expanded="false"><i class="fa fa-bank"></i>&nbsp;&nbsp;&nbsp; Wallet Manager</a>
                        <ul class="collapse list-unstyled" id="wallet">
                            <li><a href="#" onclick="fetchrequestnow('fund_wallet_instantly?hashkey=<?php echo $current_token;?>')"><i class="fa fa-cc-mastercard"></i>&nbsp;&nbsp;&nbsp; Fund Wallet</a></li>
							
							<li><a href="#" onclick="fetchrequestnow('managebanking?hashkey=<?php echo $current_token;?>')"><i class="fa fa-plus-circle"></i>&nbsp;&nbsp;&nbsp; Add Bank Account</a></li>
						  
							 <li><a href="#" onclick="fetchrequestnow('withdrawals_manger?hashkey=<?php echo $current_token;?>')"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp; Make withdrawals</a></li>
							  <li><a href="#" onclick="fetchrequestnow('transferToaFriend?hashkey=<?php echo $current_token;?>')"><i class="fa fa-send"></i>&nbsp;&nbsp;&nbsp; Transfer to Friends</a></li>
                           
                        </ul>
                    </li>
					
					<li>
                        <a href="#create" data-toggle="collapse" aria-expanded="false"><i class="fa fa-briefcase"></i>&nbsp;&nbsp;&nbsp; Create</a>
                        <ul class="collapse list-unstyled" id="create">
                            <li><a href="#" onclick="fetchrequestnow('create_ads?hashkey=<?php echo $current_token;?>')"><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp; Create Ads</a></li>
							<li><a href="#" onclick="fetchrequestnow('create_group?hashkey=<?php echo $current_token;?>')"><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp; Create Group</a></li>
                           
                           
                        </ul>
                    </li>
					
					
					
					<li>
                        <a href="#stats" data-toggle="collapse" aria-expanded="false"><i class="fa fa-signal"></i>&nbsp;&nbsp;&nbsp; Statistics</a>
                        <ul class="collapse list-unstyled" id="stats">
                            <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp; Followed List</a></li>
                            <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp; Follower List</a></li>
                           
                        </ul>
                    </li>
					
					<li>
                        <a href="#media" data-toggle="collapse" aria-expanded="false"><i class="fa fa-briefcase"></i>&nbsp;&nbsp;&nbsp; Media Gallery</a>
                        <ul class="collapse list-unstyled" id="media">
                       
                            <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-camera"></i>&nbsp;&nbsp;&nbsp; Photo Gallery</a></li>
							<li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="glyphicon glyphicon-facetime-video"></i>&nbsp;&nbsp;&nbsp; Video Gallery</a></li>
							<li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="glyphicon glyphicon-headphones"></i>&nbsp;&nbsp;&nbsp; Audio Gallery</a></li>
							<li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-paperclip"></i>&nbsp;&nbsp;&nbsp; Documents Gallery</a></li>
                           
                        </ul>
                    </li>
					
						<li>
                        <a href="#clergy" data-toggle="collapse" aria-expanded="false"><i class="fa fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp; Vouch Clergy </a>
                        <ul class="collapse list-unstyled" id="clergy">
                            <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp; Account Confirmation</a></li>
                            <li><a href="#" onclick="fetchrequestnow('group_trends?hashkey=<?php echo $current_token;?>')"><i class="fa fa-minus-circle"></i>&nbsp;&nbsp;&nbsp; Account Declination</a></li>
                           
                        </ul>
                    </li>
					
					<li>
                        <a href="#" onclick="fetchrequestnow('account_settings')"><i class="fa fa-cog"></i>&nbsp;&nbsp;&nbsp; Settings</a>
                    </li>
					
					<li>
                        <a href="#" onclick="fetchrequestnow('profile_manager')"><i class="fa fa-bank"></i>&nbsp;&nbsp;&nbsp; Manage Profile</a>
                    </li>
					
					<li>
                        <a href="#" onclick="fetchrequestnow('make_donation')"><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp; Support us</a>
                    </li>
					
					<li>
                        <a href="#" onclick="fetchrequestnow('look_feel')"><i class="fa fa-image"></i>&nbsp;&nbsp;&nbsp; Look & Feel</a>
                    </li>
					
					 <li>
                        <a href="#" onclick="fetchrequestnow('make_donation')"><i class="fa fa-laptop"></i>&nbsp;&nbsp;&nbsp; Developers Tools</a>
                    </li>
					
					