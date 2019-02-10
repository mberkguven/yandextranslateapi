// Prototype,Ajax,Callback

eventListeners();

function eventListeners(){
    document.querySelector("#translate-form").addEventListener("submit",translateWord);
    document.querySelector("#language").onchange = function(){
        // ui.changeUI();

    }
}
const translate = new Translate(document.querySelector("#word").value,document.querySelector("#language").value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.querySelector("#word").value,document.querySelector("#language").value);
    
    ui.changeUI();
    translate.translateWord(function(err,response){
        if(err == null){
            ui.displayTranslate(response);
        }
        else{
            console.log(err);
        }
    });

    e.preventDefault();
}