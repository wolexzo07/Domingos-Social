<script src="js/formpro.js"></script>
<script src="workerboss.js"></script>
<script type="text/javascript">
        $(document).ready(function () {
            $(".linktovideo").jqxTooltip({ content: '<br/>Click to upload your <br/>video content<br/><br/>', position: 'bottom', name: 'movieTooltip'});
            
        });
    </script>

<div class="col-md-12">
	<h4 class="followbadge"><i class="fa fa-pencil"></i>&nbsp;&nbsp;&nbsp;CREATE <font class="colorg">A POST</font></h4>
	<hr/>
								<div class="panel panel-default" >
								<div id="headstyle" class="panel-heading"><i class="fa fa-edit pull-right"></i> What do you have to say?</div>
								<div class="panel-body" >
								
								
								
								<?php include_once("videosdataupload.php") // form that handles video upload only;?>
								<form method="" class="form" id="createpost">
								
								<div class="row">
								<div class="col-md-12">
									
									<?php
						$userid = x_clean($_SESSION["XELOW_DOMINGOS_USER_ID"]);
						if(x_count("userdatabank","id='$userid' LIMIT 1") > 0){
						foreach(x_select("photo_upload","userdatabank","id='$userid'","1","id") as $key){
								$photo = $key["photo_upload"];
							}
							$mpho = "../".$photo;
							echo "<img src='$mpho' id='manipimg'/>";				
						}
									?>

<div id="textarea_container">								
	
<textarea required class="form-control expandout" id="frc" name="postcontent" placeholder="What do you have to say?" data-emojiable="true" rows=""></textarea>

</div>


<input type="hidden" name="processkey" value="<?php echo sha1(rand(1000,209399847));?>" />
<input type="hidden" name="_token" value="<?php echo sha1(rand(1000,209399847));?>" />
									</div>
									
									<?php 
									include_once("youtube_linking.php");
									include_once("vimeo_linking.php");
									include_once("sound_clouding.php");
									include_once("pollcreatornow.php");
									?>
									
									
									<?php
									if(x_count("mediacontrol","status='1' LIMIT 10") > 0){
										?>
									<div style="margin-top:10pt;" class="col-md-3 col-sm-4 col-xs-6 gorelease">
									<a class="btn btn-default" id="gorelease">
									 <i class="fa fa-paperclip"></i> Attach something..
									</a>
									</div>
										<?php
									}
										?>
									
									
									<?php
									if(x_count("mediacontrol","file_type='video' AND status='1'") > 0){
										?>
										<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default linktovideo" onclick="$('#fileuploader_video').click()" id="clip" >
									<i class="fa fa-film"></i> &nbsp;&nbsp;Upload Video
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='audio' AND status='1'") > 0){
										?>
									<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" onclick="$('#fileuploader_audio').click()" id="clip"><i class="fa fa-microphone"></i> &nbsp;&nbsp;Upload Audio
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='photo' AND status='1'") > 0){
										?>
									<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" onclick="$('#fileuploader_photo').click()" id="clip"><i class="fa fa-image"></i> &nbsp;&nbsp;Upload Photo
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='document' AND status='1'") > 0){
										?>
									<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" onclick="$('#fileuploader_document').click()" id="clip"><i class="fa fa-paperclip"></i> &nbsp;&nbsp;Attach Docs
									</a>
									</div>
										<?php
									}
									?>
								
								<?php
									if(x_count("mediacontrol","file_type='tag_a_friend' AND status='1'") > 0){
										?>	
										<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default btn-dev" id="clip">
									<i class="fa fa-tag"></i> &nbsp;&nbsp;Tag Friends
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='feeling' AND status='1'") > 0){
										?>	
								  <div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" id="clip"><i class="fa fa-calendar"></i> &nbsp;&nbsp;Feeling / Activity
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='checkin' AND status='1'") > 0){
										?>	
										<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" id="clip"><i class="fa fa-globe"></i> &nbsp;&nbsp;Check in
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='poll' AND status='1'") > 0){
										?>	
										<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default pbuddy" id="clip"><i class="fa fa-thumbs-up"></i> &nbsp;&nbsp;Create Poll
									</a>
									</div>
										<?php
									}
									?>
									
																	<?php
									if(x_count("mediacontrol","file_type='youtube' AND status='1'") > 0){
										?>	
										<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default youbuddy" id="clip"><i class="fa fa-youtube"></i> &nbsp;&nbsp;Youtube Video
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='vimeo' AND status='1'") > 0){
										?>	
									<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default vbuddy" id="clip"><i class="fa fa-film"></i> &nbsp;&nbsp;Vimeo Video
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='sound' AND status='1'") > 0){
										?>
									<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default sbuddy" id="clip"><i class="fa fa-soundcloud"></i>&nbsp;&nbsp; Soundcloud
									</a>
									</div>
										<?php
									}
									?>
									
									<?php
									if(x_count("mediacontrol","file_type='short_text' AND status='1'") > 0){
										?>
								<div class="col-md-3 col-sm-4 col-xs-6 release" id="release">
									<a class="btn btn-default" id="clip"><i class="fa fa-pencil"></i> &nbsp;&nbsp;Short Text
									</a>
									</div>
										<?php
									}
									?>
						<div class="row">		
						<div class="col-md-4"></div>
						<div class="col-md-4"></div>
						<div class="col-md-4 pull-right" id="privacy_level">
									
									<div class="form-group" style="margin:10pt;">
										<div class="input-group">
										<span class="input-group-addon">
										<span class="fa fa-lock"></span>
										
										</span>
											<select style="width:;" name="privacy" class="form-control">
											<option value="public"> Public</option>
											<option value="onlyme"> Only me</option>
											</select>
										</div>
										</div>
									
								</div></div>
									
									
									<div id="progress-div"><div id="progress-bar"></div></div>
									<hr/>
									<div class="col-md-12">
									<div id="loadloss"></div>
									</div>
									
									<div class="col-md-12">
									<button class="btn btn-primary" id="postButton"><i class="fa fa-send"></i> Post content
									</button>
									</div>
									
									
									
									</div>
									
									</form>
								
								</div>
								</div>
								
	</div>
	
	
	


	
	
					<div class="col-md-12">
					<h4 class="followbadge"><i class="fa fa-globe"></i>&nbsp;&nbsp;&nbsp;SHOWING <font class="colorg">GENERAL TRENDS</font></h4>
					
					
					<!--
					<hr/>
					<div id="sponsoredPostHere"></div>
					<input type="hidden" id="pagenoSponsored" value="1"/>
					<img id="loaderforAds" src="loadingimg/loader4.gif"/>-->
					
					<hr/>
					<div id="ShowGeneralPostedtrend"></div>
					<input type="hidden" id="pagenogeneraltrend" value="1"/>
					<img id="loaderforgeneraltrend" src="loadingimg/loader4.gif"/>
					<!---<div id="Showpostedtrend"></div>
					<input type="hidden" id="pageno" value="1"/>
					<img id="loader" src="loadingimg/loader4.gif"/>-->	
					</div>
