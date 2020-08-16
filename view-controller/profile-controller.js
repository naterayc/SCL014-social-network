import { pushState } from './router.js'
import { profileContent } from '../view/profile-view.js';
import { getUserByEmail } from '../lib/firebase/firebase-firestore.js';

export const profileView = () => {

    renderProfile();
    
}
const renderProfile = () => {
    const users = JSON.parse(localStorage.getItem('user'));
    getUserByEmail(users.email)
        .then((userFound) => {
            const render = profileContent(
                users.photo ? users.photo : 'img/viaje.png',
                userFound.user ? userFound.user : users.name,
                userFound.country ? userFound.country : 'Tu pais'
            );
            // Renderiza profileView en la App.
            const profileWall = document.createElement('div');
            profileWall.setAttribute('id', 'contenedor');
            profileWall.innerHTML = render;
            document.querySelector('#containerViews').appendChild(profileWall);

            document.querySelector('#body').style.background = 'transparent';

    const goHome = document.querySelector('#home');
    goHome.addEventListener('click', () => {
        pushState('#/wall')
    });
        })

}