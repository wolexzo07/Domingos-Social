<div style="margin-bottom:0pt;" id="loadedstats<?php echo sha1("hitme")?>"></div>
			<script>
			$(document).ready(function(){
				 setInterval(function ()
				 {loadstats<?php echo sha1("hitme")?>()}, 2000)
			});
			</script>
			<script type="text/javascript">
			function loadstats<?php echo sha1("hitme")?>(){
			//$("#loadedstats<?php echo sha1('hitme')?>").show("slow");
			//$("#loadedstats<?php echo sha1('hitme')?>").fadeIn(400).html("<img class='img-circle' style='width:40px;margin-left:10px;' src='../img/loaderup.gif'/> <font style='font-weight:bold;color:purple;'>Loading stats....</font>");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: "getaccount_stats",
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#loadedstats<?php echo sha1('hitme')?>").html(result);
						   }
					  });
			}
			
			
			</script>
			