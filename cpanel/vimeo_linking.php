		<?php
									if(x_count("mediacontrol","file_type='vimeo' AND status='1'") > 0){
										?>	
										<div class="col-md-12" id="vidmeourl">
									
									<div class="form-group" style="margin:10pt;">
										<div class="input-group">
										<span class="input-group-addon">
										<span class="fa fa-link"></span>
										Vimeo
										</span>
											<input type="url" name="vidmeo" autocomplete="off"  class="form-control" id="vidmeo" placeholder="https://vimeo.com/DoMinGos" />
											
											<span class="input-group-addon closeVimeo">
										<span id="hidevidmeo" class="fa fa-close"></span>
										Remove
										</span>
											
										</div>
										</div>
									
									</div>
									
										<?php
									}
									?>
