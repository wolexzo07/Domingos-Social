<?php
include("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatepost("pageno") && x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));

$pageno = xp("pageno");
$no_of_records_per_page = 10;
$offset = ($pageno-1) * $no_of_records_per_page;

$sqlcmd = "SELECT * FROM postcontent WHERE uploaded_by='$userid' AND posted_status='1' ORDER BY id DESC LIMIT $offset, $no_of_records_per_page";
$sqlcountcmd = "postcontent WHERE uploaded_by='$userid' AND posted_status='1'";

if($read = x_querycmd($sqlcmd)){
	
			//$count = x_querycount($sqlcountcmd);
			$count = mysqli_num_rows($read);
			if($count > 0){
				
			require 'Lib/Embera/Autoload.php'; // youtube library
			$config = array(
			'allow' => array('Youtube')
				);
			$embera = new Embera\Embera($config);
			require("autoembed.php"); // vimeo library
			$autoembed = new AutoEmbed();
				
				foreach(x_fetchQuery($sqlcmd) as $key){
				include("lead_content_based.php");
					}
			}else{
				//echo "No record found";
			}
	}else{
		echo "Failed to query db";
	}
}


?>