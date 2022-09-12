
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function GetTranslationURL(text) {
    return serverURL +"?" + "text=" + text
}

function clickHandler() {

    var InputText = txtInput.value; //taking input

    //calling server for processing
fetch(GetTranslationURL(InputText))
.then(response => response.json())
.then(json => console.log(json.contents.translated))
};



btnTranslate.addEventListener("click", clickHandler);