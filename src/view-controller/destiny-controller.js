import { pushState } from './router.js'
import { signOut } from '../lib/firebase/firebase-auth.js';
import { destinyContent } from '../view/destiny-view.js';

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
    back.addEventListener('click', () => {
        pushState('#/wall');
    });

    const goProfile = document.getElementById('profile');
    goProfile.addEventListener('click', () => {
        pushState('#/profile');
    });

    const menu = document.getElementById('show-signout');
    const signOutBar = document.getElementById('sign-out');
    menu.addEventListener('click', () => {
        signOutBar.style.display = 'block';
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
}
