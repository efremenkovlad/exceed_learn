let arrayTasks = [];

const CLASS_NAME_ACTIVED = "Actived";
const CLASS_NAME_COMPLETED = "Completed";
const CLASS_NAME_ALL = "All"
const CLASS_NAME_CLEAR = "Clear"


const divClassAllTasks = document.getElementById("AllTasks")
const divClassText = document.getElementById("text")

    

/** Handler for button  @param {Enter} */
divClassText.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTask();
        appendElementToFront();
        document.getElementById('text').value = ''; 

    };
});

/**  Function for append element in @param {arrayTasks}  */
function appendElementToFront() {

    const elem = arrayTasks[arrayTasks.length - 1];
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `${elem.task}`;
    newDiv.addEventListener('click', changeStatus);
    newDiv.id = elem.id;
    newDiv.className = true ? CLASS_NAME_ACTIVED : CLASS_NAME_COMPLETED;
    newDiv.myParam = newDiv.id;
    divClassAllTasks.appendChild(newDiv);
    showElement();
};

/*Function add to task list*/
function addTask() {
    const {value} = divClassText;
    const id = !arrayTasks.length ? 0 : arrayTasks[arrayTasks.length - 1].id + 1;
    const data = { id, task: value, isCompleted: false}
    arrayTasks = [...arrayTasks, data];
};

/* Function case for all buttons. Show various variants*/
function showTaskOnList(paramChange) {
    [...divClassAllTasks.children].forEach(el => divClassAllTasks.removeChild(el));

    switch (paramChange) {
        case CLASS_NAME_COMPLETED:

            arrayTasks.forEach(el => { if (el.isCompleted === true) addTaskToList(el)});
            break;
        case CLASS_NAME_ACTIVED:
            arrayTasks.forEach(el => { if (el.isCompleted === false) addTaskToList(el)});
            break;
        case CLASS_NAME_ALL: 
            arrayTasks.forEach(el =>  addTaskToList(el));
            break;
        case CLASS_NAME_CLEAR:
            arrayTasks = arrayTasks.filter((el) => el.isCompleted == false);
            arrayTasks.forEach(el =>  addTaskToList(el));
            break;
    };

};

/* Change status task*/
function changeStatus(evt) {
    const id = evt.currentTarget.myParam;

    arrayTasks.forEach((elem) => {if (elem.id == id) {
        if (elem.isCompleted == true) {elem.isCompleted = false; 
            evt.currentTarget.className = CLASS_NAME_ACTIVED;
        } else {elem.isCompleted = true; 
            evt.currentTarget.className = CLASS_NAME_COMPLETED;
        };
    };
})
    showElement();
}

/* Add task to front*/
function addTaskToList(elem) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${elem.task}`;
    newDiv.addEventListener('click', changeStatus);
    newDiv.id = elem.id;
    newDiv.className = elem.isCompleted ?  CLASS_NAME_COMPLETED : CLASS_NAME_ACTIVED;
    newDiv.myParam = newDiv.id;
    divClassAllTasks.appendChild(newDiv);
};

/*Function for show element on page*/ 
function showElement() {
    const sumTask = document.getElementById('sumTasks');
    const activedTask = arrayTasks.filter((el) => el.isCompleted == false);

    sumTask.innerHTML = `${activedTask.length} items left`;
};

