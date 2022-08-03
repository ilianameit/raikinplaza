(function () {
	$('.header__burger').on('click', function() {
		$('.burger').toggleClass('animate');
		$('#menu').toggleClass('active');
		$('.head').toggleClass('white');
	})
})();
let li = document.querySelectorAll(".footer__list li");
li.forEach(element => {
    element.addEventListener("click", function(e){
       let target = e.currentTarget;
        removeClass();
         target.classList.add('active');
    });
});
    

    function removeClass(){
        li.forEach(element => {
          element.classList.remove('active');
        });
      }
//# sourceMappingURL=bundle.js.map
