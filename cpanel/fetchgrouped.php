<?php
include_once("../finishit.php");
include_once("../domingos_sp_functions.php");
xstart("0");
if(x_validatesession("XELOW_DOMINGOS_USER_ID") && x_validatesession("DOMIGOS_DATACENTER_AUTH_SERVER") && x_validatesession("DOMINGOS_POST_ID")){

$userid = x_clean(x_session("XELOW_DOMINGOS_USER_ID"));

 if(x_count("createdgroup","created_by='$userid' LIMIT 1") > 0){
	 
	 ?>
<h4 class="followbadge" ><i class="fa fa-credit-card"></i>&nbsp;&nbsp;&nbsp; <font class="colorg">LIST OF  </font>GROUP CREATED</h4>
		<hr/>
	 <?php
	 
	 foreach(x_select("0","createdgroup","created_by='$userid'","10","id desc") as $key){
		 $id = $key["id"];
		 $logo = $key["logopath"];
		 $gid = $key["group_id"];
		 $gname = $key["group_name"];
		 $gdes = $key["group_description"];
		  $grule = $key["group_rules"];
		   $allowed_gen = $key["group_allowed_gender"];
		    $privacy = $key["group_privacy"];
		     $time = $key["created_on"];
		      $timer = $key["created_on_r"];
		      ?>
		      <div class="panel panel-default">
		      <!---<div class="panel-heading"></div>-->
				  <div class="panel-body">
			  
					  <div class="row">
							  
							  <div class="col-md-3">
							   <img src="<?php echo $logo;?>" class="img-responsive mb-1" id="drm_image"/>
							   
							  </div>
							  
							  <div class="col-md-9">
							  <?php echo $gdes;?>
							  </div>
							  
					  </div>
				 
				  </div>
				  
				  <div class="panel-footer">
				  <i class="fa fa-users"></i> &nbsp;Members &nbsp;<span class="badge badge-success">0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				  <i class="fa fa-pencil"></i> &nbsp;Posts &nbsp;<span class="badge badge-success">0</span>
				  <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				  <i class="fa fa-pencil"></i> &nbsp;Posts &nbsp;<span class="badge badge-success">0</span>--->
				  </div>
				  
		      </div>
		      <?php
		 }
	 
	 }else{
		 
		 echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Alert:</b> No Data found!</div>";
		 
		 }

}else{
	
	echo "<div class='alert alert-danger'><i class='fa fa-minus-circle'></i> <b>Error:</b> Parameter missing!</div>";
	
	}
?>
