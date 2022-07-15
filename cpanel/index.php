<?php 
include_once("../finishit.php");
xstart("0");
if(!x_validatesession("XELOW_DOMINGOS_USER_ID")){
	finish("../","Unauthorized access! Please login.");
}
if(!x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER")){
	$_SESSION['DOMIGOS_DATACENTER_AUTH_SERVER'] = sha1(rand(23,9826381788)).sha1(md5(DATE("YmdHis")));
}
?>
<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>Domingos Social Network - Connecting the flocks to the Sheperd</title>

	 <!-- Bootstrap CSS CDN -->
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<!-- Our Custom CSS -->
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/style5.css"/>
	<link rel="stylesheet" href="css/custom.css"/>
	<link rel="stylesheet" href="css/paginate.css"/>
	<script type="text/javascript" src="js/loadrequest.js"></script>
    </head>
    <body>



        <div class="wrapper">
            <!-- Sidebar Holder -->
       <?php include_once("navigatorbase.php");?>
            <!-- Page Content Holder -->
			<?php include_once("bodybase.php");?>
        </div>




     <script src="js/jquery-1.11.1.min.js"></script>
        <!-- Bootstrap Js CDN -->
        <script src="js/bootstrap.min.js"></script>
        <!-- jQuery Custom Scroller CDN -->
        <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>

         <script type="text/javascript">
             $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
             });
         </script>
		 
    </body>
</html>
