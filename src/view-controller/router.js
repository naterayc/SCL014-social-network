import { signInView } from '../view/sign-in.js';
import { wallView } from '../view/wall.js'; 
import { destinyView } from '../view/destiny.js'; 

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


