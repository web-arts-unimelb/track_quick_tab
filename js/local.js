(function ($) {
  Drupal.behaviors.track_quick_tab = {
    attach: function(context, settings) {
			$(document).ready(function() {
				var selector = "ul.quicktabs-tabs li a";
				// http://api.jquery.com/on/
				$(selector).on("click", function() {
					var protocol = window.location.protocol;
					var uri = $(this).attr('href');
					// http://stackoverflow.com/questions/1368264/how-to-get-host-name-in-javascript
					var host = window.location.hostname; 
					var url = protocol + '//' + host + uri; 
					var text = $(this).text();

					/*
					console.log('-start-');
  				console.log(url);
					console.log(text);
					*/			

					dataLayer.push({
						'event': 'arts_staff_quick_tab_click',
						'arts_staff_main_page_url': url,
						'arts_staff_main_page_title': text 
					});

				});
			});
		}
	}

	// Define your func


})(jQuery);
