// Navigation Effects
$( ".navbar-default .navbar-nav>li>a" ).hover(
	function() {
		$( this ).addClass( "hover" );
	}, function() {
		$( this ).addClass( "animate" );
		$( this ).removeClass( "hover" );
		var link = this;
		setTimeout(function(){$( link ).removeClass( "animate" );}, 300);
	}
);

// Header  Effects
$(window).scroll(function() {
	var header = $('header'),
		scroll = $(window).scrollTop();
	if (scroll >= 1) {
		$(header).addClass('stick');
	}
	else {
		$(header).removeClass('stick');
	}
});

// Sliders
$("#bannerSlides, #testimonialSlides").owlCarousel({
	navigation : false, // Hide next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true
});

// Counter Up
$(".count").counterUp({
	delay: 20,
	time: 2500
});


// Auto Height
$(document).ready(function(){
	var targetContainer = $(".newsHolder .col"),
		colNumber = 3;
	for(var i = 0; i < targetContainer.length; i+=colNumber) {
		targetContainer.slice(i, i+colNumber).wrapAll("<div class='rowInner clearfix'></div>");
	}

	$('.rowInner').each(function(){
		var highestBox = 0;
		$(".newsContent", this).each(function(){
			if($(this).outerHeight() > highestBox)
				highestBox = $(this).outerHeight();
		});
		$(".newsContent", this).height(highestBox);
	});
});

// Form Effects
$(" .form-control ").click(function () {
	$(" .form-control ").parent().removeClass("active");
	$( this ).parent().addClass("active");
})
