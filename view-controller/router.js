import { signInView } from '../view/sign-in.js';
import { wallView } from '../view/wall.js'; 

 export const changeRoute = (hash) => {
    if (hash !== '#/') {
        console.log('hash solo')
        return showViews(hash);
    } else if (hash === '#/wall') {
        console.log('hash wall')
        return showView(hash);
    } else {
        console.log('hash undefined')
        return showViews(hash);
    }
}
const showViews = (hash) => {
    console.log('esta en show view')
    const viewsContainer = document.getElementById('containerViews');
    //viewsContainer.appendChild(signInView());
    
    switch (hash) {
        case '#/' : 
            console.log('pagina principal')
            viewsContainer.innerHTML='';
            viewsContainer.appendChild(signInView());
        break;
        case '#/wall' :
            console.log('va al muro')  
            viewsContainer.innerHTML='';
            viewsContainer.appendChild(wallView());
        break;
        default: 
            viewsContainer.innerHTML='';
            viewsContainer.innerHTML = `<h2> Not Found Error 404</h2>`
    }
} 

