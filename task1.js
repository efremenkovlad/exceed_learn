


let myMenu = document.getElementById("dropdown");



myMenu.onchange = function() {
   let elementId = myMenu;
   let valueElement = elementId.value;
   putChar(valueElement)};

/////////////////////////////////////////////////////////////

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

/////////////////////////////////////////////////////////////

 function putChar (data) {
     let myForm = document.getElementById("input");
     myForm.value = data
  };


submit.onclick = function() {

    let textInput = (document.getElementById("input").value).replace(/\s+/g, '');
    putChar(textInput)


    if (textInput) {

    myMenu.options[myMenu.selectedIndex].text = textInput;
    } else {
      alert("Incorrect Data")
    }
};

