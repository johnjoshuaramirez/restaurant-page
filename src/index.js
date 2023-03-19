import './style.css';
import erina from './erina.jpg';
import ryo from './ryo.jpg';
import egg from './egg.png';
import roast from './roast.jpg';
import transform from './transform.gif';
import { header } from './components/header'
import { home } from './components/home';
import { menu } from './components/menu';
import { contact } from './components/contact';
import { footer } from './components/footer';

const main = () => {
   const main = document.createElement('main');
   main.appendChild(home);

   header.nav__item_1.addEventListener('click', () => {
      while (main.firstChild) {
         main.removeChild(main.firstChild);
      }
      main.appendChild(home);
   });

   header.nav__item_2.addEventListener('click', () => {
      while (main.firstChild) {
         main.removeChild(main.firstChild);
      }
      main.appendChild(menu);
   });

   header.nav__item_3.addEventListener('click', () => {
      while (main.firstChild) {
         main.removeChild(main.firstChild);
      }
      main.appendChild(contact);
   });

   return main;
}

const content = document.getElementById('content')
content.appendChild(header.header);
content.appendChild(main());
content.appendChild(footer);
