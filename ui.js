function UI(){

    this.outputImage = document.querySelector("#outputImage");
    this.outputLanguage = document.querySelector("#outputLanguage");
    this.outputWord = document.querySelector("#outputWord");

    this.languageList = document.querySelector("#language");
}

UI.prototype.changeUI = function(){
    //Arayüz Değişimi...
    this.outputImage.src = `images/${this.languageList.value}.png`;
    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent;

};

UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}


