

Here is a function I wrote which returns a more understandable $_FILES array.

<?php

function getMultiple_FILES() {
    $_FILE = array();
    foreach($_FILES as $name => $file) {
        foreach($file as $property => $keys) {
            foreach($keys as $key => $value) {
                $_FILE[$name][$key][$property] = $value;
            }
        }
    }
    return $_FILE;
}?>

<?php

foreach($_FILES as $file){
  //echo $file['name']; 
  echo $file['tmp_name'].'</br>'; 
  move_uploaded_file($file['tmp_name'], "./uploads/".$file["name"]);
}

?>




I run foreach loop with error element, look like

 foreach($_FILES['userfile']['error'] as $k=>$v)
 {
    $uploadfile = 'uploads/'. basename($_FILES['userfile']['name'][$k]);
    if (move_uploaded_file($_FILES['userfile']['tmp_name'][$k], $uploadfile)) 
    {
        echo "File : ", $_FILES['userfile']['name'][$k] ," is valid, and was                      successfully uploaded.\n";
    }

    else 
    {
        echo "Possible file : ", $_FILES['userfile']['name'][$k], " upload attack!\n";
    }   

 }

