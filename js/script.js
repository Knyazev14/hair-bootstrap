'use strict';

const menuIcon = document.querySelector('.menu__icon');
	if(menuIcon){
	const menuBody = document.querySelector('.header-menu');
	menuIcon.addEventListener("click", function(){
	menuIcon.classList.toggle("_active");
	menuBody.classList.toggle("_active");
})
}