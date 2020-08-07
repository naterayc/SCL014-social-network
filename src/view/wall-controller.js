import {
    changeRoute
} from '../view-controller/router.js'
import { wallContent } from './wall-view.js';
export const wallView = () => {

    document.getElementById('body').style.background = 'transparent';

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.getElementById('containerViews').appendChild(wall);

    const btnPost = wall.querySelector('#post');
    btnPost.addEventListener('click', () => {
        changeRoute('#/destiny');
    });

    const menu = document.getElementById('show-signout');
    const signOutBar = document.getElementById('sign-out');
    menu.addEventListener('click', () => {
        signOutBar.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target == signOutBar){
        signOutBar.style.display = 'none';
        }
    });
}










