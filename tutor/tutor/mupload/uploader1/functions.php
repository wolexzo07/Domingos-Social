<?php
function x_multiple_upload($file_name,$folder_name,$success,$failed){
if(isset($file_name) && !empty($file_name) && isset($folder_name) && !empty($folder_name)  && isset($success) && !empty($success) && isset($failed) && !empty($failed)){
	
	if(isset($_FILES[$file_name])){
    $name_array = $_FILES[$file_name]['name'];
    $tmp_name_array = $_FILES[$file_name]['tmp_name'];
    $type_array = $_FILES[$file_name]['type'];
    $size_array = $_FILES[$file_name]['size'];
    $error_array = $_FILES[$file_name]['error'];
    for($i = 0; $i < count($tmp_name_array); $i++){
		$ipbase = ($i+13) + rand(452,9183782321);
		$hash = sha1($ipbase)."_".sha1(crypt($ipbase));
  if(move_uploaded_file($tmp_name_array[$i], $folder_name.$hash.$name_array[$i])){
				  if($success == "y"){
				  echo "<b>".$name_array[$i]."</b>"." upload is complete<br>";
				  }else{
				  
				  }
            
        } else {
			 if($failed == "y"){
				echo "Upload failed for ".$name_array[$i]."<br>";
					}else{
				  
				  }
			
        }
    }
}else{
	echo "Major Parameter Missing!";
}
	
}else{
	echo "Upload Parameter Missing!";
}


}
?>