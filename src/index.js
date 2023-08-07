import './style.css';

import Crono from './JS-Modules/cronometer.js';
import WordCounter from './JS-Modules/wordCounter';


if(document.querySelector('#crono-space')){
    new Crono();
}

if(document.querySelector('#wordCounter-app')){
    new WordCounter();
}