				
				<?php
									if(x_count("mediacontrol","file_type='poll' AND status='1'") > 0){
										?>	
											<div class="col-md-12" id="createpoll">
									<div class="panel panel-default" style="margin:10pt;">
									<div class="panel-heading">CREATE POLL OPTIONS<span class="pull-right fa fa-close closePbuddy"> Remove</span></div>
									<div class="panel-body">
									<div class="row">
									<?php
										$poll = array("a","b","c","d");
										for($i=0;$i<count($poll);$i++){
										?>
										<div class="col-md-6" id="poll_<?php echo $poll[$i];?>">
										
										<div class="form-group" style="margin:5pt;">
										<div class="input-group">
										<span class="input-group-addon">
										<span class="fa fa-stats"></span>
										<i class="fa fa-check-circle"></i> Option <?php echo $poll[$i];?>
										</span>
											<input type="text" name="option_<?php echo $poll[$i];?>" autocomplete="off" class="form-control" id="option_<?php echo $poll[$i];?>" placeholder="Option <?php echo $poll[$i];?>" />
										
										</div>
										</div>
										
										</div>
										
										
										<?php
										
										}
										
										?>
									</div>
									
									</div>
									</div>
	</div>
										<?php
									}
									?>
			