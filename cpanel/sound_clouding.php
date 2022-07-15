								<?php
									if(x_count("mediacontrol","file_type='sound' AND status='1'") > 0){
										?>	
									<div class="col-md-12" id="scurl">
									
									<div class="form-group" style="margin:10pt;">
										<div class="input-group">
										<span class="input-group-addon">
										<span class="fa fa-soundcloud"></span>
										Soundcloud
										</span>
											<input type="url" name="sound" autocomplete="off" class="form-control" id="sound" placeholder="https://soundcloud.com/DoMinGos" />
											<span class="input-group-addon closeSound">
										<span id="hidesound" class="fa fa-close"></span> Remove
										</span>
										</div>
										</div>
									
									</div>
										<?php
									}
									?>

