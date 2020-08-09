import {
    changeRoute, pushState
} from '../view-controller/router.js'
import { wallContent } from './wall-view.js';
import { signOut } from '../lib/firebase/firebase-auth.js';
import { savePublish, obtenerPublish, deletePublish } from '../lib/firebase/firebase-firestore.js';
import { postPlantilla } from "./post-content-view.js";

export const wallView = () => {

    document.getElementById('body').style.background = 'transparent';

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.getElementById('containerViews').appendChild(wall);

    const container = document.querySelector('#container-post');

    const user = JSON.parse(localStorage.getItem('user'));
    if (user.photo !== null) {
        const userPhoto = document.querySelector('#user-photo');
        userPhoto.setAttribute('src', user.photo);
    }

    let photo = null;
    const loadPhoto = document.querySelector('#load-photo');
    loadPhoto.addEventListener('change', () => {
        const photoLoaded = loadPhoto.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            photo = reader.result;
            // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
            // var b64 = reader.result.replace(/^data:.+;base64,/, '');
            console.log('archivo cargado');
        };

        reader.readAsDataURL(photoLoaded);

    });

    const publish = document.querySelector('#publish');
    publish.addEventListener('click', () => {
        const postText = document.querySelector('#post-title').value;
        const postImg = photo;
        const date = new Date().toLocaleString();
        savePublish({
            postText: postText,
            postImg: postImg,
            date: date,
            likes: 0
        }).then(() => {
            getPublishPrint();
        });
    });

    const btnPost = wall.querySelector('#post');
    btnPost.addEventListener('click', () => {
        pushState('#/destiny');
    });

    const menu = document.getElementById('show-signout');
    const signOutBar = document.getElementById('sign-out');
    menu.addEventListener('click', () => {
        signOutBar.classList.remove('hide');
    });

    signOutBar.addEventListener('click', () => {
        signOut();
        const body = document.getElementById('body');
        body.style.background = 'linear-gradient(180deg, #FFFFFF 6.25%, #C5E0EF 35.94%, #2979FF 76.04%)';
        body.style.backgroundAttachment = ' fixed';
    });

    const goTop = document.getElementById('home');
    goTop.addEventListener('click', () => {
        const header = document.querySelector('#header');
        header.scrollIntoView({ behavior: 'smooth' });
    });

    const goProfile = document.getElementById('profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });

    /*const postConfig = document.getElementById('show-options');
    const editPost = document.getElementById('edit-post');
    postConfig.addEventListener('click', () => {
        editPost.style.display = "flex";
    });*/

    const getPublishPrint = () => {
        container.innerHTML = '';
        obtenerPublish().then((arrayPublish) => {
            renderPublish(arrayPublish, container);
            const editor = container.querySelectorAll('.show-options');            
            editor.forEach(icon => {
               const parentDiv =  icon.parentElement.parentElement;
                icon.addEventListener('click', () => {
                    parentDiv.querySelector('.edit-post').style.display = "flex";
                });
                parentDiv.querySelector('.delete-option').addEventListener('click', () => {
                   deletePublish(parentDiv.dataset.id)
                   .then(()=>{
                    getPublishPrint();
                   })
                });
            });

        });
    };

    getPublishPrint();
}

const renderPublish = (arrayPublish, container) => {
    arrayPublish.forEach(doc => {
        const data = doc.data();
        const postRender = postPlantilla(
            doc.id,
            data.postImg,
            0,
            data.likes,
            'https://avatars2.githubusercontent.com/u/66418488?s=460&u=426e67c2f5f2fb4dc243355a6c1f2da9841a0370&v=4',
            data.postText,
            data.date
        );
        const divPost = document.createElement('div');
        divPost.innerHTML = postRender;
        container.appendChild(divPost);
    });
};








