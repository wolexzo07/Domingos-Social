<?php
session_start();
include_once("../finishit.php");
include_once("validatelogin.php"); // validatin login
//include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>

<script src="workerboss.js"></script>
<div class="col-lg-8 col-md-8">

<?php include("search_form_domin.php");?>


<h4 class="followbadge"><i class="fa fa-globe"></i>&nbsp;&nbsp;&nbsp;SHOWING <font class="colorg">GENERAL TRENDS</font></h4>

<hr/>

	<div id="ShowGeneralPostedtrend"></div>

	<input type="hidden" id="pagenogeneraltrend" value="1"/>
	<img id="loaderforgeneraltrend" src="loadingimg/loader4.gif"/>

</div>
<div class="col-lg-4 col-md-4">
<h4 class="followbadge"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;SPONSORED <font class="colorg">ADVERTS</font></h4>

<hr/>

</div>
