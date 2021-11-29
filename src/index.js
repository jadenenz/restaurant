//import { HotModuleReplacementPlugin } from 'webpack';
import Background from './background.jpg'
import './style.css';
import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadContact } from './contact.js'

console.log('This is working :)');

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

function wipeContent() {
    const blurb = document.querySelector('.blurb');
    const content = document.querySelector('#content');
    content.removeChild(blurb);
}

home.addEventListener('click', function() {
    wipeContent();
    loadHome();
})

menu.addEventListener('click', function() {
    wipeContent();
    loadMenu();
})

contact.addEventListener('click', function() {
    wipeContent();
    loadContact();
})

loadHome();