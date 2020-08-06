import {
    signInView
} from './view/sign-in.js';

import { 
    changeRoute 
} from './view-controller/router.js';


// inicializa la app
const init = () => {
    let firstView = document.getElementById('containerViews');
    firstView.appendChild(signInView());
    window.addEventListener('hashchange', () =>{
    
    changeRoute(window.location.hash);
    console.log(window.location.hash);
    });
}
window.addEventListener('load', init);
