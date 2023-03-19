export const home = (() => {
	const container = document.createElement('main');
	container.classList.add('container', 'home');

	const content = document.createElement('div');
	content.classList.add('content');

	const content__title = document.createElement('p');
	content__title.classList.add('content__title');

	const content__text = document.createElement('span');
	content__text.classList.add('content__text');
	content__text.innerText =
		'Welcome to Yukihira Restaurant! Experience delicious food crafted with fresh ingredients, unique flair, and even culinary battles. Come prepared to be amazed!';

	const content__subtext = document.createElement('p');
	content__subtext.classList.add('content__subtext');
	content__subtext.innerText = 'Spice up your life!';

	content__title.appendChild(content__text);
	content.appendChild(content__title);
	content.appendChild(content__subtext);

	const card_1 = document.createElement('div');
	card_1.classList.add('card');

	const card__image_1 = document.createElement('img');
	card__image_1.classList.add('card__image');
	card__image_1.src = 'erina.jpg';

	const card__text_1 = document.createElement('p');
	card__text_1.innerText =
		'The dishes at his restaurant showcase not only his skills, but also his passion for cooking. A must-visit for food lovers!';

	const card__subtext_1 = document.createElement('p');
	card__subtext_1.classList.add('card__subtext');
	card__subtext_1.innerText = 'Nakiri Erina';

	const card_2 = document.createElement('div');
	card_2.classList.add('card');

	const card__image_2 = document.createElement('img');
	card__image_2.classList.add('card__image');
	card__image_2.src = 'ryo.jpg';

	const card__text_2 = document.createElement('p');
	card__text_2.innerText =
		"Soma's relentless pursuit of culinary perfection is reflected in every bite. Truly an exceptional dining experience.";

	const card__subtext_2 = document.createElement('p');
	card__subtext_2.classList.add('card__subtext');
	card__subtext_2.innerText = 'Ryo Kurokiba';

	card_1.appendChild(card__image_1);
	card_1.appendChild(card__text_1);
	card_1.appendChild(card__subtext_1);

	card_2.appendChild(card__image_2);
	card_2.appendChild(card__text_2);
	card_2.appendChild(card__subtext_2);

	container.appendChild(content);
	container.appendChild(card_1);
	container.appendChild(card_2);

	return container;
})();