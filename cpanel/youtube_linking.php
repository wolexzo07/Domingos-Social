		<?php
									if(x_count("mediacontrol","file_type='youtube' AND status='1'") > 0){
										?>	
									<div class="col-md-12" id="youtubeurl">
									
									<div class="form-group" style="margin:10pt;">
										<div class="input-group">
										<span class="input-group-addon">
										<span class="fa fa-youtube"></span>
										Youtube
										</span>
											<input type="url" name="youtubeurl" autocomplete="off" class="form-control" id="yvideo" placeholder="https://youtube.com/DoMinGos" />
											<span class="input-group-addon closeYoutube">
										<span id="hideyoutube" class="fa fa-close"></span> Remove
										</span>
										</div>
										</div>
									
									</div>
									
										<?php
									}
									?>
