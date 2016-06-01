
jQuery(document).ready(function($){

	//codyhouse.co - nav
	var isLateralNavAnimating = false;

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	//close nav when menu link is clicked
	$('.cd-primary-nav li a').on('click', function() {
		$('body').toggleClass('navigation-is-open');
	});




	//skills tab section

	//on click
	$('ul.skills-tabs li').click(function(e) {
		//check to see if tab has a class of active
		if(!$(this).hasClass('active')) {
			//if it doesn't check which tab index is clicked
			var tab = $(this).index();
			var nthChild = tab+1;

			//remove class
			$('ul.skills-tabs li.active').removeClass('active');
			//add class to tab just clicked
			$(this).addClass('active');
			$('ul.skill-tab li.active').removeClass('active');
			$('ul.skill-tab li:nth-child('+nthChild+')').addClass('active');
		}
	});


	//education tab section
	//on click
	$('ul.education-tabs li').click(function(e) {
		//check to see if tab has a class of active
		if(!$(this).hasClass('active')) {
			//if it doesn't - check which tab index is clicked
			var educationTab = $(this).index();
			var nthOfChild = educationTab+1;

			//remove active class from current tab
			$('ul.education-tabs li.active').removeClass('active');
			//add class to tab just clicked
			$(this).addClass('active');
			$('ul.education li.active').removeClass('active');
			$('ul.education li:nth-child('+nthOfChild+')').addClass('active');
		}
	});


	//get current year
	function getCurrentYear() {
		var date = new Date();
		var year = date.getFullYear();
		$('#year').html(year);
	}

	getCurrentYear();

});
