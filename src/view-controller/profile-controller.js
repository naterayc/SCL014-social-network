import { pushState } from './router.js'
import { profileContent } from '../view/profile-view.js';

export const profileView = () => {

    document.querySelector('#body').style.background = 'transparent';
    // Renderiza profileView en la App.
    const profileWall = document.createElement('div');
    profileWall.setAttribute('id', 'contenedor');
    profileWall.innerHTML = profileContent;
    document.querySelector('#containerViews').appendChild(profileWall);
    
    const goHome = document.querySelector('#home');
    goHome.addEventListener('click', () => {
        pushState('#/wall')
    }); 
}
