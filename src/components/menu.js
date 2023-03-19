export const menu = (() => {
	const container = document.createElement('main');
	container.classList.add('container', 'menu');

	const card_1 = document.createElement('div');
	card_1.classList.add('card');

	const card__image_1 = document.createElement('img');
	card__image_1.classList.add('card__image');
	card__image_1.src = 'egg.png';

	const card__title_1 = document.createElement('div');
	card__title_1.classList.add('card__text');
	card__title_1.innerText = 'Eggs Benedict Yakisoba';

	const card__description_1 = document.createElement('p');
	card__description_1.classList.add('card__text');
	card__description_1.innerText =
		'A fusion dish combining western-style Eggs Benedict with savory Japanese yakisoba noodles. Topped with a poached egg, hollandaise sauce, and bacon for a unique and delicious flavor experience.';

	const card__subtext_1 = document.createElement('p');
	card__subtext_1.classList.add('card__subtext');
	card__subtext_1.innerText = '$199';

	card_1.appendChild(card__image_1);
	card_1.appendChild(card__title_1);
	card_1.appendChild(card__description_1);
	card_1.appendChild(card__subtext_1);

	const card_2 = document.createElement('div');
	card_2.classList.add('card');

	const card__image_2 = document.createElement('img');
	card__image_2.classList.add('card__image');
	card__image_2.src = 'roast.jpg';

	const card__title_2 = document.createElement('div');
	card__title_2.classList.add('card__text');
	card__title_2.innerText = 'Gotcha Pork Roast';

	const card__description_2 = document.createElement('p');
	card__description_2.classList.add('card__text');
	card__description_2.innerText =
		'A savory pork dish coated in a flavorful herb crust, served with roasted vegetables and a side of tangy apple sauce. A must-try for meat lovers!';

	const card__subtext_2 = document.createElement('p');
	card__subtext_2.classList.add('card__subtext');
	card__subtext_2.innerText = '$299';

	card_2.appendChild(card__image_2);
	card_2.appendChild(card__title_2);
	card_2.appendChild(card__description_2);
	card_2.appendChild(card__subtext_2);

	const card_3 = document.createElement('div');
	card_3.classList.add('card');

	const card__image_3 = document.createElement('img');
	card__image_3.classList.add('card__image');
	card__image_3.src = 'transform.gif';

	const card__title_3 = document.createElement('div');
	card__title_3.classList.add('card__text');
	card__title_3.innerText = 'Transforming Furikake Gohan';

	const card__description_3 = document.createElement('p');
	card__description_3.classList.add('card__text');
	card__description_3.innerText =
		'A classic Japanese comfort food with a twist! Our special furikake seasoning mix transforms simple rice into a flavorful dish. Served with your choice of protein.';

	const card__subtext_3 = document.createElement('p');
	card__subtext_3.classList.add('card__subtext');
	card__subtext_3.innerText = '$199';

	card_3.appendChild(card__image_3);
	card_3.appendChild(card__title_3);
	card_3.appendChild(card__description_3);
	card_3.appendChild(card__subtext_3);

	container.appendChild(card_1);
	container.appendChild(card_2);
	container.appendChild(card_3);

	return container;
})();