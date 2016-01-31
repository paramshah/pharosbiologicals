$(document).ready(function(){

	// mobile menu
	window.menuFun = {
		show: function($this){
			
			if ( !$this ) { $this = $('.mobile-menu-area .active');}
			$('body').addClass('active-mobile-menu');

			$('#menu-back-btn').addClass('active').siblings().removeClass('active');
		},

		hide: function($this){
			if ( !$this ) { $this = $('.mobile-menu-area .active'); }
			$('body').removeClass('active-mobile-menu');

			$('#menu-show-btn').addClass('active').siblings().removeClass('active');
		}
	};

	$('.mobile-menu-area > i').on('click', function(e){
		if ( $(this).attr('id') == 'menu-show-btn' ) {
			menuFun.show($(this));
		} else {
			menuFun.hide($(this));
		}
	});

	$('.nav-overlay-bg').on('click', function(){
		menuFun.hide();
	});

	// jwplayer video post
	(function(){

		$('.player').each(function(){

			var $this = $(this),

			defaults = {
				fileSrc : '',
				imageSrc : '',
				id : '',
				width : '100%',
				height : '100%',
				aspectratio : ''
			},

			config = {
				fileSrc : $(this).data('file-sec') || defaults.fileSrc,
				imageSrc : $(this).data('image-src') || defaults.imageSrc,
				id : $(this).attr('id'),
				width : $(this).data('width') || defaults.width,
				height : $(this).data('height') || defaults.height,
				aspectratio : $(this).data('aspectratio') || defaults.aspectratio
			};


			var player = jwplayer(config.id).setup({
				file: config.fileSrc,
				image: config.imageSrc,
				width: config.width,
				height: config.height,
				aspectratio : config.aspectratio
			});

			player.onPlay(function(e){
				$(this.container).find('.jwcontrolbar').show();
				$(this.container).closest('.post-thumb-wrap').find('.post-meta-info').hide();
			}).onComplete(function(){
				$(this.container).find('.jwcontrolbar').hide();
				$(this.container).closest('.post-thumb-wrap').find('.post-meta-info').show();
			});

		});

	}());


	// blog post slider
	(function(){

		var $blog_post_slider  = $('.thumb-slides-container');

		if ( $blog_post_slider.length > 0 ) {

			$blog_post_slider.each(function(){
				$(this).owlCarousel({
					singleItem : true,
				    autoPlay : true,
				    stopOnHover : true,
					slideSpeed : 800,
					pagination : true,
					transitionStyle : 'fade'
				});
			});


			$('.thumb-slides-controller a').click(function(e){

				e.preventDefault();

				var blog_post_slider_data = $(this).closest('.blog-post-thumb-container').children('.thumb-slides-container').data('owlCarousel');

				( $(this).hasClass('left-arrow') ) ? blog_post_slider_data.prev() : blog_post_slider_data.next();
			});
		}

	}());

	// Submit button states
	var matXForm = $('.matx-form-valid');
	if ( matXForm.length > 0 ) {
		matXForm.matxSubmitValidate();	
	}


	$('.sec-full').css( 'min-height',  $(window).height()+'px' );
});


$(window).load(function(){

	// Hide Loader
	$('#loader').fadeOut();

	// Wow init
	new WOW({
		offset: 150,
		mobile: false
	}).init();

	// Parallax
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) === false) {
		window.skrolr = skrollr.init({
			smoothScrolling : false,
			forceHeight : false,
		    easing: {
		        //This easing will sure drive you crazy
		        wtf: Math.random,
		        inverted: function(p) {
		            return 1 - p;
		        }
		    }
		});
	}

});