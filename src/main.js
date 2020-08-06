import {
    changeRoute
} from './view-controller/router.js';

// inicializa la app
const init = () => {
    
    changeRoute(window.location.hash);

    window.addEventListener('locationchange', () => {
        changeRoute(window.location.hash);
    }); 

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'))
    });
}
window.addEventListener('load', init);




 