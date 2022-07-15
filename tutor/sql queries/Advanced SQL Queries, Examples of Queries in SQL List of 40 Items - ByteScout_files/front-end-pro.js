jQuery( function($) {

	/*
	 * Position sidebar icons vertically
	 *
	 */
	$(document).ready( function() {
		$('#dpsp-floating-sidebar').css('top', ( window.innerHeight - $('#dpsp-floating-sidebar').height() ) / 2 );
	});

	$(window).on( 'resize', function() {
		$('#dpsp-floating-sidebar').css('top', ( window.innerHeight - $('#dpsp-floating-sidebar').height() ) / 2 );
	});


	/**
	 * When entering and leaving a button, add a class of hover to the wrapping <li> element
	 *
	 */
	$(document).on( 'mouseenter', '.dpsp-networks-btns-wrapper li a', function(e) {

		$(this).closest('li').addClass('dpsp-hover');

	});

	$(document).on( 'mouseleave', '.dpsp-networks-btns-wrapper li a', function() {

		$(this).closest('li').removeClass('dpsp-hover');

	});


	/*
	 * Open Pinterest overlay to select which image to pin when
	 * clicking on a Pin button without media attached
	 *
	 */
	$(document).ready( function() {
		$('.dpsp-networks-btns-share .dpsp-network-btn.dpsp-pinterest').click( function(e) {

			if( $(this).data( 'href' ) == '#' ) {
				e.preventDefault();

				var elem = document.createElement('script');
				elem.setAttribute('type', 'text/javascript');
				elem.setAttribute('charset', 'UTF-8');
				elem.setAttribute('src', 'https://assets.pinterest.com/js/pinmarklet.js');
				document.body.appendChild(elem);
			}

		});
	});


	/*
	 * Print button action
	 *
	 */
	$(document).ready( function() {
		$('.dpsp-networks-btns-share .dpsp-network-btn.dpsp-print').click( function(e) {
			window.print();
		});
	});


	/*
	 * Open share links in a pop-up window
	 *
	 */
	$(document).on( 'click', '.dpsp-networks-btns-share .dpsp-network-btn, .dpsp-click-to-tweet, .dpsp-pin-it-button', function(e) {

		if( $(this).hasClass('dpsp-whatsapp') || $(this).hasClass('dpsp-email') )
			return;

		if( ( $(this).hasClass('dpsp-twitter') || $(this).hasClass('dpsp-click-to-tweet') ) && typeof window.twttr != 'undefined' )
			return;

		e.preventDefault();

		if( $(this).attr( 'href' ) == '#' || $(this).data( 'href' ) == '#' )
			return false;

		$(this).blur();

		var window_size = {
			width  : 700,
			height : 300
		}

		if( $(this).hasClass('dpsp-buffer') ) {
			window_size.width = 800;
			window_size.height = 575;
		}

		var url = ( typeof $(this).data( 'href' ) != 'undefined' ? $(this).data( 'href' ) : $(this).attr( 'href' ) );

		window.open( url,'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=" + window_size.width + ",height=" + window_size.height + ",top=200,left=" + ($(window).innerWidth() - window_size.width)/2 );

	});


	/*
	 * Calculate position of viewport when scrolling
	 *
	 */
	var dpsp_hasScrolled 	   = false;
	var dpsp_scrollTop 	   	   = 0;

	$(window).scroll( function() {

		// User has scrolled
		dpsp_hasScrolled = true;
			
		// Calculate scrollTop in percentages on user scroll
		dpsp_scrollTop = parseInt( $(window).scrollTop() / $(document).innerHeight() * 100 );

	});

	$(window).on( 'load', function() {

		// Calculate scrollTop in percentages on page load
		dpsp_scrollTop = parseInt( $(window).scrollTop() / $(document).innerHeight() * 100 );

	});


	/*
	 * Handle floating sidebar show events
	 *
	 */
	if( $('#dpsp-floating-sidebar').length > 0 ) {

		var dpsp_FloatingSidebarTriggerScroll = $('#dpsp-floating-sidebar').attr('data-trigger-scroll');

		/*
		 * Handle display of the mobile sticky while scrolling the page
		 *
		 */
		if( dpsp_FloatingSidebarTriggerScroll != 'false' ) {

			$(window).on( 'scroll load', function() {
			
				// Trigger for scroll position
				if( dpsp_scrollTop > parseInt(dpsp_FloatingSidebarTriggerScroll) ) 
					$('#dpsp-floating-sidebar').addClass('opened');
				else
					$('#dpsp-floating-sidebar').removeClass('opened');
				
			});

		// If there's no scroll trigger just display the buttons
		} else {

			$('#dpsp-floating-sidebar').addClass('opened');
				
		}

	}


	/*
	 * Handle sticky bar show events
	 *
	 */
	if( $('#dpsp-sticky-bar-wrapper').length > 0 ) {

		var dpsp_StickyBarTriggerScroll = $('#dpsp-sticky-bar-wrapper').attr('data-trigger-scroll');
		var dpsp_mobile_size 			= ( typeof $('#dpsp-post-sticky-bar-markup').attr( 'data-mobile-size' ) != 'undefined' ? parseInt( $('#dpsp-post-sticky-bar-markup').attr( 'data-mobile-size' ) ) : 720 );
		
		console.log(dpsp_mobile_size);
		console.log(window.outerWidth);
		console.log( $(window).width() );
		console.log( $(window).outerWidth() );

		/**
		 * Remove the sticky bar if not on proper device
		 *
		 */
		if( $('#dpsp-sticky-bar-wrapper').hasClass( 'dpsp-device-mobile' ) && $(window).outerWidth() > dpsp_mobile_size )
			$('#dpsp-sticky-bar-wrapper').remove();

		if( $('#dpsp-sticky-bar-wrapper').hasClass( 'dpsp-device-desktop' ) && $(window).outerWidth() <= dpsp_mobile_size )
			$('#dpsp-sticky-bar-wrapper').remove();


		/**
		 * Handle the positioning of the buttons
		 *
		 */
		if( $('#dpsp-post-sticky-bar-markup').length > 0 && $('#dpsp-sticky-bar-wrapper').length > 0 ) {

			$(window).on( 'resize', function() {

				// Handle the position of the buttons
				$('#dpsp-sticky-bar')
					.outerWidth( $('#dpsp-post-sticky-bar-markup').parent().outerWidth() )
					.css( 'left', $('#dpsp-post-sticky-bar-markup').offset().left )
					.show();

				// Add and remove the is mobile class
				if( window.outerWidth <= dpsp_mobile_size )
					$('#dpsp-sticky-bar-wrapper').addClass( 'dpsp-is-mobile' );
				else
					$('#dpsp-sticky-bar-wrapper').removeClass( 'dpsp-is-mobile' );

			});

			$(window).trigger( 'resize' );

		}


		/**
		 * Handle display of the sticky bar while scrolling the page
		 *
		 */
		if( $('#dpsp-sticky-bar-wrapper').length > 0 ) {

			if( dpsp_StickyBarTriggerScroll != 'false' ) {

				$(window).on( 'scroll', function() {

					// Trigger for scroll position
					if( dpsp_scrollTop > parseInt( dpsp_StickyBarTriggerScroll ) ) 
						$('#dpsp-sticky-bar-wrapper').addClass('opened');
					else
						$('#dpsp-sticky-bar-wrapper').removeClass('opened');

				});

			// If there's no scroll trigger just display the buttons
			} else {

				$('#dpsp-sticky-bar-wrapper').addClass('opened');

			}

		}

		/**
		 * Add padding bottom to the body representing the tool's height
		 *
		 */
		$('body').css( 'padding-bottom', $('#dpsp-sticky-bar-wrapper').height() );

	}
	

	/*
	 * Handle share pop-up events for the Pop-Up tool
	 *
	 */
	if( $('#dpsp-pop-up').length > 0 ) {

		// Set defaults, like trigger values and scroll value
		var dpsp_PopUpTriggerScroll = $('#dpsp-pop-up').attr('data-trigger-scroll');
		var dpsp_TriggerPostBottom  = $('#dpsp-post-bottom').length > 0 ? parseInt( $('#dpsp-post-bottom').offset().top ) : false;
		var dpsp_TriggerExitIntent  = $('#dpsp-pop-up').attr('data-trigger-exit');
		var dpsp_TriggerTimeDelay   = parseInt( $('#dpsp-pop-up').attr('data-trigger-delay') );

		var pop_up_session		    = $('#dpsp-pop-up').data('session');

		/*
		 * Handle display of the pop-up when in a session 
		 *
		 */
		if( pop_up_session != 0 ) {

			if( getCookie('dpsp_pop_up') != '' ) {

				$('#dpsp-pop-up').remove();
				$('#dpsp-pop-up-overlay').remove();

			}

		} else
			setCookie( 'dpsp_pop_up', '', -1 );


		/*
		 * Handle display of the pop-up while scrolling the page
		 *
		 */
		$(window).scroll( function() {
			
			if( dpsp_hasScrolled == true ) {

				// Trigger for scroll position
				if( dpsp_PopUpTriggerScroll != 'false' && dpsp_scrollTop > parseInt(dpsp_PopUpTriggerScroll) )
					showPopUp();

				// Trigger for bottom of post
				if( dpsp_TriggerPostBottom != false && $(window).scrollTop() + window.innerHeight / 1.5 >= dpsp_TriggerPostBottom )
					showPopUp();

			}
			
		});


		/*
		 * Bind the document mouse leave with the show pop-up if the exit intent is set to true
		 *
		 */
		if( dpsp_TriggerExitIntent == 'true' ) {

			document.documentElement.addEventListener( 'mouseleave', documentMouseLeave );

			function documentMouseLeave(e) {
				if( e.clientY < 1 )
					showPopUp();
			}

		}


		/*
		 * Show pop-up after time delay
		 *
		 */
		if( !isNaN( dpsp_TriggerTimeDelay ) ) {

			setTimeout( showPopUp, dpsp_TriggerTimeDelay * 1000 );

		}


		/*
		 * Position the pop-up in the center of the viewport when resizing the window
		 *
		 */
		$(window).resize( function() {
			
			$popUp = $('#dpsp-pop-up');
			
			if( $popUp.hasClass( 'opened' ) )
				positionPopUp();

		});


		/*
		 * Hide pop-up when clicking the overlay
		 * Hide pop-up when clicking the close button
		 * Hide pop-up when clicking a network button
		 *
		 */
		$('#dpsp-pop-up-overlay, #dpsp-pop-up-close, .dpsp-network-btn').click( function() {
			hidePopUp();
		});


		/*
		 * Shows the pop-up
		 *
		 */
		function showPopUp() {
			positionPopUp();

			$('#dpsp-pop-up').addClass('opened');
			$('#dpsp-pop-up-overlay').addClass('opened');

			setCookie( 'dpsp_pop_up', '1', pop_up_session, '/' );
		}


		/*
		 * Hides the pop-up and removes it from the DOM
		 *
		 */
		function hidePopUp() {
			$('#dpsp-pop-up').removeClass('opened');
			$('#dpsp-pop-up-overlay').removeClass('opened');

			setTimeout( function() {
				$('#dpsp-pop-up').remove();
				$('#dpsp-pop-up-overlay').remove();
			}, 250 );
		}

		/*
		 * Function that positions the pop-up in the center of the page
		 *
		 */
		function positionPopUp() {

			$popUp = $('#dpsp-pop-up');

			var windowHeight = window.innerHeight;
			var windowWidth  = window.innerWidth;

			var popUpHeight  = $popUp.outerHeight();
			var popUpWidth   = $popUp.outerWidth();

			$popUp.css({
				top  : ( windowHeight - popUpHeight ) / 2,
				left : ( windowWidth - popUpWidth ) / 2
			});

		}

	}


	/*
	 * Set a cookie
	 *
	 */
	function setCookie( cname, cvalue, exdays, path ) {

	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();

	    if( path )
	    	path = "path=" + path;

	    document.cookie = cname + "=" + cvalue + "; " + expires + "; " + path;
	}

	/*
	 * Get a cookie
	 *
	 */
	 function getCookie( cname ) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	    }
	    return "";
	}


	/**
	 * Pinterest data-pin-nopin for image, depending on what is allowed to be pinned and what is not
	 *
	 */
	if( typeof dpsp_pin_button_data != 'undefined' && $('#dpsp-post-content-markup').length > 0 ) {

		var pin_data 			   	  = dpsp_pin_button_data;
		var pinterest_pinnable_images = ( typeof pin_data.pinterest_pinnable_images == 'undefined' ? 'all_images' : pin_data.pinterest_pinnable_images );

		// Allow only in post images
		if( pinterest_pinnable_images == 'post_images' ) {

			var $content = $('#dpsp-post-content-markup').parent();

			$('img, iframe').each( function() {

				if( ! $.contains( $content.get(0), $(this).get(0) ) ) {

					$(this).attr( 'data-pin-nopin', 'true' );

				}

			});

		}

		// Allow only post Pinterest images
		if( pinterest_pinnable_images == 'post_custom_images' ) {

			$('img, iframe').each( function() {

				if( ! $(this).parent().hasClass('dpsp-post-pinterest-image-hidden') ) {

					$(this).attr( 'data-pin-nopin', 'true' );

				}

			});

		}

	}


	/**
	 * Pinterest descriptions for post images
	 *
	 * Goes through each image, checks to see what Pin description it should use and sets this description
	 * as data-pin-description
	 *
	 */
	$(window).on( 'load', function() {

		// Thrive Architect editor pass
		if( $('body').hasClass( 'tve_editor_page' ) )
			return;

		if( typeof dpsp_pin_button_data != 'undefined' && $('#dpsp-post-content-markup').length > 0 ) {

			var pin_data 			   = dpsp_pin_button_data;
			var pin_description_source = ( typeof pin_data.pin_description_source == 'undefined' ? 'image_alt_tag' : pin_data.pin_description_source );

			$content = $('#dpsp-post-content-markup').parent();
			$images  = $content.find('img');

			// Go through each image and set the Pinterest description
			$images.each( function() {

				var $image = $(this);

				if( typeof $image.attr( 'data-pin-description' ) != 'undefined' && $image.attr( 'data-pin-description' ) != '' )
					return; // continue to next image

				// Set Pin description to empty
				var pin_description = '';


				// Set the Pin description as the alt attribute, as selected in the Settings
				if( $image.attr( 'alt' ) && pin_description_source == 'image_alt_tag' )
					pin_description = $image.attr( 'alt' );

				// Set the Pin description as the title attribute, as selected in the Settings
				else if( $image.attr( 'title' ) && pin_description_source == 'image_title' )
					pin_description = $image.attr( 'title' );

				// Set the Pin description as the post's Pinterest description, as selected in the Settings
				else if( typeof pin_data.pinterest_description != 'undefined' && pin_description_source == 'post_pinterest_description' )
					pin_description = pin_data.pinterest_description;


				// Set the Pin description as the post's Pinterest description
				if ( pin_description == '' && typeof pin_data.pinterest_description != 'undefined' )
					pin_description = pin_data.pinterest_description;

				// Set the Pin description as the post's OG title
				if( pin_description == '' && $('[property="og:title"]').length > 0 )
					pin_description = $('[property="og:title"]').first().attr( 'content' );


				// Set the Pin description for the image
				if( pin_description != '' )
					$image.attr( 'data-pin-description', pin_description );

			});

		}

	});


	/**
	 * Pinterest Image Hover
	 *
	 * Goes through each image and adds the Pin button if the image is eligible to have a Pin it button
	 *
	 */
	$(window).on( 'load', function() {

		// Thrive Architect editor pass
		if( $('body').hasClass( 'tve_editor_page' ) )
			return;

		if( typeof dpsp_pin_button_data != 'undefined' && $('#dpsp-post-content-markup').length > 0 && $('#dpsp-post-content-markup').attr('data-image-pin-it') == 'true' ) {

			var pin_data = dpsp_pin_button_data;
			var page_url = document.URL;

			// Set minimum image size values
			pin_data.minimum_image_height = ( typeof pin_data.minimum_image_height == 'undefined' || pin_data.minimum_image_height == '' ? 0 : parseInt( pin_data.minimum_image_height ) );
			pin_data.minimum_image_width  = ( typeof pin_data.minimum_image_width == 'undefined' || pin_data.minimum_image_width == '' ? 0 : parseInt( pin_data.minimum_image_width ) );

			// Set the default button position
			pin_data.button_position = ( typeof pin_data.button_position == 'undefined' ? 'top_left' : pin_data.button_position );

			var pin_behavior = ( typeof pin_data.button_share_behavior == 'undefined' ? 'hover_image' : pin_data.button_share_behavior );

			$content = $('#dpsp-post-content-markup').parent();
			$images  = $content.find('img');

			$images.each( function() {

				var $image = $( this );

				// Return if image was already processed
				if( $image.parent().hasClass( 'dpsp-pin-it-wrapper' ) )
					return;

				// Return if image is not visible
				if( $image.outerWidth() <= 0 || $image.outerHeight() <= 0 )
					return;

				if( typeof $image.attr( 'data-pin-nopin' ) != 'undefined' )
					return;

				// Return if defined explicitly not to be pinned
				// This is a compatibility check from older versions and also for Gutenberg
				if( $image.hasClass( 'dpsp_no_pin' ) || $image.hasClass( 'nopin' ) || $image.parent().hasClass( 'nopin' ) ) {

					$image.attr( 'data-pin-nopin', 'true' );
					return;
					
				}

				// Return if image is smaller than the minimum sizes
				if( $image.outerWidth() < pin_data.minimum_image_width || $image.outerHeight() < pin_data.minimum_image_height )
					return;

				/**
				 * Get the pinnable image
				 *
				 */
				pin_image = '';

				// Set the hovered image data
				if( $image.attr( 'data-pin-media' ) )
					pin_image = $image.attr( 'data-pin-media' )

				else if ( $image.data( 'media' ) )
					pin_image = $image.data( 'media' );

				else if ( $image.data( 'lazy-src' ) )
				    pin_image = $image.data( 'lazy-src' );

				else if ( $image.attr( 'data-src' ) )
				    pin_image = $image.attr( 'data-src' );

				else if ( $image.attr( 'src' ) )
					pin_image = $image.attr( 'src' );


				// Set the post's custom Pinterest image
				if( pin_behavior == 'post_image' ) {

					if( typeof pin_data.pinterest_image_url != 'undefined' )
						pin_image = pin_data.pinterest_image_url;

				}
				
				if( pin_image == '' )
					return;


				/**
				 * Get the pinnable image description
				 *
				 */
				pin_description = ( typeof $image.attr('data-pin-description') != 'undefined' ? $image.attr('data-pin-description') : '' );

				// Set the post's custom Pinterest description
				if( pin_behavior == 'post_image' ) {

					if( typeof pin_data.pinterest_description != 'undefined' )
						pin_description = pin_data.pinterest_description;

				}


				// Wrap the image
				var image_classes = $image.attr( 'class' );
				var image_styles  = $image.attr( 'style' );

				// Exclude certain classes from being moved
				if( typeof image_classes != 'undefined' ) {

					var exclude_classes = [ 'lazyloaded', 'lazyload', 'td-animation-stack' ];

					var image_classes_arr = image_classes.split(' ');

					for( var i in image_classes_arr ) {

						if( typeof image_classes_arr[i] != 'string' )
							continue;

						for( var j in exclude_classes ) {

							if( image_classes_arr[i].indexOf( exclude_classes[j] ) != -1 )
								image_classes_arr[i] = '';

						}

	                }

	                image_classes = image_classes_arr.join(' ');

				}

				$image.wrap( '<span class="dpsp-pin-it-wrapper">' );

				$image.closest( '.dpsp-pin-it-wrapper' ).addClass( image_classes ).css( 'style', image_styles );
				$image.removeClass( image_classes ).css( 'style', '' );


				// Set the button's href
				var pin_button_href = '';

				// Set the button's href to repin, if data-pin-id exists
				if( typeof $image.attr( 'data-pin-id' ) != 'undefined' && $image.attr( 'data-pin-id' ) != '' )
					pin_button_href = 'https://pinterest.com/pin/' + $image.attr( 'data-pin-id' ) + '/repin/x/';
				else
					pin_button_href = 'https://pinterest.com/pin/create/bookmarklet/?media=' + encodeURI( pin_image ) + '&url=' + encodeURI( page_url ) + '&is_video=false' + '&description=' +  encodeURIComponent( pin_description );


				// Add the pin button
				$image.after( '<a class="dpsp-pin-it-button dpsp-pin-it-button-' + pin_data.button_position.replace( '_', '-' ) + ' dpsp-pin-it-button-shape-' + pin_data.button_shape + ' ' + ( pin_data.show_button_text_label ? 'dpsp-pin-it-button-has-label' : '' ) + '" href="' + pin_button_href + '">' + ( pin_data.show_button_text_label ? pin_data.button_text_label : '' ) + '</a>' );

				// Add overlay if set in settings
				if( pin_data.show_image_overlay )
					$image.after( '<span class="dpsp-pin-it-overlay"></span>' );

				// Position the button right in the center of the image
				if( pin_data.button_position == 'center' ) {

					$pin_button = $image.siblings( '.dpsp-pin-it-button' );
					$pin_button.css( 'margin-left', -$pin_button.outerWidth() / 2 ).css( 'margin-top', -$pin_button.outerHeight() / 2 );

				}

			});

		}

	});


	/**
	 * Remove the Pinterest image hover button generated by Pinterest browser extension
	 *
	 */
	$(document).on( 'mouseenter', 'img', function() {

		if( ! $(this).parent().hasClass( 'dpsp-pin-it-wrapper' ) )
			return;

		$('body > span').each( function() {

			if( this.attributes.length > 1 || this.attributes[0].name != 'style' )
				return;

			if( $(this).attr('style').indexOf( 'z-index: 8675309' ) != -1 && $(this).attr('style').indexOf( 'data:image/svg+xml' ) != -1 ) {
				$(this).remove();
			}

		});

		$('body span[class^="PIN_"]').remove();

	});

});