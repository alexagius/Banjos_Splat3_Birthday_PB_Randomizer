import _ from 'lodash';
import './custom.scss';
import Brinewater from './img/stages_splat3/Brinewater_Springs.png';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   const Brinewater = new Image();
      Brinewater.src = Brinewater;

      element.appendChild(Brinewater);

   return element;
 }

 document.body.appendChild(component());


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';



