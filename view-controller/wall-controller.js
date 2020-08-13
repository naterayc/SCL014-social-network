import { pushState } from './router.js'
import { wallContent } from '../view/wall-view.js';
import { signOut } from '../lib/firebase/firebase-auth.js';
import {
    savePublish,
    obtenerPublish,
    deletePublish,
    getDoc,
    updateDoc
} from '../lib/firebase/firebase-firestore.js';
import { postPlantilla } from "../view/post-content-view.js";
import { postEmptyPlantilla } from "../view/post-empty-view.js"

export const wallView = () => {

    document.querySelector('#body').style.background = 'transparent';

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.querySelector('#containerViews').appendChild(wall);

    const container = document.querySelector('#container-post');

    //coloca foto del usuario cuando este tenga alguna
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.photo !== null) {
        const userPhoto = document.querySelector('#user-photo');
        userPhoto.setAttribute('src', user.photo);
    }

    //carga fotos 
    let photo = null;
    const loadPhoto = document.querySelector('#load-photo');
    loadPhoto.addEventListener('change', () => {
        const photoLoaded = loadPhoto.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            photo = reader.result;
            console.log('archivo cargado');
        };

        reader.readAsDataURL(photoLoaded);

    });

    //se publica el post
    const publish = document.querySelector('#publish');
    publish.addEventListener('click', () => {
        const postText = document.querySelector('#post-title').value;
        const postImg = photo;
        const date = new Date().toLocaleString();
        const user = JSON.parse(localStorage.getItem('user'));
        savePublish({
            postText: postText,
            postImg: postImg,
            date: date,
            likes: [],
            userUid: user.uid,
            userPhoto: user.photo
        }).then(() => {
            getPublishPrint();
        });
    });

    const btnPost = wall.querySelector('#post');
    btnPost.addEventListener('click', () => {
        pushState('#/destiny');
    });

    const menu = document.querySelector('#show-signout');
    const signOutBar = document.querySelector('#sign-out');
    menu.addEventListener('click', () => {
        signOutBar.classList.remove('hide');
    });

    signOutBar.addEventListener('click', () => {
        signOut();
        const body = document.querySelector('#body');
        const screen = window.matchMedia('(min-width: 700px)');
        const showWallDesktop = () => {
            const myMedia = (screenSize) => {
                if (screenSize.matches) { // If media query matches
                    /*console.log('screen mayor 700px');*/
                    body.style.background = 'trasparent';
                    body.style.backgroundImage = 'url("./img/backimg.jpg")';
                    body.style.backgroundAttachment = 'fixed';
                    body.style.margin = '0';
                    body.style.backgroundSize = 'cover';

                } else {
                    /*console.log('screen menor 700px');*/
                    body.style.background = 'linear-gradient(180deg, #FFFFFF 6.25%, #C5E0EF 35.94%, #2979FF 76.04%)';
                    body.style.backgroundAttachment = ' fixed';
                }
            };
            myMedia(screen); // Call listener function at run time
            screen.addListener(myMedia); // Attach listener function on state changes
        };
        showWallDesktop();
    });

    const goTop = document.querySelector('#home');
    goTop.addEventListener('click', () => {
        const header = document.querySelector('#header');
        header.scrollIntoView({ behavior: 'smooth' });
    });

    const goProfile = document.querySelector('#profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });


    const getPublishPrint = () => {
        container.innerHTML = '';
        obtenerPublish().then((arrayPublish) => {
            if (arrayPublish.empty === true) {
                renderEmptyPublish(container);
            } else {
                renderPublish(arrayPublish, container);
                const editor = container.querySelectorAll('.show-options');
                editor.forEach(icon => {
                    const parentDiv = icon.parentElement.parentElement;
                    icon.addEventListener('click', () => {
                        parentDiv.querySelector('.edit-post').style.display = "flex";
                    });
                    parentDiv.querySelector('[data-id="edit-post"]').addEventListener('click', () => {
                        console.log('edit');
                        parentDiv.querySelector('[data-id="div-edit-post"]').classList.remove('hide');
                        parentDiv.querySelector('[data-id="text-post-edited"]').classList.add('hide');
                    });
                    parentDiv.querySelector('[data-id="btn-save-input"]').addEventListener('click', () => {
                        const inputEdit = parentDiv.querySelector('[data-id="post-text-edit"]').value;
                        updateDoc(parentDiv.dataset.id, {
                            postText: inputEdit
                        }).then(() => {
                            //buscar elemento a actualizar del html
                            parentDiv.querySelector('[data-id="text-post-edited"]').innerHTML = inputEdit;
                            parentDiv.querySelector('[data-id="div-edit-post"]').classList.add('hide');
                            parentDiv.querySelector('[data-id="text-post-edited"]').classList.remove('hide');
                        });

                    });
                    parentDiv.querySelector('.delete-option').addEventListener('click', () => {
                        deletePublish(parentDiv.dataset.id)
                            .then(() => {
                                getPublishPrint();
                            })
                    });
                    // evento para dar like a los post
                    parentDiv.querySelector('[data-id="likesNumber"]').addEventListener('click', () => {
                        console.log('likes');
                        getDoc(parentDiv.dataset.id)
                            .then((doc) => {
                                const user = JSON.parse(localStorage.getItem('user'));
                                const docData = doc.data();
                                //recorre la data y accede al arreglo de likes 
                                const dataLikes = docData.likes
                                // busca si exite id en arreglo
                                const likeIndex = dataLikes.indexOf(user.uid);
                                // si no existe, agregalo
                                if (likeIndex === -1) {
                                    dataLikes.push(user.uid);
                                }
                                // si existe, elimina el id del arreglo
                                else {
                                    dataLikes.splice(likeIndex, 1);
                                }
                                updateDoc(parentDiv.dataset.id, {
                                    likes: dataLikes
                                }).then(() => {
                                    //buscar elemento a actualizar del html
                                    const likesUpdate = parentDiv.querySelector('[data-id="likesNumber"]');
                                    //ir a firebase y buscar valor de likes
                                    getDoc(parentDiv.dataset.id)
                                        .then((doc) => {
                                            const dataDoc = doc.data();
                                            //actualizar el valor retornado al html                           
                                            likesUpdate.innerHTML = dataDoc.likes.length;
                                        });
                                });
                            });
                    });

                });
            }
        });
    };

    getPublishPrint();
}
//pinta los post en pantalla
const renderPublish = (arrayPublish, container) => {
    arrayPublish.forEach(doc => {
        const data = doc.data();
        const postRender = postPlantilla(
            doc.id,
            data.postImg,
            0,
            data.likes.length,
            data.userPhoto ? data.userPhoto : 'img/viajera3.jpg',
            data.postText,
            data.date
        );
        const divPost = document.createElement('div');
        divPost.innerHTML = postRender;
        container.appendChild(divPost);
    });
};
const renderEmptyPublish = (container) => {
    const divPost = document.createElement('div');
    divPost.innerHTML = postEmptyPlantilla;
    container.appendChild(divPost);
};
