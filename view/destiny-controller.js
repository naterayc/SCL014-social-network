import {
    changeRoute, pushState
} from '../view-controller/router.js'
import { destinyContent } from './destiny-view.js';

export const destinyView = () => {
   
    document.getElementById('body').style.background = 'transparent';
    
    const destinyWall = document.createElement('div');
    destinyWall.setAttribute('id', 'contenedor');
    destinyWall.innerHTML = destinyContent;
    document.getElementById('containerViews').appendChild(destinyWall);
    
    const goHome = document.getElementById('home');
    goHome.addEventListener('click', () => {
        pushState('#/wall');
    }); 

    const back = document.getElementById('back');
    back.addEventListener('click', ()=> {
        pushState('#/wall');
    });

    const goProfile = document.getElementById('profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });
}
