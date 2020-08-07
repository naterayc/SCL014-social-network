import {
    changeRoute, pushState
} from '../view-controller/router.js'
import { wallContent } from './wall-view.js';
import { signOut } from '../lib/firebase/firebase-auth.js';

export const wallView = () => {

    document.getElementById('body').style.background = 'transparent';

    const wall = document.createElement('div');
    wall.setAttribute('id', 'contenedor');
    wall.innerHTML = wallContent;
    document.getElementById('containerViews').appendChild(wall);

    const btnPost = wall.querySelector('#post');
    btnPost.addEventListener('click', () => {
        pushState('#/destiny');
    });

    const menu = document.getElementById('show-signout');
    const signOutBar = document.getElementById('sign-out');
    menu.addEventListener('click', () => {
        signOutBar.style.display = 'block';
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

}










