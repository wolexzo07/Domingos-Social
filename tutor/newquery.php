<?php
include("finishit.php");
$sqlcmd = "SELECT * FROM userdatabank WHERE id='10'";
$result = x_querycmd($sqlcmd);
if($result){
	$count = x_querycount("userdatabank WHERE id='10'");
	if($count > 0){
		foreach(x_fetchQuery($sqlcmd) as $key){
			$id = $key["fullname"];
			echo $id."<br/>";
		}
	}else{
		echo "No record found";
	}
}else{
	echo "Query Failed";
}

?>