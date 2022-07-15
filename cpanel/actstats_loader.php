<div style="margin-bottom:0pt;" id="loadedstats<?php echo sha1("hitme")?>"></div>
			<script type="text/javascript">
			$(document).ready(function(){
				 setInterval(function ()
				 {loadstats<?php echo sha1("hitme")?>()}, 5000)
			});
			function loadstats<?php echo sha1("hitme")?>(){
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
			