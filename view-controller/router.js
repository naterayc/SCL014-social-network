import { signInView } from '../view/sign-in-controller.js';
import { wallView } from '../view/wall-controller.js'; 
import { destinyView } from '../view/destiny-controller.js'; 

export const changeRoute = (hash) => {
    if (hash === '') {
        window.location.hash = '#/';
        return showViews('#/');
    }
    return showViews(hash);
}

const showViews = (hash) => {
    
    const viewsContainer = document.getElementById('containerViews');
    viewsContainer.innerHTML='';
    
    switch (hash) {
        case '#/' : 
            signInView();
        break;
        case '#/wall' :
            wallView();
        break;
        case '#/destiny' :
            destinyView();
        break;
        default: 
            viewsContainer.innerHTML = `<h2> Not Found Error 404</h2>`
    }
} 

export const pushState = (route) => {
    var stateObj = { };
    history.pushState(stateObj, "page 2", route);
    window.dispatchEvent(new Event('pushState'));
    window.dispatchEvent(new Event('locationchange'));
}


