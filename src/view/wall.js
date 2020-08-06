import {
    changeRoute
} from '../view-controller/router.js'
import { wallContent } from './wall-view.js';
export const wallView = () => {

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.getElementById('containerViews').appendChild(wall);

    const btnPost = wall.querySelector('#post');
    btnPost.addEventListener('click', () => {
        changeRoute('#/destiny');
    });

}










