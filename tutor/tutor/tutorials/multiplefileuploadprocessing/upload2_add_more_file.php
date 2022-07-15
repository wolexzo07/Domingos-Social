

HTML

    create div with id='dvFile';

    create a button;

    onclick of that button calling function add_more()

JavaScript

function  add_more() {
  var txt = "<br><input type=\"file\" name=\"item_file[]\">";
  document.getElementById("dvFile").innerHTML += txt;
}

PHP

if(count($_FILES["item_file"]['name'])>0)
 { 
//check if any file uploaded
 $GLOBALS['msg'] = ""; //initiate the global message
  for($j=0; $j < count($_FILES["item_file"]['name']); $j++)
 { //loop the uploaded file array
   $filen = $_FILES["item_file"]['name']["$j"]; //file name
   $path = 'uploads/'.$filen; //generate the destination path
   if(move_uploaded_file($_FILES["item_file"]['tmp_name']["$j"],$path)) 
{
   //upload the file
    $GLOBALS['msg'] .= "File# ".($j+1)." ($filen) uploaded successfully<br>";
    //Success message
   }
  }
 }
 else {
  $GLOBALS['msg'] = "No files found to upload"; //No file upload message 
}