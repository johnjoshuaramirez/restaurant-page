export const contact = (() => {
	const container = document.createElement('main');
	container.classList.add('container', 'contact');

	const content = document.createElement('div');
	content.classList.add('content', 'content--center');

	const h1_1 = document.createElement('h1');
	h1_1.classList.add('content__text', 'content__text--sm');
	h1_1.innerText = 'TIME';
	const h1_2 = document.createElement('h1');
	h1_2.classList.add('content__text', 'content__text--sm', 'content__text--black');
	h1_2.innerText = 'MON - SUN: 8AM - 11PM';

	const h1_3 = document.createElement('h1');
	h1_3.classList.add('content__text', 'content__text--sm');
	h1_3.innerText = 'TIME';
	const h1_4 = document.createElement('h1');
	h1_4.classList.add('content__text', 'content__text--sm', 'content__text--black');
	h1_4.innerText = 'MON - SUN: 8AM - 11PM';

	const h1_5 = document.createElement('h1');
	h1_5.classList.add('content__text', 'content__text--sm');
	h1_5.innerText = 'TIME';
	const h1_6 = document.createElement('h1');
	h1_6.classList.add('content__text', 'content__text--sm', 'content__text--black');
	h1_6.innerText = 'MON - SUN: 8AM - 11PM';

	content.appendChild(h1_1);
	content.appendChild(h1_2);
	content.appendChild(h1_3);
	content.appendChild(h1_4);
	content.appendChild(h1_5);
	content.appendChild(h1_6);

	container.appendChild(content);
	return container;
})();