import './style.css';
import erina from './erina.jpg';
import ryo from './ryo.jpg';
import egg from './egg.png';
import roast from './roast.jpg';
import transform from './transform.gif';

const header = () => {
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

   const nav__item_3 = document.createElement('div')
   nav__item_3.classList.add('nav__item');
   nav__item_3.innerText = 'Contact';

   header.appendChild(header__title);
   nav.appendChild(nav__item_1)
   nav.appendChild(nav__item_2);
   nav.appendChild(nav__item_3);
   header.appendChild(nav);

   return header;
}

const home = () => {
   const container = document.createElement('main');
   container.classList.add('container', 'home');

   const content = document.createElement('div');
   content.classList.add('content');

   const content__title = document.createElement('p');
   content__title.classList.add('content__title');

   const content__text = document.createElement('span');
   content__text.classList.add('content__text');
   content__text.innerText = 'Welcome to Yukihira Restaurant! Experience delicious food crafted with fresh ingredients, unique flair, and even culinary battles. Come prepared to be amazed!';

   const content__subtext = document.createElement('p');
   content__subtext.classList.add('content__subtext');
   content__subtext.innerText = 'Spice up your life!';

   content__title.appendChild(content__text);
   content.appendChild(content__title);
   content.appendChild(content__subtext);

   const card_1 = document.createElement('div')
   card_1.classList.add('card');

   const card__image_1 = document.createElement('img');
   card__image_1.classList.add('card__image')
   card__image_1.src = 'erina.jpg';

   const card__text_1 = document.createElement('p');
   card__text_1.innerText = 'The dishes at his restaurant showcase not only his skills, but also his passion for cooking. A must-visit for food lovers!';

   const card__subtext_1 = document.createElement('p');
   card__subtext_1.classList.add('card__subtext');
   card__subtext_1.innerText = 'Nakiri Erina';

   const card_2 = document.createElement('div')
   card_2.classList.add('card');

   const card__image_2 = document.createElement('img');
   card__image_2.classList.add('card__image')
   card__image_2.src = 'ryo.jpg';

   const card__text_2 = document.createElement('p');
   card__text_2.innerText = 'Soma\'s relentless pursuit of culinary perfection is reflected in every bite. Truly an exceptional dining experience.';

   const card__subtext_2 = document.createElement('p');
   card__subtext_2.classList.add('card__subtext');
   card__subtext_2.innerText = 'Ryo Kurokiba';

   card_1.appendChild(card__image_1);
   card_1.appendChild(card__text_1);
   card_1.appendChild(card__subtext_1);

   card_2.appendChild(card__image_2)
   card_2.appendChild(card__text_2);
   card_2.appendChild(card__subtext_2);

   container.appendChild(content);
   container.appendChild(card_1);
   container.appendChild(card_2);

   return container;
}

const menu = () => {
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
   card__description_1.innerText = 'A fusion dish combining western-style Eggs Benedict with savory Japanese yakisoba noodles. Topped with a poached egg, hollandaise sauce, and bacon for a unique and delicious flavor experience.';

   const card__subtext_1 = document.createElement('p');
   card__subtext_1.classList.add('card__subtext');
   card__subtext_1.innerText = '$199';
   
   card_1.appendChild(card__image_1);
   card_1.appendChild(card__title_1)
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
   card__description_2.innerText = 'A savory pork dish coated in a flavorful herb crust, served with roasted vegetables and a side of tangy apple sauce. A must-try for meat lovers!';

   const card__subtext_2 = document.createElement('p');
   card__subtext_2.classList.add('card__subtext');
   card__subtext_2.innerText = '$299';
   
   card_2.appendChild(card__image_2);
   card_2.appendChild(card__title_2)
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
   card__description_3.innerText = 'A classic Japanese comfort food with a twist! Our special furikake seasoning mix transforms simple rice into a flavorful dish. Served with your choice of protein.';

   const card__subtext_3 = document.createElement('p');
   card__subtext_3.classList.add('card__subtext');
   card__subtext_3.innerText = '$199';
   
   card_3.appendChild(card__image_3);
   card_3.appendChild(card__title_3)
   card_3.appendChild(card__description_3);
   card_3.appendChild(card__subtext_3);

   container.appendChild(card_1);
   container.appendChild(card_2);
   container.appendChild(card_3);
   return container;
}

const contact = () => {
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
}

const footer = () => {
   const footer = document.createElement('footer');
   const span = document.createElement('span');
   span.innerText = 'Yukihira Restaurant';
   footer.appendChild(span);

   return footer;
}

const app = () => {
   const app = document.createElement('div');
   app.appendChild(header());
   app.appendChild(home());
   app.appendChild(menu());
   app.appendChild(contact());
   app.appendChild(footer());
   return app
}

document.getElementById('content').appendChild(app());