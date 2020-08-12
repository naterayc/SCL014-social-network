import { pushState } from './router.js'
import { signOut } from '../lib/firebase/firebase-auth.js';
import { destinyContent } from '../view/destiny-view.js';

export const destinyView = () => {

    document.querySelector('#body').style.background = 'transparent';

    const destinyWall = document.createElement('div');
    destinyWall.setAttribute('id', 'contenedor');
    destinyWall.innerHTML = destinyContent;
    document.querySelector('#containerViews').appendChild(destinyWall);

    const goHome = document.querySelector('#home');
    goHome.addEventListener('click', () => {
        pushState('#/wall');
    });

    const back = document.querySelector('#back');
    back.addEventListener('click', () => {
        pushState('#/wall');
    });

    const goProfile = document.querySelector('#profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });

    const menu = document.querySelector('#show-signout');
    const signOutBar = document.querySelector('#sign-out');
    menu.addEventListener('click', () => {
        signOutBar.style.display = 'block';
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
}
