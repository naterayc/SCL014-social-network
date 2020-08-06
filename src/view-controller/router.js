import { signInView } from '../view/sign-in.js';
import { wallView } from '../view/wall.js'; 
import { destinyView } from '../view/destiny.js'; 

 export const changeRoute = (hash) => {

    if (hash === '#/') return showViews(hash);
    if (hash === '#/wall') return showViews(hash);
    if (hash === '#/destiny') return showViews(hash);

    return showViews(hash);
}

const showViews = (hash) => {
    console.log('esta en show view')
    const viewsContainer = document.getElementById('containerViews');
    viewsContainer.innerHTML='';
    console.log(window.location.hash);
    console.log(hash);
    switch (hash) {
        case '#/' : 
            console.log('pagina principal')
            viewsContainer.appendChild(signInView());
        break;
        case '#/wall' :
            console.log('va al muro')  
            viewsContainer.appendChild(wallView());
        break;
        case '#/destiny' :
            viewsContainer.appendChild(destinyView());
            console.log('entro a destiny');
        break;
        default: 
            viewsContainer.innerHTML = `<h2> Not Found Error 404</h2>`
    }
} 

