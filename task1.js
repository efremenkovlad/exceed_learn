


let myMenu = document.getElementById("dropdown");



myMenu.onchange = function() {
   let elementId = myMenu;
   let valueElement = elementId.value
   putChar(valueElement)}


 function putChar (data) {
     let myForm = document.getElementById("input")
     myForm.value = data}


submit.onclick = function() {

    let textInput = document.getElementById("input").value;
    myMenu.options[myMenu.selectedIndex].text = textInput};



