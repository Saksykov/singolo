/* 
HEADER & SLIDER
*/
const header = document.getElementById('header');
const navContainer = document.getElementById('nav-container');
const nav = document.getElementById('main-nav');
const slider = document.getElementById("slider");


window.addEventListener('scroll', (e) => {
	if (window.scrollY >= slider.scrollHeight + 7) {
		header.classList.add('header-fixed');
		slider.classList.add('slider-fixed');
		navContainer.classList.add('nav-container-fixed');
	} else {
		header.classList.remove('header-fixed');
		slider.classList.remove('slider-fixed');
		navContainer.classList.remove('nav-container-fixed');
	}
})

nav.addEventListener('click', e => {
	if (e.target != nav) {
		nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
		e.target.classList.add('active');
	}
})