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

export const wallView = () => {

    document.getElementById('body').style.background = 'transparent';

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.getElementById('containerViews').appendChild(wall);

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
        savePublish({
            postText: postText,
            postImg: postImg,
            date: date,
            likes: [],
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
        const screen = window.matchMedia('(min-width: 700px)');        
        const showWallDesktop = () => {
            const myMedia = (screenSize) => {
                if (screenSize.matches) { // If media query matches
                    /*console.log('screen mayor 700px');*/
                    body.style.background = 'trasparent';
                    body.style.backgroundImage = 'url("./img/backimg.jpg")';
                    body.style.backgroundAttachment = 'fixed';
                    body.style.margin = '0';        
                    body.style.backgroundSize= 'cover';               
                    
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

    const goTop = document.getElementById('home');
    goTop.addEventListener('click', () => {
        const header = document.querySelector('#header');
        header.scrollIntoView({ behavior: 'smooth' });
    });

    const goProfile = document.getElementById('profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });

    
    const getPublishPrint = () => {
        container.innerHTML = '';
        obtenerPublish().then((arrayPublish) => {
            renderPublish(arrayPublish, container);
            const editor = container.querySelectorAll('.show-options');
            editor.forEach(icon => {
                const parentDiv = icon.parentElement.parentElement;
                icon.addEventListener('click', () => {
                    parentDiv.querySelector('.edit-post').style.display = "flex";
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
                            if(likeIndex ===-1){
                                dataLikes.push(user.uid);
                            }
                            // si existe, elimina el id del arreglo
                            else{
                                dataLikes.splice(likeIndex,1);
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
            'https://avatars2.githubusercontent.com/u/66418488?s=460&u=426e67c2f5f2fb4dc243355a6c1f2da9841a0370&v=4',
            data.postText,
            data.date
        );
        const divPost = document.createElement('div');
        divPost.innerHTML = postRender;
        container.appendChild(divPost);
    });
};








