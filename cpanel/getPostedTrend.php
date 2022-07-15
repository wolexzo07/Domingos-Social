<?php
error_reporting(0);
include_once("../finishit.php");
include_once("../domingos_sp_functions.php"); // Xelow php Framework
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){
	
	$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));
	
	if(x_count("postcontent","uploaded_by='$userid' AND posted_status='1' LIMIT 1") > 0){
		
		require 'Lib/Embera/Autoload.php'; // youtube library
		$config = array(
        'allow' => array('Youtube')
				);
    $embera = new Embera\Embera($config);
	
	require("autoembed.php"); // vimeo library
	$autoembed = new AutoEmbed();
	
		foreach(x_select("0","postcontent","uploaded_by='$userid' AND posted_status='1'","10","id desc") as $key){
			include("lead_content_based.php");
			
		}
	}else{
		?>
	<div class="alert text-center"><i class="fa fa-briefcase msgloading"></i><br/><br/> You have no Post yet</div>
	<?php
	}
	
}else{
	?>
	<div class="alert text-center"><i class="fa fa-briefcase msgloading"></i><br/><br/> No content was posted</div>
	<?php
}
?>