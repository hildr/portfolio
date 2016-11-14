var menu = document.querySelector('.menu');

window.addEventListener('scroll', function() {

	if(this.pageYOffset >= 80) {
		menu.classList.add('sticky');
		menu.classList.remove('menu');
	} else{
		menu.classList.remove('sticky');
		menu.classList.add('menu');
	}
	// console.log(this.pageYOffset);
	
});


