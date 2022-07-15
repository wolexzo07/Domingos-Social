			<?php
			// validating links allowed 
			if($count_all_link > $allowed_linkcount){
			echo "<div class='alert alert-danger'><b><i class='fa fa-link'></i> Link Error:</b> Post is having too much of <b>links</b>,Only<b> $allowed_linkcount Links </b> is allowed.</div>";
				exit();
			}
			
			// validating youtube links allowed 
			if($count_all_linky > $allowed_linkcount_y){
			echo "<div class='alert alert-danger'><b><i class='fa fa-link'></i> Link Error:</b> Post is having too much of <b>youtube links</b>,Only<b> $allowed_linkcount_y Links </b> is allowed.</div>";
				exit();
			}
			
			// validating vimeo links allowed 
			if($count_all_linkv > $allowed_linkcount_v){
			echo "<div class='alert alert-danger'><b><i class='fa fa-link'></i> Link Error:</b> Post is having too much of <b>vimeo links</b>,Only<b> $allowed_linkcount_v Links </b> is allowed.</div>";
				exit();
			}
			
			// validating soundcloud links allowed 
			if($count_all_links > $allowed_linkcount_s){
			echo "<div class='alert alert-danger'><b><i class='fa fa-link'></i> Link Error:</b> Post is having too much of <b>soundcloud links</b>,Only<b> $allowed_linkcount_s Links </b> is allowed.</div>";
				exit();
			}
			
			// validating other post links allowed 
			if($count_all_linko > $allowed_linkcount_o){
			echo "<div class='alert alert-danger'><b><i class='fa fa-link'></i> Link Error:</b> Post is having too much of <b>External links</b>,Only<b> $allowed_linkcount_o External Links </b> is allowed.</div>";
				exit();
			}
			?>