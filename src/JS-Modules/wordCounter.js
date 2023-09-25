export default class WordCounter{
    constructor(){
        this.__chars = 0;
        this.__words = 0;
        this.domLoader();
        this.events();        
    }

    events(){
        this.contador.addEventListener('input', () => {
            let value = this.contador.value.trim();
            this.__chars = value.length;
            this.__words = value === '' ? 0 : value.split(' ').length;

            this.word_counter.innerHTML = this.__words;
            this.char_counter.innerHTML = this.__chars;

        });
        this.word_btn.addEventListener('click', () => {
            navigator.clipboard.writeText(this.__words);
        });
        this.char_btn.addEventListener('click', () => {
            navigator.clipboard.writeText(this.__chars);
        });
    }

    domLoader(){
        this.contador = document.querySelector('#wordCounter-app');
        this.word_counter = document.querySelector('#wordCount');
        this.char_counter = document.querySelector('#charCount');
        this.word_btn = document.querySelector('#copyWordsBtn');
        this.char_btn = document.querySelector('#copyCharsBtn');
    }
}