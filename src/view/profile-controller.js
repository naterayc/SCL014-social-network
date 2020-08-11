import { pushState } from '../view-controller/router.js'
import { profileContent } from './profile-view.js';

export const profileView = () => {

    document.getElementById('body').style.background = 'transparent';
   
    const profileWall = document.createElement('div');
    profileWall.setAttribute('id', 'contenedor');
    profileWall.innerHTML = profileContent;
    document.getElementById('containerViews').appendChild(profileWall);
    
    const goHome = document.getElementById('home');
    goHome.addEventListener('click', () => {
        pushState('#/wall')
    }); 
}
