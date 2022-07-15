			<?php
			$id = $key["id"];
			$post_type = $key["post_type"];
			$by = $key["uploaded_by"];
			$postid = $key["post_id"];
			$content = $key["post_content"];
			$is_poll = $key["is_poll"];
			$a_opt = $key["poll_option_a"];
			$b_opt = $key["poll_option_b"];
			$c_opt = $key["poll_option_c"];
			$d_opt = $key["poll_option_d"];
			$is_link = $key["is_media_linked"];
			$media_count = $key["total_media_count"];
			$video_count = $key["video_count"];
			$photo_count = $key["photo_count"];
			$audio_count = $key["audio_count"];
			$document_count = $key["document_count"];
			
			// Getting dislike , like and comment counter
			
			$like_counter = $key["like_counter"];
			$dislike_counter = $key["dislike_counter"];
			$comment_counter = $key["comment_counter"];
			
			// Handling linked content in the post
			
			$is_p_linked = $key["is_postcontent_linked"];
			$all_c_link = $key["all_content_link"];
			$c_youtube_link = $key["content_youtube_links"];
			$c_vimeo_link = $key["content_vidmeo_links"];
			$c_sound_link = $key["content_soundcloud_links"];
			$c_other_link = $key["content_other_links"];
			
			// Handling linked content in the post counter
			
			$all_link_count = $key["all_content_link_count"];
			$ylink_count = $key["content_youtube_link_count"];
			$vlink_count = $key["content_vidmeo_link_count"];
			$slink_count = $key["content_soundcloud_link_count"];
			$olink_count = $key["content_other_link_count"];
			
			$name = x_getsingle("SELECT fullname FROM userdatabank WHERE id='$by' LIMIT 1","userdatabank WHERE id='$by'","fullname");
			
			$nick = x_getsingle("SELECT nickname FROM userdatabank WHERE id='$by' LIMIT 1","userdatabank WHERE id='$by'","nickname");
			
			if($post_type == "major_post"){
				include("trendscontent_extra.php"); // Post made by user
			}elseif($post_type == "notification"){
				include("trend_notifying.php"); // Automated post from robot script
			}else{
				// Nothing to display
			}
			
			?>