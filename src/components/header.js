export const header = (() => {
	const header = document.createElement('header');
	header.classList.add('header');

	const header__title = document.createElement('h1');
	header__title.classList.add('header__title');
	header__title.innerText = 'Yukihira Restaurant';

	const nav = document.createElement('nav');
	nav.classList.add('nav');

	const nav__item_1 = document.createElement('div');
	nav__item_1.classList.add('nav__item');
	nav__item_1.innerText = 'Home';

	const nav__item_2 = document.createElement('div');
	nav__item_2.classList.add('nav__item');
	nav__item_2.innerText = 'Menu';

	const nav__item_3 = document.createElement('div');
	nav__item_3.classList.add('nav__item');
	nav__item_3.innerText = 'Contact';

	header.appendChild(header__title);
	nav.appendChild(nav__item_1);
	nav.appendChild(nav__item_2);
	nav.appendChild(nav__item_3);
	header.appendChild(nav);

	return {
      header,
      nav__item_1,
      nav__item_2,
      nav__item_3
   }
})();