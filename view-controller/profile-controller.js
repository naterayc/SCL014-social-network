import { pushState } from './router.js'
import { profileContent } from '../view/profile-view.js';
import { getUserByEmail, getPublishByUid } from '../lib/firebase/firebase-firestore.js';
import { mypostPlantilla } from '../view/mypost-content-view.js';
import { postEmptyPlantilla } from '../view/post-empty-view.js';


const profileView = () => {

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
            const profileWall = document.createElement('div');
            profileWall.setAttribute('id', 'contenedor');
            profileWall.innerHTML = render;
            document.querySelector('#containerViews').appendChild(profileWall);


            document.querySelector('#body').style.background = 'transparent';

            const goHome = document.querySelector('#home');
            goHome.addEventListener('click', () => {
                pushState('#/wall')
            });
            renderProfileP();
        });
};

const renderProfileP = () => {
    const users = JSON.parse(localStorage.getItem('user'));
    const containerProfilePost = document.querySelector('#boxmypost');
    getPublishByUid(users.uid)
        .then((coleccion) => {
            if (coleccion === undefined) {
                containerProfilePost.innerHTML = postEmptyPlantilla;
            } else {
            coleccion.forEach((post) => {
                const data = post.data();
                const renderProfilePublish = mypostPlantilla(
                    data.postImg,
                    data.likes.length,
                );    
                containerProfilePost.innerHTML += renderProfilePublish;
            });
        }
        })

}
export{
    profileView,
    renderProfileP
}