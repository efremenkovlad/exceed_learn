let id = 0
let arrayTasks = []
let my_div = newDiv = null;

const classNameActived = "Actived"
const classNameCompleted = "Completed"

if (arrayTasks.length > 1){
    document.body.onload = ShowElement;
}


/**  Функция, которая отображает элементы массива
 * @param {arrayTasks} на странице */

function ShowElement() {
    
    var elem = arrayTasks[arrayTasks.length-1]

    var my_div = document.getElementById("AllTasks");

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `${elem.task}`;
    newDiv.addEventListener('click', changeStatus)
    newDiv.id = elem.id 
    newDiv.className = elem.status
    my_div.appendChild(newDiv)

    newDiv.myParam =  newDiv.id

    /* Функция-обработчик события "Клик на задачу" */
    function changeStatus (evt) {

        var id = evt.currentTarget.myParam;

        for (elem of arrayTasks) {
            if (elem.id == id) {                
                if (elem.status == classNameActived) {
                    elem.status = classNameCompleted;
                    evt.currentTarget.className = classNameCompleted;

                } else {
                    elem.status = classNameActived;
                    evt.currentTarget.className = classNameActived;
                };
            };
        };
        //console.log(arrayTasks)
    };
};

/** обработчик нажатия клавиши @param {Enter} */

document.getElementById("text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTask()
        console.log(arrayTasks[-1])
        ShowElement()
    }
});

/*Функция добавления задачи в массив данных*/
function addTask() {
    let textInput = (document.getElementById("text").value);
    let data = {
        id: id++,
        task: textInput, 
        status: "Actived"
    };
    arrayTasks.push(data)
}

/** обработчик нажатия кнопки Actived */

activedButton.onclick = function() {


    function removeElementsByClass(){
        const elements = document.getElementsByClassName("AllTasks");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        };
    };
    removeElementsByClass()
};
