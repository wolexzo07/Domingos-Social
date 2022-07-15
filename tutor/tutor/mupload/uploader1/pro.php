<?php
include_once("functions.php");

// mupload($file_name,$folder_name,$success,$failed);

x_multiple_upload("file_array","test_uploads/","y","y");

// Script written by Adam Khoury for the following video exercise:

// http://www.youtube.com/watch?v=7fTsf80RJ5w

/***
if(isset($_FILES['file_array'])){
    $name_array = $_FILES['file_array']['name'];
    $tmp_name_array = $_FILES['file_array']['tmp_name'];
    $type_array = $_FILES['file_array']['type'];
    $size_array = $_FILES['file_array']['size'];
    $error_array = $_FILES['file_array']['error'];
    for($i = 0; $i < count($tmp_name_array); $i++){
        if(move_uploaded_file($tmp_name_array[$i], "test_uploads/".$name_array[$i])){
            echo $name_array[$i]." upload is complete<br>";
        } else {
            echo "move_uploaded_file function failed for ".$name_array[$i]."<br>";
        }
    }
}

***/
?>