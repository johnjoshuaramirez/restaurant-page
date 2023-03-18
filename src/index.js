import './style.css';
import erina from './erina.jpg';
import ryo from './ryo.jpg';
import egg from './egg.png';
import roast from './roast.jpg';
import transform from './transform.gif';

const header = () => {
   const header = document.createElement('header');
   header.classList.add('header');

   const h1 = document.createElement('h1');
   h1.classList.add('header__title');
   h1.innerText = 'Yukihira Restaurant';

   const nav = document.createElement('nav');
   nav.classList.add('nav');

   const div_1 = document.createElement('div');
   div_1.classList.add('nav__item');
   div_1.innerText = 'Home';
   const div_2 = document.createElement('div');
   div_2.classList.add('nav__item');
   div_2.innerText = 'Menu';
   const div_3 = document.createElement('div')
   div_3.classList.add('nav__item');
   div_3.innerText = 'Contact';

   header.appendChild(h1);
   nav.appendChild(div_1)
   nav.appendChild(div_2);
   nav.appendChild(div_3);
   header.appendChild(nav);

   return header;
}

const home = () => {
   const home = document.createElement('main');
   home.classList.add('container', 'home');

   return home
}

const app = () => {
   const app =document.createElement('div');
   app.appendChild(header());
   app.appendChild(home());
   return app
}

document.getElementById('content').appendChild(app());