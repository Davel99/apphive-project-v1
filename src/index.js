import './style.css';

import Chrono from './JS-Modules/chronometer.js';
import WordCounter from './JS-Modules/wordCounter';


if(document.querySelector('#crono-space')){
    new Chrono();
}

if(document.querySelector('#wordCounter-app')){
    new WordCounter();
}