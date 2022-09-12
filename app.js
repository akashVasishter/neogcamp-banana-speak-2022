
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var translatorURL = "https://api.funtranslations.com/translate/minion.json";

function GetTranslationURL(input) {
    return translatorURL +"?" + "text=" + input
}

//error handling
function ErrorHandler(error) {

    console.log("Error occured", error);
    alert("something is wrong");

}

function clickHandler() {

    var InputText = txtInput.value; //taking input


    //calling server for processing
fetch(GetTranslationURL(InputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    txtOutput.innerText = translatedText;
})
.catch(ErrorHandler)

};



btnTranslate.addEventListener("click", clickHandler);