
var button = document.getElementById("create");
var textArea = document.getElementById("cardArea");
var deleteId = 0
var cardId = 0

function userInput(){
    var text = document.getElementById("text-box").value;
    return text;
}

function createCard(){
//     userInput();
    console.log("im here");
    console.log("text",userInput());

        textArea.innerHTML += `<div class="card" id="card_${cardId}">
        ${userInput()}<br>
        <button class="delete" id="${deleteId}">Delete</button>
        </div>`;
    deleteId += 1;
    cardId += 1;
}

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {

        let bttn = event.target;
        let bttnId = event.target.id;
        console.log(bttnId);
        if(bttn.className === "delete"){
        console.log("yes it is");
        let divId = ("card_"+ bttnId)
        console.log("divId", divId)
        
        let currentDiv = document.getElementById(divId);
        currentDiv.innerHTML = "";
        document.getElementById(divId).removeAttribute("class");
    }
  }}); 

button.addEventListener("click",createCard);
window.onload = document.getElementById('text-box').select();