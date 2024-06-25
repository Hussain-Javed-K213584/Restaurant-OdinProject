import './style.css'
import bimg from './3334896.jpg';
import { addHomeText, addHomeHeading } from './home.js';
import { addMainMenu, addMenuHeading } from './menu.js';
import { addAboutHeading, addAboutText } from './about.js';

const contentDiv = document.getElementById('content');
const myImage = new Image();
myImage.src = bimg;
contentDiv.style.backgroundImage = `url(${myImage.src})`; // This will add the background image to div
const homeButton = document.getElementsByClassName('home-btn')[0];
const menuButton = document.getElementsByClassName('menu-btn')[0];
const aboutButton = document.getElementsByClassName('about-btn')[0];

function applicationLoader(){
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
    
    contentDiv.appendChild(addHomeHeading());
    contentDiv.appendChild(addHomeText());
}

applicationLoader();

homeButton.addEventListener('click', (e) => {
    applicationLoader();
});

menuButton.addEventListener('click', (e) => {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    contentDiv.appendChild(addMenuHeading());
    contentDiv.appendChild(addMainMenu());
});

aboutButton.addEventListener('click', (e) => {
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.lastChild);
    }
    
    contentDiv.appendChild(addAboutHeading());
    contentDiv.appendChild(addAboutText());
})