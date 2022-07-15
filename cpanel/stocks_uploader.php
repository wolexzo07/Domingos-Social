<?php
session_start();
include_once("../finishit.php");
include_once("validatelogin.php"); // validatin login
include_once("adminvalidatornow.php"); // checking user level of authorization
include_once("pagevalidator.php");
?>

<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

<div class="panel panel-default formloader">
<div class="panel-heading"><i class="fa fa-plus-circle"></i> ADD NEW STOCKS <button class="btn btn-primary pull-right" onclick="fetchrequestnow('stocks_uploader')"><i class="fa fa-cog"></i> Refresh</button></div>
<div class="panel-body">

<script type="text/javascript" src="js/formpro.js"></script>



<form id="uploadstock" method="POST" onsubmit="" enctype="multipart/form-data">
<input type="hidden" name="_token" value="<?php echo sha1(uniqid()).sha1(rand(200,100000000));?>"/>
<p class="txtlabel">Enter Stock name</p>
<input type="text" placeholder="Enter Stock name" id="stockname"  class="form-control input-lg" name="stockname"/>
<div class="row">
	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

	<p class="txtlabel">Enter Selling Price</p>
	<input type="number" placeholder="Enter Selling Price" id="stockprice" class="form-control input-lg" name="stockprice"/>

	</div>
	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

	<p class="txtlabel">Enter Initial Quantity</p>
	<input type="number" class="form-control input-lg" id="stockquantity" placeholder="Enter initial Quantity" name="stockquantity"/>

	</div>
</div>

<p class="txtlabel">Enter Stock Description</p>
<textarea class="form-control input-lg styletextarea" id="stockdes" name="stockdes" placeholder="Enter product description"></textarea>

<div class="row">
<script type="text/javascript" src="js/loadimages.js"></script>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<img src="imager/avatar.png" id="img_prev1" class="imglog"/>
<p class="txtlabel">Upload Stock Photo 1</p>
<input type="file" onchange="readURL(this,1)" id="uploadimg" class="form-control uploadimg" required name="upload1"/>
</div>

<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<img src="imager/avatar.png" id="img_prev2" class="imglog"/>
<p class="txtlabel">Upload Stock Photo 2</p>
<input type="file" onchange="readURL(this,2)" id="uploadimg" class="form-control uploadimg" required name="upload2"/>
</div>

<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<img src="imager/avatar.png" id="img_prev3" class="imglog"/>
<p class="txtlabel">Upload Stock Photo 3</p>
<input type="file" onchange="readURL(this,3)" id="uploadimg" class="form-control uploadimg" required name="upload3"/>
</div>

<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<img src="imager/avatar.png" id="img_prev4" class="imglog"/>
<p class="txtlabel">Upload Stock Photo 4</p>
<input type="file" onchange="readURL(this,4)" id="uploadimg" class="form-control uploadimg" required name="upload4"/>
</div>

</div>



<button class="btn btn-success btn-block btn-lg btnboss"><i class="fa fa-cloud-upload"></i> UPLOAD NEW STOCK</button>
</form>
<div id="gallery"><img src="loadingimg/loader4.gif" class="img-responsive"/></div>

</div>
</div>

</div>
<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>