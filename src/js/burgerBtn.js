(function () {
	$('.header__burger').on('click', function() {
		$('.burger').toggleClass('animate');
		$('#menu').toggleClass('active');
		$('.head').toggleClass('white');
	})
})();