Multiple files can be selected and then uploaded using the
<input type='file' name='file[]' multiple>
The sample php script that does the uploading:

<html>
<title>Upload</title>
<?php
    session_start();
    $target=$_POST['directory'];
        if($target[strlen($target)-1]!='/')
                $target=$target.'/';
            $count=0;
            foreach ($_FILES['file']['name'] as $filename) 
            {
                $temp=$target;
                $tmp=$_FILES['file']['tmp_name'][$count];
                $count=$count + 1;
                $temp=$temp.basename($filename);
                move_uploaded_file($tmp,$temp);
                $temp='';
                $tmp='';
            }
    header("location:../../views/upload.php");
?>
</html>

The selected files are received as an array with

$_FILES['file']['name'][0] storing the name of first file.
$_FILES['file']['name'][1] storing the name of second file.