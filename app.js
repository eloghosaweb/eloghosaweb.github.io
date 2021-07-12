const right = document.querySelector('.right');
const left = document.querySelector('.left');
const header_menu = document.querySelector('.header-menu');
const menu_open = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');
const scroll = document.querySelector('.scroll');
const freelance = document.querySelector('.freelance');

window.addEventListener('scroll', () => {
	if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
		right.style.width = '0%';
		left.style.width = '100%';
		scroll.style.display = 'none';
		freelance.style.width = '50%';
	} else {
		right.style.width = '50%';
		left.style.width = '50%';
		scroll.style.display = 'block';
		freelance.style.width = '100%';
	}
});

menu_open.addEventListener('click', () => {
	header_menu.classList.add('header-menu-open');
});
menu_close.addEventListener('click', () => {
	header_menu.classList.remove('header-menu-open');
});
