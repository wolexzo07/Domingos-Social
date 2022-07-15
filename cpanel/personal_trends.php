<?php
session_start();
include_once("../finishit.php");
include_once("validatelogin.php"); // validatin login
//include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>
<script type="text/javascript" src="workerboss.js"></script>

<div class="col-lg-8 col-md-8">
<!---<h4 class="followbadge"><i class="fa fa-search"></i>&nbsp;&nbsp;&nbsp;SEARCHING  <font class="colorg">FOR ANYTHING? </font></h4>-->

<?php include("search_form_domin.php");?>


<h4 class="followbadge"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;SHOWING <font class="colorg">PERSONAL TRENDS</font></h4>
<hr/>
							
<div style="margin-bottom:50pt;" id="Showpostedtrend"></div>

<input type="hidden" id="pageno" value="1"/>
<img id="loader" src="loadingimg/loader4.gif"/>

</div>
<div class="col-lg-4 col-md-4">
<div id="showwhotofollow"></div>
</div>
