<?php
include_once("../finishit.php");include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){
	$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
				
				// Getting current user location started
		
				$country = x_getsingle("SELECT country FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid'","country");
				
				$state = x_getsingle("SELECT state FROM userdatabank WHERE id='$userid' LIMIT 1","userdatabank WHERE id='$userid'","state");

				$cmd = "SELECT * FROM userdatabank
						WHERE id!='$userid' AND id not in
						(SELECT u.id FROM userdatabank u INNER JOIN networkingdata n ON u.id=n.user_followed_id AND n.user_following_id='$userid') LIMIT 10";
				$cmdcount = "userdatabank
						WHERE id!='$userid' AND id not in
						(SELECT u.id FROM userdatabank u INNER JOIN networkingdata n ON u.id=n.user_followed_id AND n.user_following_id='$userid') LIMIT 10";
				if($read = x_querycmd($cmd)){
					$count = x_querycount($cmdcount);
						if($count > 0){
							?>
							<h4 class="followbadge"><i class="fa fa-link"></i>&nbsp;&nbsp;&nbsp;PEOPLE <font class="colorg">YOU MAY KNOW</font></h4>
							<hr/>
							<?php
						foreach(x_fetchQuery($cmd) as $key){
						$id = $key["id"];
						$name = $key["fullname"];
						$email = $key["email"];
						$mobile = $key["mobile"];
						$upload = $key["photo_upload"];
						$nickname = $key["nickname"];
						$username = $key["username"];
						$follower = $key["follower_count"];
						$followed = $key["followed_count"];
						$post = $key["post_count"];
						?>
						<div class="panel panel-default">
						<div class="panel-heading coverport">
						
						</div>
						<div class="panel-body panelb">
						<img src="<?php
						if($upload != ""){
							echo "../".$upload;
						}else{
							
						}
						?>" class="img-responsive img-circle img-custom"/>
						
						<form class="followbossprocess<?php echo sha1($id);?>">
						<input type="hidden" value="<?php echo sha1($id.uniqid());?>" name="_token" />
						
						<input type="hidden" value="<?php echo $name;?>" name="user_name" />
						<input type="hidden" value="<?php echo $id;?>" name="user_id"/>
						<button style="float:right;margin-top:10pt;" class="btn btn-primary btn-sm clicktofollow<?php echo sha1($id);?>"><i class="fa fa-link"></i> &nbsp;Follow</button>
						</form>
						
						<p class="ntext mt-4"><?php echo $name;?></p>
						<b><?php echo $nickname;?></b>
						<table class="table mt-2 mb-2">
						<tr>
						<th class="text-center">
						<?php echo x_convert_figure($post);?></th>
						<th class="text-center">
						<?php echo x_convert_figure($follower);?></th>
						<th class="text-center">
						<?php echo x_convert_figure($followed);?></th>
						</tr>
						<tr>
						<td class="text-center">Posts</td>
						<td class="text-center">Followers</td>
						<td class="text-center">Following</td>
						</tr>
						</table>
						<div class="showmefollowingmsg<?php echo sha1($id);?>"></div>
						
						<script type="text/javascript">
						$(document).ready(function(){
							$(".followbossprocess<?php echo sha1($id);?>").on('submit',(function(e) {
							$(".showmefollowingmsg<?php echo sha1($id);?>").show("slow");
							$(".showmefollowingmsg<?php echo sha1($id);?>").html("<img class='img-circle' src='../img/ajax-loader.gif'/> Please Wait...");
							e.preventDefault();
							$.ajax({
								url: "processFollowing",
								type: "POST",
								data:  new FormData(this),
								contentType: false,
								cache: false,
								processData:false,
								success: function(data){
									if(data == "unfollowed"){
								$(".showmefollowingmsg<?php echo sha1($id);?>").html(data);
								$(".clicktofollow<?php echo sha1($id);?>").html("<i class='fa fa-link'></i>&nbsp; Follow ");
									}else{
								$(".showmefollowingmsg<?php echo sha1($id);?>").html(data);
								$(".clicktofollow<?php echo sha1($id);?>").html("<i class='fa fa-link'></i>&nbsp; Followed");
									}
								
							// Refreshing following record started
							
							$("#showwhotofollow").show("slow");
							var dataString = "";
							 $.ajax({
								   type: "POST",
								   url: "peopleyoumayknow",
								   data: dataString,
								   cache: false,
								   success: function(result){
									$("#showwhotofollow").html(result);
								   }
							  });
								
								// Refreshing following record ended
								
								},
								error: function(){ alert("Error: Failed to follow");}
		   });
		}));
						})
						</script>
						
						
						
						</div>
						
						</div>
						<?php
					
							}
						}else{
							//echo "No record found!";
							// Showing the list of your followers
							include("check_your_followers_people.php");
						
							
						}
				}else{
					echo "Failed query!";
				}
				// New Pattern ended now
				
}?>