import { pushState } from './router.js'
import { profileContent } from '../view/profile-view.js';

export const profileView = () => {

    renderProfile();

    document.querySelector('#body').style.background = 'transparent';
    
    const goHome = document.querySelector('#home');
    goHome.addEventListener('click', () => {
        pushState('#/wall')
    }); 
}
 const renderProfile = (data) => {
     const users = JSON.parse(localStorage.getItem('user'));
     const render = profileContent(
        users.photo ? users.photo : 'img/viajera3.jpg',
        users.name ? users.name : users.email,
        users.location ? users.location : 'Tu pais'
     );
     // Renderiza profileView en la App.
    const profileWall = document.createElement('div');
    profileWall.setAttribute('id', 'contenedor');
    profileWall.innerHTML = render;
    document.querySelector('#containerViews').appendChild(profileWall);
 }