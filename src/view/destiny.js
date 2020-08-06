import {
    changeRoute
} from '../view-controller/router.js'
import { destinyContent } from './destiny-view.js';
export const destinyView = () => {
   
    const destinyWall = document.createElement('div');
    destinyWall.setAttribute('id', 'contenedor');
    destinyWall.innerHTML = destinyContent;
    document.getElementById('containerViews').appendChild(destinyWall);

    const btnPost = document.querySelector('#post');
    btnPost.addEventListener('click', () => {
        console.log(window.location.hash);
        changeRoute('#/wall');
        console.log('se cambio ruta');
    });

    return destinyWall;

}
