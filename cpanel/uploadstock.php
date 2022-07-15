<?php
include_once("../finishit.php");
xstart("0");
if(isset($_POST["_token"]) && !empty($_POST["_token"]) && isset($_SESSION["XELOW_PAGE_TOKER"])){
	$token = xp("_token");$name = xp("stockname");$price = xp("stockprice");
		$cost = $price - ((30/100)*$price);
	$quan = xp("stockquantity");$des = xp("stockdes");
	$os = xos();$br = xbr();$ip = xip();
	$time=x_curtime("0","0");$rtime=x_curtime("0","1");
	$by = "Timothy";
	
	$create = x_dbtab("stockmanager","
	status ENUM('0','1') NOT NULL,
	stockname VARCHAR(255) NOT NULL,
	costprice DOUBLE NOT NULL,
	sellingprice DOUBLE NOT NULL,
	quantity INT NOT NULL,
	initial_quantity INT NOT NULL,
	description TEXT NOT NULL,
	first_image TEXT NOT NULL,
	second_image TEXT NOT NULL,
	third_image TEXT NOT NULL,
	fourth_image TEXT NOT NULL,
	addedby VARCHAR(200) NOT NULL,
	token TEXT NOT NULL,
	regdate VARCHAR(200) NOT NULL,
	time_stamp DATETIME NOT NULL,
	os VARCHAR(100) NOT NULL,
	ip VARCHAR(100) NOT NULL,
	br VARCHAR(100) NOT NULL
	","MYISAM");
	
	
	$created = x_dbtab("stockcount","
	stockid VARCHAR(255) NOT NULL,
	quantity DOUBLE NOT NULL,
	token TEXT NOT NULL,
	addedby VARCHAR(200) NOT NULL,
	regdate VARCHAR(200) NOT NULL,
	time_stamp DATETIME NOT NULL,
	os VARCHAR(100) NOT NULL,
	ip VARCHAR(100) NOT NULL,
	br VARCHAR(100) NOT NULL
	","MYISAM");
	
		if($create && $created){
			
				if(x_ischeckupload("upload1") && x_ischeckupload("upload2") && x_ischeckupload("upload3") && x_ischeckupload("upload4")){
			
					//validating stock name
					
					if(x_count("stockmanager","stockname='$name' LIMIT 1") > 0){
						?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Stock Item <b><?php x_print($name)?></b> already Exist!</div><?php
						exit();
					}
			
					// Handling the first upload
					
					xcload("upload1"); // checking upload status
					$size1 = x_size("upload1"); // get file size
					xcsize("upload1",4194304); // 4mb max file size
					xtex("png,gif,jpg,jpeg","upload1");	// checking file extension
					$token1 = sha1(uniqid().xrands(10).Date("His"))."_";
					$path1 = x_path("upload1","dataupload/side1upload/$token1");
					
					// Handling the second upload
					
					xcload("upload2"); // checking upload status
					$size2 = x_size("upload2"); // get file size
					xcsize("upload2",4194304); // 4mb max file size
					xtex("png,gif,jpg,jpeg","upload2");	// checking file extension
					$token2 = sha1(uniqid().xrands(10).Date("His"))."_";
					$path2 = x_path("upload2","dataupload/side2upload/$token2");
					
					// Handling the third upload
					
					xcload("upload3"); // checking upload status
					$size3 = x_size("upload3"); // get file size
					xcsize("upload3",4194304); // 4mb max file size
					xtex("png,gif,jpg,jpeg","upload3");	// checking file extension
					$token3 = sha1(uniqid().xrands(10).Date("His"))."_";
					$path3 = x_path("upload3","dataupload/side3upload/$token3");
					
					// Handling the fourth upload
					
					xcload("upload4"); // checking upload status
					$size4 = x_size("upload4"); // get file size
					xcsize("upload4",4194304); // 4mb max file size
					xtex("png,gif,jpg,jpeg","upload4");	// checking file extension
					$token4 = sha1(uniqid().xrands(10).Date("His"))."_";
					$path4 = x_path("upload4","dataupload/side4upload/$token4");
					
					//move file upload to the designated location
					
					xmload("upload1",$path1,"");xmload("upload2",$path2,"");
					xmload("upload3",$path3,"");xmload("upload4",$path4,"");
					
					//processing data into database
					
					x_insert("stockname,initial_quantity,addedby,costprice,sellingprice,quantity,description,first_image,second_image,third_image,fourth_image,token,regdate,time_stamp,os,ip,br","stockmanager","'$name','$quan','$by','$cost','$price','$quan','$des','$path1','$path2','$path3','$path4','$token','$rtime','$time','$os','$ip','$br'","<div class='alert alert-success'><i class='fa fa-minus-circle'></i> Stock added successfully @ $rtime.</div>","<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> Failed to submit data!</div>");
					
				}else{
					?><div class="alert alert-warning"><i class="fa fa-minus-circle"></i> Error: Please upload all photos!</div><?php
				}
			
		}else{
			?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Failed to create table!</div><?php
		}
}else{
	?><div class="alert alert-danger"><i class="fa fa-minus-circle"></i> Parameter missing!</div><?php
}

?>