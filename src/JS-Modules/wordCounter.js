export default class WordCounter{
    constructor(){
        this.domLoader();
        this.events();        
    }

    events(){
        this.contador.addEventListener('input', () => {
            let value = this.contador.value.trim();
            this.__chars = value.length;
            this.__words = value.split(' ').length;

            this.word_counter.innerHTML = this.__words;
            this.char_counter.innerHTML = this.__chars;

        });
    }

    domLoader(){
        this.contador = document.querySelector('#wordCounter-app');
        this.word_counter = document.querySelector('#wordCount');
        this.char_counter = document.querySelector('#charCount');
    }
}